import { choices, remove } from "./helpers"
import fruits from "./fruits";


let fruit = choices(fruits);

console.log(`I’d like one ${fruit}, please`);
console.log(`Here you Go! ${fruit}`);
console.log(`Delicious! May I have another ${fruit}`);
const remaningFruits = remove(fruit, fruits);
console.log(`Sorry !! We are all out we have ${remaningFruits} left`)




