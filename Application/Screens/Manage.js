import React from "react";
import { Box, Center, Heading, ScrollView, VStack, Text, Divider } from "native-base";

export default function Manager(props) {

    return (
        <ScrollView m={0}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <VStack p={5}>
                <Center>
                    <Heading>Gere votre compte</Heading>
                </Center>
                <Box>
                    <Text>Changer votre mot de passe</Text>
                    <Divider />
                    <Text>Changer votre mot de passe</Text>
                    <Divider />
                    <Text>Changer votre mot de passe</Text>
                    <Divider />
                    <Text>Changer votre mot de passe</Text>
                    <Divider />
                    <Text>Changer votre mot de passe</Text>
                    <Divider />
                    <Text>Changer votre mot de passe</Text>
                    <Divider />
                    <Text>Changer votre mot de passe</Text>
                    <Divider />
                    <Text>Changer votre mot de passe</Text>
                    <Divider />
                    <Text>Changer votre mot de passe</Text>
                    <Divider />
                </Box>
            </VStack>
        </ScrollView>
    )
}