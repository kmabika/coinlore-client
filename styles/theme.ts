import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import Button from './components/button';
import Text from './components/text';
import fonts from './fonts';

const customTheme = extendTheme({
    fonts,
    colors,
    components : {
        Button,
        Text
    },
    styles : {
        global : () => ({
            body:{
                bg : ("white.400"),
            }
        })
    }
});

export default customTheme;