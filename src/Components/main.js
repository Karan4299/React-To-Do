import React from 'react';
import { MainS,Container,Left,Center,Right} from './mainstyle';
import ContentProvider from './Provider/MainContentProvider';
import Categories from './Left/Categories/Categories';
import Upcoming from './Center/Upcoming/Upcoming';
import Circular from './Center/Circular/Circular';
import Alltasks from './Center/Alltasks/Alltasks';
import AllDates from './Right/AllDates/AllDates';


const Main = () => {
    return (
        <MainS>
            <ContentProvider>
                <Container>
                    <Left>
                        <Categories></Categories>
                    </Left>
                    <Center>
                        <Upcoming></Upcoming>
                        <Circular></Circular>
                        <Alltasks></Alltasks>
                    </Center>
                    <Right>
                        <AllDates></AllDates>
                    </Right>
                </Container>
            </ContentProvider>
        </MainS>
    )
}

export default Main;