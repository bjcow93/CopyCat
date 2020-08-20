import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from '../components/CopyCat';

class CopyCatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { input: '' };
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
                />
        );
    }
}



ReactDOM.render(<CopyCatContainer />, document.getElementById('root'));

