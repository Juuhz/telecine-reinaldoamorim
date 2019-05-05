// Import React Defaults
import React, { Component } from 'react';

// Import Ultils
import { Container } from '../../../utils/class';

// Import API
import DevicesProps from '../../../api/devices';

// Import Style
import {
    Section, Title, ItensWrapper, ItemWrapper,
    TitleItem, ImageItem, TitleList, List, Label
} from './styled';

class Devices extends Component{

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
        const { title, itens } = DevicesProps;

        return(
            <Section id="devices">
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

export default Devices;