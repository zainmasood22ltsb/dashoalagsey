// Sample data for charts
const salesData = [120, 150, 180, 200, 220, 250, 300, 350, 400];
const growthData = [10, 20, 30, 40, 60, 80, 100, 120, 150];

// Sales Chart setup
const ctx1 = document.getElementById("salesChart").getContext("2d");
const salesChart = new Chart(ctx1, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [{
      label: "Sales",
      data: salesData,
      borderColor: "rgba(46, 204, 113, 1)",
      backgroundColor: "rgba(46, 204, 113, 0.2)",
      fill: true,
      tension: 0.4,
    }],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// User Growth Chart setup
const ctx2 = document.getElementById("growthChart").getContext("2d");
const growthChart = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [{
      label: "User Growth",
      data: growthData,
      backgroundColor: "rgba(52, 152, 219, 1)",
      borderColor: "rgba(52, 152, 219, 0.8)",
      borderWidth: 1,
    }],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Example dynamic data
document.getElementById("totalUsers").textContent = "200";
document.getElementById("totalSales").textContent = "$3000";
document.getElementById("revenue").textContent = "$7000";

// Product Management Logic
const addProductButton = document.getElementById('addProductBtn');
const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const productListContainer = document.getElementById('productList');

addProductButton.addEventListener('click', () => {
  const productName = productNameInput.value.trim();
  const productPrice = parseFloat(productPriceInput.value.trim());

  if (productName && !isNaN(productPrice) && productPrice > 0) {
    addProductToList(productName, productPrice);
    productNameInput.value = '';
    productPriceInput.value = '';
  } else {
    alert('Please enter valid product details');
  }
});

function addProductToList(name, price) {
  const productItem = document.createElement('div');
  productItem.classList.add('product-item');
  
  productItem.innerHTML = `
    <span>${name} - $${price.toFixed(2)}</span>
    <button onclick="removeProduct(this)">Remove</button>
  `;
  
  productListContainer.appendChild(productItem);
}

function removeProduct(button) {
  button.parentElement.remove();
}
