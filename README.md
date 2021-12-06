## Friendly Laravel Mix

### Why?
This library was created with aim simplify the use of Laravel Mix, because its was a constant problem in my work. Then thinking in good solution i create this librabry for this.

### Install
The installation is very simple, you need the npm installed in your system, if you already have installed run this code:
- npm install friendly-laravel-mix <br/>
```bash
npm install friendly-laravel-mix
```

### Starting Use
Start by calling the module <br/>
```js
const Friendly = require('friendly-laravel-mix')
```

### Defining new path to use <br/>
```js
Friendly.addFolder('foo', 'resources/js', 'public/js')
```
<br/>
The first parameter is a name you use to call the path. <br/>
The second parameter is path to folder where you save yours styles and scripts files. <br/>
The third parameter is optional and is the destiny path where you will save your copiled styles and scripts.

### Defining files
Now you just need to call the method. <br/>
```js
 Friendly.foo.scripts('script-1')
 Friendly.foo.js('script-2')
```
#### OBS:
-The default location to save your copiled file is folder 'public/your-defined-folder' but if you need to change this call the method setDestiny('path-to-destiny') before defining yours folders path, look the example below: <br/>
```js
Friendly.setDestiny('public/assets')
```
### Available Methods

#### Folder methods
- After define your paths the available methods is:
  - scripts(js-file-name); //Similar use to Laravel Mix
    ```js
    Friendly.foo.scripts('file-name')
    ```
  - js(js-file-name); //Similar use to Laravel Mix
    ```js
    Friendly.foo.js('file-name')
    ```
  - sass(sass-file-name); //Similar use to Laravel Mix
    ```js
    Friendly.foo.sass('file-name')
    ```
  - scss(scss-file-name); //Similar use to sass method in Laravel Mix
    ```js
    Friendly.foo.scss('file-name')
    ```
  - vue('js-file-name'); //Similar use to js method but this method add .vue in js file.
    ```js
    Friendly.foo.vue('file-name') // equivalent to mix.js().vue
    ```

#### Class methods
- version() // Similar use to Laravel Mix
```js
Friendly.version()
```

-getMix() // Return Laravel Mix instance
```js
Friendly.getMix()

//Use example
Friendly.getMix().webpackConfig({...})
```

(you don't need to pass the file extension)
