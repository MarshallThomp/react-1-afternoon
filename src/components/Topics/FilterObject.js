import React, { Component } from 'react'

class FilterObjects extends Component {
    constructor() {
        super()

        this.state = {
            friends: [
                {
                    name: 'ricky',
                    age: 22,
                    hairColor: 'blonde'
                },
                {
                    name: 'brandon',
                    age: 24,
                    title: 'salad man'
                },
                {
                    name: 'drew',
                    age: 25,
                    favoriteThings: 'motorcycles'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChagne(val) {
        this.setState({ userInput: val })
    }

    filteredFriends(userInput) {
        let friends = this.state.friends
        let filteredFriends = []

        for(let i = 0; i < friends.length; i++){
            if(friends[i].hasOwnProperty(userInput)){
                filteredFriends.push(friends[i])
            }
        }
        this.setState({filteredFriends: filteredFriends})
    }

    render() {
        return (
           <div className="puzzleBox filterObjectPB">
            <h4>Filter Objects</h4>
            <span className="puzzleText">Original: {JSON.stringify(this.state.friends, null, 10)}</span>
            <input className="inputLine" onChange={ (e) => this.handleChagne(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.filteredFriends(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterObjectPB">Filtered: {JSON.stringify(this.state.filteredFriends, null, 10)}</span>
           </div>
        )
    }
}
export default FilterObjects