import React, {Component, Fragment} from 'react';
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import AllCoursePage from "../pages/AllCoursePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutUsPage from "../pages/AboutUsPage";
import { Routes, Route, Link } from "react-router-dom";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/service" element={<ServicePage/>} />
                    <Route path="/course" element={<AllCoursePage/>} />
                    <Route path="/portfolio" element={<PortfolioPage/>} />
                    <Route path="/contact" element={<ContactPage/>} />
                    <Route path="/about" element={<AboutUsPage/>} />

                </Routes>
            </Fragment>
        );
    }
}

export default AppRoute;