export type Capitalize<S extends string> = S extends `${infer L}${infer K}`? `${Uppercase<L>}${K}`: S;
