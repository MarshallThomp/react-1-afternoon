import React, { Component } from 'react'

class Palindrome extends Component {
    constructor(){
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChagne(val) {
        this.setState({ userInput: val })
    }

    isPalindrome(userInput) {
        let reverseInput = userInput
        reverseInput = userInput.split('').reverse().join('')
        return (reverseInput === userInput) ? this.setState({palindrome: 'true'}) : this.setState({palindrome: 'false'})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={ (e) => this.handleChagne(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterstringPB">Palindrome: {this.state.palindrome}</span>
           </div> 
        )

    }
}
export default Palindrome