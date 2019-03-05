import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList
        notes={this.props.notes}
        handleClick={this.props.handleClick}
        selectedNote={this.props.selectedNote}
        />
        <button onClick={this.props.createNewNote}>New</button>
      </div>
    );
  }
}

export default Sidebar;
