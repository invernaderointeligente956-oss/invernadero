import React from "react";
import { Link } from "react-router-dom";

function Inicio() {
    return (
        <div className="pagina-inicio">
            <header className="inicio-header">
                <Link to="/" className="inicio-logo">
                    Invernadero Inteligente
                    <span>CECyTEM Jocotitlán</span>
                </Link>

                <nav className="inicio-nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/sobre-nosotros">Sobre nosotros</Link>
                    <Link to="/mision-vision">Misión y visión</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/aliados">Aliados</Link>
                    <Link to="/galerias">Galerías</Link>
                    <Link to="/testimonios">Testimonios</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>
                <div className="inicio-acceso">
                    <Link to="/login" className="inicio-login">
                        Iniciar sesión
                    </Link>
                    <Link to="/registro" className="inicio-registro">
                        Registrarse
                    </Link>
                </div>
            </header>
            <main>
                <section className="inicio-portada">
                    <div className="inicio-portada-texto">
                        <span className="inicio-etiqueta">
                            TECNOLOGÍA · AGRICULTURA · INNOVACIÓN
                        </span>
                        <h1>
                            Cultivando un futuro
                            <span> más inteligente</span>
                        </h1>
                        <p>
                            Descubre nuestro proyecto de invernadero
                            inteligente, donde la tecnología y la
                            agricultura se unen para promover el cuidado
                            de las plantas y el uso responsable de los
                            recursos naturales.
                        </p>
                        <div className="inicio-botones">
                            <Link
                                to="/sobre-nosotros"
                                className="inicio-boton-principal"
                            >
                                Conócenos
                            </Link>
                            <Link
                                to="/productos"
                                className="inicio-boton-secundario"
                            >
                                Ver productos
                            </Link>
                        </div>
                    </div>
                    <div className="inicio-portada-imagen">
                        <img
                            src="/SALA%202.jpeg"
                            alt="Espacio del proyecto Invernadero Inteligente"
                            onError={(e) => {
                                console.error(
                                    "No se pudo cargar la imagen:",
                                    e.currentTarget.src);}} />

                        <div className="inicio-imagen-etiqueta">
                            <span>🌱</span>
                            <div>
                                <strong>Invernadero Inteligente</strong>
                                <p>Aprendiendo a cultivar el futuro</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="inicio-introduccion">
                    <span className="inicio-subtitulo">
                        NUESTRO PROYECTO
                    </span>

                    <h2>Innovación para una agricultura sostenible</h2>

                    <p>
                        Buscamos integrar conocimientos tecnológicos
                        y agrícolas para fomentar el aprendizaje práctico,
                        el cuidado de los cultivos y la conciencia ambiental
                        dentro de nuestra comunidad educativa.
                    </p>
                </section>
            </main>

        </div>
    );
}

export default Inicio;
