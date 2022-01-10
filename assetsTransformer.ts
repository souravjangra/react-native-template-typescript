import { basename } from 'path';

const process = (filename: string) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  `module.exports = ${JSON.stringify(basename(filename))};`;

export default process;
