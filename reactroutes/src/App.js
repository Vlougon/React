import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import BlogCharacter from './pages/BlogCharacter.jsx';
import NotFound from './pages/NotFound.jsx';
import Layout from "./layouts/Layout.jsx";
import { createContext, useState } from "react";
import './App.css';

export const CharacterContext = createContext();

function App() {
  const [characterList, setCharacterList] = useState([]);

  console.log(characterList);

  return (
    <div className="App">
      <CharacterContext.Provider value={{ characterList, setCharacterList }}>
        <NavBar />
        <Routes>
          <Route element={<Layout />} path="/">
            <Route element={<Home />} path="/"></Route>
            <Route element={<Contact />} path="/contacto"></Route>
            <Route element={<Blog />} path="/blog"></Route>
            <Route element={<BlogCharacter />} path="/blog/:id"></Route>
            <Route element={<NotFound />} path="*"></Route>
          </Route>
        </Routes>
      </CharacterContext.Provider>
    </div>
  );
}

export default App;