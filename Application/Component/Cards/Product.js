import React from "react";
import { Box, Center, Text, Image, Heading } from 'native-base';
import { images } from "../../Datas/Image";
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

export function ProductCard(props) {

    const { title, image, caption, text } = props;

    return (
        <Box
            size={150}
            w='90%'
            borderWidth={1}
            borderColor={'red'}
            borderRadius={5}
        >

            <Image source={{
                uri: 'https://media.istockphoto.com/id/1031507604/vector/bank-modern-thin-line-design-style-vector-illustration.jpg?s=612x612&w=0&k=20&c=vvptoH2ajRiQyATpZlEIjD6l6_C8Ym1WWesJ3opDoSY='}}
                alt="presentation image"
                />
            <Heading>
                {title ? title : 'Title'}
            </Heading>
            <Text>{text ? text : lorem}</Text>
            <Box position={'absolute'}
            bottom={0}
            left={0}
            bg='darkBlue.800'
            _text={{
                color: 'white',
                px: 4
            }}
            >
                {caption? caption : 'Caption'}
            </Box>
        </Box>
    )
}

export function servicesCard(props){

    return(
        <Box>
            <Center>
                <Text>Services card</Text>
            </Center>
        </Box>
    )
}