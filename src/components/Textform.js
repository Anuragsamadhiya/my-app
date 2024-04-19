import React, { useState } from 'react'; //hooks..... useState   
import PropTypes from 'prop-types'
export default function Textform(props) {
     // Declare a new state variable, which we'll call "count"
 const [text, setText] = useState('');
// text="new text" //wrong way to change the state
// setText("new text") //setText function is used for changing text
const handleupclick=()=>{
    let newtext=text.toUpperCase();
setText(newtext); //here we change the text to uppercase change the state of text
props.showalert("Converted to UpperCase!","success") //alert bali ka hai

}
const  handleloclick=()=>{ // text likhray jo bo isi ki bjay se likh paray brna ni likhega ye textarea ki value changre krega
  let newtext=text.toLowerCase();
setText(newtext); //here we change the text to lowercase change the state of text
props.showalert("Converted to Lowercase!","success")


}
const  handlebackspaceclick=()=>{
  let newtext=text.slice(0,-1);
setText(newtext); //here we change the text to lowercase change the state of text

}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();//create a SpeechSynthesisUtterance to configure the how text to be spoken 
  msg.text = text; //set the text to speek
  window.speechSynthesis.speak(msg); //pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
  props.showalert("Voice conversion start!","success")
}
const clear =()=>{
  let newtext="";
  setText(newtext)
  props.showalert("Text cleared!","success")
}
const handleonchange=(event)=>{
    setText(event.target.value);
}
  return (
    <>
    <div className="container"  style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
      <div className="form">
      {/* <label for="mybox"></label> */}
  <textarea className="form-control"  value={text} rows={8} onChange={handleonchange} style={{
    backgroundColor: props.mode==='light'?'white':'#495d7a',
    color:props.mode==='light'?'black':'white'
  }}></textarea>
</div>
{/* btn btn-primary mx-3 my-2 --> bootstrap classes*/}
<button className='btn btn-primary' onClick={handleupclick} > convert to uppercase</button>
<button className='btn btn-primary mx-3 my-2' onClick={handleloclick} > convert to lowercase</button>
<button className='btn btn-primary mx-3 my-2' onClick={handlebackspaceclick} >Backspace</button>
<button className='btn btn-primary mx-3 my-2' onClick={speak} >convert to voice</button>
<button className='btn btn-primary mx-3 my-2' onClick={clear} >clear</button>




    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h1> Your Text Summary</h1>
      {/* length of the text ... my-3 is bootstrap class container also */}
      <p>{text.split(' ').length-1} text {text.length} words</p> 
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
