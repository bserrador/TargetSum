import React from 'react';

import Game from './Game';

class App extends React.Component {
    state = {
        gameId: 1,
    };

    // Will unmount Game component & remount it with a new Id
    resetGame = () => {
        this.setState((prevState) => {
            return { gameId: prevState.gameId + 1};
        });
    };

    render() {
        return (
            // Associate Game with a key, if we give it a new key it will think
            // it's a new game & will reset
            <Game 
                key={this.state.gameId} 
                onPlayAgain={this.resetGame}
                randomNumberCount={6} 
                initialSeconds={10} 
            />
        );
    }
}

export default App;