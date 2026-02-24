async function loadProducts() {
  const grid = document.getElementById('product-grid');
  try {
    const res = await fetch('/api/products');
    const products = await res.json();
    grid.innerHTML = products.map(p => `
      <div class="product-card">
        <h3>${p.name}</h3>
        <div class="price">$${p.price.toFixed(2)}</div>
        <div class="category">${p.category}</div>
      </div>
    `).join('');
  } catch (err) {
    grid.innerHTML = '<p>Failed to load products.</p>';
  }
}

document.addEventListener('DOMContentLoaded', loadProducts);
