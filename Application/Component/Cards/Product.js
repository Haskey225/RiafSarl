import React from "react";
import { Box, Center, Text } from 'native-base';

export function ProductCard(props) {

    return (
        <Box
        size={150}
        w='90%'
        borderWidth={1}
        borderColor={'red'}
        borderRadius={5}
        >
            <Center>
                <Text>Bienvenu dans la carte de produit</Text>
            </Center>
        </Box>
    )
}