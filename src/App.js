import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Inicio from "./componentes/Inicio";
import SobreNosotros from "./componentes/SobreNosotros";
import MisionVision from "./componentes/MisionVision";
import Contacto from "./componentes/Contacto";
import Aliados from "./componentes/Aliados";
import Galerias from "./componentes/Galerias";
import Productos from "./componentes/Productos";
import Testimonios from "./componentes/Testimonios";
import AvisoPrivacidad from "./componentes/AvisoPrivacidad";

function App() {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                        <Route path="/mision-vision" element={<MisionVision />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/aliados" element={<Aliados />} />
                        <Route path="/galerias" element={<Galerias />} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path="/testimonios" element={<Testimonios />} />
                        <Route path="/aviso-privacidad" element={<AvisoPrivacidad />}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
