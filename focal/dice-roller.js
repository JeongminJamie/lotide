const args = process.argv.slice(2)[0];

function rollerDice(args) {
  let output = `Rolled dice ${args} : `
  for(let i = 0; i < args; i++) {
    if(i === Number(args) - 1) { 
      output += Math.floor(Math.random() * 6 + 1)
    } else {
      output += Math.floor(Math.random() * 6 + 1) + ', '
    }
  }
  return output;
};

console.log(rollerDice(args));