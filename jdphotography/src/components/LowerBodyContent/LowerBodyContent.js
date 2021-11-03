import React from "react";
import './styles.css';
import bodyContentPhoto from '../../assets/image/modern-business-buildings-11681736.jpeg';
// import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

function LowerBodyContent() {
    return (
        <div>
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={bodyContentPhoto}
                    className="body-content-img"
                    fluid
                />
                <Figure.Caption>
                    <p className="body-paragraph">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                </Figure.Caption>
            </Figure>
            {/* <Image className="body-content-img" src={bodyContentPhoto} thumbnail /> */}

            <Button variant="primary" >
                Learn More
            </Button>

            {/* <button className="learn-more-btn" >Learn More</button> */}
        </div>
    )
}

export default LowerBodyContent;