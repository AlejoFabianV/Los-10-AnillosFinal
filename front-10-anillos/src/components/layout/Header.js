import React from 'react';
import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return(
        <header>
            <div className='holder'>
                <h1>Los diez anillos</h1>
                <img src='img/logo-anillos.jpg' alt='logo de los anillos' />
            </div>
        </header>
    );
}
export default Header;