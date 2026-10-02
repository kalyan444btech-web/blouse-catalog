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

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h1>Blouse Collection</h1>

      <input
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px"
        }}
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {products
        .filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((p) => (
          <div
            key={p.name}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              marginBottom: "15px",
              padding: "15px"
            }}
          >
            <h3>{p.name}</h3>
            <h4>₹{p.price}</h4>

            <a
              href={`https://wa.me/917093603990?text=Hi, I am interested  WhatsApp Enquiry
              </button>
            </a>
          </div>
        ))}
    </div>
  );
}
