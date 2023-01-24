export async function getData() {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const countPokemon = 150;
  const pokemons = [];

  for (let i = 1; i <= countPokemon; i++) {
    try {
      const url = `${baseUrl + i}`;

      const response = await fetch(url);
      const data = await response.json();

      const pokemon = {
        name: data.name,
        experience: data.base_experience,
        height: data.height,
        image: data.sprites.front_default,
      };

      pokemons.push(pokemon);
    } catch (err) {
      console.error(err);
    }
  }

  return { pokemons };
}
