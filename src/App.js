import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        votes: 0,
        candidates: new Array(10).fill(0),
    };

    updateState = () => {
        const count = 10;
        const candidates = new Array(count).fill(0);
        let votes = 0;

        const generateVote = () => {
            const id = Math.floor(Math.random() * candidates.length);
            votes += 1;
            candidates[id] += 1;
        };

        const generateVoteId = setInterval(
            () => {
                generateVote();
            },
            10
        );

        const udateState = setInterval(
            () => {
                this.setState({
                    votes,
                    candidates,
                })
            },
            1000
        );

        setTimeout(
            () => clearInterval(generateVoteId),
            9000
        );
    };

    renderCandidates = () => {
      const { votes, candidates} = this.state;
        return candidates.map((item, index) => (
          <div>
              Кандидат №{index + 1}: { item } голосов ({ ((item/votes) * 100).toFixed(1) })%
          </div>
        ));
    };




    render() {


        return (
          <div className="App">
              <div>
                  { this.renderCandidates() }
              </div>
              <div>
                  Всего голосов: { this.state.votes }
              </div>

              <button onClick={ this.updateState }>
                  Начать голосование
              </button>
          </div>
        );
}
}

export default App;
