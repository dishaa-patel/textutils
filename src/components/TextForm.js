import React,{ useState } from 'react'

export default function TextForm(props) {

    const handleUpClick =() =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick =() =>{
        let newText = " ";
        setText(newText);
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)

    }

    const [text, setText] = useState("");
    return (
        <div className = "container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                <button className="btn btn-primary mx-1 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-3" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-3" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-3" onClick={ handleExtraSpaces}>Remove Extra Spaces</button>
                
            </div>
            <div className="container">
                <h1>Your Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters </p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
