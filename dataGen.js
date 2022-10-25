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
        finaljson['portfolio'] = finaljson['portfolio'].map( (j, i) => {
          j['sessions'] = j['sessions'].map( (s, ii) => {
            if(s['mdsession'].length<10){
              s['mdsession'] += `![](${s['foto']})`
              s['mdsession'] += `\n${s['shortstory']}\n${s['tailstory']}`
            }
            return s
          })
          return j
        })
        fs.writeFile("public/data.json", JSON.stringify(finaljson), (err) =>{})
    }
  })
