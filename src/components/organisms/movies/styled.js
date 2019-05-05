// Import Styled
import styled from 'styled-components';

// Import Utils
import { Wrapper } from '../../../utils/class';
import { LIGTH_GRAY, DARK_GRAY } from '../../../utils/variables';
import { rem } from '../../../utils/helpers';

export const Section = styled(Wrapper)`
    width: 100%;
    text-align: center;
    background-size: cover;
    color: #FFF;
    margin-top: ${rem(160)};
    background: ${LIGTH_GRAY};

    /* CSS para o Carrosel */
    .slick-slider{
        position: relative;
        display: block;
        box-sizing: border-box;
        user-select: none;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
        top: ${rem(-110)};
        .slick-list{
            position: relative;
            display: block;
            overflow: hidden;
            margin: 0;
            padding: 0;
            &:focus{
                outline: none;
            }
            &.dragging{
                cursor: pointer;
                cursor: hand;
            }
        }
        .slick-track{
            position: relative;
            top: 0;
            left: 0;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        .slick-track,
        .slick-list{
            transform: translate3d(0, 0, 0);
        }
        .slick-slide{
            display: none;
            float: left;
            height: 100%;
            min-height: ${rem(1)};
            &.slick-current:hover{
                .playButton{
                    opacity: 1;
                    z-index: 2;
                }
            }

            @media (min-width: 734px){
                &:hover{
                    .playButton{
                        opacity: 1;
                        z-index: 2;
                    }
                }
            }
        }
        &.slick-initialized .slick-slide{
            display: block;
        }
        .slick-dots{
            flex-flow: row wrap;
            display: flex !important;
            justify-content: space-between;
            padding: 0px ${rem(20)};
            max-width: ${rem(370)};
            margin: ${rem(35)} auto 0;
            li{
                width: ${rem(15)};
                button{ 
                    width: 100%;
                    height: ${rem(6)};
                    border-radius: ${rem(10)};
                    background: ${DARK_GRAY};
                    text-indent: -999em;
                    outline: none;
                }
                &.slick-active{
                    width: ${rem(22)};
                    button{ 
                        background: #FFF;
                    }
                }
            }
        }
    }
`;

export const ItemWrapper = styled.div`
    position: relative;
    padding: 0px ${rem(12)};
    outline: none;
    box-sizing: border-box;
`;

export const Image = styled.img`
    max-width: 100%;
    border-radius: ${rem(10)};
`;

export const Play = styled.div`
    position: absolute;
    top: 0px;
    left: ${rem(12)};
    display: flex;
    background: rgba( 0,0,0,0.8 );
    width: calc( 100% - ${rem(24)} );
    height: calc( 100% - ${rem(5)} );
    border-radius: ${rem(10)};
    justify-content: center;
    align-items: center;
    flex-flow: column-reverse;
    opacity: 0;
    z-index: -1;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:after{
        content: "";
        position: relative;
        background: url( '/static/images/play.svg' ) no-repeat center center;
        width: ${rem(60)};
        height: ${rem(60)};
        margin-bottom: ${rem(10)};
    }
`;