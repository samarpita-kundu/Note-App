import React,{Component} from 'react'
import NoteColors from './NoteColors'
import '../App.css'

class NoteEditor extends Component{
    constructor() {
        super(); 
        this.handleColorChange = this.handleColorChange.bind(this);
        this.state = {
            text: '',
            title: '',
            color: '',
            checked: false
        };
        this.handleTitleChange=this.handleTitleChange.bind(this);
        this.handleTextChange=this.handleTextChange.bind(this);
        this.handleNoteAdd=this.handleNoteAdd.bind(this);
    }
    handleTextChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        })
    }
    handleColorChange(e, color) {
        this.input = e.target;
        this.setState({
            color: color,
            checked: e.target.checked
        })
    }
    handleNoteAdd(){
        if(this.state.text.length && this.state.title.length) {
            let newNote = {
                text: this.state.text,
                title: this.state.title,
                color: this.state.color,
                id: new Date()
            };
            this.props.onNoteAdd(newNote);
            this.setState({
                text: '',
                title: '',
                color: '',
                checked: false
            });
            if(this.state.checked) this.input.checked = false;
        }
    }
    render() {
        return (
            <div className="note-editor">
                <input 
                    className="textarea"
                    placeholder="Title..."
                    rows={1}
                    value={this.state.title}
                    onChange={this.handleTitleChange}></input>
                    <hr className='textarea-hr'/>
                <textarea
                    className="textarea"
                    placeholder="Enter your note here..."
                    rows={5}
                    value={this.state.text}
                    onChange={this.handleTextChange}>
                </textarea>
                <div className="controls">
                    <NoteColors onColorChanged={this.handleColorChange}/>
                    <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
                </div>
            </div>
        );
    }
}

export default NoteEditor