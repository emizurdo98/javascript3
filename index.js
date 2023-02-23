function primerEjercicio() {
  for (let i = 0; i <= 10; i++) {
    console.log("este numero es:");
    console.log(i);
  }
}

function segundoEjercicio() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i % 2 === 0) {
      console.log("es par.");
    } else {
      console.log("es impar");
    }
  }
}

function tiempoDeEspera(usuariosRegistrados) {
  console.log("tiempo de espera estimado:", usuariosRegistrados * 6);
}
