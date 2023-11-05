import { fetchUser, fetchCart } from "../utils/fetchLocalStorage";

const userInfo = fetchUser();
const cartInfo = fetchCart();


export const initialState = {
  user: userInfo,
  setFrame: null,
  cartShow: false,
  cartItems: cartInfo,
};
