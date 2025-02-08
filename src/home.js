export const home = function() {
    const content = document.getElementById("content");
    const card = document.createElement("div");
    card.classList.add("card");
    const d1 = document.createElement("div");
    d1.classList.add("box");
    d1.innerHTML = `
        <h1>Welcome to Dewsis Restaurant</h1>
        <p>Experience delicious meals made with fresh ingredients.</p>
    `;
    card.appendChild(d1);
    const d2 = document.createElement("div");
    d2.classList.add("time");
    d2.innerHTML = `
                        <h2>Opening Hours</h2>
                <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
    `;
    card.appendChild(d2);
    const d3 = document.createElement("div");
    d3.classList.add("location");
    d3.innerHTML = `
        <h2>Location</h2>
                <p>123 Foodie Street, Gourmet City, GC 45678</p>
    `;
    card.appendChild(d3);
    const d4 = document.createElement("div");
    d4.classList.add("contact");
    d4.innerHTML = `
        <h2>Contact Us</h2>
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@dewsisrestaurant.com</p>
    `;
    card.appendChild(d4);
    const d5 = document.createElement("div");
    d5.classList.add("reviews");
    d5.innerHTML = `
        <h2>Customer Reviews</h2>
                <p>"Amazing food and great ambiance!" - Jane Doe</p>
                <p>"One of the best restaurants in town!" - John Smith</p>
    `;
    card.appendChild(d5);
    content.appendChild(card);
}