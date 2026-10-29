function loadRecords() {
    var data = localStorage.getItem("customers");
    if (data == null) {
        return [];
    }
    return JSON.parse(data);
}

function saveRecords(list) {
    localStorage.setItem("customers", JSON.stringify(list));
}

function nextId(list) {
    var max = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i].id > max) {
            max = list[i].id;
        }
    }
    return max + 1;
}

function saveRecord() {
    var name = document.getElementById("txtName").value.trim();
    var email = document.getElementById("txtEmail").value.trim();
    var phone = document.getElementById("txtPhone").value.trim();

    if (name == "" || email == "" || phone == "") {
        document.getElementById("msg").innerText = "Please fill all fields.";
        return;
    }

    var list = loadRecords();
    var rec = { id: nextId(list), name: name, email: email, phone: phone };
    list.push(rec);
    saveRecords(list);

    clearForm();
    document.getElementById("msg").innerText = "Customer added. Id = " + rec.id;
    showRecords();
}

function editRecord(id) {
    var list = loadRecords();

    for (var i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            document.getElementById("txtName").value = list[i].name;
            document.getElementById("txtEmail").value = list[i].email;
            document.getElementById("txtPhone").value = list[i].phone;
            document.getElementById("btnSave").style.display = "none";
            document.getElementById("btnUpdate").style.display = "inline-block";
            document.getElementById("btnUpdate").setAttribute("data-id", id);
            document.getElementById("msg").innerText = "Editing record Id = " + id;
            return;
        }
    }
}

function updateRecord() {
    var id = parseInt(document.getElementById("btnUpdate").getAttribute("data-id"), 10);
    var name = document.getElementById("txtName").value.trim();
    var email = document.getElementById("txtEmail").value.trim();
    var phone = document.getElementById("txtPhone").value.trim();

    if (name == "" || email == "" || phone == "") {
        document.getElementById("msg").innerText = "Please fill all fields.";
        return;
    }

    var list = loadRecords();

    for (var i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            list[i].name = name;
            list[i].email = email;
            list[i].phone = phone;
            saveRecords(list);
            clearForm();
            document.getElementById("msg").innerText = "Record " + id + " updated.";
            showRecords();
            return;
        }
    }
}

function deleteRecord(id) {
    if (!confirm("Delete record Id = " + id + " ?")) {
        return;
    }

    var list = loadRecords();
    var newList = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].id != id) {
            newList.push(list[i]);
        }
    }
    saveRecords(newList);
    document.getElementById("msg").innerText = "Record " + id + " deleted.";
    clearForm();
    showRecords();
}

function clearForm() {
    document.getElementById("txtName").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtPhone").value = "";
    document.getElementById("btnSave").style.display = "inline-block";
    document.getElementById("btnUpdate").style.display = "none";
}

function showRecords() {
    var list = loadRecords();
    var table = document.getElementById("custTable");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    for (var i = 0; i < list.length; i++) {
        var row = table.insertRow(table.rows.length);
        row.insertCell(0).innerText = list[i].id;
        row.insertCell(1).innerText = list[i].name;
        row.insertCell(2).innerText = list[i].email;
        row.insertCell(3).innerText = list[i].phone;

        var editCell = row.insertCell(4);
        var editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = function (n) {
            return function () { editRecord(n); };
        }(list[i].id);
        editCell.appendChild(editBtn);

        var delCell = row.insertCell(5);
        var delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.onclick = function (n) {
            return function () { deleteRecord(n); };
        }(list[i].id);
        delCell.appendChild(delBtn);
    }

    if (list.length == 0) {
        document.getElementById("emptyMsg").style.display = "block";
    } else {
        document.getElementById("emptyMsg").style.display = "none";
    }
}

window.onload = function () {
    showRecords();

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
