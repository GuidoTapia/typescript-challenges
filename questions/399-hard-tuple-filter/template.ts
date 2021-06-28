export type FilterOut<T extends any[], F> = 
  T extends [infer H, ...infer Tail]?
    [H] extends [F]?
      FilterOut<Tail,F>
      :[H,...FilterOut<Tail,F>]
    :T;
