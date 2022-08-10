import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import News from "./pages/news/News";
import Heroes from "./pages/heroes/Heroes";
import Items from "./pages/items/Items";
import Header from "./components/header/Header";
import Champ from "./pages/championship/Championship";

function App() {
  return (
    <div className="App">
      <Header />
    <Champ/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/news" element={<News />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
