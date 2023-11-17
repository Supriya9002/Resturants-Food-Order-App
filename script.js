document.addEventListener("DOMContentLoaded", function () {
    const dishSelect = document.getElementById("dish-select");
    const priceInput = document.getElementById("price-input");
    const tableSelect = document.getElementById("table-select");
    const addToBillButton = document.getElementById("add-to-bill");

    const tables = {
        "Table 1": document.getElementById("table1-orders"),
        "Table 2": document.getElementById("table2-orders"),
        "Table 3": document.getElementById("table3-orders"),
    };

    addToBillButton.addEventListener("click", function () {
        const selectedTable = tableSelect.value;
        const selectedDish = dishSelect.value;
        const price = priceInput.value;

        if (selectedTable && selectedDish && price) {
            const orderItem = document.createElement("li");
            orderItem.textContent = `${selectedDish} - ${price} Rs`;
            orderItem.innerHTML += `<button class="delete-order">Delete</button>`;
            tables[selectedTable].appendChild(orderItem);
        }
    });

    // Add an event listener to handle customer order deletion
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-order")) {
            const orderItem = e.target.parentElement;
            orderItem.remove();
        }
    });
});
//ff
