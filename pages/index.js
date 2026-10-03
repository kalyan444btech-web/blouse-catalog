export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Boutique Collection</h1>

      <div style={{ marginBottom: 30 }}>
        <img
          src="https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/cotton_black_embroidery_500.jpeg"
          alt="Cotton Black Embroidery"
          width="300"
        />

        <h2>Cotton Black Embroidery</h2>

        <p>₹500</p>
      </div>

      <div>
        <img
          src="https://mnsphapvkqgspaqoqdis.supabase.co/storage/v1/object/public/products/blouses/Black_space_silk_padded_front.jpeg"
          alt="Black Space Silk Padded"
          width="300"
        />

        <h2>Black Space Silk Padded</h2>

        <p>₹400</p>
      </div>
    </div>
  );
}
