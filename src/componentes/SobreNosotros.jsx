import React from "react";

function SobreNosotros() {
    return (
        <div style={{ paddingTop: "100px", fontFamily: "'Open Sans', sans-serif", color: "#374151", backgroundColor: "#FFFFFF", minHeight: "70vh" }}>
            <section className="text-center py-5">
                <div className="container">
                    <h1 className="fw-bold" style={{ color: "#14532D", fontFamily: "'Playfair Display', serif" }}>Sobre Nosotros</h1>
                </div>
            </section>
            <section className="container py-4">
                <div className="mb-5">
                    <h4 className="fw-bold mb-3" style={{ color: "#14532D" }}>¿Quiénes somos?</h4>
                    <p className="text-secondary">Somos un proyecto educativo del CECyTEM Plantel Jocotitlán que utiliza la tecnología para apoyar el cuidado de los cultivos. Mediante una aplicación web, buscamos promover la innovación y el aprendizaje sobre los invernaderos inteligentes.</p>
                </div>
                <div className="mb-4">
                    <h4 className="fw-bold mb-3" style={{ color: "#16A34A" }}>Objetivo</h4>
                    <p className="text-secondary">Facilitar el monitoreo de las condiciones del invernadero, como la temperatura y la humedad, para favorecer el crecimiento de las plantas y contribuir al uso eficiente de los recursos.</p>
                </div>
            </section>
        </div>
    );
}

export default SobreNosotros;
