const { app, BrowserWindow } = require("electron");
const path = require("path");
require("electron-reload")(__dirname);
//Electron is imported for application

let mainWindow;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  mainWindow = new BrowserWindow({
    frame: false,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
 //mainwindow for program is created and disbales security defense for the unknown software 

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

//uses the mainwindow as the application from the index.html file 


