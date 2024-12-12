import { animations } from '@v2/app/hooks/useBuildinAnimation/animations';
import type { MotionProps } from 'framer-motion';

type Options = keyof typeof animations;

declare global {
  type $AnimationFn = () => MotionProps;
  type $Animations<P = {}> = Omit<P, 'animation'> & {
    animation?: Options;
  };
}
