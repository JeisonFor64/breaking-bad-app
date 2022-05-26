import { GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL, CREATE_CHARACTER, DELETE_CHARACTER } from "../actions";

const initialState = {
  characters: [],
  characterDetail: {},
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return { ...state, characters: action.payload }

    case GET_CHARACTER_DETAIL:
      return { ...state, characterDetail: action.payload }

    case CREATE_CHARACTER:
      return { ...state, characters: [...state.characters, action.payload] }

    case DELETE_CHARACTER:
      return { ...state, characters: state.characters.filter((c) => c.char_id !== action.payload) };
  
    default:
      return { ...state};
  }
}

export default rootReducer;