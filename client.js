const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243' , // IP address here,
    port: 50541 // PORT number here,
  });
 
  // interpret incoming data as text
  conn.setEncoding("utf8");


  conn.on('connect', () => {
   console.log("Successfully connected to game server")
   conn.write('Name: MTA');
   // conn.write('Move: up');
  });

  // To move the snake around.

  //   conn.on('connect', () => {
  //   
  //   let b = 0;
    
  //   for (let i = 0; i < 20; i++) {
  //     setTimeout(()=> conn.write("Move: right"), 50 * i);
  //     b = 50 * i;
  //   }
   
  //   for (let i = 0; i < 20; i++) {
  //     setTimeout(()=> conn.write("Move: up"), b + 50 * i);
  //     b = b + 50 * i;
  //   }
  //  });
 

  conn.on('data', (data) => {
    console.log('Server: ', data);
  });

  return conn ;
};


module.exports= {connect};