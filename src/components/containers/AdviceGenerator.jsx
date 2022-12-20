import React, { useEffect, useState } from "react";
import AdviceTexts from "../AdviceTexts";
import ButtonDices from "../ButtonDices";
import Loader from "../Loader";
import { helpHttp } from "../../helper/helpHttp";

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "https://api.adviceslip.com/advice";

  const fetchAdvice = () => {
    setLoading(true);

    api.get(url).then((res) => {
      if (!res.err) {
        setAdvice(res);
      } else {
        setAdvice({});
        alert("Ha ocurridó un error");
      }
    });

    setLoading(false);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleGenerateAdvice = (e) => {
    e.preventDefault();
    fetchAdvice();
  };

  return (
    <article className="advice-generator">
      {loading ? <Loader /> : <AdviceTexts text={advice} />}
      <ButtonDices handleAdvice={handleGenerateAdvice} />
    </article>
  );
};

export default AdviceGenerator;
