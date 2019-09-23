import 'core-js/stable'
import 'regenerator-runtime/runtime'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import textRoutes from './routes/text.route'

const app = express()

// middlewares
if (process.env.NODE_ENV !== 'production') app.use(cors())
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb', extended: true }))

// routes
app.use('/text', textRoutes)

// static web serving
app.use(express.static('./static'))

// By using (!module.parent) condition, we avoid EADDRINUSE when testing because app will start once
let startApp = process.env.NODE_ENV != 'test'
if (process.env.NODE_ENV == 'test' && !module.parent) startApp = true

if (startApp) {
  app.listen(3001, () => {
    if (!process.env.NODE_ENV) {
      console.error(`[ERROR] > No environment !! Server will not start`)
      process.exit(0)
      return
    }

    console.info('[INFO] > Listening on port 3001...')
    console.info(`[INFO] > Current environment is => ${process.env.NODE_ENV}`)
  })
}

export default app
