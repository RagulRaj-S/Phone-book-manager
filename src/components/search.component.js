import React from 'react';
import Autosuggest from 'react-autosuggest';
import '../autosuggest.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: [],
            tasks: [],
            task: '',
            desc: '',
            username: ''
        };
    }
    componentDidMount() {
      axios.get('http://localhost:5000/exercises/')
        .then(response => {
          this.setState({ tasks: response.data })
          console.log(this.state.tasks)
        })
        .catch((error) => {
          console.log(error);
        })
    }
    
    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.state.tasks.filter(lang =>
            lang.contactname.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    getSuggestionValue = suggestion => suggestion.name;

    // Render Each Option
    renderSuggestion = suggestion => (
        <div>            
          <Link to={"/edit/"+suggestion._id}>{suggestion.task} | {suggestion.contactname} </Link>
        </div>
    );
    
    selectName = (suggestion) => {
        this.setState({
            task: suggestion.task,
            desc: suggestion.desc
        });
     }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Suggestion rerender when user types
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Contact Name',
            value,
            onChange: this.onChange
        };

        // Adding AutoSuggest component
        return (
            <div>
                <h4>Search and Edit the Contact Name:</h4> <br/>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
                style={{
                    color:"black",
                    size: "large",
                }}
            />
            </div>
        );
    }
}

export default Search;