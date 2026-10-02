import { useState } from "react";

export default function Home() {
  const products = [
    {
      name: "Black cotton Padded",
      price: 300,
      image:
        "https://drive.google.com/thumbnail?id=1hR6gNwW4s508RzN4N5tJuTZJKTsoJkIw&sz=w1000"
    }
  ];

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
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
        type="text"
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

      {filteredProducts.map((product) => (
        <div
          key={product.name}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            padding: "15px",
            marginBottom: "20px",
            boxShadow: "0 3px 10px rgba(0,0,0,0.15)"
          }}
        >
          {product.image}

          <h2>{product.name}</h2>

          <p
            style={{
              color: "#d63384",
              fontWeight: "bold",
              fontSize: "20px"
            }}
          >
            ₹{product.price}
          </p>

          <button
            onClick={() =>
              window.open(
                `https://wa.me/919999999999?text=Hi, I am interested in ${product.name}`,
                "_blank"
              )
            }
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#25D366",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px"
            }}
          >
            WhatsApp Enquiry
          </button>
        </div>
      ))}
    </div>
  );
}
