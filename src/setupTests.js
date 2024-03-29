// import raf from './tempPolyfills'
// import Enzyme, { shallow, render, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import toJson from 'enzyme-to-json';
const raf = require("./tempPolyfills");
const Enzyme = require("enzyme");
const { shallow, render, mount } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const toJson = require("enzyme-to-json");

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;
// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};
