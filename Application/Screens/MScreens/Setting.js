import React from "react";
import { Box, Center, Divider, HStack, Heading, Stack, Switch, Text, VStack } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Setting(props) {

    return (
        <VStack
            px={5}
            pt={2}
            space={'lg'}
        >
            <Box >
                <Heading>Information du commerçant</Heading>
                <Divider color={'black'} borderColor={'gray.300'} />
                <Icon name='user' size={48} color='orange' />
                <HStack alignItems={'center'} justifyContent={'space-between'}>
                    <Text fontSize={'2xl'}>Nom: </Text>
                    <Heading>Coulibaly</Heading>
                </HStack>
                <HStack alignItems={'center'} justifyContent={'space-between'}>
                    <Text fontSize={'2xl'}>Nom: </Text>
                    <Heading>Amarra</Heading>
                </HStack>
                <HStack alignItems={'center'} justifyContent={'space-between'}>
                    <Text fontSize={'2xl'}>Profession: </Text>
                    <Heading>Commerçant</Heading>
                </HStack>
            </Box>
            <Box>
                <Heading>Apparence</Heading>
                <Divider color={'black'} borderColor={'gray.300'} />
                <HStack
                    alignItems={'center'}
                    space={'2xl'}
                >
                    <Text>Mode Nuit</Text>
                    <Switch />
                </HStack>
            </Box>
        </VStack>
    )
}