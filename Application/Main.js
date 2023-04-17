import React, { useContext, useState } from 'react';
import { VStack, Text, Button, Box, Center } from 'native-base';
import { UserContext } from './Context/Users/UserContext';
import { StackNavigation } from './Navigation/BottomNaviagation';

export default function Main(props) {

    const { isLogged, setIsLogged } = useContext(UserContext);

    // const {  isLogged } = useContext(UserContext);

    return (

        <Center>
            {
                isLogged ?
                    <VStack flex={'1'} alignContent={'center'} p='0' m={0}>
                        <StackNavigation />
                    </VStack>
                    :
                    <Button>Not logged</Button>
            }
        </Center>

    );
}
