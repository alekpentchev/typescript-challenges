// Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. 
// The output should be a boolean true or false.

// type Includes<T extends any[], U> = T[number] extends U? true : false

import { Equal } from '@type-challenges/utils'

type Includes<T extends any[], U> = T extends [T[0], ...infer Rest] ? 
    Equal<T[0], U> extends true ? true : Includes<Rest, U> :
    false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`