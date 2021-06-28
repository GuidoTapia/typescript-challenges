type Curry<P, R> = 
  P extends [infer Head, ...infer Tail] ? 
    (h:Head) => Curry<Tail,R>
    :R;

export declare function Currying<T>(fn: T): 
  T extends (...args: infer A) => infer R ? 
    Curry<A, R> 
    : never;
