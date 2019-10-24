import React , {Component} from 'react'
import NoteSearch from './NoteSearch'
import Note from './Note'
import Masonry from 'masonry-layout';
import '../App.css'

class NoteGrid extends Component{
    constructor() {
        super();
        this.state = {
            value: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    componentDidMount() {
        this.msnry = new Masonry( this.grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.notes.length !== prevProps.notes.length || this.state.value.length !== prevState.value.length ) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }
    handleSearch(e) {
        this.setState({
            value: e.target.value
        });
    }
    render() {
            let searchQuery = this.state.value.toLowerCase();
            let displayedNotes = !this.state.value ? this.props.notes : this.props.notes.filter(function(item) {
            let searchValue = item.title.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        console.log(displayedNotes);
        return (
            <div>
                <NoteSearch onSearch={this.handleSearch}/>
                <div ref={(div) => this.grid = div} className="notes-grid">
                    {
                        displayedNotes.map((note) => {
                            return (
                                <Note
                                    key={note.id}
                                    color={note.color}
                                    onDelete={this.props.onNoteDelete.bind(null, note)}
                                ><b>{note.title}</b> : {note.text}</Note>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default NoteGrid