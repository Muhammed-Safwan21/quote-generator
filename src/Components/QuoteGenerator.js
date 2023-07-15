import React, { useEffect, useState } from "react";
import "../styles/QuoteGenerator.css";

function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [quotes, setQuotes] = useState([]);

  const randomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const getQuote = () => {
    setQuote(randomQuote(quotes));
  };

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  return (
    <div className="quote-container">
      <h1 id="title">Quote Generator</h1>
      <button onClick={getQuote}>Get a Quote</button>
      <div className="quote-box">
        <h3>"{quote.text}"</h3>
        <p>
          <i>- {quote.author}</i>
        </p>
      </div>
    </div>
  );
}

export default QuoteGenerator;
