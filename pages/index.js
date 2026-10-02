import { useState } from "react";

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
        placeholder="Search products..."
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
          key={product.name}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px"
          }}
        >
          <h3>{product.name}</h3>

          <p>
            <b>₹{product.price}</b>
          </p>

          <a
            href={`https://wa.me/919876543210?text=Hi%20I%20am%${encodeURIComponent(}`}
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                background: "#25D366",
                color: "white",
                border: "none",
                padding: "10px 15px",
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
