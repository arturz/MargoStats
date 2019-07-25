const { exec } = require('child_process')

const run = (command, options) =>
  new Promise((res, rej) =>
    options
      ?  exec(command, options, error =>
          error
            ? rej(error)
            : res()
        )
      : exec(command, error =>
          error
            ? rej(error)
            : res()
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

  //building client
  console.log('Bulding client...')
  await run('npm run build')
  console.log('Client built')
 
  console.log('Zipping folders and files...')
  const dropZip = new Zip()
  //adding client files and folders
  dropZip.addLocalFolder('.next', '.next')
  dropZip.addLocalFolder('static', 'static')
  dropZip.addLocalFile('.env')
  dropZip.addLocalFile('package.json')
  dropZip.addLocalFile('package-lock.json')
  dropZip.addLocalFile('server.js')

  //adding server files and folders
  dropZip.addLocalFolder('server/build', 'server/build')
  dropZip.addLocalFile('server/index.js', 'server')

  //writing zip
  dropZip.writeZip('drop.zip')
  console.log('drop.zip created')
})()