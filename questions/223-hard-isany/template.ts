export type IsAny<T> = ((aux: [any]) => [any]) extends ((aux: T) => T) ? true : false;
