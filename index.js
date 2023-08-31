const http = require('http');
const port = 3000;
    var o = 0;
    var i = 0;
    var p ="w"
    var ur = "ur"
const requestListener = function (req, res) {
  console.log(req.url);


  // Buffer, stream, kod binarny
//debugger
  const chunks = [];
  req.on('data', (chunk) => {
    chunks.push(chunk);


  }).on('end', () => {
    const body = Buffer.concat(chunks).toString();
    console.log(body);
    console.log(req.url);

  });
 ur = req.url
  if(ur[1]=="u"){
   p = req.url;
  console.log("pierwsz");
i++;
}
o++;
  res.write(p +" " + i + "  " + o);

  //res.write(f);
  return res.end()
};

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Serwer słucha na http://localhost:${port}`);
});
