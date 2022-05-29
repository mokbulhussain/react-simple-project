import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourse from "../components/AllCourse/AllCourse";
import Footer from "../components/Footer/Footer";

class AllCoursePage extends Component {
    render() {
        return (
            <div>
                <TopNavigation/>
                <PageTop pageTitle="Course"/>
                <AllCourse/>
                <Footer/>
            </div>
        );
    }
}

export default AllCoursePage;