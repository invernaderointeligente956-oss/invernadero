
import React, { useState } from "react";

function Contacto() {
    const [formulario, setFormulario] = useState({
        nombre: "",
        correo: "",
        asunto: "",
        mensaje: ""
    });
    const [enviado, setEnviado] = useState(false);

    const manejarCambio = (e) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
        setEnviado(false);
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        setEnviado(true);
        setFormulario({ nombre: "", correo: "", asunto: "", mensaje: "" });
    };

    const estiloCampo = {
        border: "1px solid #C4B5FD",
        borderRadius: "8px",
        padding: "12px",
        width: "100%",
        outlineColor: "#16A34A"
    };

    return (
        <div style={{ paddingTop: "100px", fontFamily: "'Open Sans', sans-serif", color: "#374151", backgroundColor: "#FFFFFF", minHeight: "70vh" }}>
            <section className="text-center py-4">
                <div className="container">
                    <h1 className="fw-bold" style={{ color: "#14532D", fontFamily: "'Playfair Display', serif" }}>Contáctanos</h1>
                    <p className="mt-3 text-secondary">¿Tienes alguna duda o comentario? Escríbenos.</p>
                </div>
            </section>

            <section className="container pb-5">
                <div className="mx-auto p-4 p-md-5 rounded-4" style={{ maxWidth: "700px", backgroundColor: "#FFFFFF", border: "1px solid #C4B5FD", borderTop: "5px solid #16A34A", boxShadow: "0 4px 15px rgba(20,83,45,0.10)" }}>
                    <h4 className="fw-bold mb-4" style={{ color: "#14532D" }}>Envíanos un mensaje</h4>

                    <form onSubmit={manejarEnvio}>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Nombre completo</label>
                            <input type="text" name="nombre" value={formulario.nombre} onChange={manejarCambio} placeholder="Escribe tu nombre" style={estiloCampo} required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Correo electrónico</label>
                            <input type="email" name="correo" value={formulario.correo} onChange={manejarCambio} placeholder="ejemplo@correo.com" style={estiloCampo} required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Asunto</label>
                            <input type="text" name="asunto" value={formulario.asunto} onChange={manejarCambio} placeholder="¿Sobre qué deseas contactarnos?" style={estiloCampo} required />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-semibold">Mensaje</label>
                            <textarea name="mensaje" value={formulario.mensaje} onChange={manejarCambio} placeholder="Escribe tu mensaje aquí..." rows="5" style={{ ...estiloCampo, resize: "vertical" }} required />
                        </div>

                        <button type="submit" className="btn w-100 text-white fw-bold py-3" style={{ backgroundColor: "#14532D", borderRadius: "8px" }}>
                            Enviar mensaje
                        </button>

                        {enviado && <p className="mt-3 mb-0 text-center fw-semibold" style={{ color: "#16A34A" }}>¡Gracias! El formulario se completó correctamente.</p>}
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contacto;
