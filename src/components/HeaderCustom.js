import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import UserAvatar from 'react-native-user-avatar';
import user from '../Model/user';
import { COLORS } from '../Constant/Constant';

export default function HeaderCustom() {
    return (
        <View
            style={{
                alignItems: 'center',
                flexDirection: 'row',
                paddingVertical: 20,
            }}
        >
            <TouchableOpacity>
                <Image source={require('../assets/app_icon_green.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ flex: 1 }}
            >
                <View
                    style={{
                        paddingHorizontal: 10,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-end'
                        }}
                    >
                        <Text
                            style={{ fontWeight: 'bold' }}
                        >
                            CMC
                        </Text>
                        <Image
                            source={require('../assets/down_arrow.png')}
                            style={{
                                width: 15,
                                height: 15,
                                marginHorizontal: 10,
                                tintColor: COLORS.light_grey,
                            }}
                        />
                    </View>

                    <Text>{user.email}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('../assets/bell.png')}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.light_grey,
                        marginHorizontal: 20,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <UserAvatar
                    size={40}
                    src='https://thumbs.dreamstime.com/b/user-icon-flat-style-isolated-grey-background-user-icon-flat-style-isolated-grey-background-your-design-logo-131213475.jpg'
                    bgColor='null'
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 21,
        color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 12,
    },
})
