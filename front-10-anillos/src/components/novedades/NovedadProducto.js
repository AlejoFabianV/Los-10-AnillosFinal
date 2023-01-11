import React from 'react';

function NovedadProducto (props) {

    return (
            <div className='cartaProducto'>
                <img className='portadaProducto' src={props.portada} />
                <div className='contenido'>
                    <h3 className='tituloProudcto'>{props.title}</h3>
                    <h3 className='subtituloProducto'>{props.subtitle}</h3>
                    <div className='descripcionProducto' dangerouslySetInnerHTML={{ __html: props.body }} />
                    <br />
                    <hr />
                    <h4 className='precioProducto'>${props.precio}</h4>
                    <hr />
                    <h3 className='stockProducto' >{props.stock}</h3>
                </div>
            </div>
    );
}

export default NovedadProducto;