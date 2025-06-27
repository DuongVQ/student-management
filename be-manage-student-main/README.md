# Getting Started 

This project is backend for student-management-website.

## Available Scripts

In the project directory, you can run:

### `npm install`
Setting all librarys displayed in package.json

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Directory structure
- node_modules: library of nodejs and you shouldn't push them to github
- src: 
    + config: database connection
    + controllers: include about functions to general process
    + migration: manage and change database structure
    + models: application data processing
    + routes: define endpoint api
    + seeder: fake data
    + services: configuration expressjs, config template, declare route
- .ignore: not allowed some folder can push to github
- .env: define somethings (port, db, name,...)
- .sequelizerc: used to specify the paths of important folders in the project
- Dockerfile: use for docker
- index.js: configure the backend
- package.json: include library of nodejs

![activity stream](/public/images/ac.png)

## How to build Docker
- Create file `Dockerfile` to build project
- Create file: `.dockerignore` to not allow push `Dockerfile` to Git
- In the folder inclues `Dockerfile`:
```bash
  # create image
  docker build -t backend .

  # run
  docker run -d -p 4000:4000 backend

  # stop
  docker stop <NAME> 
  
  # remove
  docker rm <NAME>

  # display list container
  docker ps

  # display image
  docker images

  # remove image
  docker rmi <Repository> || docker rmi -f <Repository> 
```

## Logic of backend

### Create
![activity stream](/public/images/create.png)

### Update
![activity stream](/public/images/update.png)

### Delete
![activity stream](/public/images/delete.png)

## API running

#-H(Header): used to send additional information in the HTTP header
#-d(data): used to send data in the body of an HTTP request

### Get all api
curl http://localhost:4000/students

### Create api
curl -X POST http://localhost:4000/students \
  -H "Content-Type: application/json" \
  -d '{"ten":"Nguyễn Văn A","tuoi":20,"dia_chi":"Hà Nội"}'

### Update api
curl -X PUT http://localhost:4000/students/1 \
  -H "Content-Type: application/json" \
  -d '{"ten":"Trần Văn B","tuoi":21,"dia_chi":"Đà Nẵng"}'

### Delete api
curl -X DELETE http://localhost:4000/students/1

