import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
    return (
        <>
            <header className='header' id='header'>
                <div className="container header__container">
                    <nav className="header__nav">
                        <NavLink to='/' className="header__link">КАТАЛОГ</NavLink>
                        <NavLink to='/users' className="header__link">НАШИ КЛИЕНТЫ</NavLink>
                    </nav>
                </div>
            </header>
        </>
    )
}