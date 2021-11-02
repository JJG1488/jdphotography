import React from "react";
import './styles.css';
import Logo from '../Logo/Logo';
import MainSlideShow from "../MainSlideShow/MainSlideShow";
import Container from "react-bootstrap/Container";


function Body() {
    return (
        <div class="body">

        <Container fluid>

            <header className="header code">
                <Logo />
            </header>

            <div className="main code">
                Main: Carousel of Items
                <MainSlideShow />
            </div>

            <div className="section code">
                Shop Shirts Button
                CSS: On Hover, zoom in
            </div>

            <div className="section code">
                Shop Hoodies Button
                CSS: On Hover, zoom in
            </div>

            <div className="section code">
                Shop Hats Button
                CSS: On Hover, zoom in
            </div>

            <hr/>

            <div className="aside code">
                Extra Space To Show Products in Carousel
            </div>

            <div className="main code">
                Large Photo to show inner workings: Authenticity
                
                Some text (a paragraph) here about Good Peeps:
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>

                <button>Learn More</button>
            </div>

            <div className="section code">
                set up button that leads to a form where you can submit questions
                CSS: onHover expand Content/ words
            </div>

            <div className="section code">
                Subscribe to webpage for more content to reach out to returning customers
                CSS: onHover expand Content/ words
            </div>

            <div className="main code">
                Large Map to show location with logo and any other supporting websites to find work.
                Facebook, Instagram, Twitter
            </div>
            </Container>


        </div>
    )

}

export default Body;