const dgram = require("dgram");
const server = dgram.createSocket("udp4");

const PORT = 15000;

server.on("listening", () => {
  const address = server.address();
  console.log(`UDP server is listening on ${address.address}:${address.port}`)
});

server.on("message", (msg, rinfo) => {
  console.log(`${rinfo.address}:${rinfo.port} - ${msg}`)
  const res = new Buffer("pong!");

  server.send(res, 0, res.length, 16000, "127.0.0.1", (err, bytes) => {
    if (err) throw err;
    console.log(`UDP message sent to 127.0.0.1:16000`);
  });

});

// listen on 0.0.0.0
server.bind(PORT);