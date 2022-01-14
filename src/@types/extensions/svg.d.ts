declare module "*.svg" {
  import { FC } from "react";

  import { SvgProps } from "react-native-svg";

  // const content: FC<SvgProps> | string;
  const content: string;
  export default content;
}
