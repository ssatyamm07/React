import React, {useState} from 'react'


export default function Textform(props) {
    const handleupclick = ()=>{
        //console.log("uppercase was clicked" + text);
        let newText=  text.toUpperCase();
        setText(newText);

    }
    const handleloclick = ()=>{
        //console.log("lowercase was clicked" + text);
        let newText=  text.toLowerCase();
        setText(newText);

    }
    const handleclearclick = ()=>{
        //console.log("clear was clicked" + text);
        let newText=  '';
        setText(newText);

    }
    const handleAtclick = ()=>{
        let newText=  text.charAt(0).toUpperCase()+ text.slice(1);
        setText(newText);
    }    

    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);

    }
  const [text, setText] = useState('');
  //setText("new text");

  return (
    <>
    <div className="container">
        <h1> {props.heading}  </h1>
        <div className="my-4 ">

       <textarea className="form-control " value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>

    <button className="btn btn-info" onClick={handleupclick}>Convert to UpperCase</button>
    <button className="btn btn-primary , mx-2" onClick={handleloclick}>Convert to lowerCase</button>
    <button className="btn btn-success mx-1 my-2 " onClick={handleAtclick}>Capitalized Text</button>
    <button className="btn btn-danger mx-4" onClick={handleclearclick}>Clear</button>
    </div>
    <div className="conatiner , my-3 , mx-2">
        <h2> Your text summary:</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
)
}

