import 'styled-components';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    background: string;
    card: string;
    text: string;
    primary: string;
  }
}