
import React from "react";
import { Link } from "react-router-dom";

function Productos() {
    const productos = [
        {
            nombre: "Lechuga",
            categoria: "Hortaliza",
            descripcion:
                "La lechuga es una hortaliza de hojas verdes que destaca por su frescura y su aporte de vitaminas y minerales. Su cultivo requiere humedad adecuada y cuidados constantes.",
            imagen: "/lechugas.jpg"
        },
        {
            nombre: "Fresa",
            categoria: "Fruto",
            descripcion:
                "La fresa es un fruto de color rojo, sabor dulce y aroma agradable. Necesita suficiente luz, riego controlado y condiciones adecuadas para crecer saludablemente.",
            imagen: "/fresas.webp"
        }
    ];

    return (
        <div className="pagina-productos">

            {/* ENCABEZADO */}
            <header className="productos-header">
                <Link to="/" className="productos-logo">
                    Invernadero Inteligente
                    <span>CECyTEM Jocotitlán</span>
                </Link>

                <nav className="productos-nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/sobre-nosotros">Sobre nosotros</Link>
                    <Link to="/mision-vision">Misión y visión</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/aliados">Aliados</Link>
                    <Link to="/galerias">Galerías</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>
            </header>

            {/* PRESENTACIÓN */}
            <section className="productos-intro">
                <span className="productos-etiqueta">
                    CULTIVANDO EL FUTURO
                </span>

                <h1>Nuestros productos</h1>

                <p>
                    Conoce los cultivos que forman parte de nuestro
                    invernadero inteligente y descubre la importancia
                    de utilizar prácticas agrícolas responsables.
                </p>
            </section>
            <main className="productos-lista">
                {productos.map((producto) => (
                    <article
                        className="producto-tarjeta"
                        key={producto.nombre}
                    >
                        <div className="producto-imagen">
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                onError={(e) => {
                                    console.error(
                                        "No se pudo cargar la imagen:",
                                        e.currentTarget.src
                                    );
                                }}
                            />
                        </div>

                        <div className="producto-informacion">
                            <span className="producto-categoria">
                                {producto.categoria}
                            </span>

                            <h2>{producto.nombre}</h2>

                            <p>{producto.descripcion}</p>
                        </div>
                    </article>
                ))}
            </main>
        </div>
    );
}

export default Productos;
