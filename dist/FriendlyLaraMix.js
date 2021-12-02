const mix = require('laravel-mix')
class FriendlyLaraMix
{
    constructor ()
    {
        this.destiny = 'public/'
    }

    addFolder(name, folder, destiny = undefined)
    {
        this[name] = {
            scripts: function (fileName) 
            {
                if (destiny !== undefined)
                    mix.scripts(`${folder}/${fileName}.js`, `${destiny}/${fileName}.js`)
                else
                    mix.scripts(`${folder}/${fileName}.js`, `${this.getDestiny('js')}/${folder}/${fileName}.js`)
            },

            js: function (fileName) 
            {
                if (destiny !== undefined)
                    mix.js(`${folder}/${fileName}.js`, `${destiny}/${fileName}.js`)
                else
                    mix.js(`${folder}/${fileName}.js`, `${this.getDestiny('js')}/${folder}/${fileName}.js`)
            },
            
            vue: function (fileName) 
            {
                if (destiny !== undefined)
                    mix.js(`${folder}/${fileName}.js`, `${destiny}/${fileName}.js`).vue()
                else
                    mix.js(`${folder}/${fileName}.js`, `${this.getDestiny('js')}/${folder}/${fileName}.js`).vue()
            },
            
            sass: function (fileName) 
            {
                if (destiny !== undefined)
                    mix.sass(`${folder}/${fileName}.sass`, `${destiny}/${fileName}.css`)
                else
                    mix.sass(`${folder}/${fileName}.sass`, `${this.getDestiny('css')}/${folder}/${fileName}.css`)
            },

            scss: function (fileName) 
            {
                if (destiny !== undefined)
                    mix.sass(`${folder}/${fileName}.scss`, `${destiny}/${fileName}.css`)
                else
                    mix.sass(`${folder}/${fileName}.scss`, `${this.getDestiny('css')}/${folder}/${fileName}.css`)
            }
        }
    }

    getMix()
    {
        return mix
    }

    version ()
    {
        mix.version()
    }

    setDestiny(pathDestiny)
    {
        this.destiny = `${pathDestiny}/`
    }

    getDestiny(aditional = '')
    {
        return this.destiny + aditional
    }
}

module.exports = new FriendlyLaraMix
