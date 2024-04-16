
'use client'

function footer() {
    let isMobile = window.matchMedia("(max-width: 500px)").matches;
    return (
        <div>

            <footer class="footer">
                <div class="container">
                    <div class="footer__columns">
                        <div class="footer__col">
                            <h3 class="footer__col-title">
                                <i data-feather="shopping-bag"></i> <span>PRIVACY & TOS</span></h3>
                            <nav class="footer__nav">
                                <ul class="footer__nav-list">
                                    <li class="footer__nav-item">
                                        <span href="" class="footer__nav-link">
                                            Technology Privacy
                                        </span>
                                    </li>
                                    <li class="footer__nav-item">
                                        <span href="" class="footer__nav-link">
                                            Privacy Policy
                                        </span>
                                    </li>
                                    <li class="footer__nav-item">
                                        <span href="" class="footer__nav-link">
                                            Acceptable Use Policy
                                        </span>
                                    </li>
                                    <li class="footer__nav-item">
                                        <span href="" class="footer__nav-link">
                                            PRIVACY & TOS
                                        </span>
                                    </li>
                                    <li class="footer__nav-item">
                                        <span href="" class="footer__nav-link">
                                            Advertiser Agreement
                                        </span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="footer__col">
                            <h3 class="footer__col-title">
                                <i data-feather="share-2"></i> <span>Quick links</span></h3>
                            <nav class="footer__nav">
                                <ul class="footer__nav-list">
                                    <li class="footer__nav-item">
                                        <span href="" class="footer__nav-link">
                                            <i data-feather="youtube"></i><span>Youtube</span>
                                        </span>
                                    </li>
                                    <li class="footer__nav-item">
                                        <span href="" class="footer__nav-link">
                                            <i data-feather="facebook"></i><span>Facebook</span>

                                        </span>
                                    </li>
                                    <li class="footer__nav-item">
                                        <span href="" class="footer__nav-link">
                                            <i data-feather="instagram"></i><span>Instagram</span>

                                        </span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="footer__col">
                            <h3 class="footer__col-title">
                                <i data-feather="send"></i> <span>Contact</span></h3>
                            <nav class="footer__nav">
                                <ul class="footer__nav-list">
                                    <li class="footer__nav-item">
                                        <span href="mailto:contact.laboiserie@gmail.com" class="footer__nav-link">
                                            yogesh.kumar2001@gmail.com
                                        </span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer></div>
    )
}

export default footer