import swaggerJsonDoc from 'swagger-jsdoc'

const swaggerOptions = {
  openapi: "3.0.0",
  swaggerDefinition: {
    info: {
      title: "Documenting REST API's",
      description:
        "This is an implementation of how to document your RESTful API's using SWAGGER",
    },
    basePath: '/api',
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        scheme: 'bearer',
        in: 'header',
      },
    },
    security: [ { bearerAuth: [] } ],
  },
  apis: [
    './src/components/*/*.yml',
  ]
}

export const swaggerDocs = swaggerJsonDoc(swaggerOptions)
