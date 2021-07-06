const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Node Express API Documentation',
            version: '1.0.0',
            description: 'Node Express API Documentation',
        },
        schemes: ['http'],
        host: 'localhost:4008',
        basePath: '/',
        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                name: 'Authorization',
                scheme: 'bearer',
                in: 'header',
            },
        },
    },
    apis: ["main.js", "./routes/**/*.js", "./routes/**/**/*.js", "./models/**/*.js", "./models/**/**/*.js"],
};

export default swaggerOptions;