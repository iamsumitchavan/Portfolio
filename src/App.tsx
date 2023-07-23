import { Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import ProductListPage from "./Pages/ProductListPage";
import { Routes } from "react-router-dom";
import ProductDetailPage from "./Pages/ProductDetailPage";
import { useState, useEffect } from "react";
import { CountContexts } from "./Component/Contexts";
import CartPage from "./Pages/CartPage";

import Login from "./Pages/Login";
import axios from "axios";
import SignupPage from "./Pages/SignupPage";
import HambergerIconPage from "./Pages/HambergerIconPage";

function App() {
  const savedData = localStorage.getItem("my-cart")!;
  const data = JSON.parse(savedData);
  const [cart, setCart] = useState<{}>(data) || {};
  const [user, setUser] = useState();

  function handleChangeCart(id: number, count: number) {
    const oldcount = (cart && cart[id as keyof {}]) || 0;

    const newCart = { ...cart, [id]: oldcount + count };
    updateCart(newCart);
  }

  function updateCart(updCart: {}) {
    const cartString = JSON.stringify(updCart);
    localStorage.setItem("my-cart", cartString);
    setCart(updCart);
  }
  let totalCount =
    cart &&
    Object.keys(cart).reduce((previous, current) => {
      return previous + cart[current as keyof {}];
    }, 0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        },
      });
    }
  }, []);

  return (
    <div>
      <div>
        <CountContexts.Provider
          value={{ handleChangeCart, cart, updateCart, setUser, user }}
        >
          {user && <NavBar count={totalCount || 0} />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route index element={<ProductListPage />} />
            <Route path="/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/hmbergerIconpage" element={<HambergerIconPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </CountContexts.Provider>
      </div>
    </div>
  );
}

export default App;
