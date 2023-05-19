import { Component } from "react";

import {Header, Form, Input, Btn, BtnLable} from './Searchbar.styled';

export class Searchbar extends Component {

    state = {
        query : '',
    }

    handleInputSearch = (e) => {
        //console.log(e.currentTarget.value);  #049d2d #3f51b5
        this.setState({ query: e.currentTarget.value })
    };

    hendleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.recet();
    };

    recet() {
        this.setState({ query: '' });
    }

    render() {
        const { query } = this.state;
        return (
            <Header>
                <Form
                    onSubmit={this.hendleFormSubmit}>
                    <Btn type="submit">
                        <BtnLable>Search</BtnLable>
                    </Btn>

                    <Input
                        onChange={this.handleInputSearch}
                        value={query}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </Form>
            </Header>
        );
    };
    
};