let movimientos = [];
function registrarMovimiento() {
  let nombre = prompt("Nombre del movimiento:");
  let tipo = prompt("Tipo (Ingreso/Egreso):");
  let monto = parseFloat(prompt("Monto:"));

  if (nombre && (tipo === "Ingreso" || tipo === "Egreso") && monto > 0) {
    movimientos.push({ nombre, tipo, monto });
  } else {
    alert("Datos inválidos, intenta otra vez.");
  }
}

function mostrarResumen() {
  let saldo = 0, ingresos = 0, egresos = 0;

  for (let m of movimientos) {
    if (m.tipo === "Ingreso") {
      ingresos += m.monto;
      saldo += m.monto;
    } else {
      egresos += m.monto;
      saldo -= m.monto;
    }
  }

  console.log("Movimientos registrados:", movimientos.length);
  console.log("Saldo total: $" + saldo);
  console.log("Ingresos: $" + ingresos);
  console.log("Egresos: $" + egresos);
}

function main() {
  let seguir = "si";
  while (seguir === "si") {
    registrarMovimiento();
    seguir = prompt("¿Registrar otro movimiento? (si/no):").toLowerCase();
  }
  mostrarResumen();
}


