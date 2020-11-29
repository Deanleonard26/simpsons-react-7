import React, { Component } from 'react'
import './App.css';
import axios from 'axios';

const QuoteUrl = 'https://simpsons-quotes-api.herokuapp.com/quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quote: [],
    };

    this.getQuote = this.SimpsonsQuote.bind(this);

  }

  componentDidMount() {
    this.SimpsonsQuote()
  }


SimpsonsQuote = () => (
  axios.get(QuoteUrl)
    .then(res => res.data)
    .then(data =>
      this.setState({
        character: data[0].character,
        image: data[0].image,
        quote: data[0].quote
      }))
)


  render() {
    return (
      <div className='quote-div'>
      <div className = "quote-container">
      <img id= "character-img" src={this.state.image} alt={this.state.character}></img>
      <p>{this.state.character}</p>
      <p className='quote'><q>{this.state.quote}</q></p>
      <button onClick={this.SimpsonsQuote}>New Quote</button>
      </div>
      </div>
    )
  }
}

export default App;
