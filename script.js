// This code ensures that the JavaScript is executed only after the HTML has been fully loaded.
document.addEventListener("DOMContentLoaded", function () {
    // These lines fetch references to various HTML elements using their IDs.
    const dishSelect = document.getElementById("dish-select");
    const priceInput = document.getElementById("price-input");
    const tableSelect = document.getElementById("table-select");
    const addToBillButton = document.getElementById("add-to-bill");

    // This object stores references to the HTML elements representing different tables and their orders.
    const tables = {
        "Table 1": document.getElementById("table1-orders"),
        "Table 2": document.getElementById("table2-orders"),
        "Table 3": document.getElementById("table3-orders"),
    };

    // This code adds an event listener to the "Add to Bill" button.
    addToBillButton.addEventListener("click", function () {
        // It retrieves the values selected by the user (dish, price, and table).
        const selectedTable = tableSelect.value;
        const selectedDish = dishSelect.value;
        const price = priceInput.value;

        // It checks if all the required information is provided.
        if (selectedTable && selectedDish && price) {
            //creates a new HTML list item (<li>) element and assigns it to the variable orderItem.
            const orderItem = document.createElement("li");
            // It sets the text content of the orderItem to a string that includes the selected dish and its price.
            orderItem.textContent = `${selectedDish} - ${price} Rs`;
            // It adds an HTML button element with the class "delete-order" to the inner HTML of orderItem.
            // This button will be used to delete the order later.
            //update and set in html
            orderItem.innerHTML += `<button class="delete-order">Delete</button>`;
            // It appends the newly created order item to the corresponding table's order list.
            tables[selectedTable].appendChild(orderItem);
        }
    });

    // Add an event listener to handle customer order deletion
    // This code adds an event listener to the entire document to handle click events.
    document.addEventListener("click", function (e) {
        // It checks if the clicked element has the class "delete-order".
        if (e.target.classList.contains("delete-order")) {
            // If so, it removes the parent element (the entire order item).
            const orderItem = e.target.parentElement;
            orderItem.remove();
        }
    });
});
