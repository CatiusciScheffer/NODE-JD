async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, product) {
  const index = userCart.findIndex((item) => item.product !== product);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.product === item.product);

  if (indexFound == -1) {
    console.log('Item não encontrado.');
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    console.log(`${item.product} excluído com sucesso.`);
    return;
  }

  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    console.log('Carrinho esvaziado.');
    return;
  }
}

async function totalCart(userCart) {
  console.log('\nTotal: ');
  const result = userCart.reduce((total, item) => total + item.totalItem(), 0);

  console.log(result);
}

async function displayCart(userCart) {
  console.log('Shopee cart list: ');
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.product} - ${item.quantity} x $ ${
        item.price
      } = $ ${item.totalItem()}`
    );
  });
}

export { addItem, deleteItem, removeItem, totalCart, displayCart };
