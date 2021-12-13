import bottle from './assets/bottle.jpg';
import dumbells from './assets/dumbells.jpg';
import foamRoller from './assets/foam-roller.jpg';
import gloves from './assets/gloves.jpg';
import jumpRope from './assets/jump-rope.jpg';
import shoes from './assets/shoes.jpg';

import person1 from './assets/person1.jpg';
import person2 from './assets/person2.jpg';
import person3 from './assets/person3.png';

export const products = [
  { id: 0, title: 'Bottle', price: 15, img: bottle },
  { id: 1, title: 'Dumbells', price: 20, img: dumbells },
  { id: 2, title: 'Foam roller', price: 25, img: foamRoller },
  { id: 3, title: 'Gloves', price: 30, img: gloves },
  { id: 4, title: 'Jump rope', price: 30, img: jumpRope },
  { id: 5, title: 'Running shoes', price: 30, img: shoes },
]

export const testimonials = [
  { name: 'Robert', comment: '"The adjustable dumbells makes having all the weights I need perfect for a home workout!"', img: person1 },
  { name: 'Matthew & Shayla', comment: '"Working out at home together has really brought us closer in our relationship, and Fitness Shop provides us with everything."', img: person2 },
  { name: 'Jade', comment: '"The yoga mat is awesome. I was getting tired of slipping on my previous mat. Great quality!"', img: person3 },
]