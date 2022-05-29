import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topPageBanner p-0">
                    <div className="topPageOverlay d-flex align-items-center">
                        <Container>
                            <Row>
                                <Col xl={12}>
                                    <div className="topPageContent text-center">
                                        <h2 className="topTitle">{this.props.pageTitle}</h2>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;