import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Black cotton Padded",
    price: 300,
    image: "https://via.placeholder.com/400x500?text=Black+Cotton"
  },
  {
    id: 2,
    name: "Black space silk Padded",
    price: 400,
    image: "https://via.placeholder.com/400x500?text=Black+Silk"
  },
  {
    id: 3,
    name: "Blue Cotton heluci",
    price: 350,
    image: "https://via.placeholder.com/400x500?text=Blue+Cotton"
  },
  {
    id: 4,
    name: "Cotton Black Embroidery",
    price: 500,
    image: "https://via.placeholder.com/400x500?text=Embroidery"
  },
  {
    id: 5,
    name: "Cotton Red & white",
    price: 250,
    image: "https://via.placeholder.com/400x500?text=Red+White"
  },
  {
    id: 6,
    name: "Green Chikinkari",
    price: 400,
    image: "https://via.placeholder.com/400x500?text=Chikankari"
  },
  {
    id: 7,
    name: "Mustard embroidery Blouse",
    price: 550,
    image: "https://via.placeholder.com/400x500?text=Mustard"
  },
  {
    id: 8,
    name: "Pink space silk padded",
    price: 400,
    image: "https://via.placeholder.com/400x500?text=Pink+Silk"
  },
  {
    id: 9,
    name: "Purple cotton padded",
    price: 300,
    image: "https://via.placeholder.com/400x500?text=Purple"
  },
  {
    id: 10,
    name: "Red space Silk Padded",
    price: 400,
    image: "https://via.placeholder.com/400x500?text=Red+Silk"
  },
  {
    id: 11,
    name: "White Maggam",
    price: 500,
    image: "https://via.placeholder.com/400x500?text=White+Maggam"
  },
  {
    id: 12,
    name: "Yellow Cotton",
    price: 250,
    image: "https://via.placeholder.com/400x500?text=Yellow"
  }
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#f7f7f7",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Boutique Collection
      </h1>

      <input
        type="text"
        placeholder="Search Products..."
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
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}
      >
        {filtered.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#fff",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,.1)"
            }}
          >
            {product.image}

            <div style={{ padding: "15px" }}>
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
                  background: "#111",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  width: "100%",
                  borderRadius: "10px"
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: "15px",
              maxWidth: "500px",
              width: "100%",
              padding: "20px"
            }}
          >
            {selected.image}

            <h2>{selected.name}</h2>

            <h3>₹{selected.price}</h3>

            {`https://wa.me/91YOURNUMBER?text=I'm
              <button
                style={{
                  width: "100%",
                  background: "#25D366",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: "10px",
                  marginTop: "10px"
                }}
              >
                WhatsApp Enquiry
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
