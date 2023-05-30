import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './MainComponent.css';

export default function MainComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <img 
                  className="d-block w-100"
                  src="holder"
                  alt="First slide"
                ></img>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}