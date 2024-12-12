import { useMemo } from 'react';
import { animations } from './animations';

type Options = $Animations['animation'];
type Return = ReturnType<$AnimationFn>;
type Hook = (option: Options) => Return;

export const useBuildinAnimation: Hook = (option) => {
  const animation = useMemo<Return>(() => {
    let value = {} as Return;

    if (option && option in animations) {
      value = (animations[option] as $AnimationFn)();
    }
    return value;
  }, [option]);
  return animation;
};
