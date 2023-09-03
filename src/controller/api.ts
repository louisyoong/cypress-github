const API_URL = "https://rickandmortyapi.com/api";

export async function fetchCharacters() {
  const response = await fetch(`${API_URL}/character`);
  const data = await response.json();
  return data.results;
}

export async function fetchCharacterId(id: string) {
  const response = await fetch(`${API_URL}/character/${id}`);
  const data = await response.json();
  return data;
}

export async function fetchEpisodes() {
  const response = await fetch(`${API_URL}/episode`);
  const data = await response.json();
  return data.results;
}
