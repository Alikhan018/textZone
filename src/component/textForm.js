import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './components.css'

export default function TextForm(props){
    const [text,subText] = useState('Enter text here');
    const [textOut,setText] = useState('Output will Appear here');
    const Action = () => {
        const newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("! Converted to UpperCase","success")
    }
    const GotoLower = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("! Converted to LowerCase","success")
    }
    const Space = () => {
        let matches = /\s/g;
        let count = text.match(matches).length;
        setText(count);
        props.showAlert("! Spaces counted","success")

    }
    const Clear = () => {
        setText('');
        subText('');
        props.showAlert("! Cleared","success")
    }
    const TitleCase = () => {
        const newText = text.toLowerCase().replace(/(?:^|\s)\w/g,function(match){
            return match.toUpperCase();
        })
        setText(newText);
        props.showAlert("! Converted to TitleCase","success")
    }
    const AltText = () => {
        let newText = text.split('').map((char) => {
            if (char >= 'A' && char <= 'Z') {
              return char.toLowerCase();
            } else if (char >= 'a' && char <= 'z') {
              return char.toUpperCase();
            } else {
              return char;
            }
          }).join('');
        setText(newText);
        props.showAlert("! Converted to Alternative form","success")
    }
    const Copy = () => {
        let n = document.getElementById("box");
        let newText = n.value;
        navigator.clipboard.writeText(newText);
        props.showAlert("! Copied","Success")
    }
    const any = (event) => {
        subText(event.target.value);
    } 
    return (
      <>
        <div className="mb-3">
          <label htmlFor="Box" className="form-label">
            {props.text}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={any}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#2b2f32",
              color: props.mode === "light" ? "#2b2f32" : "white",
            }}
            id="Box"
            rows="6"
          ></textarea>
        </div>
        <button
          className="btn-one badge rounded-pill text-bg-primary mx-2"
          onClick={text.length !== 0 ? Action : console.log()}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn-one badge rounded-pill text-bg-primary mx-2"
          onClick={text.length !== 0 ? GotoLower : console.log()}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn-one badge rounded-pill text-bg-primary mx-2"
          onClick={text.length !== 0 ? Space : console.log()}
        >
          Count Spaces
        </button>
        <button
          className="btn-one badge rounded-pill text-bg-primary mx-2"
          onClick={text.length !== 0 ? Clear : console.log()}
        >
          Clear Text
        </button>
        <button
          className="btn-one badge rounded-pill text-bg-primary mx-2"
          onClick={text.length !== 0 ? TitleCase : console.log()}
        >
          Title Case
        </button>
        <button
          className="btn-one badge rounded-pill text-bg-primary mx-2"
          onClick={text.length !== 0 ? AltText : console.log()}
        >
          Alternative Text
        </button>
        <button
          className="btn-one badge rounded-pill text-bg-primary mx-2"
          onClick={text.length !== 0 ? Copy : console.log()}
        >
          Copy Text
        </button>
        <div className="mb-3">
          <label htmlFor="Box" className="form-label">
            {props.text}
          </label>
          <textarea
            className="form-control"
            value={textOut}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#2b2f32",
              color: props.mode === "light" ? "#2b2f32" : "white",
            }}
            readOnly
            id="box"
            rows="6"
          ></textarea>
          <h1>Your Text Sumarry is:</h1>
          <p>
            {text.length === 0 ? 0 : text.split(/[\s\n]+/).filter(Boolean).length} words and{" "}
            {text.length} characters.
          </p>
        </div>
      </>
    );
}
TextForm.propTypes = {
    text : PropTypes.string.isRequired,
}