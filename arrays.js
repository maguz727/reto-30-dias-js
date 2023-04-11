let catsOne = [
  {
    name: "Luna",
    followers: [500, 200, 300],
  },
  {
    name: "Michi",
    followers: [100, 300],
  },
];

let catsTwo = [
  {
    name: "Mimi",
    followers: [320, 120, 70],
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200],
  },
  {
    name: "Gizmo",
    followers: [250, 750],
  },
];
/* function findFamousCats(cats) {
    cats.map((cat) => {
        let nameCate = cat.name
        let totalFollowers = cat.followers.reduce((a, b) => {
            return a + b
        })
        console.log(nameCate);
       
        return console.log(totalFollowers);


        
    })
}


findFamousCats(catsOne) */


// DESAFIO
/* En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.

Recibirás un array de objetos que incluirán las siguientes propiedades:

name: nombre del gatito.
followers: un array de números, donde cada uno representa los seguidores de cada red social.
Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada. */

function findFamousCats(cats) {
  let maxFollowers = 0;
  let famousCats = [];

  cats.forEach((cat) => {
    let followers = cat.followers.reduce((a, b) => a + b);

    if (maxFollowers < followers) {
      famousCats = [cat.name];
      maxFollowers = followers;
    } else if (maxFollowers === followers) {
      famousCats.push(cat.name);
    }
  });

  return famousCats;
}

console.log(findFamousCats(catsTwo));
