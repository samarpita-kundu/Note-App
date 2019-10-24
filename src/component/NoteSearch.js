import React, {Component} from 'react'
import '../App.css'

class NoteSearch extends Component{
    render() {
        return (
            <input className="noteSearch" type="search" placeholder="Search..." onChange={this.props.onSearch}/>
        )
    }
  }

export default NoteSearch