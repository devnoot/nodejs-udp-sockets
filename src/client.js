const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const PORT = 15000;
const ADDRESS = "127.0.0.1";

const msg = new Buffer("ping!");

client.send(msg, 0, msg.length, PORT, ADDRESS, (err, bytes) => {
  if (err) throw err;
  console.log(`UDP message sent to ${ADDRESS}:${PORT}`);
  client.close();
});