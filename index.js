import { toggleAnswer } from "./javascript/toggleAnswer.js";
import { bookmarkFunction } from "./javascript/bookmarkFunction.js";

//Change color of bookmark
const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

bookmarks.forEach(bookmarkFunction);

//Show answer
const buttons = document.querySelectorAll('[data-js="button"]');

buttons.forEach(toggleAnswer);
