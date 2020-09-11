const fs = require('fs');
const pool = require('../lib/utils/pool');
// const request = require('supertest');
// const app = require('../lib/app');

const getName = require('../lib/functions');


describe('lab01 routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('should return the name from an object', async() => {
    const testObject = { name: 'craig', age: 55 };
    const name = await getName(testObject);
    expect(name).toEqual('craig');
  });
});
