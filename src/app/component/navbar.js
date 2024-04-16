'use client'
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

function navbar() {
    let isMobile = window.matchMedia("(max-width: 500px)").matches;
    // let isMobile = window.matchMedia("(max-width: 500px)").matches;
    console.log(isMobile)
    return (
        <nav class="navbar fixed-top bg-transparent text-white position-absolute d-flex align-items-center" style={{ height: "15%" }}>
            <div class="container-fluid">
                <div className="d-flex">
                    <span className="mt-2 me-2"><FontAwesomeIcon icon={faDiagramProject} size={"2xl"} style={{ color: "#00D094" }} /></span>
                    <a class="navbar-brand text-white fs-3 fw-bold" href="/">Daily Trade</a>
                </div>

                {isMobile ? <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
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
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default navbar