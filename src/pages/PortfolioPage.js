import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";

class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="Portfolio" />
                <Portfolio/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;