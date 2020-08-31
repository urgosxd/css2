const A1 = [{ hola: "nada" }, { hola: "todo" }, { hola: "ga" }]
const A2 = [{ hola: "nadaa" }, { hola: "todos" }, { hola: "ga" }]

A1.forEach(ele => console.log(A2.find(caca => caca.hola == ele.hola)))
