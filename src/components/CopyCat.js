import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../styles';

export class CopyCat extends React.Component {
    render() {
        const {name, value, handleChange, copying, toggleTape} = this.props;
        return (
            <div style={styles.divStyles}>
                <h1 style={{ marginBottom: 80 }}>Copy Cat {name || 'Tom'}</h1>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange} 
                />
                <img alt='cat'
                    src={copying ? '../images/copycat.png' : '../images/quietcat.png'}
                    style={styles.imgStyles}
                    onClick={toggleTape}
                />
                <p>{copying && value}</p>
            </div>
        );
    };
}

CopyCat.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    copying: PropTypes.bool.isRequired,
    toggleTape: PropTypes.func.isRequired,
    name: PropTypes.string
};