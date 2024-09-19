export async function get() {
    const res = await fetch('http://localhost:1337/products');
    const data = await res.json();
    return {
      body: JSON.stringify(data),
    };
  }
   
