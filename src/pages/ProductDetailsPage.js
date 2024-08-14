import React from "react";
import ProductDetails from "../features/product/components/ProductDetails";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

function ProductDetailsPage() {
  return (
    <>
      <Navbar>
        <ProductDetails></ProductDetails>
      </Navbar>
      <Footer></Footer>
    </>
  );
}

export default ProductDetailsPage;
