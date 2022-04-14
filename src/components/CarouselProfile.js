import React from  'react';
import './styles/CarouselProfile.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

export default function CarouselProfile() {
    return (
        <div className="container-info-profile">
            <h2 className="title-info-profile">Sobre mim</h2>
            <p className="description-profile">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque viverra ante eget augue congue suscipit. 
                Duis laoreet posuere sapien ut posuere. 
                Aliquam lacinia varius tortor quis accumsan. 
                id metus tincidunt, tristique dolor sed posuere sapien
            </p>

            <OwlCarousel
            className='owl-theme'
                items="1"
                nav
                loop
            >
                <div className='item'>
                    <h3 className="title-carousel">Formação</h3>
                    <ul>
                        <li>
                            <h3>Formação1</h3>
                            <p>descrição sobre a informação</p>
                        </li>
                        <li>
                            <h3>Formação1</h3>
                            <p>descrição sobre a informação</p>
                        </li>
                    </ul>
                </div>
                <div className='item'>
                    <h3 className="title-carousel">Experiências</h3>
                    <ul>
                        <li>
                            <h3>Formação1</h3>
                            <p>descrição sobre a informação</p>
                        </li>
                        <li>
                            <h3>Formação1</h3>
                            <p>descrição sobre a informação</p>
                        </li>
                    </ul>
                </div>
                <div className='item'>
                    <h3 className="title-carousel">Hobbies</h3>
                    <ul>
                        <li>
                            <h3>Formação1</h3>
                            <p>descrição sobre a informação</p>
                        </li>
                        <li>
                            <h3>Formação1</h3>
                            <p>descrição sobre a informação</p>
                        </li>
                    </ul>
                </div>
            </OwlCarousel>
        </div>
    )
}