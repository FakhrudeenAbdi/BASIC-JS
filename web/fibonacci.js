function fibonacci_sequence(n) {
  let sequence = [0,1];

  if (n >= 3) {
    for (let i = 2; i < n; i++) {
      let p = sequence[i - 1] + sequence[i - 2];
      sequence.push(p);
    }
  }

  return sequence;
}

console.log(fibonacci_sequence(15)); 
