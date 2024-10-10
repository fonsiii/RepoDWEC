const name = "Amparo";
const apellido = "Garcia";
console.log("2 " + "Buenas tardes " + name + " " + apellido);
console.log("3 " + `Buenas tardes $(name) $(apellido)`);
//.includes()
console.log("6 " + name.includes("par"));
//.slice(start,end)
console.log("7 " + name.slice(3,6));
//.replace("este texto, "por este otro")
console.log("8 " + name.replace("paro", "plificador"));
//.trim
const texto = "    algo   que       queria    ";
console.log("9 " + texto.trim());
//.split(",");
const geolocalitation = "Paseo de San Eugenio, 21, 45003, Toledo, Toledo, Spain";
console.log("10 " + geolocalitation.split(","));