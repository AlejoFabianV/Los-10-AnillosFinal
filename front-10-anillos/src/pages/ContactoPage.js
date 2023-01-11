import React from "react";
import '../styles/components/pages/ContactoPage.css'
import { useState } from "react";
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post(`http://localhost:3000/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }

    return(
        <main className="holder">
            <div className="formulario-contacto">
                <h2>Contactanos y pregunta por tus comics/mangas favoritos</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} />
                    </p>
                    <p>
                        <input type="submit" />
                    </p>
                        {sending ? <p className="EnvioFormulario">Enviando, espere por favor</p> : null }
                        {msg ? <p className="EnvioFormulario">{msg}</p> : null }
                </form>
                <div className="contactoAlternativo">
                    <h3>Tambien podes contactarnos a traves de:</h3>
                    <ul className="mediosDeContacto">
                        <li>Whatshapp: 12345678 <i className="fa-brands fa-whatsapp"></i></li>
                        <li>Facbook: Los Diez Anillos <i className="fa-brands fa-facebook"></i></li>
                        <li>Instagram: @Los10Anillos <i className="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
export default ContactoPage;