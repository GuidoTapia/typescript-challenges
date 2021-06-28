export type Get<T extends {}, S extends string> = 
  S extends `${infer K}.${infer R}`?
    K extends keyof T?
      Get<T[K],R>
      :never
    : S extends keyof T?
      T[S]
      :never
;
