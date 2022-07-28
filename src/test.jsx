import { useRef, useState } from 'react';

function CustomTextInput(props) {
  // textInput must be declared here so the ref can refer to it
  const inputRef = useRef(null);

  function handleClick() {
    // 👇️ update input value
    inputRef.current.value = 'New value';

    // 👇️ access input value
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef} type="text" id="message" name="message" />

      <button onClick={handleClick}>Log message</button>
    </div>
  );
}

export default CustomTextInput;
