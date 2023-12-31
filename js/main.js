function calcularCaloriasMantenimiento(peso, altura, edad, actividad) {
    if (actividad === "LIGERO") {
      return 1.375 * (655 + 9.6 * peso + 1.8 * altura - 4.7 * edad);
    } else if (actividad === "MODERADO") {
      return 1.55 * (655 + 9.6 * peso + 1.8 * altura - 4.7 * edad);
    } else if (actividad === "ACTIVO") {
      return 1.725 * (655 + 9.6 * peso + 1.8 * altura - 4.7 * edad);
    } else {
      return; 
    }
  }
  
  let bienvenido;
  let edad;
  let altura;
  let actividad;
  let peso;
  let caloriasDeMantenimiento;
  
  while (true) {
    bienvenido = prompt("Bienvenido al contador de calorías de mantenimiento. Para seguir, escriba CONTINUAR, o para salir, escriba CANCELAR");
  
    if (bienvenido === "CANCELAR" || bienvenido === "cancelar") {
        break;
      }
      
    if (bienvenido !== "CONTINUAR" && bienvenido !== "continuar") {
        console.log("Palabra no registrada. Para seguir, escriba CONTINUAR, o para salir, escriba CANCELAR");
        continue;
      }
  
    edad = prompt("Ingrese su edad para continuar, o para salir, escriba CANCELAR");
  
    if (edad === "CANCELAR") {
      break;
    }
  
    edad = parseInt(edad);
  
    if (isNaN(edad)) {
      console.log("Ingrese un valor válido.");
      continue;
    }
  
    console.log("La edad que ingresó es de " + edad);
  
    altura = prompt("Ingrese su altura en CM para continuar, o para salir, escriba CANCELAR");
  
    if (altura === "CANCELAR" || altura === "cancelar") {
        break;
      }
  
    altura = parseInt(altura);
  
    if (isNaN(altura)) {
      console.log("Ingrese un valor válido.");
      continue;
    }
  
    console.log("La altura que ingresó es de " + altura + " CM");
  
    peso = prompt("Ingrese su peso en KG para continuar, o para salir, escriba CANCELAR");
  
    if (peso === "CANCELAR" || peso === "cancelar") {
        break;
      }
  
    peso = parseInt(peso);
  
    if (isNaN(peso)) {
      console.log("Ingrese un valor válido.");
      continue;
    }
  
    console.log("El peso que ingresó es de " + peso + " kg");
  
    actividad = prompt("Ingrese su nivel de actividad de los siguientes: LIGERO, MODERADO, ACTIVO. o para salir, escriba CANCELAR");
  
    if (actividad === "CANCELAR" || actividad === "cancelar") {
        break;
      }
  
    if (actividad !== "LIGERO" && actividad !== "MODERADO" && actividad !== "ACTIVO") {
      console.log("Ingrese un nivel de actividad válido.");
      continue;
    }
  
    caloriasDeMantenimiento = calcularCaloriasMantenimiento(peso, altura, edad, actividad);
  
    if (actividad == "LIGERO" || actividad == "MODERADO" || actividad == "ACTIVO") {
      console.log("Gracias por utilizar nuestro servicio. Sus calorías de mantenimiento son de " + caloriasDeMantenimiento);
      break;
    } 
    
    else {
      console.log("Porfavor, ingrese un nivel de actividad valido.");
      continue;
    }
  }
