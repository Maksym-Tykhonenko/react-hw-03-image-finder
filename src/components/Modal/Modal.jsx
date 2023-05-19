import { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalPopUp } from './Modal.styled';


const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleEscPress)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscPress)
    };

    handleEscPress = (e) => {
        console.log(e.code)
        if (e.code === 'Escape') {
            this.props.onClose();
        };
    };

    handleBackdropClick = (e) => {

        if (e.currentTarget === e.target) {
            this.props.onClose();
        };

    };

    render() {
        const { largeImage, tags } = this.props;
        
        return createPortal (
            <Overlay
                onClick={this.handleBackdropClick}>
                <ModalPopUp >
                     <img src={largeImage} alt={tags} width='700' />
                </ModalPopUp>
            </Overlay>,
            modalRoot
        );
    };
};
