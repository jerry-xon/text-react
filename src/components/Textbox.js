import React, {useState} from 'react'

export default function Textbox(props) {
    const upcase= ()=>{
        // console.log("upcase was clicked"+text)
        let newtext = text.toUpperCase();
        settext(newtext)
        props.showAlert("Converted to Upper Case", "success");
    }
    const recase= ()=>{
        // console.log("upcase was clicked"+text)
        let newtext = text.repeat(2);
        settext(newtext)
        props.showAlert("Text was Repeated", "success");
    }
    const locase= ()=>{
        // console.log("upcase was clicked"+text)
        let newtext = text.toLowerCase();
        settext(newtext)
        props.showAlert("Converted to Lower Case", "success");
        

    }
    const clear= ()=>{
        // console.log("Text box was cleared")
        let newtext = "";
        settext(newtext)
        props.showAlert("Text Box Cleared","warning");

    }
    const handleonchange=(event)=>{
        // console.log("onchange")
        settext(event.target.value)
    }
    const [text, settext] = useState('Enter you text here')
  return (
    <>
    <div className='container' style={{color: props.mode ==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode ==='light'?'black':'white'}} id="mybox" rows="3"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={upcase}>Convert to upper case</button>
<button className="btn btn-primary mx-2" onClick={locase}>Convert to lower case</button>
<button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
<button className="btn btn-primary mx-2" onClick={recase}>Repeat</button>
    </div>
<div className="container my-2" style={{color: props.mode ==='light'?'black':'white'}}>
<h1>Your Text summary</h1>
<p>{text.split(' ').length} Words and {text.length} Characters</p>
</div>
<div style={{color: props.mode ==='light'?'black':'white'}}>
<h2>Time:</h2>
<span>{0.008 * text.split(' ').length}</span>
<h2>Preview</h2>
{text}
</div>
</>
    
  )
}
