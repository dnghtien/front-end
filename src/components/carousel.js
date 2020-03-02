import React from 'react';
import Crs1 from '../images/crs1.jpg';
import Crs2 from '../images/crs2.jpg';
import Crs3 from '../images/crs3.jpg';
import Crs4 from '../images/crs4.jpg';
import Crs5 from '../images/crs5.jpg';
import Crs6 from '../images/crs6.jpg';

function Carousel(){
    return(
        <div className='Carousel'>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src={Crs1} alt="First slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide</h5>
                        <p>leaves, line, neon, light, dark</p>
                    </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={Crs2} alt="Second slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide</h5>
                        <p>background, dark, blurred</p>
                    </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={Crs3} alt="Third slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide</h5>
                        <p>lane, night, dark, urban, lighting, red</p>
                    </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={Crs4} alt="Fourth slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Fourth slide</h5>
                        <p>forest, fog, dark, trees, gloomy</p>
                    </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={Crs5} alt="Fifth slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Fifth slide</h5>
                        <p>space, planet, surface, shadow</p>
                    </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={Crs6} alt="Sixth slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Sixth slide</h5>
                        <p>light, sky, stars, background</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    );
}

export default Carousel;