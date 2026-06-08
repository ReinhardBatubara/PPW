// Selectors
const sidebar = document.querySelector('.sidebar');
const sidebarMenu = document.querySelector('.sidebar ul');
const sidebarMenuItems = document.querySelectorAll('.sidebar ul li');
const searchInput = document.querySelector('.search-bar input');
const searchIcon = document.querySelector('.search-bar .icons i');
const productGrid = document.querySelector('.product-grid');
const products = document.querySelectorAll('.product');

// Add event listeners
sidebarMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (e) => {
    // Remove active class from all menu items
    sidebarMenuItems.forEach((item) => item.classList.remove('active'));
    // Add active class to the clicked menu item
    menuItem.classList.add('active');
  });
});

searchIcon.addEventListener('click', () => {
  // Toggle search input focus
  searchInput.focus();
});

searchInput.addEventListener('keyup', (e) => {
  // Filter products based on search input value
  const searchTerm = e.target.value.toLowerCase();
  products.forEach((product) => {
    const productName = product.querySelector('h2').textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});

// Add to cart functionality
products.forEach((product) => {
  const addToCartButton = product.querySelector('.add-to-cart');
  addToCartButton.addEventListener('click', () => {
    // Add product to cart logic here
    console.log('Add to cart button clicked!');
  });
});