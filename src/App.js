import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

// Replace your code here

class App extends Component {
  state = {searchInput: '', characterList: []}

  word = event => {
    this.setState({searchInput: event.target.value})
  }

  start = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const addedItems = {
      id: uuidv4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, addedItems],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, characterList} = this.state

    return (
      <div className="app-container">
        <div className="first-container">
          <h1 className="heading">Count the characters like a Boss</h1>
          <div className="container">
            {characterList.length > 0 ? (
              <ul className="list-container">
                {characterList.map(eachList => (
                  <li key={eachList.id}>
                    <p key={eachList.id} className="list">
                      {eachList.item}: {eachList.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="image"
              />
            )}
          </div>
        </div>
        <div className="second-container">
          <h1 className="header">Character Counter</h1>
          <div className="count-container">
            <form onSubmit={this.start}>
              <div className="input-container">
                <input
                  type="text"
                  className="input-name"
                  placeholder="Enter the characters here"
                  value={searchInput}
                  onChange={this.word}
                />
                <button
                  className="add-button"
                  type="submit"
                  onClick={this.start}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
