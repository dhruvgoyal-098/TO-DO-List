export const about = function() {
    const content = document.getElementById("content");
    const card = document.createElement("div");
    card.classList.add("card");
    const d1 = document.createElement("div");
    d1.classList.add("box");
    d1.innerHTML = `
        <h1>About Us</h1>
                <p>Dewsis Restaurant has been serving gourmet meals since 2005. Our chefs use the freshest ingredients to create dishes that delight our guests.</p>
    `;
    card.appendChild(d1);
    const d2 = document.createElement("div");
    d2.classList.add("location");
    d2.innerHTML = `
        <h2>Our Mission</h2>
                <p>We strive to offer exceptional dining experiences by providing high-quality food, excellent service, and a welcoming atmosphere.</p>
    `;
    card.appendChild(d2);
    const d3 = document.createElement("div");
    d3.classList.add("contact");
    d3.innerHTML = `
        <h2>Meet Our Team</h2>
                <p>Our talented chefs and friendly staff are dedicated to making your dining experience unforgettable.</p>
    `;
    card.appendChild(d3);
    content.appendChild(card);
}