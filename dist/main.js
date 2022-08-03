/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/clearbit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/clearbit.js":
/*!*************************!*\
  !*** ./lib/clearbit.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";

// Select the form
const form = document.querySelector("#clearbitForm");
// Select the table data to change their text
const name = document.querySelector("#userName");
const email = document.querySelector("#userEmail");
const bio = document.querySelector("#userBio");
const location = document.querySelector("#userLocation");
// Add event listener on the form (submit event)

const displayInfo = (person) => {
  // Update the DOM inserting the data received into the table data tags
  name.innerText = person.name.fullName;
  email.innerText = person.email;
  bio.innerText = person.bio;
  location.innerText = person.location;
};

const fetchClearbit = (email) => {
  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`;
  const options = {
    headers: { 
      Authorization: authorization,
    }
  };
  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      displayInfo(data.person);
  });
};

const stalkSomeone = (event) => {
  // preventDefault();
  event.preventDefault();
  // Get the value of the input (clearbitemail)
  const elemValue = form.elements["clearbitEmail"].value;
  // Fetch the data from the api using the email fron the input
  //    use the url and the headers: (check the documentation)
  fetchClearbit(elemValue);
};

form.addEventListener("submit", stalkSomeone)

/***/ })

/******/ });
//# sourceMappingURL=main.js.map