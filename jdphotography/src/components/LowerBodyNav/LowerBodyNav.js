import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import image1 from '../../assets/image/Hoodies_Curated/Resized_PicsArt_11-03-12.08.43.jpg';
import image2 from '../../assets/image/Hoodies_Curated/Resized_PicsArt_11-03-12.19.40.jpg';
import image3 from '../../assets/image/Hoodies_Curated/Resized_PicsArt_11-03-12.30.04.jpg';
import image4 from '../../assets/image/Hoodies_Curated/Resized_PicsArt_11-03-12.41.15.jpg';
import image5 from '../../assets/image/Hoodies_Curated/Resized_20211104_123546.jpg';
import image6 from '../../assets/image/Hoodies_Curated/Resized_20211104_132819.jpg';
import image7 from '../../assets/image/Hoodies_Curated/Resized_20211104_133011.jpg';
import image8 from '../../assets/image/Hoodies_Curated/Resized_20210228_042920.jpg';
import './styles.css';

function LowerBodyNav() {
  return (
    <div>
      {/* <Container className="body-container">
        <Row className="body-row">
          <Col className="body-col"> */}
          {/* <Figure> */}

          <h2 style={{margin: '30% auto'}}>Hot Apparel</h2>

            <Figure>
              <Figure.Image className="body-figure box" src={image1} >
              </Figure.Image>
            </Figure>

            <Figure>
              <Figure.Image className="body-figure box" src={image2} >
              </Figure.Image>
            </Figure>

            <Figure>
              <Figure.Image className="body-figure box" src={image3} >
              </Figure.Image>
            </Figure>

            <Figure>
              <Figure.Image className="body-figure box" src={image4} >
              </Figure.Image>
            </Figure>

            <Figure>
              <Figure.Image className="body-figure box" src={image5} >
              </Figure.Image>
            </Figure>

            <Figure>
              <Figure.Image className="body-figure box" src={image6} >
              </Figure.Image>
            </Figure>

            <Figure>
              <Figure.Image className="body-figure box" src={image7} >
              </Figure.Image>
            </Figure>

            <Figure>
              <Figure.Image className="body-figure box" src={image8} >
              </Figure.Image>
            </Figure>

            {/* <Figure>
              <Figure.Image className="body-figure box" src={image1} >
              </Figure.Image>
            </Figure>

            <Figure>
              <Figure.Image className="body-figure box" src={image2} >
              </Figure.Image>
            </Figure>

            <Figure>
              <Figure.Image className="body-figure box" src={image3} >
              </Figure.Image>
            </Figure>

            <Figure>
              <Figure.Image className="body-figure box" src={image4} >
              </Figure.Image>
            </Figure> */}
            {/* </Figure> */}

          {/* </Col>
        </Row>
      </Container> */}
    </div>
  )
}

export default LowerBodyNav;