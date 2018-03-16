const { fork } = require('child_process')
const request = require('request')

let serverProcess

test('http', () => {
  return new Promise((resolve, reject) => {
    serverProcess = fork('./app.js')
    serverProcess.on('message', (msg) => {
      if (msg == 'http ready') {
        request('http://localhost:3000', (error, response, body) => {
          expect(!error).toBe(true)
          serverProcess.kill()
          serverProcess = undefined
          resolve()
        })
      }
    })
  })
}, 5000)

afterAll(() => {
  serverProcess && serverProcess.kill()
})