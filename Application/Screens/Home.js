import React, { useContext, useState } from 'react';
import { Box, Center, Heading, Text, HStack, Button, VStack, ScrollView } from 'native-base';
import { UserContext } from '../Context/Users/UserContext';

export default function Home(props) {

    const { isLogged, setIsLogged } = useContext(UserContext);

    const toggle = () => {
        setIsLogged(false);

        setTimeout(()=>{
            setIsLogged(true);
        }, 5000)
    }

    return (
        <VStack space={5} m={0}>
            <ScrollView
                pt={3}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Center
                    px={5}
                >
                    <Center
                        borderWidth={1}
                        borderRadius={5}
                        borderColor={'orange.500'}
                        height={'150px'}
                        width={'100%'}
                        _text={{
                            color: 'coolGray.400',
                            fontWeight: 'bold'
                        }}
                    >
                        <Text>Solde disponible</Text>
                        <Heading>0.00 CFA</Heading>
                    </Center>
                </Center>
                <Center flexDirection={'row'}>
                    <Center>
                        <Button onPress={toggle()}>Charge</Button>
                    </Center>
                    <Center>
                        <Button>Charge</Button>
                    </Center>
                </Center>
                <VStack >
                    <Center>
                        <Heading>Derniere transaction</Heading>
                        <Text>Vous n'avez aucune transaction encienne.</Text>

                    </Center>
                </VStack>
            </ScrollView>

        </VStack>
    )
}