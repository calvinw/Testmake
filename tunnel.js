const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: 3000 });
  console.log('Public URL:', tunnel.url);
  console.log('Add this domain to your allowed list:', tunnel.url.replace('https://', '').replace('http://', ''));

  tunnel.on('close', () => {
    console.log('Tunnel closed');
  });
})();
