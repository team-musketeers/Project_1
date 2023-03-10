import { useState, useEffect } from "react";

function Use() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(() => count * 2);
  }, [count]);
  return (<>
   <h1>total-{total}</h1>
   <button onClick={() => setCount((c) => c + 1)} >+</button>
  </>
  )}
export default Use