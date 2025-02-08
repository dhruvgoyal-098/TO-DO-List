export const menu = function () {
    const content = document.getElementById("content");
    const card = document.createElement("div");
    card.classList.add("card");
    const d1 = document.createElement("div");
    d1.classList.add("box");
    d1.innerHTML = `
        <h1>Our Menu</h1>
    `;
    card.appendChild(d1);
    const d2 = document.createElement("div");
    d2.classList.add("menu-section");
    d2.innerHTML = `
        <h2>Appetizers</h2>
                <ul>
                    <li><span>Garlic Bread</span> <span>$5.99</span></li>
                    <li><span>Bruschetta</span> <span>$6.99</span></li>
                    <li><span>Stuffed Mushrooms</span> <span>$7.99</span></li>
                </ul>
    `;
    card.appendChild(d2);
    const d3 = document.createElement("div");
    d3.classList.add("menu-section");
    d3.innerHTML = `
        <h2>Main Courses</h2>
                <ul>
                    <li><span>Grilled Salmon</span> <span>$14.99</span></li>
                    <li><span>Steak & Potatoes</span> <span>$18.99</span></li>
                    <li><span>Chicken Alfredo</span> <span>$12.99</span></li>
                </ul>
    `;
    card.appendChild(d3);
    const d4 = document.createElement("div");
    d4.classList.add("menu-section");
    d4.innerHTML = `
        <h2>Desserts</h2>
                <ul>
                    <li><span>Chocolate Lava Cake</span> <span>$6.99</span></li>
                    <li><span>Cheesecake</span> <span>$5.99</span></li>
                    <li><span>Tiramisu</span> <span>$6.99</span></li>
                </ul>
    `;
    card.appendChild(d4);
    const d5 = document.createElement("div");
    d5.classList.add("menu-section");
    d5.innerHTML = `
        <h2>Beverages</h2>
                <ul>
                    <li><span>Fresh Lemonade</span> <span>$3.99</span></li>
                    <li><span>Espresso</span> <span>$2.99</span></li>
                    <li><span>Red Wine</span> <span>$7.99</span></li>
                </ul>
    `;
    card.appendChild(d5);
    content.appendChild(card);
}