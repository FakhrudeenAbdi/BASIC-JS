let colors = ["red" ,"green", "pink", "yellow","purple", "blue"]

colors[2]= "violet"
console.log(colors);

colors.push("yellow")
console.log(colors)

colors.shift()
console.log(colors)

console.log(colors.reverse())

console.log(colors.sort())

console.log(colors.length);

for (let i= 0;  i< colors.length; i++){
  console.log(colors[i])
}

string1 = colors.toString()
console.log(string1)



colors.pop();
console.log(colors);
