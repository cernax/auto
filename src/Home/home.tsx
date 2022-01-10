import React, {Component} from "react";
import './home.css';
import M from "materialize-css";
import {Icon, Navbar, NavItem} from "react-materialize";
import {Bar, Line, Pie, Radar} from "react-chartjs-2";

class Home extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {
            var aud=document.createElement('audio');
            aud.setAttribute('src','sound.mp4');
            aud.loop=true;
            aud.play();
        });
    }
    render() {
        return (
            <>
                <div className="sky">
                    <div className="tree"/>
                    <div className="track"/>
                    <div className="car"/>
                    <div className=" wheel wheel1"/>
                    <div className="wheel wheel2"/>
                </div>
            </>
        );
    }
}

export default Home;
