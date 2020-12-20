import TextField from '@material-ui/core/TextField';
import React, { Component, useState, useEffect } from 'react';

class SuggestionDisplay extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            suggestions: '',
            hiding: false
        };
    }

    render()
    {
        return (
            <div>
                <h5></h5>
                <TextField
                    InputProps={{ style: { fontSize: 15 } }}
                    id="outlined-multiline-static"
                    label={<span style={{ fontSize: 15 }}>Suggestions</span>}
                    value = {this.state.suggestions}
                    onChange={this.handleQuestionChange}
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
