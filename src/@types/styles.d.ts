import "styled-components";

import { defaultTheme } from "../styles/defaultTheme";

type TypeStyle = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends TypeStyle {}
}
