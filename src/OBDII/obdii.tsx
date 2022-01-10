import React, {Component, useState} from "react";
import {Icon, Switch, Table} from "react-materialize";

const Contador = () => {
    const [estcheckval, setestcheckval] = useState(true);
    const [estcheck, setestcheck] = useState("Prendido");

    return (
        <>
            <a href="">
                {estcheck}
                <Switch
                    id="Switch-21"
                    offLabel="Off"
                    onChange={(e) => {
                        if(estcheckval)
                        {
                            setestcheckval(false);
                            setestcheck("No Prendido");
                        }
                        else
                        {
                            setestcheckval(true);
                            setestcheck("Prendido");
                        }
                    }}
                    onLabel="On"
                    checked={estcheckval}
                />
            </a>
        </>
    )
}

class Obdii extends Component {

    render() {
        return (
            <>
                <div className={"container"}>
                    <Table className={"highlight striped"}>
                        <thead style={{borderBottom:"10px"}}>
                        <tr >
                            <th data-field="id" colSpan={2}>
                                <a><Icon>bluetooth_connected</Icon>Bluetooth del dispositivo</a>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                Estado
                            </td>
                            <td>
                                { <Contador /> }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Simulador OBDII
                            </td>
                            <td>
                                Automovil
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    {
                        true ?
                                <>
                                    <Table className={"highlight striped"}>
                                        <thead style={{borderBottom:"10px"}}>
                                        <tr >
                                            <th data-field="id" colSpan={2}>
                                                <a><Icon>drive_eta</Icon>Dispositivo ODBII</a>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                SBH50
                                            </td>
                                            <td>
                                                B4:52:7D:F8:FE:BA
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                GT-19100
                                            </td>
                                            <td>
                                                22:18:60:BF:7A:B2
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ODBII
                                            </td>
                                            <td>
                                                00:00:18:3A:67:89
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </>

                        :<></>
                    }
                </div>
            </>
        );
    }
}

export default Obdii;
