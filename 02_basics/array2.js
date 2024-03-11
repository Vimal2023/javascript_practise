const marvel = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][1]);

// const allHeros = marvel.concat(dc)
// console.log(allHeros);

const all_new_heros = [...marvel, ...dc]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Vimal"))
console.log(Array.from("Vimal"))
console.log(Array.from({name: "Vimal"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));