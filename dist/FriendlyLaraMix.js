const mix = require('laravel-mix')
class FriendlyLaraMix
{
    constructor ()
    {
        this.destiny = 'public/'
    }

    addFolder(name, folder)
    {
        this[name] = {
            scripts: function (fileName) 
            {
                mix.scripts(`${folder}/${fileName}.js`, `${this.destiny}js/${folder}/${fileName}.js`)
            },

            js: function () 
            {
                mix.js(`${folder}/${fileName}.js`, `${this.destiny}js/${folder}/${fileName}.js`)
            },

            sass: function () 
            {
                mix.sass(`${folder}/${fileName}.sass`, `${this.destiny}css/${folder}/${fileName}.css`)
            },

            scss: function () 
            {
                mix.sass(`${folder}/${fileName}.scss`, `${this.destiny}css/${folder}/${fileName}.css`)
            }
        }
    }

    setDestiny(pathDestiny)
    {
        this.destiny = `${pathDestiny}/`
    }
}

module.exports = new FriendlyLaraMix