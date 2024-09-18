// Right half pyramid

let row4 = 1;
let output4 = "";

for (let i = row4; i <= 5; i++) {
  for (let f = 1; f <= i; f++) {
    output4 += "*";
  }
  output4 += "\n";
}
console.log(output4);

// Left half pyramid

let row5 = 5;
let output5 = "";

for (let i = 1; i <= row5; i++) {
  for (let f = row5 - i; f > 0; f--) {
    output5 += " ";
  }

  for (let j = 1; j <= i; j++) {
    output5 += "*";
  }

  output5 += "\n";
}

console.log(output5);

// Inverted Left half pyramid

let row2 = 5;
let output3 = "";

for (let i = row2; i > 0; i--) {
  for (let j = row2; j > i; j--) {
    output3 += " ";
  }
  for (let f = i; f > 0; f--) {
    output3 += "*";
  }

  output3 += "\n";
}
console.log(output3);

// Inverted Right half pyramid

let row1 = 5;
let output2 = "";

for (let i = row1; i > 0; i--) {
  for (let f = i; f > 0; f--) {
    output2 += "*";
  }
  output2 += "\n";
}
console.log(output2);

// Inverted full pyramid

let rows = 5;
let output = "";

for (let i = rows; i > 0; i--) {
  for (let j = 0; j < rows - i; j++) {
    output += " ";
  }

  for (let f = 1; f <= i; f++) {
    output += "* ";
  }

  output += "\n";
}

console.log(output);

// Full pyramid

let row = 5;
let output1 = "";

for (let i = 1; i <= row; i++) {
  for (let f = row - i; f > 0; f--) {
    output1 += " ";
  }

  for (let k = 1; k <= i; k++) {
    output1 += "* ";
  }

  output1 += "\n";
}

console.log(output1);

//  Rombus

let row7 = 5;
let output7 = "";

for (let i = 0; i < row7; i++) {
  for (let f = 0; f < i; f++) {
    output7 += " ";
  }

  for (let j = 1; j <= 4; j++) {
    output7 += "* ";
  }

  output7 += "\n";
}

console.log(output7);

// Diamond
let row8 = 4;
let output8 = "";

for (let i = 1; i <= row8; i++) {
  for (let f = row8 - i; f > 0; f--) {
    output8 += " ";
  }

  for (let j = 1; j <= i; j++) {
    output8 += "* ";
  }

  output8 += "\n";
}

for (let i = row8 - 1; i >= 1; i--) {
  for (let f = row8 - i; f > 0; f--) {
    output8 += " ";
  }

  for (let j = 1; j <= i; j++) {
    output8 += "* ";
  }

  output8 += "\n";
}

console.log(output8);

// Hourglass pyramid

let row9 = 4;
let output9 = "";

for (let i = row9; i >= 1; i--) {
  for (let f = 0; f < row9 - i; f++) {
    output9 += " ";
  }

  for (let j = 1; j <= i; j++) {
    output9 += "* ";
  }

  output9 += "\n";
}

for (let i = 2; i <= row9; i++) {
  for (let f = 0; f < row9 - i; f++) {
    output9 += " ";
  }

  for (let j = 1; j <= i; j++) {
    output9 += "* ";
  }

  output9 += "\n";
}

console.log(output9);

// Hollow  Square pyramid

let row11 = 6;
let col = 6;
let output11 = "";

for (let i = 1; i <= row11; i++) {
  for (let j = 1; j <= col; j++) {
    if (i === 1 || i === row11 || j === 1 || j === col) {
      output11 += "* ";
    } else {
      output11 += "  ";
    }
  }
  output11 += "\n";
}

console.log(output11);

// Hollow full pyramid

let row12 = 5;
let output12 = "";

for (let i = 1; i <= row12; i++) {
  for (let f = 1; f <= row12 - i; f++) {
    output12 += " ";
  }

  let f = i === row12 ? 5 : 2 * i - 1;

  for (let j = 1; j <= f; j++) {
    if (j === 1 || j === f || i === row12) {
      output12 += "* ";
    } else {
      output12 += " ";
    }
  }

  output12 += "\n";
}

console.log(output12);

// Hollow inverted full pattern

let row13 = 5;
let output13 = "";

for (let i = 0; i < row13; i++) {
  for (let f = 0; f < i; f++) {
    output13 += " ";
  }

  for (let j = 0; j < 2 * (row13 - i) - 1; j++) {
    if (j === 0 || j === 2 * (row13 - i) - 2 || i === 0) {
      output13 += "*";
    } else {
      output13 += " ";
    }
  }

  output13 += "\n";
}

console.log(output13);

// Hollow diamond pyramid
let n = 4;
let outputs = "";

for (let i = 1; i <= n; i++) {
  for (let f = 1; f <= n - i; f++) {
    outputs += " ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1) {
      outputs += "*";
    } else {
      outputs += " ";
    }
  }

  outputs += "\n";
}

for (let i = n - 1; i >= 1; i--) {
  for (let f = 1; f <= n - i; f++) {
    outputs += " ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1) {
      outputs += "*";
    } else {
      outputs += " ";
    }
  }

  outputs += "\n";
}

console.log(outputs);

// Hollow Hourglass

let n1 = 4;
let outputs1 = "";

for (let i = 0; i < n1; i++) {
  for (let f = 0; f < i; f++) {
    outputs1 += " ";
  }

  for (let j = 0; j < 2 * (n1 - i) - 1; j++) {
    if (j === 0 || j === 2 * (n1 - i) - 2) {
      outputs1 += "*";
    } else {
      outputs1 += " ";
    }
  }

  outputs1 += "\n";
}

for (let i = 1; i < n1; i++) {
  for (let f = 1; f < n1 - i; f++) {
    outputs1 += " ";
  }

  for (let j = 0; j <= 2 * i; j++) {
    if (j === 0 || j === 2 * i) {
      outputs1 += "*";
    } else {
      outputs1 += " ";
    }
  }

  outputs1 += "\n";
}

console.log(outputs1);

// Floyd's Triangle

let rowss = 4;
let number = 1;
let outputss = "";

for (let i = 1; i <= rowss; i++) {
  for (let j = 1; j <= i; j++) {
    outputss += number + " ";
    number++;
  }
  outputss += "\n";
}

console.log(outputss);
