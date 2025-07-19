import {
  addItem,
  deleteItem,
  removeItem,
  totalCart,
  displayCart,
} from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];

console.log('Welcome to the your Shopee Cart');

const item1 = await createItem('cadeira', 3, 350.99);
const item2 = await createItem('mesa', 1, 950.99);

await addItem(myCart, item1);
await addItem(myCart, item2);

// await deleteItem(myCart, item1.product);
// await deleteItem(myCart, item2.product);

await removeItem(myCart, item2);

await displayCart(myCart);

await totalCart(myCart);
