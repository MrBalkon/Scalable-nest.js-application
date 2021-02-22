const http = require('http')
const createHandler = require('github-webhook-handler')
const path = require('path');
const execSync = require('child_process').execSync;
const dayjs = require('dayjs')

require('dotenv').config();
const handler = createHandler({ path: '/webhook', secret: process.env.WEBHOOK_HASH_SECRET })

http.createServer(function (req, res) {
    handler(req, res, function (err) {
      res.statusCode = 404
      res.end('no such location')
    })
}).listen(process.env.WEBHOOK_PORT, () => {
  console.log(dayjs().$d)
})

handler.on('error', function (err) {
     console.log('Error:', err.message)
  })
  
  handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
      event.payload.repository.name,
      event.payload.ref)

    const current_date = dayjs().$d;
    const logs_string = `[${current_date}] Deploy ${event.payload.repository.name}`
    const result = execSync(`cd ./scripts || sh deploy.sh '${logs_string}'`)
    console.log(result);
  })
  
  // handler.on('issues', function (event) {
  //   console.log('Received an issue event for %s action=%s: #%d %s',
  //     event.payload.repository.name,
  //     event.payload.action,
  //     event.payload.issue.number,
  //     event.payload.issue.title)
  // })