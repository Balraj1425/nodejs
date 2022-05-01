let http = require('http')
const data = [
    {
      dishType: 'Veg',
      dishName: 'Panner Tikka',
      dishPrice: 'INR 200'
    },
    {
      dishType: 'Veg',
      dishName: 'Panner Tikka Masala',
      dishPrice: 'INR 220'
    },
    {
      dishType: 'Non-veg',
      dishName: 'Chicken Curry',
      dishPrice: 'INR 300'
    },
    {
      dishType:'Veg',
      dishName: 'Panner Bhurji',
      dishPrice: 'INR 180'
    }

  ]

 http.createServer((req, res) => {
    if(req.url === "/menu" && req.method === "GET") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(data));
        res.end();
    } else {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(" req not supported")
    }
 }).listen(3001)