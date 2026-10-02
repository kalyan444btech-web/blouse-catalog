export default function Home() {
  const products = [
    { name: "Black cotton Padded", price: 300 },
    { name: "Black space silk Padded", price: 400 },
    { name: "Blue Cotton heluci", price: 350 },
    { name: "Cotton Black Embroidery", price: 500 },
    { name: "Cotton Red & white", price: 250 },
    { name: "Green Chikinkari", price: 400 },
    { name: "Mustard embroidery Blouse", price: 550 },
    { name: "Pink space silk padded", price: 400 },
    { name: "Purple cotton padded", price: 300 },
    { name: "Red space Silk Padded", price: 400 },
    { name: "White Maggam", price: 500 },
    { name: "Yellow Cotton", price: 250 }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Boutique Collection</h1>

      {products.map((product) => (
        <div
          key={product.name}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "10px"
          }}
        >
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}
