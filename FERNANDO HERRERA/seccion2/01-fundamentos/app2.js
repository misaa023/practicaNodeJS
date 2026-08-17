const fs = require('fs');

//* readfilesync esto es un codigo bloqueante, es decir que hasta que no termine de leer el archivo no continua con la ejecucion del codigo
//* hay que poner el utf8 para que nos devuelva el contenido del archivo en string y no en buffer
const data = fs.readFileSync('README.md', 'utf8'); 

// ! lo que hicimos es leer el archivo y reemplazar todas las ocurrencias de "REACT" por "Angular" y luego escribimos un nuevo archivo con el contenido modificado
const newData = data.replace(/REACT/ig, 'Angular'); // Reemplaza todas las ocurrencias de "Node.js" por "NodeJS"

// ? Escribimos un nuevo archivo con el contenido modificado

fs.writeFileSync('README-Angular.md', newData, 'utf8'); // Crea un nuevo archivo con el contenido modificado

console.log(newData); // Muestra el contenido modificado en la consola