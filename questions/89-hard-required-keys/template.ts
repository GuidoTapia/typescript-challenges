export type RequiredKeys<T> = keyof {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
}


/*{
    [K in keyof T as T[K] extends Required<T>[K] ? never:K]: T[K];
  }*/
