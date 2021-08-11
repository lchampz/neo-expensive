import {
  app,
  BrowserWindow,
  nativeImage,
  Menu,
  shell,
  MenuItemConstructorOptions
} from 'electron';
import { autoUpdater } from 'electron-updater';
import * as path from 'path';
import * as url from 'url';

import i18n from '../i18n';
import {
  getWindowBounds,
  setWindowBounds
} from '../src/utils/windowBoundsController';

export let mainWindow: Electron.BrowserWindow | null;
let splash: Electron.BrowserWindow | null;

function createWindow() {
  const icon = nativeImage.createFromPath(`${app.getAppPath()}/build/icon.png`);

  if (app.dock) {
    app.dock.setIcon(icon);
  }

  mainWindow = new BrowserWindow({
    ...getWindowBounds(),
    icon,
    minWidth: 1000,
    minHeight: 600,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  // splash = new BrowserWindow({
  //   width: 286,
  //   height: 286,
  //   transparent: true,
  //   frame: false,
  //   resizable: false,
  //   alwaysOnTop: true
  // });

  mainWindow.loadURL('http://localhost:4000');
  // splash.loadURL('http://localhost:3000/splash');
  // mainWindow.loadURL('http://localhost:3000');
  // mainWindow.loadURL(
  //   'https://esquemaflorescer.github.io/neo-expensive/packages/web/'
  // );
  // if (process.env.NODE_ENV === 'development') {
  //   mainWindow.loadURL('http://localhost:4000')
  // } else {
  // mainWindow.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, 'renderer/index.html'),
  //     protocol: 'file:',
  //     slashes: true
  //   })
  // )
  // }

  /** create custom rule for darwin */

  mainWindow.on('close', () => {
    setWindowBounds(mainWindow?.getBounds());
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.webContents.session.webRequest.onHeadersReceived(
    { urls: ['*://*/*'] },
    (d, c) => {
      if (d.responseHeaders!['X-Frame-Options']) {
        delete d.responseHeaders!['X-Frame-Options'];
      } else if (d.responseHeaders!['x-frame-options']) {
        delete d.responseHeaders!['x-frame-options'];
      }

      c({ cancel: false, responseHeaders: d.responseHeaders });
    }
  );
}

async function createMenu() {
  await i18n.loadNamespaces('applicationMenu');

  const template: MenuItemConstructorOptions[] = [
    {
      label: 'Rocketredis',
      submenu: [
        {
          label: i18n.t('applicationMenu:newConnection'),
          accelerator: 'CmdOrCtrl+N',
          click: () => {
            mainWindow?.webContents.send('newConnection');
          }
        },
        {
          type: 'separator'
        },
        {
          label: i18n.t('applicationMenu:exit'),
          role: 'quit',
          accelerator: 'CmdOrCtrl+Q'
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: () => {
            shell.openExternal('https://github.com/diego3g/rocketredis/');
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.on('ready', () => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();
  createMenu();
});

app.allowRendererProcessReuse = true;
