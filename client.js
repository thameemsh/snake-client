const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243' , // IP address here,
    port: 50541 // PORT number here,
  });
 
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server: ', data);
  })

  conn.on('connect', () => {
  console.log("Successfully connected to game server")
   conn.write("Name: MTA");
   conn.write("Move: up")
  });

  return conn;
};




module.exports= connect;