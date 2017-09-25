'use strict';

require('react');
require('react-bootstrap');

var carouselInstance = React.createElement(
  ReactBootstrap.Carousel,
  null,
  React.createElement(
    ReactBootstrap.CarouselItem,
    null,
    React.createElement('img', { width: 900, height: 300, alt: '400x300', src: 'assets/JoshFace.jpg' })
  ),
  React.createElement(
    ReactBootstrap.CarouselItem,
    null,
    React.createElement('img', { width: 400, height: 300, alt: '400x300', src: 'assets/JoshFace2.jpg' })
  ),
  React.createElement(
    ReactBootstrap.CarouselItem,
    null,
    React.createElement('img', { width: 400, height: 300, alt: '400x300', src: 'assets/JoshFace3.jpg' })
  )
);

// React.render(carouselInstance, document.getElementById('carousel'));