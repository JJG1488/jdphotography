import React, { Component } from 'react';
import NavTabs from './NavTabs/NavTabs';
import Home from './pages/RenderHome/RenderHome';
import About from './pages/RenderAbout/RenderAbout';
import Contact from './pages/RenderContact/RenderContact';
import Hoodies from './pages/Hoodies/Hoodies'


class GoodPeepsContainer extends Component {

    state = {
        currentPage: "Home"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home />;
        } else if (this.state.currentPage === "About") {
            return <About />;
        } else if (this.state.currentPage === "Hoodies") {
            return <Hoodies />;
        } else {
            return <Contact />;
        }
    };

    render() {
        return (
            <div>
                <NavTabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />

                <div>
                    {this.renderPage()}
                </div>

            </div>
        );
    }

}
export default GoodPeepsContainer;