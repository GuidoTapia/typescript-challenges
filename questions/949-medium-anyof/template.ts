type everyFalse = 0 | '' | false | [] | { [key: string]: never } 
export type AnyOf<T extends readonly any[]> = 
  T extends []?
    false
    :T extends [infer F,...infer R]? 
      F extends everyFalse? 
        AnyOf<R>
        : true
      : never;
