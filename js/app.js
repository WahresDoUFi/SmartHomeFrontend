function handleSubmit(event) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    fetchItems();
}

function fetchItems() {
    // Simulating a backend API call
    const mockItems = [
        { id: 1, name: 'Item 1', description: 'Description for item 1' },
        { id: 2, name: 'Item 2', description: 'Description for item 2' },
        { id: 3, name: 'Item 3', description: 'Description for item 3' },
    ];

    const itemList = document.getElementById('item-list');
    mockItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: ${item.description}`;
        itemList.appendChild(li);
    });
}