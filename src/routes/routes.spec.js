const routes = require('.');
const testServer = require('../utils/testServer');

const request = testServer(routes);

describe('Routes', () => {
  const mock1 = [9, 11, 13, 6, 12, 17, 8, 18, 2, 0];
  const mock2 = [9, -7, -2, 5, -5, -4];
  const mock3 = [-23, -29, -27, -12];

  describe('/height', () => {
    it('Should return status 200', () => request
      .post('/v1/b-trees/height')
      .send({ toTree: mock1 })
      .then((response) => expect(response.statusCode).toBe(200)));

    it('Should return a valid height with mock1', () => request
      .post('/v1/b-trees/height')
      .send({ toTree: mock1 })
      .then((response) => expect(response.body.height).toBe(5)));

    it('Should return a valid height with mock2', () => request
      .post('/v1/b-trees/height')
      .send({ toTree: mock2 })
      .then((response) => expect(response.body.height).toBe(5)));

    it('Should return a valid height with mock3', () => request
      .post('/v1/b-trees/height')
      .send({ toTree: mock3 })
      .then((response) => expect(response.body.height).toBe(3)));
  });

  describe('/neighbors', () => {
    it('Should return status 200', () => request
      .post('/v1/b-trees/neighbors')
      .send({
        toTree: mock1,
        node: 8,
      })
      .then((response) => expect(response.statusCode).toBe(200)));

    it('Should return status 404 if node is not in tree', () => request
      .post('/v1/b-trees/neighbors')
      .send({
        toTree: mock1,
        node: 4,
      })
      .then((response) => expect(response.statusCode).toBe(404)));

    it('Should return a valid message error if node is not in tree',
      () => request
        .post('/v1/b-trees/neighbors')
        .send({
          toTree: mock1,
          node: 4,
        })
        .then((response) => expect(response.body.message)
          .toBe('Node is not found in tree')));

    it('Should return valid neighbors with mock1', () => request
      .post('/v1/b-trees/neighbors')
      .send({
        toTree: mock1,
        node: 8,
      })
      .then((response) => expect(response.body.neighbors).toEqual({
        left: null,
        right: null,
      })));

    it('Should return valid neighbors with mock2', () => request
      .post('/v1/b-trees/neighbors')
      .send({
        toTree: mock2,
        node: 9,
      })
      .then((response) => expect(response.body.neighbors).toEqual({
        left: -7,
        right: null,
      })));

    it('Should return valid neighbors with mock3', () => request
      .post('/v1/b-trees/neighbors')
      .send({
        toTree: mock3,
        node: -23,
      })
      .then((response) => expect(response.body.neighbors).toEqual({
        left: -29,
        right: -12,
      })));
  });

  describe('/bfs', () => {
    it('Should return status 200', () => request
      .post('/v1/b-trees/bfs')
      .send({ toTree: mock1 })
      .then((response) => expect(response.statusCode).toBe(200)));

    it('Should return a valid bfs with mock1', () => request
      .post('/v1/b-trees/bfs')
      .send({ toTree: mock1 })
      .then((response) => expect(response.body.bfs)
        .toEqual([9, 6, 11, 2, 8, 13, 0, 12, 17, 18])));

    it('Should return a valid bfs with mock2', () => request
      .post('/v1/b-trees/bfs')
      .send({ toTree: mock2 })
      .then((response) => expect(response.body.bfs)
        .toEqual([9, -7, -2, -5, 5, -4])));

    it('Should return a valid bfs with mock3', () => request
      .post('/v1/b-trees/bfs')
      .send({ toTree: mock3 })
      .then((response) => expect(response.body.bfs)
        .toEqual([-23, -29, -12, -27])));
  });
});
