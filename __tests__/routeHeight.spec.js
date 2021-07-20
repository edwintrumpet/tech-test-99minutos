const { basePath } = require('../src/config');
const { mock1, mock2, mock3 } = require('../src/utils/mocks');
const routes = require('../src/routes');
const testServer = require('../src/utils/testServer');

const request = testServer(routes);

describe('route /height', () => {
  const path = '/height';
  const url = basePath + path;

  it('Should return status 200', () => request
    .post(url)
    .send({ toTree: mock1 })
    .then((response) => expect(response.statusCode).toBe(200)));

  it('Should return a valid height with mock1', () => request
    .post(url)
    .send({ toTree: mock1 })
    .then((response) => expect(response.body.height).toBe(5)));

  it('Should return a valid height with mock2', () => request
    .post(url)
    .send({ toTree: mock2 })
    .then((response) => expect(response.body.height).toBe(5)));

  it('Should return a valid height with mock3', () => request
    .post(url)
    .send({ toTree: mock3 })
    .then((response) => expect(response.body.height).toBe(3)));

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
