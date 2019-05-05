// Import React Defaults
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions Redux
import { changeStatusModal } from '../../../redux/actions';

// Import Ultils
import Slider from "react-slick";

// Import API
import MoviesProps from '../../../api/movies';

// Import Style
import {
    Section, ItemWrapper, Image, Play
} from './styled';

class Movies extends Component{

    renderItemSlide = ( item, key ) => (
        <ItemWrapper key={key}>
            <Image src={item.poster_m} alt={item.titulo_portugues} title={`Assista: ${item.titulo_portugues}`} />
            <Play 
                className="playButton" 
                onClick={() => this.props.changeStatusModal(true)}
            >Dê um Play</Play>
        </ItemWrapper>
    )

    render(){
        // Pega as informações dos filmes
        const { data } = MoviesProps;

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
            <Section id="movies">
                <Slider {...settings}>
                    {  
                        data.map( ( item, key ) => this.renderItemSlide( item, key ) )
                    }
                </Slider>
            </Section>
        );
    }
}

function mapStateToProps ( state ) {
    const { modalStatus } = state;
    return { modalStatus }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeStatusModal }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies);