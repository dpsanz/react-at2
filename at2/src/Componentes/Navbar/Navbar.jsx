import {Link, useLocation} from 'react-router-dom'

function Navbar() {

    const location = useLocation();

    return ( 
        <nav>
            <ul className='text-lg flex gap-3 ml-3 text-white'>
                <li className={`${location.pathname === '/' ? 'text-rose-500 hover:tracking-widest transition-all' : 'hover:tracking-widest transition-all'}`}>
                    <Link to = "/">HOME</Link>
                </li>

                <li className={`${location.pathname === '/filmes' ? 'text-rose-500 hover:tracking-widest transition-all' : 'hover:tracking-widest transition-all'}`}>
                    <Link to = "filmes">MOVIES</Link></li>

                <li className={`${location.pathname === '/news' ? 'text-rose-500 hover:tracking-widest transition-all' : 'hover:tracking-widest transition-all'}`}>
                    <Link to = "news">NEWS</Link></li>

                <li className={`${location.pathname === '/contato' ? 'text-rose-500 hover:tracking-widest transition-all' : 'hover:tracking-widest transition-all'}`}>
                <Link to = "contato">CONTATO</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;