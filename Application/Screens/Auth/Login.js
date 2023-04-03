import React, { Component } from "react";
import { Box, Flex, Center, VStack, Divider } from "native-base";
import { LoginButton, ScreenTitle } from "../../Component/Auth";

export default function Login(props) {

    return (
        <Center flex='1'>
            <ScreenTitle />
            <Box pb={'12'} />
            <VStack space={4}>
                <LoginButton
                    label='Connexion'
                    color="#006938"
                    bgPress='orange.300'
                />
                <LoginButton
                    label="S'Inscrire"
                    color="#006938" 
                    bgPress='orange.300'
                />
            </VStack>
        </Center>

    )

}