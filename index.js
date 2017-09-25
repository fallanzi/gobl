import consign from 'consign'
import app from './app.js'

consign()
  .include('lib/boot.js')
  .into(app)
