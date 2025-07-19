async function createItem(product, quantity, price) {
  return {
    product,
    quantity,
    price,
    totalItem: () => {
      return quantity * price;
    },
  };
};

export default createItem;
