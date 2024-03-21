

// Al objeto T se le quitan las key cuyo valor no sea el entregado
type FilterKeysByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

// Es obvio
type OneOrMany<T> = T | T[];

// las propiedades de T se le agregan o se reemplazan con las de TUpdate. T mantiene las que no están en TUpdate
type Update<T, TUpdate> = Simplify<{
    [K in Exclude<keyof T, keyof TUpdate>]: T[K];
} & TUpdate>;

// No sé
type Simplify<T> = {
    [K in keyof T]: T[K];
} & {};

// No sé
type SimplifyMappedType<T> = [T] extends [unknown] ? T : never;


type ShallowRecord<K extends keyof any, T> = SimplifyMappedType<{
    [P in K]: T;
}>;

// Si T extiende a U retorna T, en caso contrario retorna U
type Assume<T, U> = T extends U ? T : U;

// Indica con false o true si los tipos son iguales o no
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// Retorna true si al menos uno de los entregados es true
type Or<T1, T2> = T1 extends true ? true : T2 extends true ? true : false;

// Retorna true si ambos son true, en cualquier otro caso retorna false
type And<T1, T2> = T1 extends true ? (T2 extends true ? true : false) : false;

// si el valor de if es true, se toma el tipo then, en cualquier otro caso else. Si se pasa un "boolean" como if, entonces puede ser tanto then como else
type IfThenElse<If, Then, Else> = If extends true ? Then : Else;


type PromiseOf<T> = T extends Promise<infer U> ? U : T;

// Hace que el objeto entregado deje de ser solo de lectura. Esto no se aplica a los valores que también son objetos
type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};

// Retorna un objeto con solo las key de T que también están en U
type KnownKeysOnly<T, U> = {
    [K in keyof T]: K extends keyof U ? T[K] : never;
};

// Indica si el tipo entregado es un any o no
type IsAny<T> = 0 extends (1 & T) ? true : false;
