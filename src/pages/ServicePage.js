import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="Service" />
                <Services/>
                <Contact/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;