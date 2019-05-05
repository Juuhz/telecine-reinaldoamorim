// Import React Defaults
import React, { Component } from 'react';

// Import Utils
import { Container } from '../../../utils/class';

// Import Style
import {
    Section, BoxInfos, Infos, Title, SubTitle, Text,
    ItensWrapper, ItemWrapper, ImageItem, TitleList, List, Label
} from './styled';

class Devices extends Component{

    renderItem = ( item, key ) => (
        <ItemWrapper key={key}>
            <ImageItem {...item.image} />
            <TitleList>{item.list.title}</TitleList>
            <List>
                {
                    item.list.itens.map( ( label, keyLabel ) => (
                        <Label key={keyLabel}>{label.text}</Label>
                    )) 
                }
            </List>
        </ItemWrapper>
    )

    render(){
        const { title, subTitle, text, itens } = this.props;

        return(
            <Section id="devices">
                <Container>
                    <Title>{title}</Title>
                    <BoxInfos>
                        <Infos>
                            <SubTitle>{subTitle}</SubTitle>
                            <Text
                                text={text}
                                tags={{html: 'span'}}
                            />
                        </Infos>
                        <ItensWrapper>
                            {  
                                itens.map( ( item, key ) => this.renderItem( item, key ) )
                            }
                        </ItensWrapper>
                    </BoxInfos>
                </Container>
            </Section>
        );
    }
}

export default Devices;