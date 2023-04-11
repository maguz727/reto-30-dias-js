function getPetExerciseInfo(type, age) {
  if (type === "perro" || type === "gato" || type === "ave") {
    switch (true) {
      case type === "perro":
        switch (true) {
          case age < 1:
            return "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
            break;
          case age >= 1 && age <= 7:
            return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
            break;
          case age > 7:
            return "Los perros viejos necesitan caminatas más cortas";
            break;
        }
        break;
      case type === "gato":
        switch (true) {
          case age < 1:
            return "Los gatitos necesitan frecuentes sesiones de juego";
            break;
          case age >= 1 && age <= 7:
            return "Los gatos a esta edad necesitan jugar diariamente";
            break;
          case age > 7:
            return "Los gatos viejos necesitan sesiones de juego más cortas";
            break;
        }
        break;
      case type === "ave":
        switch (true) {
          case age < 1:
            return "Las aves jóvenes necesitan mucho espacio para volar";
            break;
          case age >= 1 && age <= 7:
            return "Las aves necesitan jugar diariamente y un lugar para volar";
            break;
          case age > 7:
            return "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
            break;
        }
        break;
    }
  } else {
    return "Tipo de mascota inválida";
  }
}
console.log(getPetExerciseInfo("perro", 8));
