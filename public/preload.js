const { contextBridge, ipcRenderer } = require("electron");


process.once('loaded', () => {
  contextBridge.exposeInMainWorld('versions', process.versions)
  contextBridge.exposeInMainWorld('dialog', {
    requestSystemInfo: () => ipcRenderer.send('get-system-info'),
    open: () => {
      ipcRenderer.send('open-file-dialog');
    },
    getFilePath: (setState) => {
      ipcRenderer.on('selected-file', (event, path) => setState(`safe-file://${path}` ))
    },
    removeEventListener: () => {
      ipcRenderer.removeAllListeners('selected-file')
    }
  })
})
		// getSystemInfo: (setState) => // on ajoute ici un parametre qui sera une fonction setState envoyée par le 
    // const {
    //   requestSystemInfo,
    //   getSystemInfo,
    // } = window.electron
  
    // const [systemInfo, setSystemInfo] = useState(null) // on ajoute une state
  
    // const getAllInfo = async () => {
    //   await requestSystemInfo()
    //   getSystemInfo(setSystemInfo) // on ajoute le setState dans la méthode getSystemInfo
    // }
  
    // useEffect(() => {
    //   getAllInfo()
    // }, [])
  
    // useEffect(() => {
    //   console.log(systemInfo) // ici on affiche bien les infos de la state
    // }, 
    // [systemInfo])
    // ipcRenderer.on('system-info', (event, info) => {
    //   console.log('info', info)
    //   setState(info) // on set la state avec les infos et on peux ainsi récupérer correctement les infos.
    // })