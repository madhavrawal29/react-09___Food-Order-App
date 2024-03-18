import { useState } from "react";
import { createContext } from "react";

const UserProgressContext = createContext({
  progress: "", // 'cart', 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setuserProgress] = useState("");

  function showCart() {
    setuserProgress("cart");
  }

  function hideCart() {
    setuserProgress("");
  }

  function showCheckout() {
    setuserProgress("checkout");
  }

  function hideCheckout() {
    setuserProgress("");
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
