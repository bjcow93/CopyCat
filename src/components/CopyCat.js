import React from 'react';

export class CopyCat extends React.Component {
    render() {
        return (
            <div style={this.props.styles.divStyles}>
                <h2 style={{marginBottom: 50}}>Copy Cat!</h2>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.props.handleChange} 
                />
                <img alt='cat' src='../images/cat.png' style={this.props.styles.imgStyles}/>
                {this.props.value}
            </div>
        );
    };
}