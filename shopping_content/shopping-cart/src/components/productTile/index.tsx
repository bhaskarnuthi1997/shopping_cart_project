import React from "react";

function ProductTile({ singleProductTitle }) {
  return (
    <div style={{ border: 2, borderColor: "cyan", cursor: "pointer" }}>
      <div style={{ overflow: "hidden" }}>
        <img
          style={{
            objectFit: "cover",
            width: "full",
            height: "full",
            transition: "all",
            scale: 150,
          }}
          src={singleProductTitle?.thumbnail}
          alt={singleProductTitle?.title}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <div style={{ fontWeight: 500 }}>
          <p> {singleProductTitle?.title}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductTile;
