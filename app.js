var os = require('os');

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

var port = process.env.PORT || 3000;

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.rewriter({
  '/api/': '/'
}));
server.use(router);

server.listen(port, addresses[0], () => {
  console.log('JSON Server is running on http://' + addresses[0] + ':' + port + '/');
});
