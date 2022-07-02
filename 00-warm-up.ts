import { Expect,Equal } from "@type-challenges/utils";

type HelloWorld = string

// you should make this work
type test = Expect<Equal<HelloWorld, string>>