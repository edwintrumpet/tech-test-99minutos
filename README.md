<h1 align="center">Technical test for 99 minutos</h1>

<p align="center">
  <img src="https://github.com/edwintrumpet/tech-test-99minutos/workflows/CI/badge.svg" alt="Tests badge">
</p>

<p align="center">
  <img
    src="https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/express/express-original.svg"
    alt="express" width="40" height="40"
  />
  <img
    src="https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/github/github-original.svg"
    alt="github" width="40" height="40"
  />
  <img
    src="https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/javascript/javascript-original.svg"
    alt="javascript" width="40" height="40"
  />
  <img
    src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/jest/jest-plain.svg"
    alt="jest" width="40" height="40"
  />
</p>

REST API for 99 minutos

Service available on https://ninety-nine-minutos-tech-test.herokuapp.com/

## Develop

You must have Node.js v14 installed

Create `.env` file as `.env.example`

To run in develop mode

```shell
npm run dev
```

To run in production mode

```shell
npm start
```

This execute an API REST on `localhost:${process.env.PORT}`

To execute tests

```shell
npm test
```

## Usage

### Endpoints

---
**path:** `/`  
**method:** GET  
**description:** This endpoint returns a message that indicates if API is
working  
**response:**
```json
{
  "message": "99 minutos app test works!"
}
```

---
**path:** `/v1/b-trees/height`  
**method:** POST  
**description:** This endpoint receives an array of numbers and converts it to a
binary tree to return the height of the tree  
**body:**
```json
{
  "toTree":[9, 11, 13, 6, 12, 17, 8, 18, 2, 0]
}
```
**response:**
```json
{
  "height": 5
}
```

---
**path:** `/v1/b-trees/neighbors`  
**method:** POST  
**description:** This endpoint receives an array of numbers and a node.
convert the array to a binary tree and find node in tree to return its
neighbors  
**body:**
```json
{
  "toTree":[9, 11, 13, 6, 12, 17, 8, 18, 2, 0],
  "node": 9
}
```
**response:**
```json
{
  "neighbors": {
    "left": 6,
    "right": 11
  }
}
```

---
**path:** `/v1/b-trees/bfs`  
**method:** POST  
**description:** This endpoint receives an array of numbers and converts it to a
binary tree to return an array of tree nodes readed breadth first transversal  
**body:**
```json
{
  "toTree":[9, 11, 13, 6, 12, 17, 8, 18, 2, 0]
}
```
**response:**
```json
{
  "bfs": [9, 6, 11, 2, 8, 13, 0, 12, 17, 18]
}
```

---

### Error response

All errors have the same structure

This is the Node not found in tree error for develop mode

```json
{
  "statusCode": 404,
  "error": "Not Found",
  "message": "Node is not found in tree",
  "stack": "Error: Node is not found in tree\n    at Tree.getNode..."
}
```

This is the Node not found in tree error for production mode

```json
{
  "statusCode": 404,
  "error": "Not Found",
  "message": "Node is not found in tree"
}
```
### Building tree

The first element on array is the head of the tree, following element is
located on the right if it's bigger than the head or on the left if it's lower.

If right or left is already filled, it will be positioned the same with respect to that node.

## Author

Edwin García  
spark.com.co@gmail.com

## License

[MIT](./LICENSE)
