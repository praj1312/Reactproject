import React from 'react'
function About()

{
    return(
   <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-6'>
                <h1>Inforamation about cosmatics</h1>
                <p>Cosmetics are constituted mixtures of chemical compounds derived from either natural sources, or synthetically created ones. Cosmetics have various purposes. Those designed for personal care and skin care can be used to cleanse or protect the body or skin.</p>
                <p>Cosmetics are constituted mixtures of chemical compounds derived from either natural sources, or synthetically created ones. Cosmetics have various purposes. Those designed for personal care and skin care can be used to cleanse or protect the body or skin.</p>
                
                <button className='btn btn-primary mt-5'>Read More</button>
            </div>
            <div className='col-md-6'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Cosmetics.JPG" alt="img" className='img-fluid' />
            </div>
        </div>
    </div>

    )


}
export default About;