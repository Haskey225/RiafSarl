import React from "react";
import { Box, Button, Center, Heading, Text } from "native-base";

export function LoginButton(props) {

    const { label, color, bg, bgPress } = props;

    return (
        <Button
            px='12'
            bg={bg ? bg : 'white'}
            borderRadius={"3xl"}
            _text={{
                color: color ? color : 'black',
                textAlign: 'center'
            }}
            _pressed={{
                backgroundColor: bgPress ? bgPress : 'coolGray.100'
            }}

        >
            {label ? label : 'label Vide'}
        </Button>
    )
}

export function RegisterButton(props) {

    return (
        <Center>
            <Button>
                Register To Riaf
            </Button>
        </Center>
    )
}

export function ScreenTitle(props){

    return(
        <Heading
        color={'orange.600'}
        >
            Bienvenu sur RiafPay
            </Heading>
    )
}