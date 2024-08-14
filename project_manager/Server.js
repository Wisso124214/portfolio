const express = require('express');
const app = express();
const PORT = 3010;

async function getPage(){
  const resp = await fetch(`http://localhost:${PORT}/index`)
  const data = await resp.text();

  console.log(data);
  return data;
}

app.get('/',(req,res)=>{
  res.sendFile('C:/Users/Pc/Documents/Wisso/Web II/project_manager/index.html')
})

app.get('/2',(req,res)=>{
  res.send('redirected')
})

app.listen(PORT, ()=>console.log(`Server running at port ${PORT}`));