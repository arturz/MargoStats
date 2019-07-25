const fs = require('fs')
const { exec } = require('child_process')

process.env.NODE_ENV = 'production'

const run = (command, options) =>
  new Promise((res, rej) =>
    exec(command, options, error =>
      error
        ? rej(error)
        : res(res)
    )
  )

;(async () => {
  const Zip = await (async () => {
    try {
      return require('adm-zip')
    } catch(error) {
      await run('npm install --save adm-zip')
      return require('adm-zip')
    }
  })()

  //check if there is new drop
  if(fs.existsSync('./drop.zip')){
    //unzip everything from drop.zip with overwriting
    const zip = new Zip('./drop.zip')
    zip.extractAllTo('./', true)

    await run('npm install')

    //remove drop
    fs.unlinkSync('./drop.zip')
  }

  require('./server')
})()