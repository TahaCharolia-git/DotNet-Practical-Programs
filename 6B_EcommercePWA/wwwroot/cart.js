function loadCart() {
    var data = localStorage.getItem("cart");
    if (data == null) {
        return [];
    }
    return JSON.parse(data);
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
    var cart = loadCart();

    var found = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name == name) {
            cart[i].qty = cart[i].qty + 1;
            found = true;
            break;
        }
    }

    if (!found) {
        cart.push({ name: name, price: price, qty: 1 });
    }

    saveCart(cart);
    showCart();
}

function removeFromCart(name) {
    var cart = loadCart();
    var newCart = [];
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name != name) {
            newCart.push(cart[i]);
        }
    }
    saveCart(newCart);
    showCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    showCart();
}

function showCart() {
    var cart = loadCart();
    var table = document.getElementById("cartTable");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    var total = 0;

    for (var i = 0; i < cart.length; i++) {
        var row = table.insertRow(table.rows.length);
        row.insertCell(0).innerText = cart[i].name;
        row.insertCell(1).innerText = cart[i].price;
        row.insertCell(2).innerText = cart[i].qty;

        var cell = row.insertCell(3);
        var btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.onclick = function (n) {
            return function () { removeFromCart(n); };
        }(cart[i].name);
        cell.appendChild(btn);

        total = total + cart[i].price * cart[i].qty;
    }

    document.getElementById("total").innerText = total;

    if (cart.length == 0) {
        document.getElementById("emptyMsg").style.display = "block";
    } else {
        document.getElementById("emptyMsg").style.display = "none";
    }
}

window.onload = function () {
    showCart();

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js")
            .then(function () {
                console.log("Service Worker Registered");
            })
            .catch(function (error) {
                console.log("Service Worker Error: " + error);
            });
    }
};
