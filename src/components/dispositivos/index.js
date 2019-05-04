// Import React Defaults
import React, { Component } from 'react';

// Import Ultils
import { Container } from '../../utils/class';

// Import API
import DispositivosProps from '../../api/dispositivos';

// Import Style
import {
    Section, Title, ItensWrapper, ItemWrapper,
    TitleItem, ImageItem, TitleList, List, Label
} from './styled';

class Dispositivos extends Component{

    renderItem = ( item, key ) => (
        <ItemWrapper key={key}>
            {
                item.title &&
                    <TitleItem>{item.title}</TitleItem>
            }
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
        const { title, itens } = DispositivosProps;

        return(
            <Section id="dispositivos">
                <Container>
                    <Title>{title}</Title>
                    <ItensWrapper>
                        {  
                            itens.map( ( item, key ) => this.renderItem( item, key ) )
                        }
                    </ItensWrapper>
                </Container>
            </Section>
        );
    }
}

export default Dispositivos;