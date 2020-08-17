import React from 'react';

export class CopyCat extends React.Component {
    render() {
        return (
            <div style={this.props.styles.divStyles}>
                <h1 style={{marginBottom: 80}}>Copy Cat!</h1>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.props.handleChange} 
                />
                <img alt='cat' src='../images/cat.png' style={this.props.styles.imgStyles}/>
                <p>{this.props.value}</p>
            </div>
        );
    };
}