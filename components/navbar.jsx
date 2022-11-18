import Link from "next/link";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_title">
                <h2>Gapedev</h2>
            </div>
            <div className="navbar_menu">
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>Currículum</Link></li>
                    <li>Portfolio</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;