// application menu
'use strict'

const {app, Menu} = require('electron')

const pkg = require('../package.json')

// file or application menu
const firstMenu = {
  label: 'File',
  submenu: [
    {role: 'quit'}
  ]
}

if (process.platform === 'darwin') {
  // if mac, first menu is application menu
  Object.assign(firstMenu, {
    label: app.getName(),
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'}
    ].concat(firstMenu.submenu)
  })
}

const editMenu = {
  label: 'Edit',
  submenu: [
    {role: 'cut'},
    {role: 'copy'},
    {role: 'paste'},
    {role: 'selectall'}
  ]
}

const viewMenu = {
  label: 'View',
  submenu: [
    {role: 'reload'},
    {role: 'forcereload'},
    {type: 'separator'},
    {role: 'togglefullscreen'}
  ]
}

const windowMenu = {
  role: 'window',
  submenu: [
    {role: 'minimize'},
    {type: 'separator'},
    {role: 'front'}
  ]
}

const helpMenu = {
  role: 'help',
  submenu: [
    {
      label: 'Learn More',
      click: () => {
        require('electron').shell.openExternal('https://opentrons.com/')
      }
    },
    {
      label: 'Report an Issue',
      click: () => {
        require('electron').shell.openExternal(pkg.bugs.url)
      }
    }
  ]
}

const template = [firstMenu, editMenu, viewMenu, windowMenu, helpMenu]

module.exports = function initializeMenu () {
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}
