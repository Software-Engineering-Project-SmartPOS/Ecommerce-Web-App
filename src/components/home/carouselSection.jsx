import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import "./carouselSection.css";

import Slide from "./slide";

export default class CarouselSection extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: false,
    config: config.gentle,
  };
  slides = this.props.data
    .map((item) => ({
      key: item.id,
      content: (
        <Slide
          id={item.id}
          thumb={item.thumb}
          product_name={item.product_name}
        />
      ),
    }))
    .map((slide, index) => {
      return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });

  render() {
    return (
      <section className="carousel-section">
        <h2 className="carousel-title">{this.props.title}</h2>
        <div
          style={{ width: "80%", height: "500px", margin: "20px auto" }}
          className="carousel-container"
        >
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          />
        </div>
      </section>
    );
  }
}
