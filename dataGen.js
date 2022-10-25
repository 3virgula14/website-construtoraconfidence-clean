import fs from 'fs'

fs.readdir("public/portfolio_items", (err, files) => {
    if (err)
      console.log(err);
    else {
        let fileContentArr = []
        files.forEach(file => {
            const data = fs.readFileSync("public/portfolio_items/"+file, 'utf8');
            fileContentArr+= data+",";
        })
        let finaljson = JSON.parse(`{"portfolio":[${fileContentArr.slice(0, -1)}]}`)
        fs.writeFile("public/data.json", JSON.stringify(finaljson), (err) =>{})
    }
  })
