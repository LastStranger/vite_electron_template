const { app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

const isDev = process.env.IS_DEV === "true";
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    if (isDev) {
        mainWindow.loadURL("http://localhost:3000");
        mainWindow.webContents.openDevTools();
    } else {
        // mainWindow.webContents.openDevTools();
        mainWindow.loadFile(path.join(__dirname, "build", "index.html"));
    }
    ipcMain.handle('ping',() => 'ping tong');
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
