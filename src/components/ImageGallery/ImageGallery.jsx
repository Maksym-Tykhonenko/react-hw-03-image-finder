import { Component } from "react";

import { getImgs } from "servises/api";
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";

import {GallaryList } from './ImageGallery.styled';


export class ImageGallery extends Component {

    state = {
        imgs: [],
        page: 1,
        loading: false,
        error: null
    };
    componentDidMount() {
            this.setState({
                loading: true,
            });

            getImgs('')
                .then((imgs) => {
                    this.setState({
                        imgs: imgs.hits,
                    });
                })
                .catch(error => this.setState({ error }))
                .finally(() => this.setState({ loading: false }));
     }

    componentDidUpdate(prevProps, prevState) {
        //console.log('prevProps', prevProps)
        //console.log('props', this.props)

        const { query } = this.props;
        const { page } = this.state;

        if (prevProps.query !== query) {
            this.setState({
                loading: true,
            });

            getImgs(query)
                .then((imgs) => {
                    //console.log(imgs);
                    this.setState({
                        imgs: imgs.hits,
                    });
                })
                .catch(error => this.setState({ error }))
                .finally(() => this.setState({ loading: false }));
        };

        if (prevState.page !== page) {
            this.setState({
                loading: true,
            });

            getImgs(query, page)
                .then((imgs) => {
                    this.setState((prevState) => ({
                        imgs: [...prevState.imgs, ...imgs.hits]
                    }))
                }).finally(() => this.setState({ loading: false }));
        }

    }

    onLoadMore = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1,
        }))
     }

    render() { 
        const { imgs, loading } = this.state;

        return (
            <>
                
                <GallaryList>
                
                    {imgs.map(({ id, previewURL, tags, largeImageURL }) => {
                        return <ImageGalleryItem
                            key={id}
                            previewURL={previewURL}
                            tags={tags}
                            largeImageURL={largeImageURL}
                        />
                    })}
                
                </GallaryList>
                {loading && <Loader />}<br />
                {imgs.length > 0 && <Button loadMore={this.onLoadMore} />}
                
            </>
            
        );
    }

 }