export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';

export const getAllCharacters = () => {
  return async function(dispatch) {
    return fetch(`https://breakingbadapi.com/api/characters`)
    .then(response => response.json())
    .then(characters => dispatch({ type: GET_ALL_CHARACTERS, payload: characters }))
  }
}

export const getCharacterDetail = (id) => {
  return async function(dispatch) {
    return fetch(`https://breakingbadapi.com/api/characters/${id}`)
    .then(response => response.json())
    .then(character => dispatch({ type: GET_CHARACTER_DETAIL, payload: character }))
  }
}

let id = 116;

export const createCharacter = (character) => {
  id++;
  return {
    type: CREATE_CHARACTER,
    payload: { ...character, id},
  }
}

export const deleteCharacter = (id) => {
  return {
    type: DELETE_CHARACTER,
    payload: id,
  }
}
