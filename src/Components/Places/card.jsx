
import React from 'react'
import './card.css'


function card(props){
    return(
        
        <div className="card card-custom" >
            <div >
                 <img src={props.src} alt="example img"/>
                 <h3 id="placetitle">{props.placeName}</h3>
            </div>
            <div className="text-area">
                <h5>{props.description}</h5>
            </div>
            <button style={{marginBottom: 10}} type="button" class="btn btn-md btn-primary">Guide</button>
            <button style={{marginBottom: 10}} type="button" class="btn btn-md btn-primary">Book Tickets</button>
        </div>
        
    )
}

export default card;