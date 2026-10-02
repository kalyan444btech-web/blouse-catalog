import { useState } from "react";

const products = [
  { id: 1, name: "Black cotton Padded", price: 300 },
  { id: 2, name: "Black space silk Padded", price: 400 },
  { id: 3, name: "Blue Cotton heluci", price: 350 },
  { id: 4, name: "Cotton Black Embroidery", price: 500 },
  { id: 5, name: "Cotton Red & white", price: 250 },
  { id: 6, name: "Green Chikinkari", price: 400 },
  { id: 7, name: "Mustard embroidery Blouse", price: 550 },
  { id: 8, name: "Pink space silk padded", price: 400 },
  { id: 9, name: "Purple cotton padded", price: 300 },
  { id: 10, name: "Red space Silk Padded", price: 400 },
  { id: 11, name: "White Maggam", price: 500 },
  { id: 12, name: "Yellow Cotton", price: 250 }
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Boutique Collection</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px"
        }}
      />

      {filtered.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px"
          }}
        >
          <h3>{product.name}</h3>

          <p>
            <strong>₹{product.price}</strong>
          </p>

          <a
    ://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
            <button
              style={{
                background: "#25D366",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "5px"
              }}
            >
              WhatsApp Enquiry
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}
