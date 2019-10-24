import React,{Component} from 'react'
import '../App.css';

class Note extends Component{
  
    render() {
        let style = {backgroundColor: this.props.color};
        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}>×</span>
                {this.props.children}
            </div>
        )
    }
  }

  export default Note