// src/pages/api/addToCart.js
export async function post({ request }) {
  const { productId, quantity } = await request.json();

  // Here you might use a database or in-memory store to manage the cart
  // For demonstration, we're using a simple in-memory object
  // Ideally, you'd store this in a database or session
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const productExists = cart.find(item => item.productId === productId);

  if (productExists) {
    productExists.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  return {
    status: 200,
    body: JSON.stringify({ message: 'Product added to cart', cart }),
  };
}
 
