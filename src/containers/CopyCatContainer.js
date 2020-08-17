import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; // React.PropTypes has moved into a different package since React v15.5. Need to use the prop-types library instead.
import { CopyCat } from '../components/CopyCat';
import { styles } from '../styles';

class CopyCatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { input: '' }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({ input: value });
    }

    render() {
        return (
            <CopyCat 
                handleChange={this.handleChange} 
                value={this.state.input} 
                styles={styles}
            />
        );
    }
}

CopyCat.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
};


ReactDOM.render(<CopyCatContainer />, document.getElementById('root'));