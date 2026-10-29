if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js")
            .then(() => {
                console.log("Service Worker Registered");
            })
            .catch(error => {
                console.log("Service Worker Error:", error);
            });
    });
}

const destinations = [
    { name: "Green Hills, Lonavala", image: "/images/hills.jpg", info: "2 nights from Rs. 3,500" },
    { name: "Sandy Beach, Goa", image: "/images/beach.jpg", info: "3 nights from Rs. 6,000" },
    { name: "Old Fort, Pune", image: "/images/fort.jpg", info: "Day trip from Rs. 800" }
];

const cards = document.getElementById("cards");

function renderDestinations(list) {
    if (!cards) {
        return;
    }

    cards.innerHTML = "";

    list.forEach(place => {
        const article = document.createElement("article");
        article.className = "card";

        const image = document.createElement("img");
        image.src = place.image;
        image.alt = place.name;

        const title = document.createElement("h3");
        title.textContent = place.name;

        const info = document.createElement("p");
        info.textContent = place.info;

        article.appendChild(image);
        article.appendChild(title);
        article.appendChild(info);
        cards.appendChild(article);
    });
}

if (cards) {
    renderDestinations(destinations);

    const search = document.getElementById("search");
    if (search) {
        search.addEventListener("input", () => {
            const query = search.value.toLowerCase();
            renderDestinations(
                destinations.filter(place => place.name.toLowerCase().includes(query))
            );
        });
    }
}
