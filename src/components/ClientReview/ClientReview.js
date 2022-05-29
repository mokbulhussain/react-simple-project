import React, {Component, Fragment} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import clientImg from '../../asset/images/client.png';

class ClientReview extends Component {
    render() {

        let settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container>
                    <div className="clientReview text-center">
                        <h2>Client Says</h2>
                    </div>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col xl={8}>
                                    <div className="slider-content">
                                        <img src={clientImg} alt="" />
                                        <h3>Web Developer</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col xl={8}>
                                    <div className="slider-content">
                                        <img src={clientImg} alt="" />
                                        <h3>Web Developer</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col xl={8}>
                                    <div className="slider-content">
                                        <img src={clientImg} alt="" />
                                        <h3>Web Developer</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col xl={8}>
                                    <div className="slider-content">
                                        <img src={clientImg} alt="" />
                                        <h3>Web Developer</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;