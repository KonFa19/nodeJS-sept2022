const fs = require('fs');
const path = require('path');


fs.mkdir('Main directory', (err) => {
    if (err) throw new Error(err.message)
});



fs.mkdir(path.join('Main directory','directory 1'), (err)=>{
    if (err) throw new Error(err.message)
});

fs.mkdir(path.join('Main directory','directory 2'), (err)=>{
    if (err) throw new Error(err.message)
});

fs.mkdir(path.join('Main directory','directory 3'), (err)=>{
    if (err) throw new Error(err.message)
});

fs.mkdir(path.join('Main directory','directory 4'), (err)=>{
    if (err) throw new Error(err.message)
})

fs.mkdir(path.join('Main directory','directory 5'), (err)=>{
    if (err) throw new Error(err.message)
});



fs.writeFile(path.join('Main directory', 'file1.txt'),'Hello 1',(err)=>{
    if (err) throw new Error(err.message)
});

fs.writeFile(path.join('Main directory', 'file2.txt'),'Hello 2', (err)=>{
    if (err) throw new Error(err.message)
});

fs.writeFile(path.join('Main directory', 'file3.txt'),'Hello 3', (err)=>{
    if (err) throw new Error(err.message)
});

fs.writeFile(path.join('Main directory', 'file4.txt'), 'Hello 4',(err)=>{
    if (err) throw new Error(err.message)
});

fs.writeFile(path.join('Main directory', 'file5.txt'), 'Hello 5',(err)=>{
    if (err) throw new Error(err.message)
});




fs.readdir(path.join('Main directory'),{withFileTypes: true},(err,data) =>{
    if (err) throw new Error(err.message);

    for (const item of data) {
        console.log(item.isFile() ? `FILE: ${item.name}` : `DIRECTORY: ${item.name}`)
    }
})
