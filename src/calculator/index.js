import React, {useEffect, useState} from "react";
import {Col, Form, Row} from 'react-bootstrap'

function Calculator() {
    const [inversionFb, setInversionFb] = useState(0);
    const [clics, setClics] = useState(0);
    const [prospectos, setProspectos] = useState(0);
    const [ventasSenuelo, setVentasSenuelo] = useState(0);
    const [ventasVip, setVentasVip] = useState(0);
    const [precioSenuelo, setPrecioSenuelo] = useState(0);
    const [precioVip, setPrecioVip] = useState(0);
    const [cpc, setCpc] = useState(0);
    const [conversionCaptura, setConversionCaptura] = useState(0);
    const [conversionSenuelo, setConversionSenuelo] = useState(0);
    const [conversionVip, setConversionVip] = useState(0);
    const [ingresoInicial, setIngresoInicial] = useState(0);
    const [roiCampana, setRoiCampana] = useState(0);
    useEffect(() => {
        let cpc = inversionFb / clics;
        let conversionCaptura = prospectos / clics;
        let conversionSenuelo = ventasSenuelo / prospectos;
        let conversionVip = ventasVip / prospectos;
        let ingresoInicial = (ventasSenuelo * precioSenuelo) + (ventasVip * precioVip)
        let roiCampana = (ingresoInicial - inversionFb) / inversionFb
        if (!isNaN(roiCampana)) {
            setCpc(cpc)
            setConversionCaptura(conversionCaptura)
            setConversionSenuelo(conversionSenuelo)
            setConversionVip(conversionVip)
            setIngresoInicial(ingresoInicial)
            setRoiCampana(roiCampana)
        }

    }, [inversionFb, clics, prospectos, ventasSenuelo, ventasVip, precioSenuelo, precioVip]);


    return (
        <div>
            <Row>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Inversión FB</Form.Label>
                            <Form.Control value={inversionFb}
                                          onChange={e => setInversionFb(isNaN(parseInt(e.target.value)) ? "" : parseInt(e.target.value))}
                                          type='number'/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Clics</Form.Label>
                            <Form.Control value={clics}
                                          onChange={e => setClics(isNaN(parseInt(e.target.value)) ? "" : parseInt(e.target.value))}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Prospectos</Form.Label>
                            <Form.Control value={prospectos}
                                          onChange={e => setProspectos(isNaN(parseInt(e.target.value)) ? "" : parseInt(e.target.value))}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Ventas Señuelo</Form.Label>
                            <Form.Control value={ventasSenuelo}
                                          onChange={e => setVentasSenuelo(isNaN(parseInt(e.target.value)) ? "" : parseInt(e.target.value))}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Ventas VIP</Form.Label>
                            <Form.Control value={ventasVip}
                                          onChange={e => setVentasVip(isNaN(parseInt(e.target.value)) ? "" : parseInt(e.target.value))}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Precio Señuelo</Form.Label>
                            <Form.Control value={precioSenuelo}
                                          onChange={e => setPrecioSenuelo(isNaN(parseInt(e.target.value)) ? "" : parseInt(e.target.value))}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Precio VIP</Form.Label>
                            <Form.Control value={precioVip}
                                          onChange={e => setPrecioVip(isNaN(parseInt(e.target.value)) ? "" : parseInt(e.target.value))}/>
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>CPC</Form.Label>
                            <Form.Control value={cpc}
                                          type='number'/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Conversión Pag Captura</Form.Label>
                            <Form.Control value={conversionCaptura}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Conversión Señuelo</Form.Label>
                            <Form.Control value={conversionSenuelo}
                                          type='number'/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Conversión VIP</Form.Label>
                            <Form.Control value={conversionVip}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Ingreso Inicial</Form.Label>
                            <Form.Control value={ingresoInicial}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>ROI CAMPAÑA</Form.Label>
                            <Form.Control value={roiCampana}/>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Calculator;