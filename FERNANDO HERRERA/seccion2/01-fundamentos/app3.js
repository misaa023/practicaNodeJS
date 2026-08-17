const fs = require('fs');


const content = fs.readFileSync('README.md', 'utf8'); 

const wordCount = content.split('').length;

// de esta forma lo hago con split y length, pero hay otra forma de hacerlo con match y length, que es mas eficiente
const ReactWordCount = content.split(/REACT/ig).length - 1;

// de esta forma lo hago con match y length, que es mas eficiente porque no tengo que crear un array con todas las ocurrencias, sino que solo me devuelve el numero de ocurrencias
const ReactWordCount2 = content.match(/react/gi ?? []).length;

console.log(`El archivo README.md tiene ${wordCount} palabras y la palabra REACT aparece ${ReactWordCount2} veces.`);

/*

Resumen corto (2 líneas):

* Uso match(/pat/gi) para contar apariciones (devuelve solo las coincidencias).
! Evita split('') para contar palabras; usa match(/\b\w+\b/g) o split(/\s+/).filter(Boolean).

Conteos:
?  match(/pat/gi) devuelve coincidencias (usa ?? [] o || [] para evitar null).

 ? split(/pat/) necesita .length - 1 y crea más segmentos; match es más directo y ahorra trabajo.

 * Para contar palabras use content.match(/\b\w+\b/g)?.length || 0 o content.split(/\s+/).filter(Boolean).length.
*/



