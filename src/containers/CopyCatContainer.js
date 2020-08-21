import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from '../components/CopyCat';

class CopyCatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            input: '',
            copying: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggleTape = this.toggleTape.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({ input: value });
    }

    toggleTape() {
        this.setState({copying: !this.state.copying})
    }

    render() {
        return (
                <CopyCat 
                    handleChange={this.handleChange} 
                    value={this.state.input}
                    copying={this.state.copying}
                    toggleTape={this.toggleTape}
                />
        );
    }
}



ReactDOM.render(<CopyCatContainer />, document.getElementById('root'));

