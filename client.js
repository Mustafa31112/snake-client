const { IP, PORT } = require("./constants");

const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });
  conn.on("connect", () => {
    // code that does something
    console.log("Successfully Connected")
    conn.write("Name: Mus")
    // setTimeout(() => {
    //   conn.write("Move: up")
    // }, 2000)
    // setTimeout(() => {
    //   conn.write("Move: down")
    // }, 4000)
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect}