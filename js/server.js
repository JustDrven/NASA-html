/*+------------------------+
    REDISBUNGEE CONNECTOR
    @author: Petr Němeček
    @version: 1.19.2
  +------------------------+
*/
    var client = "NULL";

function getName() {
    return client;
}

function getClass() {
    for(let i = 0; i<5;i++) {
        console.log(i);
    }
}

getClass();

        function setName(client) {
        this.client = client;
        }

const RedisServer = {
    name: "NASA.CZ",
    ip: "127.0.0.7",
    port: 25565,
    connected: true
}

console.log("*** REDISBUNGEE CONNECTOR ***")

function RedisBungee() {
    if(RedisServer.connected === false) {
        send("Sorry but server is offline");
        console.log("  - Status: Offline");
    } else if(RedisServer.connected === true) {
        send("Server are connected");
        console.log("  - Status: Online");
        console.log("  - Server id: "+ RedisServer.name + ";" + RedisServer.port);
    }
}

/*+----------------------------+
    REDIS BUNGEE SEND MESSAGES
  +----------------------------+
*/

setName("./User/RedisBungee");

setTimeout(() => {
    console.log(" ");
    send(RedisServer.name);
    send(RedisServer.ip);
    send(RedisServer.port);
    send(RedisServer.connected);
    send("Redis is online");
    send(getName());
}, 2000);

RedisBungee();

function send(message) {
    console.log("(" + RedisServer.name + ";" + RedisServer.port + ") " + message);
}

