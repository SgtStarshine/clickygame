import React, { Component } from 'react';
import './game.scss';
import Card from '../Card';
import cardData from '../../cards.json';
import Nav from '../Nav';


class Game extends Component {

    state = {
        score: 0,
        highScore: 0,
        cardData,
        clickedList: []
    }

    componentDidMount() {
        const {cardData} = this.state;
        this.shuffle(cardData);       
    }

    handleClick = (id) => {
        const { cardData, clickedList, score, highScore } = this.state;
        this.setState ({
            cardData: this.shuffle(cardData)
        })
        const isClicked = clickedList.includes(id);

        if (isClicked) {
            const bestScore = Math.max(score, highScore)
            alert("Already clicked.");
            this.resetGame(bestScore);
        } else {
            const newScore = score + 1;
            this.setState({
                score: newScore,
                clickedList: [...clickedList, id]
            })

            if (newScore === cardData.length) {                
                alert('You win!!!!');
                this.resetGame(newScore);
            }
        }
    }

    resetGame = highScore => {
        this.setState({
            score: 0,
            clickedList: [],
            highScore: highScore
        })
    }

    shuffle = (array) => {
        for (var i =array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    render () {
        return (
            <div>                
                <Nav scoreText="Score:" scoreValue={this.state.score} highScoreText="High Score:" highScoreValue={this.state.highScore}/>
                <div className="cards">
                {this.state.cardData.map((card) => (
                    <Card
                        name={card.name}
                        image={card.image}
                        key={card.id}
                        id={card.id}
                        handleClick={this.handleClick}
                    />
                ))}
                </div>
            </div>
        )
    }
}

export default Game;