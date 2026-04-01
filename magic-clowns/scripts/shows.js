const showList = [
    {
        name: "Magic Gala",
        type: "Magic",
        description: "A professional 45-minute stage show with classic and modern magic tricks.",
        price: "$150",
        image: "images/magic-show.jpeg"
    },
    {
        name: "Funny Birthday",
        type: "Clowning",
        description: "Interactive games, clowning, and balloon twisting for the little ones.",
        price: "$120",
        image: "images/clown-show.jpeg"
    },
    {
        name: "School Special",
        type: "Educational",
        description: "Humorous and educational show designed for large school groups.",
        price: "$200",
        image: "images/school-show.jpeg"
    }
];


function displayShows(shows) {
    const container = document.getElementById("shows-container");
    container.innerHTML = "";


    shows.forEach(show => {
        const card = document.createElement("section");
        card.classList.add("show-card");

        card.innerHTML = `
            <img src="${show.image}" alt="${show.name}">
            <h3>${show.name}</h3>
            <p><strong>Type:</strong> ${show.type}</p>
            <p>${show.description}</p>
            <span class="price">${show.price}</span>
            <button onclick="alert('Booking for ${show.name} coming soon!')">Book Now</button>
        `;
        container.appendChild(card);
    });
}

displayShows(showList);


document.getElementById("btn-all").addEventListener("click", () => {
    displayShows(showList);
});

document.getElementById("btn-magic").addEventListener("click", () => {

    const magicShows = showList.filter(show => show.type === "Magic");
    displayShows(magicShows);
});

document.getElementById("btn-clown").addEventListener("click", () => {
    const clownShows = showList.filter(show => show.type === "Clowning");
    displayShows(clownShows);
});