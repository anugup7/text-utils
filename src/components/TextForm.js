import React, {useState} from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('');
    const [myStyle, setMyStyle] = useState({
        textDecorationLine: ''
    })
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!","success")
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!","success")
    }
    const handleClear = () =>{
        let newText = '';
        setText(newText);
        setMyStyle({
            textDecorationLine: ''
        })
        props.showAlert("Text cleared!","success")
    }
    const handleCopy = () =>{
        // let newText = document.getElementById("myBox")
        // newText.select();
        // navigator.clipboard.writeText(newText.value)
        navigator.clipboard.writeText(text)
        props.showAlert("Ready to paste!","success")
    }  
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success")
    }
    // const handleUnderline = () =>{
    //     if (myStyle.textDecorationLine === ''){
    //         setMyStyle({
    //             textDecorationLine: 'underline'
    //     })
    //     }
    //     else{
    //         setMyStyle({
    //             textDecorationLine: ''
    //         })
    //     }
      
    // }
    
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    return (
        <div>
            <div className="container" style={{color:props.mode==='light'?'black': 'white'}}>
                <h1 className="mb-3">{props.heading}</h1>
                <div className="mb-3">                   
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white': '#13466e',color:props.mode==='light'?'black': 'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Space </button>
                {/* <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUnderline}>Underline</button> */}
            </div>
            <div className="container my-3" style={{color:props.mode==='light'?'black': 'white'}}>
                <h2>Your TextSummary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </div>
    )
}
