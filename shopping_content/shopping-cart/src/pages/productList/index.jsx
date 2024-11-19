import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context";
import ProductTile from "../../components/productTile";

function ProductListPage() {
  const { listOfProducts, loading } = useContext(ShoppingCartContext);
  const [search, setSearch] = useState("");

  const filteredProducts = listOfProducts?.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h3>Loading data...Please Wait</h3>;

  return (
    <section style={{ padding: "20px", backgroundColor: "#f4f4f9" }}>
      <div>
        <div>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              padding: "20px",
              fontSize: "34px",
              color: "#333",
            }}
          >
            Our Featured Products
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            marginBottom: "20px",
            border: "2px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <input
            type="text"
            placeholder="Search Here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "16px",
              width: "60%",
              borderRadius: "4px",
              border: "1px solid #ddd",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            padding: "10px",
          }}
        >
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #ddd",
                  padding: "20px",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <ProductTile singleProductTitle={product} />
              </div>
            ))
          ) : (
            <h3>No Products Found</h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductListPage;
