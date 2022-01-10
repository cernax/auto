import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement, Title, BarElement, RadialLinearScale, Filler
} from 'chart.js';
import { Pie, Line, Bar, Radar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const data = {
    labels: ['Transmisión', 'Sistema de Inyeccion', 'Sistema de Refrigeración', 'Otros Sistemas', 'Seguridad', 'Encendido', 'Motor', 'Sistema Eléctrico'],
    datasets: [
        {
            label: '# of Votes',
            data: [8, 7, 4, 4, 3, 1, 34, 28],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 10, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const dataline = {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "2020",
        borderColor: "#3e95cd",
        fill: false
    }, {
        data: [282,350,411,502,1402,809,947,1402,3700,5267],
        label: "2021",
        borderColor: "#8e5ea2",
        fill: false
    }, {
        data: [168,170,178,190,203,276,408,547,675,408],
        label: "2022",
        borderColor: "#3cba9f",
        fill: false
    }
    ]
};

const databar = {
    labels: ["Delantero", "Trasero", "Central"],
    datasets: [
        {
            label: "Golpes",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
            data: [2478,5267,734]
        }
    ]
};

const dataradar = {
    labels: ["Velocidad", "Comodidad", "Seguridad", "Eficiencia", "Confiabilidad"],
    datasets: [
        {
            label: "Velocidad",
            fill: true,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179,181,198,1)",
            data: [8.77,55.61,45.69,6.62,35]
        }, {
            label: "Comodidad",
            fill: true,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            data: [50.80,54.45,7.61,8.06,40]
        }
        , {
            label: "Seguridad",
            fill: true,
            backgroundColor: "rgba(105,99,30,0.2)",
            borderColor: "rgba(105,99,30,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            data: [20.64,30.45,7.5,15.06,25]
        }, {
            label: "Eficiencia",
            fill: true,
            backgroundColor: "rgba(200,99,10,0.2)",
            borderColor: "rgba(200,99,10,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            data: [10.6,30.45,7.20,30.06,24]
        }, {
            label: "Confiabilidad",
            fill: true,
            backgroundColor: "rgba(10,99,3,0.2)",
            borderColor: "rgba(10,99,3,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            data: [40.2,32.45,40.61,28.06,40]
        }
    ]
};

class Auto extends Component {


    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {
            const elems = document.querySelectorAll('.sidenav');
            const instances = M.Sidenav.init(elems,{});
        });
    }

    render() {
        return (
            <>
                <br/>
                <div className={'container'}>
                    <div className="row">
                        <div className="col s6">
                            <Pie data={data} />
                        </div>
                        <div className="col s6">
                            <Line data={dataline}  />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <Bar data={databar}  />
                        </div>
                        <div className="col s6">
                            <Radar data={dataradar}  />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Auto;

