import api from '../api';
import globals from '../globals'

import * as charactersConstants from '../constants/characters';

export const updateUserCharacters = function () {
    return (dispatch) => {
        dispatch({
            type: charactersConstants.UPDATE_USER_CHARACTERS_REQUEST_SENT
        });
        api.get('/users/update-user-characters/')
            .then(response => {
                if (response.data.status === 'OK') {
                    dispatch({
                        type: charactersConstants.UPDATE_USER_CHARACTERS_REQUEST_OK,
                        data: response.data.data
                    });
                } else {
                    dispatch({
                        type: charactersConstants.UPDATE_USER_CHARACTERS_REQUEST_FAIL,
                        data: response.data.data
                    });
                }
            })
            .catch(error => {
                dispatch({
                    type: globals.constants.REQUEST_FAILED
                });
            });
    }
};

export const getCharacterDetails = function (id) {
    return (dispatch) => {
        console.log(id);
        dispatch({
            type: charactersConstants.GET_CHARACTER_DETAILS_REQUEST_SENT
        });
        api.get('/game/wow/characters/' + id + '/')
            .then(response => {
                if (!response.data.hasOwnProperty('errors')) {
                    dispatch({
                        type: charactersConstants.GET_CHARACTER_DETAILS_REQUEST_OK,
                        data: response.data
                    });
                } else {
                    dispatch({
                        type: charactersConstants.GET_CHARACTER_DETAILS_REQUEST_FAIL,
                        data: response.data
                    });
                }
            })
            .catch(error => {
                dispatch({
                    type: globals.constants.REQUEST_FAILED
                });
            });
    }
};