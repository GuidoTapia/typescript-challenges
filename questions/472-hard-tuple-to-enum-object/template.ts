type Search<T extends readonly string[], K extends T[number], A extends any[] = []> = 
  T[A['length']] extends K ? 
    A['length'] : 
    Search<T, K, [...A, 0]>

export type Enum<T extends readonly string[], N extends boolean = false> ={
  readonly [P in T[number] as Capitalize<P>]: N extends false ? P : Search<T, P>
};
  