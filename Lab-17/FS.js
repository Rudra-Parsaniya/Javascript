const FS = require('fs')
FS.exists('C:/Users/parsa/OneDrive/Desktop/Sem-3/Lab work/WT/Lab-17/Path.js',(exists) => {
    console.log(exists ? 'Found':'Not Found')

})
FS.stat('Path.js',(err,data) => {
    console.log(data)
})
FS.open('Path.js','r',(err,data) => {
    console.log(data)
    console.log('File opened')

})
FS.readFile('Path.js',(err,data) => {
    console.log(data.toString())
})
FS.writeFile()