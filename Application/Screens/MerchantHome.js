import React, { Component } from "react";
import { Box, Button, Center, HStack, Heading, ScrollView, Text, Pressable } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class MerchantHome extends Component {

    _handlePress = () => {
        console.log('Pressed');
    }

    render() {

        return (
            <Box
                flex={1}
                bg={'#EA712D'}
            >
                <Box
                    p={5}
                >
                    <Icon name='cog' size={20} color={'black'} />
                </Box>
                <Box
                    pt={5}
                    zIndex={10}
                >
                    <Center>
                        <Heading>250 000 F CFA</Heading>
                        <Box
                            minHeight={'100px'}
                        >
                            <Box
                                p={10}
                                alignSelf={'center'}
                                bg={'blue.400'}
                                position={'absolute'}
                                minWidth={'70%'}
                                borderRadius={'2xl'}
                                top={10}


                            >
                                <Text textAlign={'center'}>QR CODE</Text>
                            </Box>
                        </Box>
                    </Center>
                </Box>
                <Box
                    borderWidth={'1px'}
                    borderColor={'white'}
                    borderTopRadius={'3xl'}
                    pt={20}
                    borderBottomWidth={1}
                    bg={'coolGray.200'}
                    borderBottomColor={'coolGray.500'}
                    shadow={5}

                >
                    <HStack

                        justifyContent={'space-around'}
                        px={5}
                        pb={4}

                    >

                        <Center>
                            <Button
                                borderRadius={'3xl'}
                                bg={'coolGray.200'}
                                _pressed={{
                                    bg: 'coolGray.200'
                                }}
                                onPress={this._handlePress}
                            >
                                <Icon name='arrow-down' size={20} color='#FC5603' />
                            </Button>
                            <Text bold color={'green.900'}>Retrait</Text>
                        </Center>
                        <Center>
                            <Button
                                borderRadius={'3xl'}
                                bg={'coolGray.200'}
                                _pressed={{
                                    bg: 'coolGray.200'
                                }}
                                onPress={this._handlePress}
                            >
                                <Icon name='mobile' size={20} color='#FC5603' />
                            </Button>
                            <Text bold color={'green.900'}>Achat d'unité</Text>
                        </Center>
                    </HStack>
                </Box>
                <Box
                    flex={1}
                    bg={'white'}
                >
                    <Heading pt={2} px={8} fontSize={'md'}>Historique de paiement</Heading>
                    <ScrollView

                        showsVerticalScrollIndicator={false}
                        px={10}
                    >
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>
                        <Text>Transaction</Text>

                    </ScrollView>

                </Box>
            </Box>
        )
    }
}