export type MyReturnType<T> = T extends (...arg:any) => infer K? K:never;
