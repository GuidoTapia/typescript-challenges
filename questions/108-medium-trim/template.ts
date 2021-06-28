export type Trim<S extends string> = S extends `${' '|'\n'|'\t'}${infer SL}`? Trim<SL>: 
  S extends `${infer SR}${' '|'\n'|'\t'}`? Trim<SR>: S; 
