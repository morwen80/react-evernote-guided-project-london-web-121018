import React, { Component } from 'react';

class NoteEditor extends Component {

  constructor(props){
    super(props)

    this.state = {
      title: props.selectedNote.title,
      body: props.selectedNote.body
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  saveEditedNote = (note) => {
    fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: note.title,
        body: note.body,
        user_id: 1
      })
    }).then(resp => resp.json())
    .then(notes => this.props.setState({ notes: [...this.props.notes, note] })
  )}


  render() {
    return (
      <form className="note-editor">
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <textarea
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
        />

        <div className="button-row">
          <input
            className="button"
            type="submit"
            value="Save"
            onClick={(e) => this.saveEditedNote(e)}
          />
          <button
            type="button"
            onClick={() => console.log("fuck this / load original note")}>Cancel
          </button>
        </div>
      </form>
    );
  }



}

export default NoteEditor;
