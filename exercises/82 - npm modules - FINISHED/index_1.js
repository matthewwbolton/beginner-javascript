import wait from "waait";
import { name } from "faker";
import { formatDistance, format } from "date-fns";
import axios from "axios";
import { intersection } from "lodash";
import to from "await-to-js";

const fakeNames = Array.from({ length: 10 }, () => {
  return `${name.firstName()} ${name.lastName()}`;
});

async function go() {
  console.log("Going!");
  await wait(200);
  console.log("Ending!");
}

const diff = formatDistance(
  new Date(1986, 3, 4, 11, 32, 0),
  new Date(1986, 3, 4, 10, 32, 0),
  { addSuffix: true }
);

console.log(diff);

const date = new Date();

// January the 12th 2020
const formatted = format(date, `LLLL 'the' do y`);
console.log(formatted);

async function getJoke() {
  const { data } = await axios.get(`https://icanhazdadjoke.com`, {
    headers: { Accept: "application/json" },
  });
  console.log(data);
}

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [5, 3, 8, 3, 7, 453, 34];
const inBoth = intersection(a, b);
console.log(inBoth);

getJoke();

go();

const checkIfNameIsCool = (firstName) => {
  return new Promise(function(resolve, reject) {
    if (firstName === "matt") {
      return resolve(`Cool name ${firstName}`);
    }
    reject(new Error(`Your name is not cool!`));
  });
};

const checkName = async () => {
  const [error, successValue] = await to(checkIfNameIsCool("jess"));
  if (error) {
    // Deal with the error
    console.log(error);
  } else {
    console.log(successValue);
  }
};

checkName();
