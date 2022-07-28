import { useEffect, useRef, useState } from 'react';
import './App.css';
import Table from './components/table';

function App() {
  const inputRef = useRef(null);

  const [opacity, setOpacity] = useState(0);
  const [position, setPosition] = useState();
  const [z_index, setZ_index] = useState(1);

  console.log(position);

  const onHandler = (e) => {
    if (!e.target.hasAttribute('disabled')) {
      setOpacity(1);
      setZ_index(-1);
      setPosition(e);
      inputRef.current.focus();
      inputRef.current.value = e.target.innerHTML;
    } else {
      setOpacity(0);
    }
  };

  const onChange = () => {
    position.target.innerHTML = inputRef.current.value;
    // console.log(inputRef.current.disabled);
  };

  const okey = (e) => {
    console.log(e.pageY, e.clientY, e.screenY);
  };

  return (
    <div>
      <div
        className="App"
        onClick={(e) => onHandler(e)}
        onMouseOver={(e) => okey(e)}
        style={{ zIndex: z_index }}
      >
        <Table />
      </div>

      <input
        type="text"
        ref={inputRef}
        onChange={onChange}
        style={{
          opacity: opacity,
          position: 'absolute',
          top: `${position?.clientY - position?.nativeEvent?.offsetY}px`,
          left: `${position?.clientX - position?.nativeEvent?.offsetX}px`,
          height: 0 || position?.nativeEvent?.srcElement?.clientHeight - 3,
          width: 0 || position?.nativeEvent?.srcElement?.clientWidth - 5,
          border: '1px solid blue',
          zIndex: 2,
          borderRadius: '0px',
        }}
      />
    </div>
  );
}

export default App;
