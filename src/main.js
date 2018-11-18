const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu

const detectUSB = require('./detectUSB');

let mainWindow

app.on('ready', _ => {
  mainWindow = new BrowserWindow({
    height: 800,
    width:800
  })

  mainWindow.loadURL(`file://${__dirname}/homepage.html`)
  mainWindow.on('closed', _ => {
    mainWindow = null
  })
});
