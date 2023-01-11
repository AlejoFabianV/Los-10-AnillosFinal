import React from "react";
import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {


    return(
        <main className="holder-nosotros">
            <div>
                <h2>Un poco sobre nosotros y los 10 anillos</h2>
                <p className="textBienvenida">Bienvenido/a a nuestra pequeña tienda de comics y mangas "Los Diez Anillos", aqui podras encontrar tus lecturas favoritas al mejor precio y maxima calidad, nuestro objetivo es fomentar la lectura a traves de formatos mas dinamicos, y por supuesto sumergirnos en atrapantes historias de todo tipo. No encontras alguna lectura especifica? o no esta en stock? no dudes en comunicarte con nosotros. 
                </p>    
            </div>
                <h2>Staff</h2>
            <div className="staff">
                <div className="cartaNosotros">
                    <img className="imgNosotros" src="/img/nosotros/alejo-img.jpeg" />
                    <h3>Alejo</h3>
                    <p className="textNosotros">Creador y administrador de los diez anillos
                    Manga/Comic favorito: Venom-Carnage Absoluto.
                    Manga/Comic que recomienda: Blue Lock 01.
                    
                    </p>
                </div>
                <div className="cartaNosotros">
                    <img className="imgNosotros" src="/img/nosotros/santi-img.jpg" />
                    <h3>Santi</h3>
                    <p className="textNosotros">Co-creador y pricipal socio de los diez anillos. 
                    Manga/Comic favorito: Jujutsu kaisen 0.
                    Manga/Comic que recomienda: La muerte del Capitan America.
                    </p>
                </div>
            </div>
        </main>
    );
}
export default NosotrosPage;