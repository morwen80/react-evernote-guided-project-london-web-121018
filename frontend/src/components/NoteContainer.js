import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const API = 'http://localhost:3000/api/v1/notes/'

class NoteContainer extends Component {

  constructor() {
    super()

    this.state = {
      notes: [],
      selectedNote: null,
      noteThatWillBeEdited: null,
      searchInput: ""
    }
  }

handleClick = (selectedNote) => {
    this.setState({ selectedNote: selectedNote })
  }

  updateSearch = (newSearchInput) => {
    this.setState({ searchInput: newSearchInput })
  }

getFilteredNotes = () => {
  return this.state.notes.filter(note =>
    note.title.toLowerCase().includes(this.state.searchInput.toLowerCase()
  ))
}

  // handleChange = (event) => {
  //     this.setState({ noteThatWillBeEdited.
  //       : event.target.value })
  // }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(notes => this.setState({notes}))
  }

  createNewNote = () => {
    fetch(API, {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ title: "I'm a default title", body: "This is just a default text", user_id: 1})
    })
    .then(resp => resp.json())
    .then(note => this.setState({ notes: [...this.state.notes, note] }))
  }

  editNote = (selectedNote) => {
    this.setState({
      noteThatWillBeEdited: selectedNote
  })
    }

  // saveEditedNote = (note) => {
  //   fetch(`${API}${note.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       title: note.title,
  //       body: note.body
  //     })
  //   })
  // }

// deleteNote = (id) => {
//   fetch (`${API}${id}`), {
//     method: 'DELETE'
//   }
// }

  render() {
    return (
      <Fragment>
        <Search updateSearch={this.updateSearch}/>
        <div className='container'>
          <Sidebar
          notes={this.getFilteredNotes()}
          handleClick={this.handleClick}
          selectedNote={this.state.selectedNote}
          createNewNote={this.createNewNote}
          />
          <Content
          selectedNote={this.state.selectedNote}
          noteThatWillBeEdited={this.state.noteThatWillBeEdited}
          editNote={this.editNote}
          notes={this.state.notes}
          // saveEditedNote={this.saveEditedNote}
          // deleteNote={this.deleteNote}
          // handleChange={this.handleChange}
          />
        </div>
      </Fragment>
    );
  }


}

export default NoteContainer;
