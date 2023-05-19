import { Component} from 'react';

import { GalleryItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';

import { Modal } from 'components/Modal/Modal';


export class ImageGalleryItem extends Component {

    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal
        }))
    };


    render() {
        const { showModal } = this.state;
        const { previewURL, tags, largeImageURL } = this.props;
        return (
            <>
                <GalleryItem onClick={this.toggleModal}>
                    <ImageGalleryItemImage
                        src={previewURL}
                        alt={tags} />
                </GalleryItem>
            
                {showModal &&
                    (<Modal
                        onClose={this.toggleModal}
                        largeImage={largeImageURL}
                        tags={tags} />
                        
                       
                    )}
                
            </>
        
        );
    };
    
};