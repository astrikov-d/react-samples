import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {components as globalComponents} from '../globals';

import * as charactersActions from '../actions/characters';

import CharactersList from '../components/charactersList';
const {Affix, CharacterProfile, Loader} = globalComponents;

class Characters extends React.Component {
    constructor(props) {
        super(props);

        this.props.charactersActions.updateUserCharacters();
        this.onCharacterSelect = this.onCharacterSelect.bind(this);
    }

    onCharacterSelect(character) {
        this.props.charactersActions.getCharacterDetails(character.id);
    }

    render() {
        let {isListRequestPending, isDetailRequestPending} = this.props;


        return (
            <div className="profile-page-wrapper">
                <div className="characters-wrapper">
                    <div className="row">
                        <div className="col-sm-3">
                            {isListRequestPending === true ?
                                <Loader/>
                                :
                                <Affix offset={80}
                                       id="id-characters-list-affix"
                                       className="character-list-wrapper">
                                    <CharactersList characters={this.props.characters}
                                                    onCharacterSelect={this.onCharacterSelect}/>
                                </Affix>
                            }
                        </div>
                        <div className="col-sm-9">
                            {isDetailRequestPending === true ?
                                <Loader/>
                                :
                                <CharacterProfile character={this.props.character}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters.userCharacters,
        character: state.characters.character,
        isListRequestPending: state.characters.isListRequestPending,
        isDetailRequestPending: state.characters.isDetailRequestPending,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        charactersActions: bindActionCreators(charactersActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
