import type Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export const setLenis = (instance: Lenis | null): void => {
  lenisInstance = instance;
};

export const getLenis = (): Lenis | null => {
  return lenisInstance;
};
