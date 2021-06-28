export type DeepReadonly<T> = {
  readonly [P in keyof T]:
  T[P] extends (...arg:any)=>any? T[P]:
  T[P] extends {}? DeepReadonly<T[P]>:T[P];
};