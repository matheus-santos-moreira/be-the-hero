const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('shoudl generate an unique id', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8)
  });
});