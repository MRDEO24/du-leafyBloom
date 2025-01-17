import { extendTheme } from '@chakra-ui/react';

export const screenPhoneHeight = 'min(calc(100vh - 80px), 880px)';
export const theme = extendTheme({
  styles: {
    global: {
      '::selection': {
        color: 'white', // Change this to the color you prefer for the selected text
        backgroundColor: 'greenFlow.500', // Change this to the background color when text is selected
      },
    },
  },
  colors: {
    //javaGold
    javaGold: {
      50: '#f9f0df', // Adjusted color for shade 50
      100: '#f4e4bf', // Adjusted color for shade 100
      200: '#efdaa0', // Adjusted color for shade 200
      300: '#eadf81', // Adjusted color for shade 300
      400: '#e5d462', // Adjusted color for shade 400
      500: '#FECB4C', // Updated color
      600: '#e0b842', // Adjusted color for shade 600
      700: '#c6a037', // Adjusted color for shade 700
      800: '#ad8530', // Adjusted color for shade 800
      900: '#936b29', // Adjusted color for shade 900
    },
    //pinkPeony
    pinkPeony: {
      50: '#f2e8f0', // Adjusted color for shade 50
      100: '#e2c1d5', // Adjusted color for shade 100
      200: '#d39baa', // Adjusted color for shade 200
      300: '#c17584', // Adjusted color for shade 300
      400: '#b24e5e', // Adjusted color for shade 400
      500: '#C1528C', // Updated color
      600: '#a1407c', // Adjusted color for shade 600
      700: '#8f336b', // Adjusted color for shade 700
      800: '#7d275a', // Adjusted color for shade 800
      900: '#6b1b4a', // Adjusted color for shade 900
    },
    //brownRWD
    brownRWD: {
      50: '#f2ede9',
      100: '#e3d5cd',
      200: '#d4bda2',
      300: '#c5a57c',
      400: '#b68d57',
      500: '#6e6058',
      600: '#8e7d7a',
      700: '#a19694',
      800: '#b2b0ae',
      900: '#c1c9c8',
    },
    //navyGloom
    navyGloom: {
      50: '#e6e3e8', // Adjusted color for shade 50
      100: '#cfc6cf', // Adjusted color for shade 100
      200: '#b8aab8', // Adjusted color for shade 200
      300: '#a08ea0', // Adjusted color for shade 300
      400: '#897389', // Adjusted color for shade 400
      500: '#152239', // Updated base color
      600: '#3b2f4c', // Adjusted color for shade 600
      700: '#2f2740', // Adjusted color for shade 700
      800: '#241e34', // Adjusted color for shade 800
      900: '#181428', // Adjusted color for shade 900
    },
    //passPort
    passPort: {
      50: '#efe9e0', // Adjusted color for shade 50
      100: '#dfd3bf', // Adjusted color for shade 100
      200: '#ceb79f', // Adjusted color for shade 200
      300: '#be9c7f', // Adjusted color for shade 300
      400: '#ad8060', // Adjusted color for shade 400
      500: '#b78d2a', // Updated color
      600: '#a17624', // Adjusted color for shade 600
      700: '#8c621e', // Adjusted color for shade 700
      800: '#755018', // Adjusted color for shade 800
      900: '#5e3d12', // Adjusted color for shade 900
    },
    //greenFlow
    greenFlow: {
      50: '#f2e8f0', // Adjusted color for shade 50
      100: '#e2c1d5', // Adjusted color for shade 100
      200: '#d39baa', // Adjusted color for shade 200
      300: '#c17584', // Adjusted color for shade 300
      400: '#b24e5e', // Adjusted color for shade 400
      500: '#D39F53', // Updated color
      600: '#c28f43', // Adjusted color for shade 600
      700: '#ae7e3a', // Adjusted color for shade 700
      800: '#9a6e31', // Adjusted color for shade 800
      900: '#866d29', // Adjusted color for shade 900
    },


    bgWhiteOp80: {
      50: 'rgba(249, 249, 249, 0.8)',
    },
  },
  components: {
    Text: {
      variants: {
        rusticWeddingBloomTextSemi: {
          fontFamily: 'PoppinsSemibold',
          fontSize: '0.8rem',
        },
        rusticWeddingBloomText: {
          fontFamily: 'PoppinsRegular',
          fontSize: '0.8rem',
        },
        rusticWeddingBloomName: {
          fontFamily: 'RoyalWedding',
          fontSize: '4rem',
          
        },
      },
    },
    Heading: {
      variants: {
        rusticWeddingBloomH1Poppins: {
          fontFamily: 'PoppinsSemibold',
          fontSize: '1.5rem',
        },
        rusticWeddingBloomH1RoyalWedding: {
          fontFamily: 'RoyalWedding',
          fontSize: '6rem',
          fontWeight: '400',
        },
        rusticWeddingBloomMolgakClassy: {
          fontFamily: 'MolgakClassy',
          fontWeight: '400',
        },
      },
    },

    Button: {
      variants: {
        rusticWeddingBloom: {
          fontFamily: 'PoppinsRegular',
          fontWeight: '400',
          color: 'white',
          _disabled: {
            // Disabled text color
            _focus: { // Same as disabled background color to prevent change
              color: 'white', // Same as disabled text color to prevent change
              pointerEvents: 'none', // Prevents hover interactions
            },
          },
        },
      },
    },
    Box: {
      variants: {
        custom: {
          height: screenPhoneHeight,
        },
      },
    },
  },
});
