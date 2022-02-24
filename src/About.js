import React from 'react';
import {debounce, throttle} from 'lodash';

const somthingFunc = (value) => {
    console.log("1. called onchange " + value);
};

const debounceSomethingFunc = debounce((value) => {
    console.log("2. called debounce " + value);
  }, 1000);


const throttleSomethingFunc = throttle((value) => {
    console.log("3. called throttle " + value);
}, 1000)


function About(){
    const [text, setText] = React.useState("");
    const [text2, setText2] = React.useState("");
    const [text3, setText3] = React.useState("");
  
    const onChange = event => {
      const value = event.target.value;
      setText(value);
      somthingFunc(value);
    };
  
    const onDebounceChange = event => {
      const value = event.target.value;
      setText2(value);
      debounceSomethingFunc(value);
    };

    const onThrottleChange = event => {
        const value = event.target.value;
        setText3(value);
        throttleSomethingFunc(value);
    }
    

    return (
        <div className= "ipForm">
            <h1>lodash</h1>
            < input className= "ipbasic" type="text" value={text} onChange={onChange} placeholder={"일반"}/>
            < input className= "ipbasic" type="text" value={text2} onChange={onDebounceChange} placeholder={"디바운스 적용"}/>
            < input className= "ipbasic" type="text" value={text3} onChange={onThrottleChange} placeholder={"스로틀 적용"}/>
        </div>
    );
}

export default About;