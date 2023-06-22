import { Packer } from './packer';

if (process.argv.length !== 3) {
  console.log('Usage: node index.js <input_file_path>');
  process.exit(1);
}

const filePath = process.argv[2];
try {
  const result = Packer.pack(filePath);
  console.log(result);
} catch (error: any) {
  console.error('Error:', error.message);
}
