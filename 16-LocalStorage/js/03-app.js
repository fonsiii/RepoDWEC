localStorage.removeItem('nombre');

let mesesArray=JSON.parse(localStorage.getItem('meses'));
mesesArray=[...mesesArray,'Abril'];
localStorage.setItem('meses',JSON.stringify(mesesArray));

localStorage.clear();