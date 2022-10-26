import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      button: {
        primary: string;
        default: string;
        gray: string;
        danger: string;
      };

      background: string;
      inverseBackground: string;
      inputBackground: string;
      text: string;
    };
  }
}
