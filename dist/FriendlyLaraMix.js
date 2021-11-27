const mix = require('laravel-mix')
class FriendlyLaraMix
{
    constructor ()
    {
        this.destiny = 'public/'
    }

    addFolder(name, folder)
    {
        let destiny = this.getDestiny()

        this[name] = {
            scripts: function (fileName) 
            {
                mix.scripts(`${folder}/${fileName}.js`, `${destiny}js/${folder}/${fileName}.js`)
            },

            js: function (fileName) 
            {
                mix.js(`${folder}/${fileName}.js`, `${destiny}js/${folder}/${fileName}.js`)
            },

            sass: function (fileName) 
            {
                mix.sass(`${folder}/${fileName}.sass`, `${destiny}css/${folder}/${fileName}.css`)
            },

            scss: function (fileName) 
            {
                mix.sass(`${folder}/${fileName}.scss`, `${destiny}css/${folder}/${fileName}.css`)
            }
        }
    }

    version ()
    {
        mix.version()
    }

    setDestiny(pathDestiny)
    {
        this.destiny = `${pathDestiny}/`
    }

    getDestiny()
    {
        return this.destiny
    }
}

module.exports = new FriendlyLaraMix