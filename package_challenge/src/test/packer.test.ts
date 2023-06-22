import { expect } from 'chai';
import { Packer } from '../packer';

describe('Packer', () => {
  it('should return the correct output for a single test case', () => {
    const filePath = './../example_input';
    const expectedOutput = '4\n-\n2,7\n8,9';

    const result = Packer.pack(filePath);

    expect(result).to.equal(expectedOutput);
  });
});
