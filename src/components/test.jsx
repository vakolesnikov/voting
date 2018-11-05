import React, { Component } from 'react';

class Test extends Component {
    state = {
        isOpen: true,
    };

    handleCloseModal = () => this.setState({ isOpen: false })

    render() {
        const { isOpen } = this.state;

        return (
            <div className={`modal show ${isOpen ? 'd-block' : ''}`} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={ this.handleCloseModal }>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={ this.handleCloseModal }>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Test;
