// Import the 'http' module
const http = require('http');

// Define the port number for the server to listen on
const port = 3000;

// Create a new HTTP server
const server = http.createServer((req, res) => {
  // Set the response status code and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello, World!\n');
});

// Start the server and listen for incoming connections
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
