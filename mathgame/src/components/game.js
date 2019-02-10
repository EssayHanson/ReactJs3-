import React from 'react';
import Answer from './answer';
import Button from './button';
import Numbers from './numbers';
import Stars from './stars';

class Game extends React.Component {

    render() {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>
                <br />
                <Numbers />
            </div>
        );
    }
}

export default Game;