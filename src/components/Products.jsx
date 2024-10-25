import ProductList from "./ProductList";
const Products = () => {
  const products = [
    {
      id: 1,
      name: "Shubham",
      category: "electronics",
    },

    {
      id: 2,
      name: "Himanshu",
      category: "fashion",
    },
  ];

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Products;
