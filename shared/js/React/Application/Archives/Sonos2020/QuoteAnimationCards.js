import React from 'react';

const QuoteCards = ({ Quotes, forwardRef})=>{ 

 return(
        <div className="Quotes">
            {
                Quotes.map((quote,i)=>{
                    return(
                        <div key={i} ref={el => forwardRef.current[i] = el} className="Quote">
                            <h2>{quote.Quote}</h2>
                            <p  >{quote.Sub}</p>
                        </div>
                    )
                })
            }
        </div>
    )}

export default QuoteCards;