const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Bus Booking API",
            version: "1.0.0",
            description: "API documentation for Bus Booking System",
        },
        servers: [
            { url: "http://localhost:5000/api" } // Change this when deployed
        ],
    },
    apis: ["./routes/*.js"], // Include all route files
};

const swaggerSpec = swaggerJsDoc(options);

const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
