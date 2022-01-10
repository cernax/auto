import React, {Component} from "react";
import M from "materialize-css";
import {Card, CardTitle, Col, Icon, Navbar, NavItem, Row, Table} from "react-materialize";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/css/materialize.css'
import './User.css';

class User extends Component {

    render() {
        const tablainfo = <>
            <div className={"container"}>
                <Table className={"highlight striped"}>
                <thead style={{borderBottom:"10px"}}>
                <tr >
                    <th data-field="id" colSpan={2}>
                        Información vehicular
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        Patente
                    </td>
                    <td>
                        WB1479-4
                    </td>
                </tr>
                <tr>
                    <td>
                        Tipo
                    </td>
                    <td>
                        Automovil
                    </td>
                </tr>
                <tr>
                    <td>
                        Marca
                    </td>
                    <td>
                        Chevrolet
                    </td>
                </tr>
                <tr>
                    <td>
                        Modelo
                    </td>
                    <td>
                        Corsa Extra Pwr 16
                    </td>
                </tr>
                <tr>
                    <td>
                        Año
                    </td>
                    <td>
                        2006
                    </td>
                </tr>

                <tr>
                    <td>
                        Color
                    </td>
                    <td>
                        Gris
                    </td>
                </tr>
                </tbody>
            </Table>
            </div>
        </>
        return (
            <>
                <div className={"container"} >
                    <Row>
                        <Col s={3} />
                        <Col m={6} s={12} >
                            <Card
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image="https://cdn.dribbble.com/users/364897/screenshots/2912898/media/9e994e7ee9f864f9a65d171324307093.gif" reveal waves="light"/>}
                                reveal={tablainfo}
                                revealIcon={<Icon>more_vert</Icon>}
                                title="Andres Corro"
                            >
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default User;
