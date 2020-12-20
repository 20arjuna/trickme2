import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { sizing } from '@material-ui/system';




function ButtonComponent(props) {
  const { loading } = props;
  return (
    <Button variant="contained"
            color="primary"
            size="large"
            type="submit"
            disabled={loading}>
      {loading && <CircularProgress size={14} />}
      {!loading && 'Go!'}
    </Button>
  );
}



class Form extends Component {



    constructor(props)
    {
        super(props)

        this.state = {
            question: '',
            loading: false,
            showing: false,
            suggestions: ''
        };
    }

    // function GetSuggestions()
    // {
    //     const [suggestions, setSuggestions] = useState(0);
    //
    //         useEffect(() => {
    //             fetch('/link').then(res => res.json()).then(data => {
    //                 setSuggestions(data.suggestions);
    //             });
    //         }, []);
    //
    //     console.log(suggestions);
    //     return suggestions;
    // }

    handleQuestionChange = (event) => {
        this.setState({question: event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true });
        setTimeout(() => this.setState({ loading: false }), 3000); //3 seconds
        //console.log(this.state)
        console.log(this.state.question)
        axios.post('/link', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        // this.setState({ suggestions: GetSuggestions()});
        // this.setState({ showing: true});
    }


    render() {
        const { showing } = this.state.showing;
        return(
                <div>
                <form onSubmit={this.submitHandler}>

                    <TextField
                        InputProps={{ style: { fontSize: 15 } }}
                        id="outlined-multiline-static"
                        label={<span style={{ fontSize: 15 }}>Enter Question Here</span>}
                        value = {this.state.question}
                        onChange={this.handleQuestionChange}
                        multiline
                        rows={10}
                        style = {{width: 500}}

                        variant="outlined"
                    />
                    <h5></h5>

                    <ButtonComponent loading={this.state.loading} />

                    <h5></h5>

                    { this.state.showing
                        ? (<TextField
                            InputProps={{ style: { fontSize: 15 } }}
                            id="outlined-multiline-static"
                            label={<span style={{ fontSize: 15 }}>Suggestions</span>}
                            value = {this.state.suggestions}

                            multiline
                            rows={10}
                            style = {{width: 700}}

                            variant="outlined"
                          />)
                        :  null
                    }
                </form>
            </div>

        )
    }
}
export default Form
