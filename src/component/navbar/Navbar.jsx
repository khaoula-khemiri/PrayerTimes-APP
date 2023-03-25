import React from 'react';
import './navbar.scss';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-transparent ">
            <div class="container-fluid">
                {/* <a class="navbar-brand fw-bold " >Muslim.App</a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse  " id="navbarSupportedContent">
                    <div className="linkContainer">
                        <ul>
                            <li><a href='#intro'>Home</a></li>
                            <li><a href='#prayer'>Prayer time</a></li>
                            <li><a href='#hadith'>Hadith</a></li>
                            <li><a href='#aboutus'>about us</a> </li>
                            <li><button>Donate</button></li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
