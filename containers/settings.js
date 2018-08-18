import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import axios from 'axios';
import {Loader} from 'react-loaders';

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                Settings!
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
