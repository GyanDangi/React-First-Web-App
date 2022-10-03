import React,{useState} from 'react';

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("upperCase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been changed to Uppercase","success");
    }
    const handleloClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been changed to Lowercase","success");
       
    }
    const handleClear=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text has been cleard","success");
    }
    const removeSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Space has been removed","success")
    }
    const copyText=()=>{
        var text=document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied","success")
        
    }
    const handleOnChange=(event)=>{
        // console.log("On change")
        setText(event.target.value);
    }
    const [text, setText]=useState('Enter text here');
  return (
<>
<div >
    <div className="mb-3" style={{color:props.mode==='dark'?'white':'#10065b'}}>
        <h3>{props.heading}</h3>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'#10065b'}} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to lowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={removeSpaces}>Remove Spaces</button>
    <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
</div>
<div className="container my-2" style={{color:props.mode==='dark'?'white':'#10065b'}}>
    <h3>Your text Summary</h3>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.08*text.split(" ").length} Minutes read </p>   
    <h3>Preview</h3>
    <p>{text.length>0?text:"enter something to preview it here"}</p>
</div>

</>
  )
}
