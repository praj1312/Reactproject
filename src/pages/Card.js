import React from 'react'
import Data from '../Data.json';

function Card() {

     
    
    return (
        <>

            <div className="container">
                <button type="button" class="btn btn-outline-primary me-1 ">All</button>
                <button type="button" class="btn btn-outline-primary me-1">Lips</button>
                <button type="button" class="btn btn-outline-primary me-1">Eyes</button>
                <button type="button" class="btn btn-outline-primary me-1">Fragrances</button>


            </div>

            {Data.map((result) => {
                return (

                    <div className='col-md-3  p-2'>
                        <div className='card mt-5 h-100 effect'>
                            <img className='img-fluid productimg' height="200px" src={result.img} alt={result.title} />
                            <div className='d-flex p-2'>
                                <p >Name : {result.brand}</p>
                                <p className='ms-auto '> Price : {result.price}</p>
                            </div>
                            
                        </div>

                    </div>
                    
                )
            })}
            
        </>

    )

}
export default Card;