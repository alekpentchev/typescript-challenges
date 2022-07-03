// Implement the built-in Parameters generic without using it.

type MyParameters<T extends (...args: any[]) => unknown> = T extends (...args: infer U) => unknown ? [...U] : never

type Foo = MyParameters<(s: string) => string>