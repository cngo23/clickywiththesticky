import React, { Component } from 'react';
import './css/App.css';
import "./css/Index.css"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Playarea from "./Playarea.js"
import characters from "./characters.js"

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i --) {
    const j = Math.floor(Math.random() * ( i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    characters
  }

  handleClick = (id, clicked) => {
    const charArr = this.state.characters;

    if (!clicked) {
      this.setState({ characters: charArr});
      charArr.forEach(characters => {
        if (characters.key === id && characters.clicked === false) {
          characters.clicked = true;
        }
        const { highScore, score } = this.state;
        const newScore = score + 1;
        const newHighScore = newScore > highScore ? newScore : highScore;
        return this.setState({ 
          characters: charArr, 
          score: newScore,
          highScore: newHighScore});
      });
    }else if (clicked) {
      charArr.forEach(characters => {
        characters.clicked = false;
      });
      this.setState({ characters: charArr, score: 0 });
    }
  };

  render() {
    const shuffled = shuffle(this.state.characters);
    return (
      <div className = "App">
        <Header 
        score = {this.state.score}
        highScore = {this.state.highScore} />

        <div className = "playArea">
          {shuffled.map(characters => (
            <Playarea
              name = {characters.name}
              clicked = {characters.clicked}
              imgUrl = {characters.imgUrl}
              handleClick = {this.handleClick}
              key = {characters.key}
              id = {characters.key}
              />
          ))}
        </div>

        <Footer />
      </div>
    )
  }
}




export default App;

