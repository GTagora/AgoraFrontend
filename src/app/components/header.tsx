import Link from 'next/link'
import './page.module.css'

export default function Header() {
    return (
    <div className="navbar">
        <div className="navbar-start">LOGO</div>
        <div className="navbar-end">
            <div className="navbar-button">
                <Link href="/about">ABOUT</Link>
            </div>
            <div className="navbar-button">
                <Link href="/archive">ARCHIVE</Link>
            </div>
            <div className="navbar-button">
                <Link href="/contact">CONTACT</Link>
            </div>
        </div>
    </div>
)}