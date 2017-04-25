'use strict';

let util = require('util');


class Shape {
<<<<<<< HEAD
 /**
 * @construct Shape
 * @param {hash} options Alto y Ancho
 * @param {string} shape Figura
 */
 
  constructor(options, shape){
=======

  constructor(options, shape) {
>>>>>>> 4c576c488f93c76418988d98f0f7993f27885a9a
    Object.assign(this, options);
    this.shape =  shape || this.constructor.name;
  }
 /**
 * @function getArea
 * @return {number} Area de la figura
 */
  getArea() {
   try {
      let shape = this;
      if (this.constructor.name === 'Shape')
        shape = new Shape.Shapes[this.shape](this);
      return shape.area();
   }
   catch(e) {
     console.error(`Can't compute area of '${this.shape}' shape.`);
     return null;
   }
  }

}

Shape.Shapes = Shape.Shapes || {};

module.exports = Shape;
