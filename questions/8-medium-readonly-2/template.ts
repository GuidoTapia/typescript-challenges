export type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in keyof T as P extends K?P:never]: T[P]; 
} & {
  [P2 in keyof T as P2 extends K? never: P2]: T[P2]; 
};
