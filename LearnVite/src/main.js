import imageUrl from "./assets/images/javascript.svg";
import { name, favCharacter, title } from "nuredin/testJson.json";

const node = document.createElement("img");
const elementForName = document.createElement("p");
const text1 = document.createTextNode(name);

elementForName.appendChild(text1);

node.setAttribute("src", imageUrl);
node.setAttribute("alt", "Image AlternaiveName");

document.getElementById("app").appendChild(node);
document.getElementById("app").appendChild(elementForName);

console.log(data);
