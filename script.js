const result=document.getElementById("inputArea");
result.addEventListener("keyup",(event)=>{
    const userInput=event.target.value;
    const maxLength=event.target.maxLength;

    const totalChars=userInput.length;
    const remainingChars=maxLength-totalChars;

    const totalCharsSpan=document.getElementById("totalChars");
    totalCharsSpan.innerText=totalChars;

    const remainingCharsSpan=document.getElementById("remainingChars");
    remainingCharsSpan.innerText=remainingChars;
})