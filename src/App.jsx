import React, { Component } from 'react';

import Candidates from './components/candidates';
import TableHeader from './components/tableHeader';
import ControlPanel from './components/controlPanel';
import Modal from './components/modal'

import {generateFullName, maxArrayItem, maxArrayItemIndex} from './services';
import { CANDIDATES_COUNT, VOTING_TIME } from './config';

import './index.css';

class App extends Component {
    state = {
        countVote: 0,
        step: 0,
        candidates: [],
        isVoting: false,
        winner: null,
    };

    componentWillMount() {
        const candidates = new Array(CANDIDATES_COUNT).fill(0).map(() => ({
               name: generateFullName(),
               value: 0,
           }));

        this.setState({
            candidates,
        })
    };

    voting = () => {
        const newCandidates = this.state.candidates.map(item => ({...item}));
        let countVote = 0;
        const generateVote = () => {
            const id = Math.floor(Math.random() * newCandidates.length);
            countVote += 1;
            newCandidates[id].value += 1;
        };

        this.setState({
            isVoting: true,
        });

        const generateVoteId = setInterval(
            () => {
                generateVote();
            },
            10
        );

        const updateStateId = setInterval(
            () => {
                this.setState({
                    countVote,
                    candidates: newCandidates,
                    step: this.state.step + 1,
                })
            },
            1000
        );

        setTimeout(
            () => {
                const { candidates } = this.state;

                clearInterval(generateVoteId);
                clearInterval(updateStateId);

                const vote = candidates.map(item => item.value);
                const winner = candidates[maxArrayItemIndex(vote)];

                const newCandidates = candidates.map((item, index) => {
                   if (index === maxArrayItemIndex(vote)) {
                       return ({
                           ...item,
                           winner: true,
                       })
                   }

                   return ({
                       ...item,
                   })
                });

                this.setState({
                    isVoting: false,
                    winner,
                    candidates: newCandidates,
                })
            },
            VOTING_TIME
        );
    };

    startVoting = () => {
        this.setState({
            countVote: 0,
            step: 0,
            candidates: [...this.state.candidates].map((item) => ({ ...item, value: 0, winner: false })),
            winner: null,
        }, () => this.voting());
    };

    render() {
        const { candidates, countVote, isVoting, step, winner } = this.state;

        return (
          <div className="app">
              <table className='table'>
                  <TableHeader />
                  <Candidates
                      countVote={ countVote }
                      candidates={ candidates }
                  />
              </table>
              <ControlPanel
                  step={ step }
                  onClick={ this.startVoting }
                  isDisabled={ isVoting }
              />

              { winner && <Modal item={ winner } count={ countVote } />}
          </div>
        );
}
}

export default App;
