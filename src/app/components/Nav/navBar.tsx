import "Header.css";
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="conecpts" smooth={true} duration={500}>
                            Highlights
                        </Link>
                    </li>
                    <li>
                        <Link to="examples" smooth={true} duration={500}>
                            History
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;