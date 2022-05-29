import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AboutDescription from "../components/AboutDescription/AboutDescription";

class AboutUsPage extends Component {
    render() {
        return (
            <div>
               <TopNavigation/>
               <PageTop pageTitle="About Me"/>
               <AboutDescription/>
            </div>
        );
    }
}

export default AboutUsPage;