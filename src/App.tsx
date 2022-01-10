import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import {Footer, Icon, Navbar, NavItem} from "react-materialize";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home/home';
import Auto from "./Auto/auto";
import Obdii from './OBDII/obdii';
import Navegacion from "./Navegacion/Navegacion";
import User from "./Usuario/User";

class App extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {
            const elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems,{});
        });
    }

    render() {
        return (
            <>
                <Navbar
                    alignLinks="right"
                    brand={<a className="brand-logo">
                        <Link to="/">Smart Car</Link>
                    </a>}
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                >
                    <NavItem>
                        <Link to="/Obdii">OBDII</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/User">Perfil del Usuario</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/Auto">Perfil del Vehiculo</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/Navegacion">Navegación</Link>
                    </NavItem>
                </Navbar>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="Obdii" element={<Obdii />} />
                        <Route path="User" element={<User />} />
                        <Route path="Auto" element={<Auto />} />
                        <Route path="Navegacion" element={<Navegacion />} />
                    </Routes>
                </div>
            </>
        );
    }
}

export default App;

