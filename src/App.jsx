import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import WishList from "./pages/WishList";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
