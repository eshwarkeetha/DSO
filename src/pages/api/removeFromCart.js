 // src/pages/api/removeFromCart.js
export async function post({ request }) {
    const { productId } = await request.json();
  
    // Here you might use a database or in-memory store to manage the cart
    // For demonstration, we're using a simple in-memory object
    // Ideally, you'd store this in a database or session
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cart = cart.filter(item => item.productId !== productId);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    return {
      status: 200,
      body: JSON.stringify({ message: 'Product removed from cart', cart }),
    };
  }
  
