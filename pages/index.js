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
  const [selected, setSelected] = useState(null);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px"
        }}
      >
        Boutique Collection
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "20px"
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "15px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <div
              style={{
                height: "220px",
                backgroundColor: "#eaeaea",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px"
              }}
            >
              Image Here
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
              onClick={() => setSelected(product)}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "450px"
            }}
          >
            <h2>{selected.name}</h2>

            <p
              style={{
                fontSize: "22px",
                fontWeight: "bold"
              }}
            >
              ₹{selected.price}
            </p>

            {`https://wa.me/919876543210?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(}`}
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#25D366",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                WhatsApp Enquiry
              </button>
            </a>

            <button
              onClick={() => setSelected(null)}
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
