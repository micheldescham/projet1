const path = require('path');
// console.log("Affichage de path.basename:", path.basename('c:\\users\\truc.html'));

console.log("affichage de __filename:", __filename);
console.log("affichage de __dirname:", __dirname);
console.log("utilisation de path.basename:", path.basename(__filename));
console.log("utilisation de path.basename sans le .js:", path.basename(__filename, '.js'));
console.log("utilisation de path.extname", path.extname(__filename));
console.log("utilisation de path.extname", path.extname('c:\\users\\truc.html'));
console.log("utilisation de path.dirname", path.dirname('c:\\users\\truc.html'));
console.log("utilisation de path.dirname", path.dirname(__filename));
console.log("utilisation de path.parse", path.parse(__filename));
console.log("utilisation de path.parse().root", path.parse(__filename).root);
console.log("utilisation de path.parse().ext", path.parse(__filename).ext);
//Ce qui suit: bcp, bcp utilisé!!!
//La version suivante empêche d'avoir à mettre les bons slash ou backslash:
console.log("Construction d'un path:", path.join(__dirname, 'data', 'alain.json'));
//La version suivante ne fonctionnerait pour Windows car on utlise des backslashs:
console.log("Construction d'un path:", path.join(__dirname, 'data\\alain.json'));