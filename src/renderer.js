const electron = require('electron')
const ipc = electron.ipcRenderer

document.getElementById('upload').addEventListener('click', _ =>{
  ipc.send('upload-start')
})

ipc.on('upload', (evt, status) => {
  document.getElementById('count').innerHTML = status;
})
