import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import News from "./pages/news/News";
import Heroes from "./pages/heroes/Heroes";
import Items from "./pages/items/Items";
import Header from "./components/header/Header";
import Auth from "./components/auth/Auth";
import Regist from "./components/auth/Regist";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/news" element={<News />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/items" element={<Items />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/regist" element={<Regist />} />
      </Routes>
      <Outlet/>
    </div>
  );
}

export default App;
