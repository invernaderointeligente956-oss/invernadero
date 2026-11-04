
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top w-100">
            <div className="container">

                <Link className="navbar-brand fw-bold text-green" to="/"style={{ fontFamily: "'Playfair Display', serif", color: "#2b7e41" }}>
                    <img src="invernadero inteligente CECyTEM.png"  alt="Logo Invernadero"  height="45" />Invernadero Inteligente </Link>

                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
                        <li className="nav-item"><Link className="nav-link nav-link-custom"  to="/" style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={() => setIsOpen(false)}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom" to="/sobre-nosotros" style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={() => setIsOpen(false)}>Sobre Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom" to="/mision-vision" style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={() => setIsOpen(false)} >Misión y Visión</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom"  to="/productos"   style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={() => setIsOpen(false)} >Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom"  to="/aliados"  style={{ fontFamily: "'Montserrat', sans-serif" }}  onClick={() => setIsOpen(false)}>Aliados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom"  to="/galerias"  style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={() => setIsOpen(false)}>Galerías</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom" to="/testimonios" style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={() => setIsOpen(false)}>Testimonios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom" to="/contacto" style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={() => setIsOpen(false)}>Contacto</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
