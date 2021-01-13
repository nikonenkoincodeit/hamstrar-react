import {createRef, useState } from 'react'

export default function Home() {
  const textInput = createRef();

  const [output, setOutput] = useState('hello')

  const f1 = (payload) => () => {
    console.log(payload)
  }
  const f2 = () => {
    console.log(this)
    console.log('over');
  }
  const f3 = (event) => {
    setOutput(textInput.current.value);
    //console.log(event.target.value)
  }

  return (
    <>
      <div>
        <h3 onClick={f1(222)} onMouseOver={f2}>
          Home page
        </h3>
      </div>
      <div>
        <input type="text" onInput={f3} ref={textInput} defaultValue="111" />
      </div>
      <h1>{output}</h1>
    </>
  );
}
