import React, {Component} from 'react'
import '../App.css'

class NoteColors extends Component{
    render() {
        let colors = ["#a5a9b5", "#90ee90", "#F9CCCA", "#f5f39d", "#d4abc1", "#8fa3e3"];
        return (
            <div className="colors-list">
                {
                    colors.map((el, i) => {
                        return (
                            <div key={i} style={{backgroundColor: el}}>
                                <input
                                    className="radio-custom"
                                    id={el}
                                    type="radio"
                                    name="color"
                                    onChange={(e)=>this.props.onColorChanged(e, el)}
                                />
                                <label className="radio-custom-label" htmlFor={el}/>
                            </div>
                        );
                    })
                }
            </div>
        )
    }

}

export default NoteColors