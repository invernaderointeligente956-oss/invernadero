import React from "react";
import { Link } from "react-router-dom";

function Aliados() {
    const aliados = [
        {
            nombre: "Comunidad educativa",
            descripcion: "Estudiantes y docentes impulsan el aprendizaje, la innovación y el cuidado ambiental.",
            imagen: "/SALA%202.jpeg"
        },
        {
            nombre: "Productores agrícolas",
            descripcion: "Comparten conocimientos y experiencias para mejorar los cultivos.",
            imagen: "/productores.webp"
        },
        {
            nombre: "Instituciones colaboradoras",
            descripcion: "Apoyan proyectos educativos, tecnológicos y ambientales.",
            imagen: "/instituciones.jpg"
        }
    ];

    return (
        <div
            className="pagina-aliados"
            style={{
                paddingTop: "90px",
                fontFamily: "'Open Sans', sans-serif",
                color: "#374151",
                backgroundColor: "#FFFFFF",
                minHeight: "70vh"
            }}
        >
            <section className="text-center py-3">
                <div className="container">
                    <h1
                        className="fw-bold mb-2"
                        style={{
                            color: "#14532D",
                            fontFamily: "'Playfair Display', serif"
                        }}
                    >
                        Nuestros aliados
                    </h1>
                    <p className="text-secondary mb-2">
                        Conoce a las personas e instituciones que impulsan nuestro invernadero inteligente.
                    </p>
                    <a href="#lista-aliados" className="btn btn-success btn-sm">
                        Conocer aliados
                    </a>
                </div>
            </section>

            <main className="container py-3">
                <section
                    id="lista-aliados"
                    className="row g-3 justify-content-center"
                >
                    {aliados.map((aliado) => (
                        <div className="col-12 col-md-4" key={aliado.nombre}>
                            <article className="card h-100 shadow-sm">
                                <img
                                    src={aliado.imagen}
                                    alt={aliado.nombre}
                                    className="card-img-top"
                                    style={{
                                        height: "145px",
                                        objectFit: "cover"
                                    }}
                                />
                                <div className="card-body text-center p-3">
                                    <h5
                                        className="card-title fw-bold"
                                        style={{ color: "#14532D" }}
                                    >
                                        {aliado.nombre}
                                    </h5>
                                    <p className="card-text text-secondary small mb-0">
                                        {aliado.descripcion}
                                    </p>
                                </div>
                            </article>
                        </div>
                    ))}
                </section>

                <section className="text-center py-3">
                    <h4 className="fw-bold mb-2" style={{ color: "#16A34A" }}>
                        Juntos hacemos crecer nuevas ideas
                    </h4>
                    <p className="text-secondary mb-2">
                        La colaboración impulsa la educación, la tecnología y el cuidado ambiental.
                    </p>
                    <Link to="/contacto" className="btn btn-success btn-sm">
                        Contáctanos
                    </Link>
                </section>
            </main>
        </div>
    );
}

export default Aliados;
