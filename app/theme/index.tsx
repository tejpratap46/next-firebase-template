import { createTheme, virtualColor } from "@mantine/core";

const theme = createTheme({
  primaryColor: "blue",
  colors: {
    "dark-pink": [
      "#faedff",
      "#edd9f7",
      "#d8b1ea",
      "#c186dd",
      "#ae62d2",
      "#a34bcb",
      "#9d3fc9",
      "#8931b2",
      "#7a2aa0",
      "#6b218d",
    ],
    primary: virtualColor({ name: "primary", light: "blue", dark: "grape" }),
  },
  components: {
    TextInput: {
      defaultProps: {
        size: "md",
      },
    },
    PasswordInput: {
      defaultProps: {
        size: "md",
      },
    },
    Button: {
      defaultProps: {
        size: "md",
      },
    },
  },
});

export default theme;
