import { useState } from "react";

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

  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#d63384"
        }}
      >
        🌸 Boutique Collection
      </h1>

      <input
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "20px",
          boxSizing: "border-box"
        }}
      />

      <div
        style={{
          display: "grid",
          gap: "15px"
        }}
      >
        {filtered.map((product) => (
          <div
            key={product.name}
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}
          >
            <div
              style={{
                height: "180px",
                background: "#ececec",
                borderRadius: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              Product Image
            </div>

            <h3>{product.name}</h3>

            <p
              style={{
                color: "#d63384",
                fontWeight: "bold",
                fontSize: "18px"
              }}
            >
              ₹{product.price}
            </p>

            <button
              style={{
                background: "#25D366",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "8px",
                width: "100%"
              }}
            >
              Enquire on WhatsApp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
