let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (data) {
    if (data === '\u0003') {
      process.exit();
    }

    // console.log(connection)
    if (data === 'w') {
      connection.write('Move: up');
      console.log('Move: up');
    }
    if (data === 'a') {
      connection.write('Move: left');
      console.log('Move: left');
    }
    if (data === 'd') {
      connection.write('Move: right');
      console.log('Move: right');
    }
    if (data === 's') {
      connection.write('Move: down');
      console.log('Move: down');
    }
    if (data === 'l') {
      connection.write('Say: wee');
    console.log('done');  
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};


// console.log(connect())
// setupInput()
// 

module.exports = { setupInput };