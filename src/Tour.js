import React from "react"

export default function Tour({id,image,info,price,name,removeTour}) {

    const [readMore, setReadMore]=React.useState(true)

    return ( 
        <article className="single-tour">
        <img src={image} alt={name}/>
        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
            </div>
            <p>{readMore ? info:`${info.substring(0,200)}...`}</p>
            <button onClick={()=>setReadMore(!readMore)} className="delete-btn" onClickCapture={()=>removeTour(id)}>Not interested</button>
        </footer>
        </article>
    )
};
