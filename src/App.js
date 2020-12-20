import logo from './logo.svg';
import './App.css';
import './mystyle.css'
import Header from './components/Header'
import IntroText from './components/IntroText'
import Form from './components/Form'
import SuggestionDisplay from './components/SuggestionDisplay'
import React, { Component } from 'react'

class App extends Component
{
    render()
    {
        return (
                <div className="App">
                    <Header />
                    <IntroText />
                    <Form />

                    <TextField
                        InputProps={{ style: { fontSize: 15 } }}
                        id="outlined-multiline-static"
                        label={<span style={{ fontSize: 15 }}>Suggestions</span>}
                        value = {this.state.suggestions}

                        multiline
                        rows={10}
                        style = {{width: 700}}

                        variant="outlined"
                        />

                </div>
        );
    }
}

export default App
