import React from 'react';
import ReactDOM from 'react-dom';


class CopyCat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true
    };

    this.toggleTape = this.toggleTape.bind(this);
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying })
  }

  render() {
    return (
      <div>
        <h1>Copy Cat</h1>

        <img alt='cat'
          src={this.state.copying ? '../images/copycat.png' : '../images/quietcat.png'}
          onClick={this.toggleTape}
        />
      </div>
    );
  };
}


ReactDOM.render(<CopyCat />, document.getElementById('root'));