// Implement the type version of Array.unshift

type Unshift<T extends unknown[], U extends unknown> = [U, ...T]

type Result = Unshift<[1, 2], 0> // [0, 1, 2,]