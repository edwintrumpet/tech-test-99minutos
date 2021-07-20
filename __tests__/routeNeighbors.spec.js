const { basePath } = require('../src/config');
const { mock1, mock2, mock3 } = require('../src/utils/mocks');
const routes = require('../src/routes');
const testServer = require('../src/utils/testServer');

const request = testServer(routes);

describe('route /neighbors', () => {
  const path = '/neighbors';
  const url = basePath + path;

  it('Should return status 200', () => request
    .post(url)
    .send({
      toTree: mock1,
      node: 8,
    })
    .then((response) => expect(response.statusCode).toBe(200)));

  it('Should return status 404 if node is not in tree', () => request
    .post(url)
    .send({
      toTree: mock1,
      node: 4,
    })
    .then((response) => expect(response.statusCode).toBe(404)));

  it('Should return a valid message error if node is not in tree',
    () => request
      .post(url)
      .send({
        toTree: mock1,
        node: 4,
      })
      .then((response) => expect(response.body.message)
        .toBe('Node is not found in tree')));

  it('Should return valid neighbors with mock1', () => request
    .post(url)
    .send({
      toTree: mock1,
      node: 8,
    })
    .then((response) => expect(response.body.neighbors).toEqual({
      left: null,
      right: null,
    })));

  it('Should return valid neighbors with mock2', () => request
    .post(url)
    .send({
      toTree: mock2,
      node: 9,
    })
    .then((response) => expect(response.body.neighbors).toEqual({
      left: -7,
      right: null,
    })));

  it('Should return valid neighbors with mock3', () => request
    .post(url)
    .send({
      toTree: mock3,
      node: -23,
    })
    .then((response) => expect(response.body.neighbors).toEqual({
      left: -29,
      right: -12,
    })));

  it('Bad request should return status 400', () => request
    .post(url)
    .send({
      toTree: mock3,
      node: 'node',
    })
    .then((response) => expect(response.statusCode).toBe(400)));

  it('Bad request should return error message', () => request
    .post(url)
    .send({
      toTree: mock3,
      node: 'node',
    })
    .then((response) => expect(response.body.message)
      .toBe('"node" must be a number')));
});
