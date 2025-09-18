
export async function getProducts(offset = 0, limit = 30) {
  const API_URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Error al cargar los Pokémon');
  const data = await response.json();
  const pokemons = await Promise.all(
    data.results.map(async (poke) => {
      const res = await fetch(poke.url);
      const details = await res.json();
      return {
        id: details.id,
        name: details.name,
        image: details.sprites.other['official-artwork'].front_default,
        price: details.id, 
        description: `Tipo: ${details.types.map(t => t.type.name).join(', ')}`,
        types: details.types.map(t => t.type.name)
      };
    })
  );
  return pokemons;
}
