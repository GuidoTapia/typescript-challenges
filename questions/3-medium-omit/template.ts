export type MyOmit<T, K> = {
  [P in keyof T as P extends K? never:P]: T[P];
};
//Pick<> + Ommit <>
//The as keyword is a Type Assertion in TypeScript which tells the compiler to consider the object as another type than the type the compiler infers the object to be.