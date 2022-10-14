import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import NotFound from "../../pages/NotFound";

function App() {
    return (
        <div className="App">
            <Header />
            <main className="container content">
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
