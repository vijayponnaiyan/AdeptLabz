import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
} from "react";
import { fetchblogs } from "../../API/user";
import Loader from "../../component/ui/Loader";
import Error from "../../component/ui/ErrorState";

// Create Context
const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, SetCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch API data when component mounts
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchblogs();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = useMemo(
    () => ({ cart, SetCart, products }),
    [cart, products]
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Error message={error} />
      </div>
    );
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

// Custom Hook to Access Context
export const CartState = () => {
  return useContext(CartContext);
};
