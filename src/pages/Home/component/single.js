// // src/hooks/useCart.js
// import { useCartState } from "../../../Hooks/Contex/UseContexProvider.jsx";

// export const useCart = (product) => {
//   const { cart, SetCart } = useCartState();

//   const isInCart = cart.some((item) => item._id === product?._id);

//   const handleCartToggle = () => {
//     if (!product?._id) return;

//     SetCart((prevCart) => {
//       if (isInCart) {
//         return prevCart.filter((item) => item._id !== product._id);
//       }
//       return [...prevCart, product];
//     });
//   };

//   return { isInCart, handleCartToggle };
// };
