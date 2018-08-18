import * as charactersConstants from '../constants/characters';

const initialState = {
    userCharacters: [],
    character: {},
    errors: [],
    isListRequestPending: true,
    isDetailRequestPending: true
};

export default (state = initialState, {type, data}) => {
    switch (type) {
        case charactersConstants.UPDATE_USER_CHARACTERS_REQUEST_SENT:
            return {...state, userCharacters: [], errors: [], isListRequestPending: true};

        case charactersConstants.UPDATE_USER_CHARACTERS_REQUEST_OK:
            return {...state, userCharacters: data, errors: [], isListRequestPending: false};

        case charactersConstants.UPDATE_USER_CHARACTERS_REQUEST_FAIL:
            return {...state, userCharacters: [], errors: data, isListRequestPending: false};

        case charactersConstants.GET_CHARACTER_DETAILS_REQUEST_SENT:
            return {...state, character: {}, errors: [], isDetailRequestPending: true};

        case charactersConstants.GET_CHARACTER_DETAILS_REQUEST_OK:
            return {...state, character: data, errors: [], isDetailRequestPending: false};

        case charactersConstants.GET_CHARACTER_DETAILS_REQUEST_FAIL:
            return {...state, character: {}, errors: data, isDetailRequestPending: false};

        default:
            return state;
    }
};