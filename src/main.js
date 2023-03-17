ipcMain.on('get-system-info', event => {
    // on remplira ça plus tard
console.log('get-system-info called')
event.reply('system-info', { // on notera le nom different que nous utiliserons pour recuperer l'info du front
      platform: process.platform,
      version: process.version,
      cpuUsage: process.getCPUUsage(),
      memoryUsage: process.getSystemMemoryInfo(),
      systemVersion: process.getSystemVersion()
    })
})