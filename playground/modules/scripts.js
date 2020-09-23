import first, { returnHi, last, middle } from "./utils.js";
import Matt from "./matt.js";
import { handleButtonClick } from "./handlers.js";

const name = "matt";

const button = document.querySelector("button");

button.addEventListener("click", handleButtonClick);
