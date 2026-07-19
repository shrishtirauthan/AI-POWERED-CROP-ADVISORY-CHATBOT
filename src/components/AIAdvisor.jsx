import { useState } from "react";

function AIAdvisor() {

  const [crop, setCrop] = useState("");
  const [problem, setProblem] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);


  const getAdvice = async () => {

    setLoading(true);
    setAdvice("");

    try {

      const response = await fetch(
        "http://localhost:5000/api/ai/advice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            crop,
            problem
          })
        }
      );


      const data = await response.json();

      setAdvice(data.advice);

    } 
    catch (error) {

      setAdvice("Unable to get AI advice");

    }


    setLoading(false);

  };


  return (

    <div>

      <h2>🌱 AI Crop Advisory</h2>


      <input
        type="text"
        placeholder="Enter crop name"
        value={crop}
        onChange={(e)=>setCrop(e.target.value)}
      />


      <br/><br/>


      <textarea
        placeholder="Describe crop problem"
        value={problem}
        onChange={(e)=>setProblem(e.target.value)}
      />


      <br/><br/>


      <button onClick={getAdvice}>
        Get AI Advice
      </button>



      {
        loading &&
        <h3>🤖 Gemini is thinking...</h3>
      }



      {
        advice &&
        <div>

          <h3>AI Recommendation:</h3>

          <p>{advice}</p>

        </div>
      }


    </div>

  );

}

export default AIAdvisor;