import React from "react";
import Figure from 'react-bootstrap/Figure';
// import Button from 'react-bootstrap/Button';
import shirtImage from '../../assets/image/Shirts/Resized_PicsArt_09-22-10.33.53.jpg';
import hoodieImage from '../../assets/image/Hoodies_Curated/Resized_PicsArt_11-03-12.41.15.jpg'
import './styles.css';
import hatImage from '../../assets/image/Shirts/Resized_PicsArt_03-22-12.10.49(1).jpg';
import lilPeepsImage from '../../assets/image/Lil_Peeps/Resized_20211104_132854.jpg';
import { Link } from 'react-router-dom';



function ImageWithButtons() {

    return (
        <div>
         <h2 style={{ margin: '20% auto', display: 'block' }}>Shop The Collection</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px', justifyContent: 'center', margin: '20% auto' }}>

               

                <Figure>
                    <Link to="hoodies" className="image-button" style={{ backgroundColor: 'white', borderColor: "white" }}>
                        <Figure.Image
                            // href="/hoodies"
                            // width={200}
                            // height={200}
                            alt="300x300"
                            src={hoodieImage}
                            className="hoodie-button box"
                        />
                    </Link>
                    {/* <Button variant="primary">See Hoodies</Button> */}
                </Figure>




                <Figure>
                    <Link to="/hats" className="image-button" style={{ backgroundColor: 'white', borderColor: "red" }}>
                        <Figure.Image
                            // href=""
                            // width={400}
                            // height={400}
                            alt="171x180"
                            src={hatImage}
                            className="hat-button box"
                        />
                    </Link>
                    {/* <Button variant="primary">See Hats</Button> */}
                </Figure>



                <Figure>
                    <Link to="/shirts" style={{ backgroundColor: 'white', borderColor: "white" }}>
                        <Figure.Image
                            // width={400}
                            // height={400}
                            alt="171x180"
                            src={shirtImage}
                            className="shirt-button box"
                        />
                    </Link>
                    {/* <Button variant="primary">See Shirts</Button> */}
                </Figure>




                <Figure>
                    <Link to="/lilpeeps" style={{ backgroundColor: 'white', borderColor: "white" }}>
                        <Figure.Image
                            // width={400}
                            // height={400}
                            alt="171x180"
                            src={lilPeepsImage}
                            className="shirt-button box"
                        />
                    </Link>
                    {/* <Button variant="primary">See Shirts</Button> */}
                </Figure>

            </div>
        </div>
    )
}

export default ImageWithButtons;