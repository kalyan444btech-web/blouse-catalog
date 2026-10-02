import { useState } from "react";

export default function Home() {
  const products = [
    {
      name: "Black Space Silk Padded",
      price: 400,
      image: "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/Black_space_silk_padded_front.jpeg"
    },
    {
      name: "Cotton Black Embroidery",
      price: 500,
      image: "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/Cotton_black_embroidery_front.jpeg"
    },
    {
      name: "Black Cotton Padded",
      price: 300,
      image: "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/Cotton_black_padded_front.jpeg"
    },
    {
      name: "Blue Cotton Heluci",
      price: 350,
      image: "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/Cotton_blue_heluci_front.jpeg"
    },
    {
      name: "Purple Cotton Padded",
      price: 300,
      image: "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/Cotton_purple_padded_front.jpeg"
    },
    {
      name: "Cotton Red White",
      price: 250,
      image: "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/Cotton_red_front.jpeg"
    },
    {
      name: "Yellow Cotton",
      price: 250,
      image: "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/cotton_yellow_front.jpeg"
    },
    {
      name: "Green Chikinkari",
      price: 400,
      image: "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/green_chikinkari_front.jpeg"
    },
    {
      name: "Mustard Cotton Embroidery",
      price: 550,
      image: "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/Mustard_cotton_embroidery_front.jpeg"
    },
    {
      name: "Pink Space Silk Padded",
      price: 400,
      image: "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/pink_space_silk_padded_front.jpeg"
    },
    {
      name: "Red Space Silk Padded",
      price: 400,
      image: "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/red_space_silk_padded_front.jpeg"
    },
    {
      name: "White Maggam",
      price: 500,
      image: "https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/white_maggam_padded_front%20.jpeg"
    }
  ];

  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#f7f7f7",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial"
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
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      />

      {filtered.map((product) => (
        <div
          key={product.name}
          style={{
            background: "#fff",
            borderRadius: "15px",
            overflow: "hidden",
            marginBottom: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          {product.image}

          <div style={{ padding: "15px" }}>
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
                  "https://wa.me/91XXXXXXXXXX",
                  "_blank"
                )
              }
              style={{
                width: "100%",
                padding: "12px",
                background: "#25D366",
                color: "white",
                border: "none",
                borderRadius: "10px"
              }}
            >
              WhatsApp Enquiry
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
