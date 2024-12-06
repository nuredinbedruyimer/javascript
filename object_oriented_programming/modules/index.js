import { sub, add, mul, div } from "./arthimetic.js";

import * as arthimetics from "./arthimetic.js";

import greet from "./greet.js";
//  Data Named Import And Export
import {
  jsonData as j,
  user as u,
  isTrue as i,
  integer as I,
  singleVariable as s,
  friends as f,
} from "./data.js";
//  Pure Named Export And Import
console.log("Addition : ", add(12, 13));
console.log("Subtraction : ", sub(32, 12));
console.log("Multiplication : ", mul(32, 12));
console.log("Division : ", div(32, 12));

//  Default Export And Import
console.log(greet("Nuredin Bedru"));
console.log("User Data : ", u);
console.log("Variable : ", s);
console.log("Boolean : ", i);
console.log("Integer : ", I);
console.log("JsonData : ", j);
console.log("JsonData : ", f);

//  Add Namespaces  * as nameUwant

console.log("Addition From Namespace : ", arthimetics.add(12, 13));
console.log("Subtraction From Namespace : ", arthimetics.sub(32, 12));
console.log("Multiplication From Namespace : ", arthimetics.mul(32, 12));
console.log("Division From Namespace : ", arthimetics.div(32, 12));
