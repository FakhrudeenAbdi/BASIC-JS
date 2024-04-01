let teams =["chelsea", "man united", "liverpool", "man city"];

// console.log(teams);

// console.log(teams[0])

console.log(teams[teams.length-3]);

teams[1]= "newcastle"
console.log(teams);



teams.push("arsenal");
console.log(teams);

teams.unshift("tottenham");
console.log(teams);


teams.pop();
console.log(teams);

teams.shift();
console.log(teams);

teams.splice(2,3);
console.log(teams);