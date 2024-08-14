const path = require('path');

console.log(path.normalize('C:/Users/parsa/OneDrive/Desktop/Sem-3/Lab work/WT/..'))

console.log(path.join('Sem-3','Lab work','Lab-17'))

console.log(path.resolve('Sem-3', 'Path.js'))

console.log(path.relative('C:/Users/parsa/OneDrive/Desktop/Sem-3/Lab work/WT/Lab work/DS'))

console.log(path.dirname('C:/Users/parsa/OneDrive/Desktop/Sem-3/Lab work/WT/Lab-17'))

console.log(path.basename('C:/Users/parsa/OneDrive/Desktop/Sem-3/Lab work/WT/Lab-17/Path.js'))

console.log(path.resolve('Sem-3', 'Path.js'))

console.log(path.extname('C:/Users/parsa/OneDrive/Desktop/Sem-3/Lab work/WT/Lab-17/Path.js'))