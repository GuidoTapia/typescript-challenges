export type CamelCase<S extends string> = 
  S extends `${infer L}_${infer C}${infer R}`? 
    `${Lowercase<L>}${Uppercase<C>}${CamelCase<`${R}`>}`
    :Lowercase<S>
;
