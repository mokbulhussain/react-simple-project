import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../asset/images/logo.png';
import logoScroll from '../../asset/images/logoScroll.png';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
import { Routes, Route, Link } from "react-router-dom";



class TopNavigation extends Component {
    constructor() {
        super();
        this.state={
            navTitle:"navTitle",
            navLogo:[logo],
            navBackground:'navBackground',
            navItem:'navItem'
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navTitle:'navTitleScroll',navLogo:[logoScroll],navBackground:'navBackgroundScroll',navItem:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navTitle:'navTitle',navLogo:[logo],navBackground:'navBackground',navItem:'navItem'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll);
    }


    render() {
        return (
            <Fragment>
                <Navbar fixed="top" collapseOnSelect expand="lg" className={this.state.navBackground} variant="dark">
                    <Container>
                        <Navbar.Brand className={this.state.navTitle} href="#home"> <img src={this.state.navLogo} /> Mokbul</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <Link  className={this.state.navItem} to="/">HOME</Link>
                                <Link className={this.state.navItem} to="/service">SERVICE</Link>
                                <Link className={this.state.navItem} to="/course">COURSE</Link>
                                <Link className={this.state.navItem} to="/portfolio">PORTFOLIO</Link>
                                <Link className={this.state.navItem} to="/contact">CONTACT</Link>
                                <Link className={this.state.navItem} to="/about">ABOUT</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;