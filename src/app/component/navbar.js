'use client'
import { faBars, faDiagramProject } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

function navbar() {
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }
    return (
        <nav className="navbar fixed-top bg-transparent text-white position-absolute d-flex align-items-center pt-0 nh">
            <div className="container-fluid">
                <div className="d-flex">
                    <span className="mt-2 me-2"><FontAwesomeIcon icon={faDiagramProject} size={"2xl"} style={{ color: "#00D094" }} /></span>
                    <a className="navbar-brand text-white fs-3 fw-bold" href="/">Daily Trade</a>
                </div>

                <span className="fs-3 dd-mobile" onClick={openNav}>&#9776;</span>
                {/* //desktop */}
                <div className=" d-flex flex-row d-flex flex-row justify-content-end dm-show" style={{ width: "80%" }}>
                    <ul className="w-50 d-flex flex-row justify-content-evenly">
                        <Link href="/">
                            <li>Home </li>
                        </Link>
                        <Link href="/g&l">
                            <li>Top G & L</li>
                        </Link>
                        <Link href="/news">
                            <li>Today News</li>
                        </Link>
                        <Link href="/calculator">
                            <li>SIP Calculator</li>
                        </Link>
                        <Link href="/contact">
                            <li>Contact Us</li>
                        </Link>
                    </ul>
                </div>
                {/* //mobile navbar */}
                <div id="myNav" className="overlay dd-none">
                    <span className="closebtn" onClick={closeNav}>&times;</span>
                    <div className="overlay-content">
                        <Link className="glass-card navbar-font" href="/">
                            <li>Home </li>
                        </Link>
                        <Link className="glass-card" href="/g&l">
                            <li>Top G & L</li>
                        </Link>
                        <Link className="glass-card" href="/news">
                            <li>Today News</li>
                        </Link>
                        <Link className="glass-card" href="/calculator">
                            <li>SIP Calculator</li>
                        </Link>
                        <Link className="glass-card" href="/contact">
                            <li>Contact Us</li>
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default navbar