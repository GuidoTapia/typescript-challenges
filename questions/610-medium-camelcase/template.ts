
export type CamelCase<S extends string> = 
  S extends `${infer L}-${infer C}${infer R}`? 
    Uppercase<C> extends C? 
      `${L}-${CamelCase<`${Uppercase<C>}${R}`>}`
      :`${L}${CamelCase<`${Uppercase<C>}${R}`>}`
    : S;