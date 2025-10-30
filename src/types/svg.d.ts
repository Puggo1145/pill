declare module '*.svg' {
  import type { FC, SVGProps } from 'react';

  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
