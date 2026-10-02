import { useState } from "react";

export default function Home() {
  const products = [
    {
      name: "Black cotton Padded",
      price: 300,
      image:
        "https://drive.google.com/uc?export=view&id=1JEMSU5MuIn4foq67ya03UMFvK0GT4dDf"
    },
    {
      name: "Pink space silk padded",
      price: 400,
      image:
        "https://drive.google.com/uc?export=view&id=1m2Pydi_q7_xXQVb5vTQd38KVqs8w9g98"
    },
    {
      name: "Red space Silk Padded",
      price: 400,
      image:
        "https://drive.google.com/uc?export=view&id=1SphFh_3-hdDH8oDvFleJxreUrVNgPaQn"
    },
    {
      name: "Yellow Cotton",
      price: 250,
      image:
        "https://drive.google.com/uc?export=view&id=1lSluF3ywJE4x0pFX5I-mFoQ7udqv1iqY"
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
        fontFamily: "Arial"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#d63384"
        }}
      >
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
          marginBottom: "20px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          boxSizing: "border-box"
        }}
      />

      {filteredProducts.map((product) => (
        <div
          key={product.name}
          style={{
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "15px",
            marginBottom: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width#d63384",
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
