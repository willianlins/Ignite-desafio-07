import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    highlight: {
      "900": "#FFBA08",
      "50": "rgba(255, 186, 8, 0.5);"
    },
    Dark: {
      "900": "#000000",
      "700": "#47585B",
      "500": "#999999",
      "50": "rgba(153, 153, 153, 0.5);"
    },
    Light: {
      "900": "#FFFFFF",
      "700": "#F5F8FA",
      "50": "#DADADA"
    }
  },
  sizes:{
    x:{
      horizontal: "10px"
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  }, 
  styles: {
    global:{
      body:{
        bg: "#F5F8FA",
        color: "#47585B",
      }
    }
  }
})
