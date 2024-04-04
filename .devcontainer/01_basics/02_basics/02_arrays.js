const marvel_heros = ["Rahul" , "Ritesh" ,"Rohit"]
const dc_heros = ["Varun", "Pavan" , "Superman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

//const all_heros = marvel_heros.concat(dc_heros);
//console.log(all_heros);

const all_new_heros = [...marvel_heros , ...dc_heros];
//console.log(all_new_heros);

console.log(Array.from("manish")); //interesting

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));
