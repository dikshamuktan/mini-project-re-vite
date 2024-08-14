import { useState,useEffect } from "react";

const MotivationQuote= ()=> {

    const [quote, setQuote]= useState("");

    useEffect(()=> {
        const quotes=[
            "Don't watch the clock; do what it does. Keep going.",
            "The future depends on what you do today.",
            "Success is not the key to happiness. Happiness is the key to success.",
            "Believe you can and you're halfway there.",
        ]

        const dailyQuote= quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(dailyQuote);
    },[])
   
    return(
        <div>
            <h2> Motivation Quote</h2>
            <p>{quote}</p>
        </div>
    );

};

export default MotivationQuote;