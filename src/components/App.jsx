import { Component } from "react";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";


export class App extends Component {

  state = {
    query: "",
  };

  typeQueryInState = (query) => {
    this.setState({ query });
  };

 
  render() {
    const { query } = this.state;
    return (
    <>
        <Searchbar onSubmit={this.typeQueryInState} />
        <ImageGallery query={query} />
    
    </>
  );
  }
  
};
