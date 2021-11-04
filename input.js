// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {

  if (key == "w") {
   connection.write('Say: I am flying');
   connection.write('Move: up');
  }
  if (key == "a") {
    connection.write('Say: I am gliding');
    connection.write('Move: left');
   }
   if (key == "d") {
    connection.write('Say: I am gliding');
    connection.write('Move: right');
   }
   if (key == "s") {
    connection.write('Say: I am drowning');
    connection.write('Move: down');
   }
  if (key == '\u0003') {
    process.exit();
  }
};

module.exports = {setupInput}