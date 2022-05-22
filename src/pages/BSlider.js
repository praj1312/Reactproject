import React from 'react'

export default function BSlider() {
  return (
    <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://wallpapercave.com/wp/wp2004266.jpg" class="d-block w-100 simg" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2 className='text-dark'>Beauty is the promisses of Happiness</h2>
        <h5 className='text-dark'>Beauty is about enhancing what you have.Let yourself shine through.</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/originals/a0/fe/27/a0fe27b6e56baf3281196f9d11f85dfe.jpg" class="d-block w-100 simg" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h2 className='text-dark'>Beauty is the promisses of Happiness</h2>
        <h5 className='text-dark'>Beauty is about enhancing what you have.Let yourself shine through.</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://previews.123rf.com/images/belchonock/belchonock1906/belchonock190611508/125266121-set-of-different-professional-makeup-products-on-table.jpg" class="d-block w-100 simg" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      <h2 className='text-dark'>Beauty is the promisses of Happiness</h2>
        <h5 className='text-dark'>Beauty is about enhancing what you have.Let yourself shine through.</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
