import { API_HOST } from "../utils/constant";

export function getUserTweetsApi(searchSong) {
  const url = `${API_HOST}term=$${searchSong}&limit=24&entity=song`;

  const params = {
    headers: {
      "Content-Type": "application/json"
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
}