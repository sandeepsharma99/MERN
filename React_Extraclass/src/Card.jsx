// import { useState, useRef } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const ref = useRef(0);
//   // console.log(ref);

//   const ref2 = useRef();
//   console.log(ref2.current);

//   const handleIncrement = () => {
//     setCount(count + 1);
//     ref.current = ref.current + 1;
//     // console.log(ref.current);
//   };
//   ref2.current.style.backgroundColor = "red";

//   return (
//     <>
//       <div className="card">
//         <button ref={ref2} onClick={handleIncrement}>
//           count is {count}
//         </button>
//         <p>this is dummy para</p>
//       </div>
//     </>
//   );
// }

// export default App;


import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  const ref = useRef(0);
  // console.log(ref);

  const ref2 = useRef();
  console.log(ref2.current);

  const handleIncrement = () => {
    setCount(count + 1);
    ref.current = ref.current + 1;
    // console.log(ref.current);
  };
  ref2.current.style.backgroundColor = "red";

  return (
    <>
      <div className="card">
        <button ref={ref2} onClick={handleIncrement}>
          count is {count}
        </button>
        <p>this is dummy para</p>
      </div>
    </>
  );
}

export default App;