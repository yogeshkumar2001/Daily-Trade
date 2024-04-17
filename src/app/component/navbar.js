'use client'
import { faBars, faDiagramProject } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

function navbar() {
    let isMobile = window.matchMedia("(max-width: 500px)").matches;
    return (
        <nav class="navbar fixed-top bg-transparent text-white position-absolute d-flex align-items-center pt-0" style={{ height: isMobile ? "10%" : "15%" }}>
            <div class="container-fluid">
                <div className="d-flex">
                    <span className="mt-2 me-2"><FontAwesomeIcon icon={faDiagramProject} size={"2xl"} style={{ color: "#00D094" }} /></span>
                    <a class="navbar-brand text-white fs-3 fw-bold" href="/">Daily Trade</a>
                </div>

                {isMobile ? <button class="navbar-toggler text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button> : <div className=" d-flex flex-row d-flex flex-row justify-content-end" style={{ width: "80%" }}>
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
                </div>}
                {/* 
          */}
                <div class="offcanvas offcanvas-end home_body_bg" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" class="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul className="w-100 d-flex flex-column justify-content-center p-0">
                            <Link className ="glass-card" href="/">
                                <li>Home </li>
                            </Link>
                            <Link className ="glass-card" href="/g&l">
                                <li>Top G & L</li>
                            </Link>
                            <Link className ="glass-card" href="/news">
                                <li>Today News</li>
                            </Link>
                            <Link className ="glass-card" href="/calculator">
                                <li>SIP Calculator</li>
                            </Link>
                            <Link className ="glass-card" href="/contact">
                                <li>Contact Us</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default navbar