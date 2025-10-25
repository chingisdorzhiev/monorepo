declare module '*.module.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module '*.css';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
// declare module "*.svg";
declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare const __PLATFORM__: 'mobile' | 'desktop';
declare const __DEV_MODE__: boolean;
declare const __PROD_MODE__: boolean;
