import { useState } from "react";

export default function Home() {
  const products = [
    {
      name: "Cotton Black Embroidery",
      price: 500,
      image:
        "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/cotton_black_embroidery_500.jpeg"
    },
    {
      name: "Black Space Silk Padded",
      price: 400,
      image:
        "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/Black_space_silk_padded_front.jpeg"
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
          color: "#c2185b"
        }}
      >
        🌸 Boutique Collection
      </h1>

      <input
        placeholder="Search Product..."
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
            background: "white",
            borderRadius: "15px",
            padding: "15px",
            marginBottom: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          {product.image}

          <h2>{product.name}</h2>

          <p
            style={{
              color: "#c2185b",
              fontWeight: "bold",
              fontSize: "22px"
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
              background: "#25D366",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            WhatsApp Enquiry
          </button>
        </div>
      ))}
    </div>
  );
}
