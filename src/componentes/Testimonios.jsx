import React from "react";
import { Link } from "react-router-dom";

function Testimonios() {
    const testimonios = [
        {
            nombre: "María González",
            ocupacion: "Estudiante",
            opinion:
                "El proyecto del invernadero inteligente nos permite aprender sobre los cultivos y conocer cómo la tecnología puede ayudar al cuidado de las plantas.",
            estrellas: 5
        },
        {
            nombre: "Carlos Hernández",
            ocupacion: "Docente",
            opinion:
                "Es una iniciativa que fomenta el aprendizaje práctico, el trabajo en equipo y el uso responsable de los recursos naturales.",
            estrellas: 5
        },
        {
            nombre: "Ana Martínez",
            ocupacion: "Colaboradora",
            opinion:
                "Me parece un proyecto interesante porque combina la innovación tecnológica con la agricultura y el cuidado del medio ambiente.",
            estrellas: 5
        },
        {
            nombre: "José Ramírez",
            ocupacion: "Productor agrícola",
            opinion:
                "La tecnología puede ser una gran herramienta para mejorar el seguimiento de los cultivos y promover prácticas agrícolas más eficientes.",
            estrellas: 5
        }
    ];

    return (
        <div className="pagina-testimonios">

            {/* ENCABEZADO */}
            <header className="testimonios-header">
                <Link to="/" className="testimonios-logo">
                    Invernadero Inteligente
                    <span>CECyTEM Jocotitlán</span>
                </Link>

                <nav className="testimonios-nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/sobre-nosotros">Sobre nosotros</Link>
                    <Link to="/mision-vision">Misión y visión</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/aliados">Aliados</Link>
                    <Link to="/galerias">Galerías</Link>
                    <Link to="/testimonios">Testimonios</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>
            </header>

            {/* PRESENTACIÓN */}
            <section className="testimonios-intro">
                <span className="testimonios-etiqueta">
                    EXPERIENCIAS Y OPINIONES
                </span>

                <h1>Testimonios</h1>

                <p>
                    Conoce las opiniones de las personas que forman parte
                    de nuestro proyecto de invernadero inteligente y que
                    valoran la unión entre tecnología, educación y agricultura.
                </p>
            </section>

            {/* TARJETAS */}
            <main className="testimonios-lista">
                {testimonios.map((testimonio) => (
                    <article
                        className="testimonio-tarjeta"
                        key={testimonio.nombre}
                    >
                        <div className="testimonio-comillas">“</div>

                        <div
                            className="testimonio-estrellas"
                            aria-label={`${testimonio.estrellas} de 5 estrellas`}
                        >
                            {"★".repeat(testimonio.estrellas)}
                        </div>

                        <p className="testimonio-opinion">
                            {testimonio.opinion}
                        </p>

                        <div className="testimonio-persona">
                            <div className="testimonio-avatar">
                                {testimonio.nombre.charAt(0)}
                            </div>

                            <div>
                                <h2>{testimonio.nombre}</h2>
                                <span>{testimonio.ocupacion}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </main>

            {/* MENSAJE FINAL */}
            <section className="testimonios-mensaje">
                <h2>Crecer, aprender e innovar juntos</h2>

                <p>
                    Nuestro compromiso es continuar impulsando la educación,
                    la tecnología y el cuidado del medio ambiente mediante
                    el desarrollo de nuestro invernadero inteligente.
                </p>

                <Link to="/contacto" className="testimonios-boton">
                    Contáctanos
                </Link>
            </section>

        </div>
    );
}

export default Testimonios;
