import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        count: PropTypes.number.isRequired,
    };

    state = {
        isOpen: true,
    };

    handleCloseModal = () => this.setState({ isOpen: false })

    render() {
        const { item, count } = this.props;
        const { isOpen } = this.state;

        return (
            <div>
                <div className={`modal modal-open show ${isOpen ? 'd-block' : ''}`} id="modalWinner">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    Победитель:
                                </h5>
                            </div>
                            <div className="modal-body">
                                <div>
                                    { item.name }
                                </div>
                                <div>
                                    Голоса: { item.value } ({ ((item.value/count) * 100).toFixed(1) }%)
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={ this.handleCloseModal }>Закрыть</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
