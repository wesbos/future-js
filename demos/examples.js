/* eslint-disable */

function yum() {


  // kick off both things, one after another
  const coffeePromise = makeCoffee();
  const breakfastPromise = makeBreakfast();

  // then once each are done, deal with them
  coffeePromise.then(coffee => {
    drinkCoffee();
  });

  breakfastPromise.then(([eggs, bacon]) => {
    eat(eggs, bacon);
  });

  // You can also wait until both are done
  Promise
    .all([coffeePromise, breakfastPromise])
    .then(([coffee, breakfast]) => {
      sitDownWith(coffee, breakfast);
    });




}


makeBreakfast(function () {
  makeCoffee(function () {
    eatBreakfast(function () {
      drinkCoffee(function () {
        cleanUp(function () {
          // Finally done and it's time for lunch
        });
      });
    });
  });
}); // wtf




fetch('http://cooldogs.org')
  .then(data => data.json())
  .then(dogs => pet(dogs));



axios.get('http://cooldogs.org')
  .then(dogs => pet(dogs));


moveTo(50, 50, function () {
  moveTo(20, 100, function () {
    moveTo(100, 200, function () {
      moveTo(2, 10, function () {
        // done
      });
    });
  });
});

// becomes

moveTo(50, 50)
  .then(() => moveTo(20, 100))
  .then(() => moveTo(100, 200))
  .then(() => moveTo(2, 10))

// becomes

async function animate() {
  await moveTo(50, 50);
  await moveTo(20, 100);
  await moveTo(100, 200);
  await moveTo(2, 10);
}



const getDetails = async function () {
  const wes = await axios.get('https://api.github.com/users/wesbos');
  const scott = await axios.get('https://api.github.com/users/stolinski');
  const html = `
          <h1>${wes.name}</h1>
          <h1>${scott.name}</h1>
        `;
}

const getDetails = async function () {
  // Fire Both off
  const wesPromise = axios.get('https://api.github.com/users/wesbos');
  const scottPromise = axios.get('https://api.github.com/users/stolinski');
  // and wait to both to come back
  const [wes, scott] = await Promise.all([wesPromise, scottPromise]);
  const html = `
          <h1>${wes.name}</h1>
          <h1>${scott.name}</h1>
        `;
}


