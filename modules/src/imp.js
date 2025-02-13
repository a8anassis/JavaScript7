import SEC_PER_MIN from "./lib.js";
import { PI, EPSILON } from "./lib2.js";

let r = 10
let circumference = 2 * PI * r

const equal = Math.abs(0.3 - 0.2 - 0.1) < EPSILON