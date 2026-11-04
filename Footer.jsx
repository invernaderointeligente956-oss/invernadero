import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer
    className="bg-white text-secondary border-top border-4"
    style={{ borderColor: "#FA7FFA",fontFamily: "'Open Sans', sans-serif", padding: "6px 0", marginTop: "0"  }}>
            <div className="container-fluid px-4 d-flex flex-column flex-md-row justify-content-between align-items-center text-md-start small">
                <p className="mb-3 mb-md-0" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    &copy; {new Date().getFullYear()}{" "}
                    <span className="fw-semibold" style={{ fontFamily: "'Playfair Display', serif", color: "#df1a1a" }}>
                        Invernadero Inteligente CECyTEM Jocotitlán
                    </span>
                    . Todos los derechos reservados.
                </p>
                <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3 gap-md-4 ms-md-auto">
                    <a href="https://www.facebook.com/profile.php?id=61596268190489" className="footer-link text-decoration-none" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.instagram.com/_inv_678/" className="footer-link text-decoration-none" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <Link to="/aviso-privacidad" className="footer-link text-decoration-none">Aviso de Privacidad</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
