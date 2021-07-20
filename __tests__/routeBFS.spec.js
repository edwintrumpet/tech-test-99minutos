const { basePath } = require('../src/config');
const { mock1, mock2, mock3 } = require('../src/utils/mocks');
const routes = require('../src/routes');
const testServer = require('../src/utils/testServer');

const request = testServer(routes);

describe('route /bfs', () => {
  const path = '/bfs';
  const url = basePath + path;

  it('Should return status 200', () => request
    .post(url)
    .send({ toTree: mock1 })
    .then((response) => expect(response.statusCode).toBe(200)));

  it('Should return a valid bfs with mock1', () => request
    .post(url)
    .send({ toTree: mock1 })
    .then((response) => expect(response.body.bfs)
      .toEqual([9, 6, 11, 2, 8, 13, 0, 12, 17, 18])));

  it('Should return a valid bfs with mock2', () => request
    .post(url)
    .send({ toTree: mock2 })
    .then((response) => expect(response.body.bfs)
      .toEqual([9, -7, -2, -5, 5, -4])));

  it('Should return a valid bfs with mock3', () => request
    .post(url)
    .send({ toTree: mock3 })
    .then((response) => expect(response.body.bfs)
      .toEqual([-23, -29, -12, -27])));

  it('Bad request should return status 400', () => request
    .post(url)
    .send({ toTree: 'tree' })
    .then((response) => expect(response.statusCode).toBe(400)));

  it('Bad request should return error message', () => request
    .post(url)
    .send({ toTree: 'tree' })
    .then((response) => expect(response.body.message)
      .toBe('"toTree" must be an array')));
});
