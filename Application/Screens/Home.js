import React from 'react';
import { Box, Center, Text } from 'native-base';
import Video from 'react-native-video';
import { ProductCard } from '../Component/Cards/Product';

export default function Home(props) {

    return (
        <Center
            flex='1'
            px={5}
        >
            <ProductCard />
        </Center>
    )
}