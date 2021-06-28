export type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

export type ParsePrintFormat<S extends string, A extends any[] =[] > = 
  S extends `${infer L}%${infer K}${infer R}`?
    K extends keyof ControlsMap?
      ParsePrintFormat<R,[...A,ControlsMap[K]]>
      :ParsePrintFormat<R,A>
    :A
;
