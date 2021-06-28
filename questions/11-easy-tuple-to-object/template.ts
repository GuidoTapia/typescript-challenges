export type TupleToObject<T extends readonly any[]> = {
  [Property in T[number]]: Property
};
