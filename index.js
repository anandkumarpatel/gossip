if (!process.env.TYPE) {
  console.error('no TYPE set');
  process.exit(1);
}

if (process.env.TYPE === 'listen') {
  require('./orator.js');
} else {
  require('./patron.js');
}