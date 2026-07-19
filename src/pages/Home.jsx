import { useState } from "react";

import Navbar from "../Navbar";
import Hero from "../Hero";
import Card from "../Card";
import Footer from "../Footer";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

function Home({ darkMode, setDarkMode }) {

  const [crop, setCrop] = useState("");
  const [problem, setProblem] = useState("");

  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState("");
  const [showToast, setShowToast] = useState(false);


  const handleAdvice = async () => {

    if (!crop.trim() || !problem.trim()) {
      alert("Please enter crop name and problem.");
      return;
    }


    setLoading(true);
    setAdvice("");
    setShowToast(false);


    try {

      const response = await fetch(
        "http://localhost:5000/api/ai/crop-advice",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            prompt: `
You are an agriculture expert AI assistant.

Crop Name:
${crop}

Crop Problem:
${problem}

Provide:
1. Possible cause of the problem
2. Recommended treatment
3. Prevention tips
4. Farming advice suitable for Indian farmers

Give a clear and practical answer.
`

          }),
        }
      );


      const data = await response.json();

      console.log(data);


      setAdvice(
        data.advice ||
        data.message ||
        data.response ||
        JSON.stringify(data)
      );


      setShowToast(true);


    } catch (error) {

      console.log(error);

      setAdvice(
        "Unable to get AI advice. Please try again."
      );

    }


    setLoading(false);

  };


  return (
    <>

      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />


      <Hero />


      <section className="container fade-up">

        <div className="card">

          <h2 className="section-title">
            🌾 AI Crop Advisory
          </h2>


          <p className="section-subtitle">
            Get intelligent farming recommendations powered by Gemini AI.
          </p>



          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "30px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >


            <div
              style={{
                flex: "1",
                minWidth: "280px",
              }}
            >

              <Input
                placeholder="Enter crop name..."
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
              />

            </div>



            <div
              style={{
                flex: "1",
                minWidth: "280px",
              }}
            >

              <Input
                placeholder="Describe crop problem..."
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
              />

            </div>



            <Button
              text="Get AI Advice"
              onClick={handleAdvice}
            />


          </div>




          <div
            style={{
              marginTop: "30px",
              textAlign: "center",
            }}
          >

            {loading && <Loader />}

          </div>




          {
            advice && (

              <div
                className="card"
                style={{
                  marginTop: "30px",
                  textAlign: "left",
                }}
              >

                <h3>
                  🤖 Gemini AI Recommendation
                </h3>


                <p>
                  {advice}
                </p>


              </div>

            )
          }




          {
            showToast && (

              <Toast
                message="AI Advice Generated Successfully!"
              />

            )
          }



        </div>


      </section>




      <section
        className="container"
        style={{
          marginTop: "70px",
          marginBottom: "70px",
        }}
      >

        <h2 className="section-title">
          Why Choose Our Platform?
        </h2>


        <p className="section-subtitle">
          Smart agriculture powered by Artificial Intelligence.
        </p>


        <Card />


      </section>




      <Footer />

    </>
  );
}

export default Home;