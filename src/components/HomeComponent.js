import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-1">
                    <p>Welcome to Little Elephant Pottery Studio! Here we love what we do, 
                        and we love to share what we do! We are a community of potters with a range 
                        of expertises and handmade goods to show you. Whether you are looking for the
                        perfect present, or looking to let your creative side run free by taking one
                        of our workshops, you will be glad you came to see us.</p>
                </div>
                <div className="col-md m-1">
                    <p>Carousel goes here</p>

                </div>
                <div className="col-md m-1"></div>
            </div>
        </div>
    )
}

export default Home;