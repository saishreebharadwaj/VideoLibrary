import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={this.onInputchange.bind(this)} />
            </div>
        );
    }

    onInputchange(event) {
        this.setState({term: event.target.value})
    }


}

export default SearchBar;
