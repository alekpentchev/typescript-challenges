// Give an array, transform into an object type and the key/value must in the given array.

const tuple = ['tesla', 'model 3', 'model X', 'model Y', 'opel', 'astra'] as const

type TupleToObject<T extends readonly any[]> = {
    [key in T[number]]: key
}

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}