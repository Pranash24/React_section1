import { useEffect, useState } from "react";
export default function App() {
  const [advice, setAdvice] = useState("");
  const [number, setnumber] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setnumber(number + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>get advice</button>
      <Message number={number} />
    </div>
  );
}

function Message(props) {
  return <h3>{props.number}</h3>;
}
