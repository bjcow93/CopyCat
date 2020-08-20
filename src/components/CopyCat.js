import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../styles';

export class CopyCat extends React.Component {
    render() {
        return (
            <div style={styles.divStyles}>
                <h1 style={{ marginBottom: 80 }}>Copy Cat {this.props.name || 'Tom'}</h1>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.props.handleChange} 
                />
                <img alt='cat' src='../images/cat.png' style={styles.imgStyles}/>
                <p>{this.props.value}</p>
            </div>
        );
    };
}

CopyCat.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string
};