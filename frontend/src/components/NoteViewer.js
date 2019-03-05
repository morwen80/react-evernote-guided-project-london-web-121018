import React, { Component } from 'react';

class NoteViewer extends Component {

render() {
  return (
    <React.Fragment>
      <h2>{this.props.selectedNote.title}</h2>
      <p>{this.props.selectedNote.body}</p>
      <button onClick={(e) => this.props.editNote(e)}>Edit</button>
    </React.Fragment>
  );}
}

export default NoteViewer;
