/**
 * Created by bhargavib on 18-07-2016.
 */
import $ from 'jquery';
import { foo as myFoo } from './getExports';
const myTemplate = require('./templates/button');

const htmlTemplate     = document.getElementById('myButton');
htmlTemplate.innerHTML = myTemplate;

console.log(myFoo);
