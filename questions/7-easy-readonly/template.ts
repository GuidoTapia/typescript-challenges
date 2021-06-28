export type MyReadonly<T> = {
  readonly [Property in keyof T]: T[Property];
};
