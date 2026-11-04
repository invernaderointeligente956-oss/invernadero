
import React from "react";
import { Link } from "react-router-dom";

function AvisoPrivacidad() {
    return (
        <div className="pagina-aviso">

            {/* ENCABEZADO */}
            <header className="aviso-header">
                <Link to="/" className="aviso-logo">
                    Invernadero Inteligente
                    <span>CECyTEM Jocotitlán</span>
                </Link>

                <nav className="aviso-nav">
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
            <section className="aviso-intro">
                <span className="aviso-etiqueta">
                    INVERNADERO INTELIGENTE
                </span>

                <h1 style={{ fontSize: "40px", color: "red" }}>Aviso de privacidad</h1>

                <p>
                    En este apartado se describe cómo se contempla el
                    cuidado de los datos personales de las personas que
                    utilizan o consultan nuestro sitio web.
                </p>
            </section>

            {/* CONTENIDO */}
            <main className="aviso-contenido">

                <section className="aviso-seccion">
                    <h2>1. Responsable del sitio</h2>
                    <p>
                        El proyecto Invernadero Inteligente CECyTEM
                        Jocotitlán es una iniciativa educativa enfocada
                        en la tecnología, la agricultura y el cuidado
                        del medio ambiente.
                    </p>
                </section>

                <section className="aviso-seccion">
                    <h2>2. Datos personales</h2>
                    <p>
                        En caso de habilitar formularios de contacto,
                        registro o inicio de sesión, podrán solicitarse
                        datos como nombre, correo electrónico y la
                        información necesaria para atender la solicitud
                        o proporcionar acceso al sistema.
                    </p>
                </section>

                <section className="aviso-seccion">
                    <h2>3. Finalidad del uso de los datos</h2>
                    <p>
                        Los datos que se recaben se utilizarán únicamente
                        para las finalidades informadas a las personas
                        usuarias, como gestionar el acceso al sistema,
                        atender consultas y dar seguimiento a solicitudes
                        relacionadas con el proyecto.
                    </p>
                </section>

                <section className="aviso-seccion">
                    <h2>4. Protección de la información</h2>
                    <p>
                        Se deberán aplicar medidas de seguridad
                        administrativas, técnicas y físicas apropiadas
                        para proteger la información personal contra
                        pérdida, alteración, acceso o uso no autorizado.
                    </p>
                </section>

                <section className="aviso-seccion">
                    <h2>5. Uso de cookies</h2>
                    <p>
                        Este sitio puede utilizar almacenamiento local
                        del navegador para mantener determinadas
                        preferencias o la sesión de acceso, si esas
                        funciones están habilitadas. La información
                        almacenada dependerá de las funciones
                        implementadas en la aplicación.
                    </p>
                </section>

                <section className="aviso-seccion">
                    <h2>6. Derechos de las personas usuarias</h2>
                    <p>
                        Las personas titulares podrán solicitar
                        información sobre el tratamiento de sus datos
                        y ejercer los derechos que les correspondan
                        conforme a la legislación aplicable.
                    </p>
                </section>

                <section className="aviso-seccion">
                    <h2>7. Cambios al aviso de privacidad</h2>
                    <p>
                        Este aviso podrá actualizarse cuando cambien
                        las funciones del sitio o las prácticas de
                        tratamiento de datos. Las modificaciones
                        deberán publicarse en esta sección.
                    </p>
                </section>
            </main>

        </div>
    );
}

export default AvisoPrivacidad;
