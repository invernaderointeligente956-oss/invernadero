
import React from "react";
import { Link } from "react-router-dom";

function Galerias() {
    const imagenes = [
        {
            titulo: "Nuestro invernadero",
            descripcion:
                "Espacio destinado al desarrollo y cuidado de los cultivos.",
            imagen: "/disenos-invernadero-campos-fresas-plantas-fresas-filas_467936-803.avif"
        },
        {
            titulo: "Cultivos y plantas",
            descripcion:
                "Conoce los cultivos que forman parte de nuestro proyecto.",
            imagen: "/cultivos.jpg"
        },
        {
            titulo: "Trabajo en equipo",
            descripcion:
                "Estudiantes y colaboradores participan en el cuidado del invernadero.",
            imagen: "/trabajo en equipo.webp"
        },
        {
            titulo: "Tecnología agrícola",
            descripcion:
                "Uso de tecnología para apoyar el crecimiento de las plantas.",
            imagen: "/tecnologia.jpg"
        },
        {
            titulo: "Cuidado de los cultivos",
            descripcion:
                "Actividades de seguimiento y mantenimiento de las plantas.",
            imagen: "/OIP.webp"
        },
        {
            titulo: "Innovación y medio ambiente",
            descripcion:
                "Acciones para fomentar una agricultura responsable y sostenible.",
            imagen: "/INOVACION.webp"
        }
    ];

    return (
        <div className="pagina-galerias">

            <header className="galerias-header">
                <Link to="/" className="galerias-logo">
                    Invernadero Inteligente
                    <span>CECyTEM Jocotitlán</span>
                </Link>

                <nav className="galerias-nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/sobre-nosotros">Sobre nosotros</Link>
                    <Link to="/mision-vision">Misión y visión</Link>
                    <Link to="/aliados">Aliados</Link>
                    <Link to="/galerias">Galerías</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>
            </header>

            <section className="galerias-intro">
                <span className="galerias-etiqueta">
                    INVERNADERO INTELIGENTE
                </span>

                <h1>Nuestra galería</h1>

                <p>
                    Explora imágenes de nuestro invernadero, los cultivos,
                    las actividades y el trabajo en equipo que impulsa
                    este proyecto educativo.
                </p>
            </section>

            <main className="galerias-contenido">
                <div className="galerias-grid">
                    {imagenes.map((item, index) => (
                        <article
                            className="galeria-tarjeta"
                            key={`${item.titulo}-${index}`}
                        >
                            <div className="galeria-foto">
                                <img
                                    src={item.imagen}
                                    alt={item.titulo}
                                    loading="lazy"
                                    onError={(e) => {
                                        console.error(
                                            "No se pudo cargar la imagen:",
                                            e.currentTarget.src
                                        );
                                    }}
                                />
                            </div>

                            <div className="galeria-descripcion">
                                <h2>{item.titulo}</h2>
                                <p>{item.descripcion}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            <section className="galerias-mensaje">
                <h2>Cultivando el futuro</h2>

                <p>
                    Cada imagen representa el esfuerzo, la innovación
                    y el compromiso con una agricultura más sostenible.
                </p>

                <Link to="/contacto" className="galerias-boton">
                    Contáctanos
                </Link>
            </section>

        </div>
    );
}

export default Galerias;
