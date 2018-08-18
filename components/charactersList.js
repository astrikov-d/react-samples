import React from 'react';


class CharactersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCharacter: props.characters.length > 0 ? props.characters[0] : null
        };

        this.onCharacterSelect = this.onCharacterSelect.bind(this);
    }

    componentDidMount() {
        if (this.state.selectedCharacter) {
            this.onCharacterSelect(this.state.selectedCharacter);
        }
    }

    onCharacterSelect(character) {
        this.setState({selectedCharacter: character});
        this.props.onCharacterSelect(character);
    }

    render() {
        const {characters} = this.props;
        const {selectedCharacter} = this.state;

        console.log(selectedCharacter);

        return (
            <ul className="characters-list">
                {characters.map((character) => (
                    <li key={character.id} className="character">
                        <a className={selectedCharacter === character ? 'active' : ''}
                           onClick={(e) => {
                               e.preventDefault();
                               this.onCharacterSelect(character)
                           }}>
                            <div className="character-icon">
                                <span className={'icon class ' + character.game_class.toLowerCase().replace(' ', '-')}/>
                            </div>
                            <div className="character-meta">
                                <div className="character-avatar">

                                </div>
                                <div className="character-info">
                                    <div className="character-name">
                                        {character.name}
                                    </div>
                                    <div className="character-class-level">
                                        {gettext('Level')} {character.level} {character.game_class}
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"/>
                        </a>
                    </li>
                ))}
            </ul>
        );
    }
}

export default CharactersList;