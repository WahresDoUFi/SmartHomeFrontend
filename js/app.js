
async function handleRegister() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const url = 'http://localhost:8000/api/register';
  const data = {username, password};

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      console.log(result.message);
      showContent();
      showProducts();
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
  }
}

async function handleLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const url = 'http://localhost:8000/api/login';
  const data = {username, password};

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      console.log(result.message);
      showContent();
      showProducts();
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
  }
}

function refreshProducts() {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = ''; // Clear the list

  showProducts(); // Fetch products again
}

function showProducts() {
  fetch('http://localhost:8000/api/getProducts/1')
    .then(response => response.json()) // Parse JSON from the response
    .then(data => {
      const productList = data;
      const itemList = document.getElementById('item-list');

      productList.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.product_quantity}x ${product.product_name}`;

        itemList.appendChild(li);
      });
    })
    .catch(error => console.error('Error fetching products:', error));
}

function showContent() {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}
