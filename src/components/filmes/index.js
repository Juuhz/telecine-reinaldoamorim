// Import React Defaults
import React, { Component } from 'react';

// Import Ultils
import Slider from "react-slick";
import { Container } from '../../utils/class';

// Import API
import FilmesProps from '../../api/filmes';

// Import Style
import {
    Section, ItemWrapper, Image
} from './styled';

class Filmes extends Component{

    renderItemSlide = ( item ) => {
        return(
            <ItemWrapper>
                <Image src={item.poster_m} alt={item.titulo_portugues} title={`Assista: ${item.titulo_portugues}`} />
            </ItemWrapper>
        )
    }

    render(){
        // Pega as informações dos filmes
        const { data } = FilmesProps;

        // Configuração do slide
        const settings = {
            dots: true,
            arrows: false,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500
        };

        return(
            <Section id="filmes">
                <Slider {...settings}>
                    {  
                        data.map( ( item, key ) => this.renderItemSlide( item ) )
                    }
                </Slider>
            </Section>
        );
    }
}

export default Filmes;