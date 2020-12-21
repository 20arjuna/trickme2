import TextField from '@material-ui/core/TextField';
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

class SuggestionDisplay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            suggestions: ''
        };
    }

    // componentDidMount()
    // {
    //     axios.get('/suggestions')
    //         .then(response => this.setState({ suggestions: response.data.output }));
    //
    // }


    // setTimeout(function(){  }, 5000);


    render() {
        const [suggestions, setSuggestions] = useState(0);

            useEffect(() => {
                fetch('/link').then(res => res.json()).then(data => {
                    console.log("got here boys!")
                    setSuggestions(data.suggestions);
                });
            }, []);
        return (
            <div>
                <h5></h5>
                <TextField
                    InputProps={{ style: { fontSize: 15 } }}
                    id="outlined-multiline-static"
                    label={<span style={{ fontSize: 15 }}>Suggestions</span>}
                    value = {this.state.suggestions}
                    /*onChange={this.handleQuestionChange}*/
                    multiline
                    rows={10}
                    style = {{width: 700}}

                    variant="outlined"
                />
            </div>
        )
    }

}
export default SuggestionDisplay;
