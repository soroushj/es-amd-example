define(
  'main',
  ['pets'],
  function (pets) {
    console.log(pets.cat('Milo'));
    console.log(pets.dog('Lily'));
  }
);
