import React from "react";
import '../styles/components/pages/TiendaPage.css'
import { useState, useEffect } from "react";
import axios from "axios";
import NovedadesItem from "../components/novedades/NovedadItem";

const TiendaPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <main className="holder-tienda">
            <section>
                <h2>Comics y Mangas</h2>
                {   
                    loading ? (
                        <p>Cargando...</p>
                    ) : (
                        novedades.map(item => 
                        <NovedadesItem 
                            id={item.id} 
                            title={item.titulo} 
                            subtitle={item.subtitulo} 
                            portada={item.portada} 
                            precio={item.precio} 
                            key={item.descripcion}
                        />)
                    )
                }
            </section>
        </main>
    );
}
export default TiendaPage;