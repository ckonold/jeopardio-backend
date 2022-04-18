const express = require("express");
const rowdy = require("rowdy-logger");
const app = express();
const cors = require("cors");
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const routesReport = rowdy.begin(app);
const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000"
    }
})


app.use(express.json());
app.use(cors());

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`)

  
   
})



server.listen(3001, () => {  console.log('listening on *:3001');
routesReport.print();
});
