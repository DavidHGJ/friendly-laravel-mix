## Friendly Laravel Mix

### Why?
This library was created with aim simplify the use of Laravel Mix, because its was a constant problem in my work. Then thinking in good solution i create this librabry for this.

### Install
The installation is veryh simple, you need the npm installed in your system, if you already have installed run this code:
- npm install friendly-laravel-mix <br/>
![image](https://user-images.githubusercontent.com/69371953/143684584-bf2f84e2-4707-4768-af21-f15d4df18328.png)

### Starting Use
Start by calling the module <br/>
![image](https://user-images.githubusercontent.com/69371953/143684682-045aca6a-7983-49eb-9503-3a9b87f9ac83.png)

### Defining new path to use <br/>
![image](https://user-images.githubusercontent.com/69371953/143684720-4ddef3d1-c5e7-44c0-96a3-bc3972538c8b.png)
The first parameter is a name you use to call the path.
The second parameter is path to folder where you save yours styles and scripts files.

### Defining files
Now you just need to call the method. <br/>
![image](https://user-images.githubusercontent.com/69371953/143684959-88e39d79-d717-46eb-ab91-9dbe2b64fe41.png)

#### OBS:
-The default location to save your copiled file is folder 'public/your-defined-folder' but if you need to change this call the method setDestiny('path-to-destiny') before defining yours folders path, look the example bottom: <br/>
![image](https://user-images.githubusercontent.com/69371953/143685132-4bb3a3e9-074d-4e58-8593-dfd27129c1b1.png)

### Available Methods

#### Folder methods
- After define your paths the available methods is:
  - scripts(js-file-name); //Similar use to Laravel Mix 
  - js(js-file-name); //Similar use to Laravel Mix 
  - sass(sass-file-name); //Similar use to Laravel Mix 
  - scss(scss-file-name); //Similar use to sass method in Laravel Mix

#### Class methods
- version() // Similar use to Laravel Mix

(you don't need to pass the file extension)
