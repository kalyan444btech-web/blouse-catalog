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
    <div style={{ padding: 20 }}>
      <h1>Boutique Collection</h1>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 20
        }}
      />

      {filteredProducts.map((product) => (
        <div
          key={product.name}
          style={{
            border: "1px solid #ddd",
            padding: 15,
            marginBottom: 20,
            borderRadius: 10
          }}
        >
          {product.image}

          <h2>{product.name}</h2>

          <p>₹{product.price}</p>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/919999999999",
                "_blank"
              )
            }
          >
            WhatsApp Enquiry
          </button>
        </div>
      ))}
    </div>
  );
}
