import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        votes: 0,
        step: 0,
        candidates: new Array(10).fill(0),
    };

    updateState = () => {
        const count = 10;
        const candidates = new Array(count).fill(0);
        let votes = 0;

        this.clearState();

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

        const updateState = setInterval(
            () => {
                this.setState({
                    votes,
                    candidates,
                    step: ++this.state.step,
                })
            },
            1000
        );

        setTimeout(
            () => {
                clearInterval(generateVoteId);
                clearInterval(updateState);
            },
            9000
        );
    };

    clearState = () => this.setState({
       votes: 0,
       step: 0,
       candidates: new Array(10).fill(0),
    });

    renderCandidates = () => {
      const { votes, candidates} = this.state;
        return candidates.map((item, index) => (
          <tr>
              <td>{ index + 1 }</td>
              <td>Кандидат { index + 1 }</td>
              <td>{item}</td>
              <td>{ ((item/votes) * 100).toFixed(1) || '-' }</td>
          </tr>
        ));
    };

    renderTableHeader = () => (
        <thead className="thead-dark">
        <tr>
            <th> # </th>
            <th> Кандидат </th>
            <th> Количество голосов </th>
            <th> % голосов </th>
        </tr>
        </thead>
    );




    render() {
        return (
          <div className="app">
              <div>
                  <table className='table'>
                      { this.renderTableHeader() }
                      <tbody className='table-striped'>
                          { this.renderCandidates() }
                      </tbody>
                  </table>
              </div>
              <div className='d-flex justify-content-between'>
                  <button
                      type="button"
                      className="btn btn-secondary btn-lg bg-dark"
                      onClick={ this.updateState }
                  >
                      Начать голосование
                  </button>
                  <div>
                      До конца голосования осталось { 9 - this.state.step } сек.
                  </div>
              </div>
          </div>
        );
}
}

export default App;
