import React from 'react';
import { Link } from 'react-router-dom'

function NovedadesItem (props) {       

    return (
            <div className='carta'>
                <Link to={`/producto/${props.title}/${props.subtitle}/${props.id}`}>
                  <img className='portada' src={props.portada} />
                </Link>
                <h3>{props.title}</h3>
                <h3>{props.subtitle}</h3>
                <h4>${props.precio}</h4>
                <div className='descripcion' dangerouslySetInnerHTML={{ __html: props.body }} />
            </div>
    );
}

export default NovedadesItem;