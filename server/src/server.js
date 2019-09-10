import 'core-js/stable'
import 'regenerator-runtime/runtime'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'

import textRoutes from './routes/text.route'

import logger from './services/logger.service'

const app = express()

// Days locale
dayjs.locale('zh-tw')

// MIDDLEWARES
if (process.env.NODE_ENV !== 'production') app.use(cors())
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb', extended: true }))

// ROUTES
app.use('/text', textRoutes)

// DATA ROUTE
// app.use('/data', express.static(dataFolder))

// By using (!module.parent) condition, we avoid EADDRINUSE when testing because app will start once
let startApp = process.env.NODE_ENV != 'test'
if (process.env.NODE_ENV == 'test' && !module.parent) startApp = true

if (startApp) {
  app.listen(3001, () => {
    if (!process.env.NODE_ENV) {
      logger.error(`> No environment !! Server will not start`)
      process.exit(0)
      return
    }

    logger.info('> Listening on port 3001...')
    logger.info(`> Current environment is => ${process.env.NODE_ENV}`)
  })
}

export default app
