// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import { Image, View } from 'react-native';

export function TabBarIcon({
                               style,
                               ...rest
                           }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
    return (
        <View>
            {(rest.focus && (
                    <View
                        style={{
                            position: 'absolute',
                            left: -7,
                            top: 18,
                            height: 42,
                            width: 42,
                            backgroundColor: '#2C2C2C',
                            borderRadius: 38,
                        }}
                    />
                )) ||
                null}

            <Image
                source={rest.name}
                style={[
                    { marginTop: 25, height: 28, width: 28 },
                    rest.size ? { height: rest.size, width: rest.size } : {},
                ]}
            />
        </View>
    );
}
