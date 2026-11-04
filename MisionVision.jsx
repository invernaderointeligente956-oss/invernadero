import React from "react";

function MisionVision() {
    return (
        <div style={{ paddingTop: "100px", fontFamily: "'Open Sans', sans-serif", color: "#374151", backgroundColor: "#FFFFFF", minHeight: "70vh" }}>
            <section className="text-center py-5">
                <div className="container">
                    <h1 className="fw-bold" style={{ color: "#14532D", fontFamily: "'Playfair Display', serif" }}>Misión y Visión</h1>
                    <p className="mt-3 mb-0" style={{ color: "#16A34A" }}>Invernadero Inteligente CECyTEM Jocotitlán</p>
                </div>
            </section>
            <section className="container py-4">
                <div className="mb-5">
                    <h4 className="fw-bold mb-3" style={{ color: "#14532D" }}>Nuestra Misión</h4>
                    <p className="text-secondary">Desarrollar y promover el uso de la tecnología en el cuidado de los cultivos mediante un invernadero inteligente que facilite el monitoreo de la temperatura y la humedad, fomente el aprendizaje de los estudiantes y contribuya al uso responsable del agua y otros recursos.</p>
                </div>
                <div className="mb-4">
                    <h4 className="fw-bold mb-3" style={{ color: "#16A34A" }}>Nuestra Visión</h4>
                    <p className="text-secondary">Ser un proyecto educativo innovador que impulse el aprendizaje tecnológico y la agricultura sustentable, utilizando herramientas digitales para mejorar el cuidado de las plantas y promover prácticas responsables con el medio ambiente en el CECyTEM Plantel Jocotitlán.</p>
                </div>
            </section>
        </div>
    );
}

export default MisionVision;
