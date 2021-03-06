const fs = require('fs');
const pool = require('../lib/utils/pool');
// const request = require('supertest');
// const app = require('../lib/app');

const getName = require('../lib/getName');
const copyAndPush = require('../lib/copyAndPush');
const capitalizeAndFilter = require('../lib/capitalizeAndFilter');
const fetchQuotes = require('../lib/fetchQuotes');


describe('lab01 routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('should return the name from an object', async() => {
    const testObject = { name: 'craig', age: 55 };
    const name = await getName(testObject);

    expect(name).toEqual('craig');
  });

  it('should copy original array and push new item into new array', async() => {
    const array = [1, 2, 3];
    const newArray = await copyAndPush(array, [4]);

    expect(array).toEqual([1, 2, 3]);
    expect(newArray).toEqual([1, 2, 3, 4]);
  });

  it('should take in an array capitalize and filter strings that begin with f', async() => {
    const strings = ['hi', 'i', 'am', 'fred', 'geoff'];
    const filteredStrings = await capitalizeAndFilter(strings);

    expect(filteredStrings).toEqual(['HI', 'I', 'AM', 'GEOFF']);
  });

  it('get the quotes ', async() => {

    expect('quote').toEqual(expect.any(String));
  });
});
