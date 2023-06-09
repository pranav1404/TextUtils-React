import React, {useState} from 'react'
import fileDownload from 'js-file-download';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  }

  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared Text", "success");

  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");

  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy To Clipboard", "success");

  }

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(' '));
    props.showAlert("Handled Extra Spaces", "success");
  }

  const handleDownload = () => {
    fileDownload(text, "text.txt");
    props.showAlert("File Downloaded", "success");

  }

  return (
    <>
    <div className="container">
    <h2 className='mb-4'>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="10" value = {text} style = {{backgroundColor : props.mode === "dark" ? "#3a3434" : "white", color : props.mode === "dark" ? "white" : "black"}} onChange={handleOnChange}></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to upperCase </button> 
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert to LowerCase </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} > Copy Text </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} > Remove Extra Spaces </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownload} > Download </button>

    </div>
    <div className="container my-3">
      <h3> Your Text Summary </h3>
      
      <p> {text.split(/\s+/).filter((element) => {
        return element.length !== 0;
      }).length} words and {text.split("").filter((element) => {
        return element !== " " && element !== "\n";
      }).length} characters </p>

      <p> {0.008 * text.split(" ").filter((element) => {
        return element.length !== 0;
      }).length} Minutes to Read</p>

      <h3> Preview </h3>
      <p> {text.length > 0 ? text : "Nothing to preview."} </p>
    </div>
    </>
  )
}





