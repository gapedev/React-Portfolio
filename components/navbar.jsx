import Link from "next/link";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_title">
                <h2><Link href='/'>Gapedev</Link></h2>
            </div>
            <div className="navbar_menu">
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>Currículum</Link></li>
                    <li><Link href='/portfolio'>Portfolio</Link></li>
                    <li><Link href='/proyectos'>Proyectos</Link></li>
                    <li><Link href='/contacto'>Contacto</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;