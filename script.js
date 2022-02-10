const array = [];
let i = 0;

function loop() {
  console.log(array);

  if (array.length < 10) {
    array.unshift(i);
  } else {
    array.unshift(i);
    array.pop(-1);
  }

  setTimeout(() => {
    i++;
    loop();
  }, 1000);
}

loop();
