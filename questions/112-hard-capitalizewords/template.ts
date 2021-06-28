export type CapitalizeWords<S extends string> =
  S extends `${infer F} ${infer R}` ? `${Capitalize<F>} ${CapitalizeWords<R>}` :
  S extends `${infer F}.${infer R}` ? `${Capitalize<F>}.${CapitalizeWords<R>}` :
  S extends `${infer F},${infer R}` ? `${Capitalize<F>},${CapitalizeWords<R>}` :
  Capitalize<S>
