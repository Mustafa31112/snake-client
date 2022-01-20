const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541 // PORT number here,
  });
  conn.on("connect", () => {
    // code that does something
    console.log("Successfully Connected")
    conn.write("Name: Mus")
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;