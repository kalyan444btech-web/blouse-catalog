export default function Home() {
  return (
    <div
      style={{
        background: "#f5f5f5",
        padding: "20px",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >
      <h1>🌸 Boutique Collection</h1>

      <div
        style={{
          background: "white",
          padding: "15px",
          borderRadius: "15px",
          marginBottom: "20px"
        }}
      >
        <img
          src="https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/Black_space_silk_padded_front.jpeg"
          alt="Black Space Silk Padded"
          width="300"
        />

        <h2>Black Space Silk Padded</h2>

        <p>₹400</p>
      </div>

      <div
        style={{
          background: "white",
          padding: "15px",
          borderRadius: "15px",
          marginBottom: "20px"
        }}
      >
        https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/Cotton_black_embroidery_front.jpeg

        <h2>Cotton Black Embroidery</h2>

        <p>₹500</p>
      </div>

      <div
        style={{
          background: "white",
          padding: "15px",
          borderRadius: "15px"
        }}
      >
        <img
          src="https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/Cotton_purple_padded_front.jpeg"
          alt="Purple Cotton Padded"
          width="300"
        />

        <h2>Purple Cotton Padded</h2>

        <p>₹300</p>
      </div>
    </div>
  );
}
