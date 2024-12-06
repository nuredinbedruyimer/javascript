const arthimetics = await import("./arthimetic.js");

const modules = await import("./greet.js");

//  Arthimetics

console.log("Addition From Dynamic Import : ", arthimetics.add(12, 13));
console.log("Subtraction From Dynamic Import : ", arthimetics.sub(12, 13));
console.log("Division From Dynamic Import : ", arthimetics.div(12, 13));
console.log("Multiplication From Dynamic Import : ", arthimetics.mul(12, 13));

//  Greetings

console.log(modules.sayHey("Nuredin Bedru"));
console.log(modules.default("Nuredin Bedru"));
