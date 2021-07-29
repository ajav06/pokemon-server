import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import path from 'path'
import swaggerUI from 'swagger-ui-express'
import helmet from 'helmet'
import expressip from 'express-ip'
import { swaggerDocs } from './services/swagger'

// import routes
import routes from './routes'

const app = express()

// middlewares
app.use(helmet())
app.use(cors())
app.use(expressip().getIpInfoMiddleware)
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false })) // imagenes que vengan desde formularios
app.use(express.json()) // tener objetos json
app.use('/public', express.static(path.join(__dirname, '../public'))) // permitir acceso a public desde el navegador
app.use('/api/v1', routes)
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

export default app
