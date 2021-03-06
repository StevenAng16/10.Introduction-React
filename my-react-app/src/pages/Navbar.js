//import React from 'react';
import { Outlet, Link } from "react-router-dom";
import {Nav} from 'react-bootstrap'
import "./Navbar.css";


/*
function Layout () {
    return (
        <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        </Nav>
    );
}
*/
/*
        <ul className="confirm">
            <div style={{margin:"10px", float:"left"}}>
            <Link to="/">Home</Link>
            </div>
            <div style={{margin:"10px", float:"left"}}>
            <Link to="/blogs">Blogs</Link>
            </div>
            <div style={{margin:"10px", float:"left"}}>
            <Link to="/contact">Contact</Link>
            </div>
        </ul>
*/ 

function Layout () {
    return (
    <>
        <Nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <ul class="confirm navbar-nav me-auto mb-2 mb-lg-0">
            <div>
            <Link class="nav-link px-2 text-dark" to="/">Home</Link>
            </div>
            <div>
            <Link class="nav-link px-2 text-dark" to="/contact">Contact</Link>
            </div>
            </ul>
          </div>             
        </Nav>
        <Outlet />
      <div class="container, contact">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"/>
        <div class="pt-3">
            <h1>Contact Us</h1>
        </div>
        <footer>
        <div class="container">
            <div class="row pt-5 pb-5">
                <div class="pl-5 col-lg-5 col-md-4 col-sm-12 col-12 text-lg-left text-md-left text-sm-center">
                    <a href="index.html"><img class="logo-bawah" alt="logo" src="asset/img/logo-ALTA-v2.png"/></a>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-12 text-lr-left text-md-center text-sm-center">
                                <h6>Social Media:</h6>
                            <div class="col-3 text-center">
                                <a href="https://www.facebook.com/AlterraAcademy"><img class="logo-sosmed" alt="logo" src="../../img/ic_fb@2x.png"/></a>
                            </div>
                            <div class="col-3 text-center">
                                <a href="https://twitter.com/"><img class="logo-sosmed" alt="logo" src="../../img/ic-twitter@2x.png"/></a>
                            </div>
                            <div class="col-3 text-center">
                                <a href="https://www.instagram.com/alterra.academy/"><img class="logo-sosmed" alt="logo" src="../../img/ic-instagram@2x.png"/></a>
                            </div>
                            <div class="col-3 text-center">
                                <a href="https://id.linkedin.com/"><img class="logo-sosmed" alt="logo" src="../../img/ic-linkedin@2x.png"/></a>
                             </div>
                </div>
                <div class="col-lg-4 col-md-5 col-sm-12 col-12 pt-3">
                    <h6 class="text-lg-right text-md-center text-sm-center kopi">Copyleft ?? 2019 - Unjelas Team</h6>
                </div>
            </div>
        </div>
    </footer>
    </div>
    </>
    );
}


/*
const Layout = () => {
  return (
    <>
        <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"/>
        <nav class="navbar navbar-expand-sm bg-success navbar-light">
            
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
          <div>
                <ul class="navbar-nav, layout">
                    <li class="nav-item">        
                        <Link class="nav-link active" href="" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" href="" to="/contact">Contact Us</Link>
                    </li>
                </ul>
          </div>
        </div>
    </nav>
    </div>
      <Outlet />
      <div class="container, contact">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"/>
        <div class="pt-3">
            <h1>Contact Us</h1>
        </div>
        <footer>
        <div class="container">
            <div class="row pt-5 pb-5">
                <div class="pl-5 col-lg-5 col-md-4 col-sm-12 col-12 text-lg-left text-md-left text-sm-center">
                    <a href="index.html"><img class="logo-bawah" alt="logo" src="asset/img/logo-ALTA-v2.png"/></a>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-12 text-lr-left text-md-center text-sm-center">
                                <h6>Social Media:</h6>
                            <div class="col-3 text-center">
                                <a href="https://www.facebook.com/AlterraAcademy"><img class="logo-sosmed" alt="logo" src="../../img/ic_fb@2x.png"/></a>
                            </div>
                            <div class="col-3 text-center">
                                <a href="https://twitter.com/"><img class="logo-sosmed" alt="logo" src="../../img/ic-twitter@2x.png"/></a>
                            </div>
                            <div class="col-3 text-center">
                                <a href="https://www.instagram.com/alterra.academy/"><img class="logo-sosmed" alt="logo" src="../../img/ic-instagram@2x.png"/></a>
                            </div>
                            <div class="col-3 text-center">
                                <a href="https://id.linkedin.com/"><img class="logo-sosmed" alt="logo" src="../../img/ic-linkedin@2x.png"/></a>
                             </div>
                </div>
                <div class="col-lg-4 col-md-5 col-sm-12 col-12 pt-3">
                    <h6 class="text-lg-right text-md-center text-sm-center kopi">Copyleft ?? 2019 - Unjelas Team</h6>
                </div>
            </div>
        </div>
    </footer>
    </div>
    </>
  )
};
*/
export default Layout;