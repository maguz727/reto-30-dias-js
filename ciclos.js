// Ciclo for

let list = ["manuel", "paula", "marcos", "zarita"];
for (let i = 0; i < list.length; i++) {
  const result = list[i];
  //console.log(result)
}

for (let i = 1; i <= 10; i++) {
  const element = i;
  //console.log(element);
}

// Ciclo for in // Este es un ciclo que recorre las propiedades de un objeto

const user = {
  name: "Manuel",
  lastName: "Guzman",
  city: "Itagui",
  course: "Fullstack Developer Javascript",
};

for (const prop in user) {
  //console.log(user[prop]);
}

//En este ejemplo, se establece una variable “prop” que se utilizará para recorrer las propiedades del objeto. El valor de cada propiedad se imprimirá en la consola.

// Ciclo for of

const technologies = ["js", "html", "node", "php"];

for (const element of technologies) {
  // console.log(element);
}

// Ciclo while

/* let i = 1;

while (i <= 10) {
  // console.log(i);
  i++;
} */

// Ciclo do while

/* let i = 1;
do {
	console.log(i);
	i++;
	} while (i <= 10); */

/* function drawIsoscelesTriangle(size, character) {
        let triangle = '';
      
        for (let i = 1; i <= size; i++) {
          for (let j = 1; j <= size - i; j++) {
            triangle += ' ';
          }
          for (let k = 1; k <= i * 2 - 1; k++) {
            triangle += character;
          }
          triangle += '\n';
        }
      
        console.log(triangle);
      }
      
      drawIsoscelesTriangle(5, '*'); */

/* function drawIsoscelesTriangle(size, character) {
  let triangle = "";

  for (let i = 1; i <= size; i++) {
    for (let j = size - i; j > 0; j--) {
      triangle += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      triangle += character;
    }
    triangle += "\n";
  }

  console.log(triangle);
}

drawIsoscelesTriangle(5, "*"); */

function printTriangle(size, character) {
    let triangle = "";
    let characterNumber = 1;
    while(characterNumber <= size){
        for (let j = 0; j < size - characterNumber; j++) {
          triangle += " ";
        }
        for (let j = 0; j < characterNumber; j++) {
          triangle += character;
        }
      if (characterNumber < size) { triangle += `\n` };
      characterNumber++;
      }
    
    return triangle;
  }

  console.log(printTriangle(6, '*'))