import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="footer">
                    <Container>
                        <Row>
                            <Col xl={3}>
                                <div className="footer-part">
                                    <h3>Follow Me</h3>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                                                <span>Facebook</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                                                <span>Youtube</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xl={3}>
                                <div className="footer-part">
                                    <h3>Address</h3>
                                    <p>Subid Bazar,sylhet</p>
                                </div>
                            </Col>
                            <Col xl={3}>
                                <div className="footer-part">
                                    <h3>Information</h3>
                                    <ul>
                                        <li><a href="#">About Me</a> </li>
                                        <li><a href="#">My Course</a> </li>
                                        <li><a href="#">contact Me</a> </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xl={3}>
                                <div className="footer-part">
                                    <h3>Information</h3>
                                    <ul>
                                        <li><a href="#">About Me</a> </li>
                                        <li><a href="#">My Course</a> </li>
                                        <li><a href="#">contact Me</a> </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xl={12}>
                                <div className="copyright">
                                    <h4>mokbul.com@2021-2022</h4>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default Footer;