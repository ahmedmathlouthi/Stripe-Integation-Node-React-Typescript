import { setProducts, addToCart, requestProducts } from "../actions/productActions";
import { sampleProducts } from "../../data/sampleProducts";

const initialState: ProductState = { products: [...sampleProducts], loading: false, cart: [] };



type ProductAction = ReturnType<
      typeof requestProducts
      | typeof setProducts 
      | typeof addToCart>;

export function productsReducer(
  state = initialState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case "products/SET_PRODUCTS_REQUEST":
      return {...state, loading: true};
    case "products/SET_PRODUCTS":
      return { ...state, products: action.payload, loading: false};
    case "products/ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.payload.product.id,
            quantity: action.payload.quantity
          }
        ], 
        loading: false
      };
    default:
      return state;
  }
}
