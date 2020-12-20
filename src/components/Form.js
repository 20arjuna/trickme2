import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { sizing } from '@material-ui/system';

//import { Button } from "semantic-ui-react";

// const styles = {
//     //style for font size
//     resize:{
//         fontSize:500
//     },
// }


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
            loading: false
        };
    }

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
    }


    render() {
        return(
                <div>
                <form onSubmit={this.submitHandler}>
                    {/*<textarea
                        value = {this.state.question}
                        onChange={this.handleQuestionChange}
                        rows = "4"
                        cols = "50"
                        name ="textInput"
                        placeholder="Enter question here"
                    />*/}
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

                    {/*}<input className = "center"
                           type="submit"
                           name="my-form"
                           value="Link Entities">
                    </input>*/}

                    {/*}<Button size="large"
                            variant="contained"
                            color="primary"
                            type="submit">
                    Go!
                    </Button>*/}

                    <ButtonComponent loading={this.state.loading} />

                    {/*<Button
                    onClick={async () => {
                        //const movie = { title, rating };
                        const response = await fetch("/link", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({"question": this.state.question})
                        });

                        if (response.ok) {
                            console.log("response worked!");
                            // onNewMovie(movie);
                            // setTitle("");
                            // setRating(1);
                        }
                        else
                        {
                            console.log("error");
                        }
                    }}
                    >
                    submit
                    </Button>*/}
                </form>
            </div>

        )
    }
}
export default Form
