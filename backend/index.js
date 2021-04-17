const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');

const PORT = process.env.PORT || 3000;

// Swagger router: mô tả các api
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();
app.use("/swagger", express.static(pathToSwaggerUi))

// Static router: lưu trữ dữ liệu tĩnh
app.use("/", express.static(path.join(__dirname, "/public")));


app.listen(3000, ()=> {
    console.log("Server is run in "+ PORT);
})