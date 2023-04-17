import React, { Component } from "react";
import { Box, Button, Center, HStack, Heading, ScrollView, Text, Pressable, Image } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class MerchantHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSoldeShowed: false
        }
    }

    _handlePress = () => {
        console.log('Pressed');
    }

    _soldeSwhow = async (vals) => {
        this.setState({ isSoldeShowed: vals });
    }

    render() {

        const { navigation } = this.props;

        return (
            <Box
                flex={1}
                bg={'#EA712D'}
            >
                <Box
                    p={5}
                >
                    <Pressable
                        onPress={() => navigation.navigate('Paramettre')}
                        bg={'#EA712D'}
                        _pressed={{
                            bg: '#EA712D'
                        }}
                    >
                        <Icon name='cog' size={20} color={'white'} />
                    </Pressable>

                </Box>
                <Box
                    pt={3}
                    zIndex={10}
                >
                    <Center>
                        <HStack
                            alignItems={'center'}
                            space={'xs'}
                        >
                            <Heading color={'white'} fontSize={'2xl'}>{this.state.isSoldeShowed ? '*********' : '250.000'} CFA </Heading>
                            <Button
                                onPress={() => this._soldeSwhow(!this.state.isSoldeShowed)}
                                bg={'#EA712D'}
                                _pressed={{
                                    bg: '#EA712D'
                                }}
                            >
                                <Icon name={this.state.isSoldeShowed ? 'eye' : 'eye-slash'} color='white' size={15} />
                            </Button>
                        </HStack>
                        <Box
                            minHeight={'100px'}
                        >
                            <Center
                                px={10}
                                py={2}
                                alignSelf={'center'}
                                bg={'orange.400'}
                                position={'absolute'}
                                minWidth={'70%'}
                                maxHeight={'100px'}
                                borderRadius={'2xl'}
                                top={10}


                            >
                                <Image 
                                resizeMode="cover"
                                borderWidth={5}
                                borderColor={'orange.900'}
                                source={{
                                    uri: "https://qrcode.tec-it.com/API/QRCode?data=https%3a%2f%2fwww.twitter.com%2fTECIT"
                                }} alt="Alternate Text" size={'md'} />
                            </Center>
                        </Box>
                    </Center>
                </Box>
                <Box
                    borderWidth={'1px'}
                    borderColor={'white'}
                    borderTopRadius={'3xl'}
                    pt={18}
                    borderBottomWidth={1}
                    bg={'coolGray.200'}
                    borderBottomColor={'coolGray.500'}
                    shadow={5}

                >
                    <HStack

                        justifyContent={'space-around'}
                        px={5}
                        pb={4}
                        pt={5}

                    >

                        <Center>
                            <Button
                                borderRadius={'3xl'}
                                bg={'coolGray.200'}
                                _pressed={{
                                    bg: 'coolGray.200'
                                }}
                                onPress={() => navigation.navigate('Retrait')}
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
                                onPress={() => navigation.navigate('Airtime')}
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
                        <Text>Transaction 03-05-2022  20 000 CFA</Text>
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