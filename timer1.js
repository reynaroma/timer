const slicedArgv = process.argv.slice(2);
const arr = slicedArgv.sort((a, b) => a - b)

let ms = 0;

for (const time of arr) {
  if (time <= 0 || isNaN(time)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write(`\r${time} seconds`);
    process.stdout.write('\x07');
  }, ms);
  ms += 2000;

  setTimeout(() => {
    process.stdout.write('\n');
  }, ms);
};