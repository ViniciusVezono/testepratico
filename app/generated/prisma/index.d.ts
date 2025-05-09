
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Contato
 * 
 */
export type Contato = $Result.DefaultSelection<Prisma.$ContatoPayload>
/**
 * Model Telefone
 * 
 */
export type Telefone = $Result.DefaultSelection<Prisma.$TelefonePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contatoes
 * const contatoes = await prisma.contato.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contatoes
   * const contatoes = await prisma.contato.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contato`: Exposes CRUD operations for the **Contato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contatoes
    * const contatoes = await prisma.contato.findMany()
    * ```
    */
  get contato(): Prisma.ContatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telefone`: Exposes CRUD operations for the **Telefone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Telefones
    * const telefones = await prisma.telefone.findMany()
    * ```
    */
  get telefone(): Prisma.TelefoneDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Contato: 'Contato',
    Telefone: 'Telefone'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contato" | "telefone"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Contato: {
        payload: Prisma.$ContatoPayload<ExtArgs>
        fields: Prisma.ContatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          findFirst: {
            args: Prisma.ContatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          findMany: {
            args: Prisma.ContatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>[]
          }
          create: {
            args: Prisma.ContatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          createMany: {
            args: Prisma.ContatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          update: {
            args: Prisma.ContatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          deleteMany: {
            args: Prisma.ContatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          aggregate: {
            args: Prisma.ContatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContato>
          }
          groupBy: {
            args: Prisma.ContatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContatoCountArgs<ExtArgs>
            result: $Utils.Optional<ContatoCountAggregateOutputType> | number
          }
        }
      }
      Telefone: {
        payload: Prisma.$TelefonePayload<ExtArgs>
        fields: Prisma.TelefoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelefoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelefoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          findFirst: {
            args: Prisma.TelefoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelefoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          findMany: {
            args: Prisma.TelefoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>[]
          }
          create: {
            args: Prisma.TelefoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          createMany: {
            args: Prisma.TelefoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TelefoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          update: {
            args: Prisma.TelefoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          deleteMany: {
            args: Prisma.TelefoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelefoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TelefoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          aggregate: {
            args: Prisma.TelefoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelefone>
          }
          groupBy: {
            args: Prisma.TelefoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelefoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelefoneCountArgs<ExtArgs>
            result: $Utils.Optional<TelefoneCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    contato?: ContatoOmit
    telefone?: TelefoneOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ContatoCountOutputType
   */

  export type ContatoCountOutputType = {
    telefones: number
  }

  export type ContatoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telefones?: boolean | ContatoCountOutputTypeCountTelefonesArgs
  }

  // Custom InputTypes
  /**
   * ContatoCountOutputType without action
   */
  export type ContatoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoCountOutputType
     */
    select?: ContatoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContatoCountOutputType without action
   */
  export type ContatoCountOutputTypeCountTelefonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelefoneWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Contato
   */

  export type AggregateContato = {
    _count: ContatoCountAggregateOutputType | null
    _avg: ContatoAvgAggregateOutputType | null
    _sum: ContatoSumAggregateOutputType | null
    _min: ContatoMinAggregateOutputType | null
    _max: ContatoMaxAggregateOutputType | null
  }

  export type ContatoAvgAggregateOutputType = {
    id: number | null
    idade: number | null
  }

  export type ContatoSumAggregateOutputType = {
    id: number | null
    idade: number | null
  }

  export type ContatoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    idade: number | null
  }

  export type ContatoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    idade: number | null
  }

  export type ContatoCountAggregateOutputType = {
    id: number
    nome: number
    idade: number
    _all: number
  }


  export type ContatoAvgAggregateInputType = {
    id?: true
    idade?: true
  }

  export type ContatoSumAggregateInputType = {
    id?: true
    idade?: true
  }

  export type ContatoMinAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
  }

  export type ContatoMaxAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
  }

  export type ContatoCountAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    _all?: true
  }

  export type ContatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contato to aggregate.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contatoes
    **/
    _count?: true | ContatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContatoMaxAggregateInputType
  }

  export type GetContatoAggregateType<T extends ContatoAggregateArgs> = {
        [P in keyof T & keyof AggregateContato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContato[P]>
      : GetScalarType<T[P], AggregateContato[P]>
  }




  export type ContatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContatoWhereInput
    orderBy?: ContatoOrderByWithAggregationInput | ContatoOrderByWithAggregationInput[]
    by: ContatoScalarFieldEnum[] | ContatoScalarFieldEnum
    having?: ContatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContatoCountAggregateInputType | true
    _avg?: ContatoAvgAggregateInputType
    _sum?: ContatoSumAggregateInputType
    _min?: ContatoMinAggregateInputType
    _max?: ContatoMaxAggregateInputType
  }

  export type ContatoGroupByOutputType = {
    id: number
    nome: string
    idade: number
    _count: ContatoCountAggregateOutputType | null
    _avg: ContatoAvgAggregateOutputType | null
    _sum: ContatoSumAggregateOutputType | null
    _min: ContatoMinAggregateOutputType | null
    _max: ContatoMaxAggregateOutputType | null
  }

  type GetContatoGroupByPayload<T extends ContatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContatoGroupByOutputType[P]>
            : GetScalarType<T[P], ContatoGroupByOutputType[P]>
        }
      >
    >


  export type ContatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    telefones?: boolean | Contato$telefonesArgs<ExtArgs>
    _count?: boolean | ContatoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contato"]>



  export type ContatoSelectScalar = {
    id?: boolean
    nome?: boolean
    idade?: boolean
  }

  export type ContatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "idade", ExtArgs["result"]["contato"]>
  export type ContatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telefones?: boolean | Contato$telefonesArgs<ExtArgs>
    _count?: boolean | ContatoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contato"
    objects: {
      telefones: Prisma.$TelefonePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      idade: number
    }, ExtArgs["result"]["contato"]>
    composites: {}
  }

  type ContatoGetPayload<S extends boolean | null | undefined | ContatoDefaultArgs> = $Result.GetResult<Prisma.$ContatoPayload, S>

  type ContatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContatoCountAggregateInputType | true
    }

  export interface ContatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contato'], meta: { name: 'Contato' } }
    /**
     * Find zero or one Contato that matches the filter.
     * @param {ContatoFindUniqueArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContatoFindUniqueArgs>(args: SelectSubset<T, ContatoFindUniqueArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContatoFindUniqueOrThrowArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContatoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindFirstArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContatoFindFirstArgs>(args?: SelectSubset<T, ContatoFindFirstArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindFirstOrThrowArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContatoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contatoes
     * const contatoes = await prisma.contato.findMany()
     * 
     * // Get first 10 Contatoes
     * const contatoes = await prisma.contato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contatoWithIdOnly = await prisma.contato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContatoFindManyArgs>(args?: SelectSubset<T, ContatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contato.
     * @param {ContatoCreateArgs} args - Arguments to create a Contato.
     * @example
     * // Create one Contato
     * const Contato = await prisma.contato.create({
     *   data: {
     *     // ... data to create a Contato
     *   }
     * })
     * 
     */
    create<T extends ContatoCreateArgs>(args: SelectSubset<T, ContatoCreateArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contatoes.
     * @param {ContatoCreateManyArgs} args - Arguments to create many Contatoes.
     * @example
     * // Create many Contatoes
     * const contato = await prisma.contato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContatoCreateManyArgs>(args?: SelectSubset<T, ContatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contato.
     * @param {ContatoDeleteArgs} args - Arguments to delete one Contato.
     * @example
     * // Delete one Contato
     * const Contato = await prisma.contato.delete({
     *   where: {
     *     // ... filter to delete one Contato
     *   }
     * })
     * 
     */
    delete<T extends ContatoDeleteArgs>(args: SelectSubset<T, ContatoDeleteArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contato.
     * @param {ContatoUpdateArgs} args - Arguments to update one Contato.
     * @example
     * // Update one Contato
     * const contato = await prisma.contato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContatoUpdateArgs>(args: SelectSubset<T, ContatoUpdateArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contatoes.
     * @param {ContatoDeleteManyArgs} args - Arguments to filter Contatoes to delete.
     * @example
     * // Delete a few Contatoes
     * const { count } = await prisma.contato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContatoDeleteManyArgs>(args?: SelectSubset<T, ContatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contatoes
     * const contato = await prisma.contato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContatoUpdateManyArgs>(args: SelectSubset<T, ContatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contato.
     * @param {ContatoUpsertArgs} args - Arguments to update or create a Contato.
     * @example
     * // Update or create a Contato
     * const contato = await prisma.contato.upsert({
     *   create: {
     *     // ... data to create a Contato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contato we want to update
     *   }
     * })
     */
    upsert<T extends ContatoUpsertArgs>(args: SelectSubset<T, ContatoUpsertArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoCountArgs} args - Arguments to filter Contatoes to count.
     * @example
     * // Count the number of Contatoes
     * const count = await prisma.contato.count({
     *   where: {
     *     // ... the filter for the Contatoes we want to count
     *   }
     * })
    **/
    count<T extends ContatoCountArgs>(
      args?: Subset<T, ContatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContatoAggregateArgs>(args: Subset<T, ContatoAggregateArgs>): Prisma.PrismaPromise<GetContatoAggregateType<T>>

    /**
     * Group by Contato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContatoGroupByArgs['orderBy'] }
        : { orderBy?: ContatoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contato model
   */
  readonly fields: ContatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    telefones<T extends Contato$telefonesArgs<ExtArgs> = {}>(args?: Subset<T, Contato$telefonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contato model
   */
  interface ContatoFieldRefs {
    readonly id: FieldRef<"Contato", 'Int'>
    readonly nome: FieldRef<"Contato", 'String'>
    readonly idade: FieldRef<"Contato", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Contato findUnique
   */
  export type ContatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato findUniqueOrThrow
   */
  export type ContatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato findFirst
   */
  export type ContatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contatoes.
     */
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Contato findFirstOrThrow
   */
  export type ContatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contatoes.
     */
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Contato findMany
   */
  export type ContatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contatoes to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Contato create
   */
  export type ContatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * The data needed to create a Contato.
     */
    data: XOR<ContatoCreateInput, ContatoUncheckedCreateInput>
  }

  /**
   * Contato createMany
   */
  export type ContatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contatoes.
     */
    data: ContatoCreateManyInput | ContatoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contato update
   */
  export type ContatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * The data needed to update a Contato.
     */
    data: XOR<ContatoUpdateInput, ContatoUncheckedUpdateInput>
    /**
     * Choose, which Contato to update.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato updateMany
   */
  export type ContatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contatoes.
     */
    data: XOR<ContatoUpdateManyMutationInput, ContatoUncheckedUpdateManyInput>
    /**
     * Filter which Contatoes to update
     */
    where?: ContatoWhereInput
    /**
     * Limit how many Contatoes to update.
     */
    limit?: number
  }

  /**
   * Contato upsert
   */
  export type ContatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * The filter to search for the Contato to update in case it exists.
     */
    where: ContatoWhereUniqueInput
    /**
     * In case the Contato found by the `where` argument doesn't exist, create a new Contato with this data.
     */
    create: XOR<ContatoCreateInput, ContatoUncheckedCreateInput>
    /**
     * In case the Contato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContatoUpdateInput, ContatoUncheckedUpdateInput>
  }

  /**
   * Contato delete
   */
  export type ContatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter which Contato to delete.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato deleteMany
   */
  export type ContatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contatoes to delete
     */
    where?: ContatoWhereInput
    /**
     * Limit how many Contatoes to delete.
     */
    limit?: number
  }

  /**
   * Contato.telefones
   */
  export type Contato$telefonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    where?: TelefoneWhereInput
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    cursor?: TelefoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * Contato without action
   */
  export type ContatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
  }


  /**
   * Model Telefone
   */

  export type AggregateTelefone = {
    _count: TelefoneCountAggregateOutputType | null
    _avg: TelefoneAvgAggregateOutputType | null
    _sum: TelefoneSumAggregateOutputType | null
    _min: TelefoneMinAggregateOutputType | null
    _max: TelefoneMaxAggregateOutputType | null
  }

  export type TelefoneAvgAggregateOutputType = {
    id: number | null
    contatoId: number | null
  }

  export type TelefoneSumAggregateOutputType = {
    id: number | null
    contatoId: number | null
  }

  export type TelefoneMinAggregateOutputType = {
    id: number | null
    numero: string | null
    contatoId: number | null
  }

  export type TelefoneMaxAggregateOutputType = {
    id: number | null
    numero: string | null
    contatoId: number | null
  }

  export type TelefoneCountAggregateOutputType = {
    id: number
    numero: number
    contatoId: number
    _all: number
  }


  export type TelefoneAvgAggregateInputType = {
    id?: true
    contatoId?: true
  }

  export type TelefoneSumAggregateInputType = {
    id?: true
    contatoId?: true
  }

  export type TelefoneMinAggregateInputType = {
    id?: true
    numero?: true
    contatoId?: true
  }

  export type TelefoneMaxAggregateInputType = {
    id?: true
    numero?: true
    contatoId?: true
  }

  export type TelefoneCountAggregateInputType = {
    id?: true
    numero?: true
    contatoId?: true
    _all?: true
  }

  export type TelefoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telefone to aggregate.
     */
    where?: TelefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefones to fetch.
     */
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Telefones
    **/
    _count?: true | TelefoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelefoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelefoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelefoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelefoneMaxAggregateInputType
  }

  export type GetTelefoneAggregateType<T extends TelefoneAggregateArgs> = {
        [P in keyof T & keyof AggregateTelefone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelefone[P]>
      : GetScalarType<T[P], AggregateTelefone[P]>
  }




  export type TelefoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelefoneWhereInput
    orderBy?: TelefoneOrderByWithAggregationInput | TelefoneOrderByWithAggregationInput[]
    by: TelefoneScalarFieldEnum[] | TelefoneScalarFieldEnum
    having?: TelefoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelefoneCountAggregateInputType | true
    _avg?: TelefoneAvgAggregateInputType
    _sum?: TelefoneSumAggregateInputType
    _min?: TelefoneMinAggregateInputType
    _max?: TelefoneMaxAggregateInputType
  }

  export type TelefoneGroupByOutputType = {
    id: number
    numero: string
    contatoId: number
    _count: TelefoneCountAggregateOutputType | null
    _avg: TelefoneAvgAggregateOutputType | null
    _sum: TelefoneSumAggregateOutputType | null
    _min: TelefoneMinAggregateOutputType | null
    _max: TelefoneMaxAggregateOutputType | null
  }

  type GetTelefoneGroupByPayload<T extends TelefoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelefoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelefoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelefoneGroupByOutputType[P]>
            : GetScalarType<T[P], TelefoneGroupByOutputType[P]>
        }
      >
    >


  export type TelefoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    contatoId?: boolean
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telefone"]>



  export type TelefoneSelectScalar = {
    id?: boolean
    numero?: boolean
    contatoId?: boolean
  }

  export type TelefoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "contatoId", ExtArgs["result"]["telefone"]>
  export type TelefoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }

  export type $TelefonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Telefone"
    objects: {
      contato: Prisma.$ContatoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: string
      contatoId: number
    }, ExtArgs["result"]["telefone"]>
    composites: {}
  }

  type TelefoneGetPayload<S extends boolean | null | undefined | TelefoneDefaultArgs> = $Result.GetResult<Prisma.$TelefonePayload, S>

  type TelefoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelefoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelefoneCountAggregateInputType | true
    }

  export interface TelefoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Telefone'], meta: { name: 'Telefone' } }
    /**
     * Find zero or one Telefone that matches the filter.
     * @param {TelefoneFindUniqueArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelefoneFindUniqueArgs>(args: SelectSubset<T, TelefoneFindUniqueArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Telefone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelefoneFindUniqueOrThrowArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelefoneFindUniqueOrThrowArgs>(args: SelectSubset<T, TelefoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telefone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneFindFirstArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelefoneFindFirstArgs>(args?: SelectSubset<T, TelefoneFindFirstArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telefone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneFindFirstOrThrowArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelefoneFindFirstOrThrowArgs>(args?: SelectSubset<T, TelefoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Telefones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Telefones
     * const telefones = await prisma.telefone.findMany()
     * 
     * // Get first 10 Telefones
     * const telefones = await prisma.telefone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telefoneWithIdOnly = await prisma.telefone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelefoneFindManyArgs>(args?: SelectSubset<T, TelefoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Telefone.
     * @param {TelefoneCreateArgs} args - Arguments to create a Telefone.
     * @example
     * // Create one Telefone
     * const Telefone = await prisma.telefone.create({
     *   data: {
     *     // ... data to create a Telefone
     *   }
     * })
     * 
     */
    create<T extends TelefoneCreateArgs>(args: SelectSubset<T, TelefoneCreateArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Telefones.
     * @param {TelefoneCreateManyArgs} args - Arguments to create many Telefones.
     * @example
     * // Create many Telefones
     * const telefone = await prisma.telefone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelefoneCreateManyArgs>(args?: SelectSubset<T, TelefoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Telefone.
     * @param {TelefoneDeleteArgs} args - Arguments to delete one Telefone.
     * @example
     * // Delete one Telefone
     * const Telefone = await prisma.telefone.delete({
     *   where: {
     *     // ... filter to delete one Telefone
     *   }
     * })
     * 
     */
    delete<T extends TelefoneDeleteArgs>(args: SelectSubset<T, TelefoneDeleteArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Telefone.
     * @param {TelefoneUpdateArgs} args - Arguments to update one Telefone.
     * @example
     * // Update one Telefone
     * const telefone = await prisma.telefone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelefoneUpdateArgs>(args: SelectSubset<T, TelefoneUpdateArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Telefones.
     * @param {TelefoneDeleteManyArgs} args - Arguments to filter Telefones to delete.
     * @example
     * // Delete a few Telefones
     * const { count } = await prisma.telefone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelefoneDeleteManyArgs>(args?: SelectSubset<T, TelefoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Telefones
     * const telefone = await prisma.telefone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelefoneUpdateManyArgs>(args: SelectSubset<T, TelefoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Telefone.
     * @param {TelefoneUpsertArgs} args - Arguments to update or create a Telefone.
     * @example
     * // Update or create a Telefone
     * const telefone = await prisma.telefone.upsert({
     *   create: {
     *     // ... data to create a Telefone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Telefone we want to update
     *   }
     * })
     */
    upsert<T extends TelefoneUpsertArgs>(args: SelectSubset<T, TelefoneUpsertArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneCountArgs} args - Arguments to filter Telefones to count.
     * @example
     * // Count the number of Telefones
     * const count = await prisma.telefone.count({
     *   where: {
     *     // ... the filter for the Telefones we want to count
     *   }
     * })
    **/
    count<T extends TelefoneCountArgs>(
      args?: Subset<T, TelefoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelefoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Telefone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TelefoneAggregateArgs>(args: Subset<T, TelefoneAggregateArgs>): Prisma.PrismaPromise<GetTelefoneAggregateType<T>>

    /**
     * Group by Telefone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TelefoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelefoneGroupByArgs['orderBy'] }
        : { orderBy?: TelefoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TelefoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelefoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Telefone model
   */
  readonly fields: TelefoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Telefone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelefoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contato<T extends ContatoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContatoDefaultArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Telefone model
   */
  interface TelefoneFieldRefs {
    readonly id: FieldRef<"Telefone", 'Int'>
    readonly numero: FieldRef<"Telefone", 'String'>
    readonly contatoId: FieldRef<"Telefone", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Telefone findUnique
   */
  export type TelefoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefone to fetch.
     */
    where: TelefoneWhereUniqueInput
  }

  /**
   * Telefone findUniqueOrThrow
   */
  export type TelefoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefone to fetch.
     */
    where: TelefoneWhereUniqueInput
  }

  /**
   * Telefone findFirst
   */
  export type TelefoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefone to fetch.
     */
    where?: TelefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefones to fetch.
     */
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telefones.
     */
    cursor?: TelefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telefones.
     */
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * Telefone findFirstOrThrow
   */
  export type TelefoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefone to fetch.
     */
    where?: TelefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefones to fetch.
     */
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telefones.
     */
    cursor?: TelefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telefones.
     */
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * Telefone findMany
   */
  export type TelefoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefones to fetch.
     */
    where?: TelefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefones to fetch.
     */
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Telefones.
     */
    cursor?: TelefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefones.
     */
    skip?: number
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * Telefone create
   */
  export type TelefoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Telefone.
     */
    data: XOR<TelefoneCreateInput, TelefoneUncheckedCreateInput>
  }

  /**
   * Telefone createMany
   */
  export type TelefoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Telefones.
     */
    data: TelefoneCreateManyInput | TelefoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Telefone update
   */
  export type TelefoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Telefone.
     */
    data: XOR<TelefoneUpdateInput, TelefoneUncheckedUpdateInput>
    /**
     * Choose, which Telefone to update.
     */
    where: TelefoneWhereUniqueInput
  }

  /**
   * Telefone updateMany
   */
  export type TelefoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Telefones.
     */
    data: XOR<TelefoneUpdateManyMutationInput, TelefoneUncheckedUpdateManyInput>
    /**
     * Filter which Telefones to update
     */
    where?: TelefoneWhereInput
    /**
     * Limit how many Telefones to update.
     */
    limit?: number
  }

  /**
   * Telefone upsert
   */
  export type TelefoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Telefone to update in case it exists.
     */
    where: TelefoneWhereUniqueInput
    /**
     * In case the Telefone found by the `where` argument doesn't exist, create a new Telefone with this data.
     */
    create: XOR<TelefoneCreateInput, TelefoneUncheckedCreateInput>
    /**
     * In case the Telefone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelefoneUpdateInput, TelefoneUncheckedUpdateInput>
  }

  /**
   * Telefone delete
   */
  export type TelefoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter which Telefone to delete.
     */
    where: TelefoneWhereUniqueInput
  }

  /**
   * Telefone deleteMany
   */
  export type TelefoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telefones to delete
     */
    where?: TelefoneWhereInput
    /**
     * Limit how many Telefones to delete.
     */
    limit?: number
  }

  /**
   * Telefone without action
   */
  export type TelefoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContatoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    idade: 'idade'
  };

  export type ContatoScalarFieldEnum = (typeof ContatoScalarFieldEnum)[keyof typeof ContatoScalarFieldEnum]


  export const TelefoneScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    contatoId: 'contatoId'
  };

  export type TelefoneScalarFieldEnum = (typeof TelefoneScalarFieldEnum)[keyof typeof TelefoneScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const ContatoOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type ContatoOrderByRelevanceFieldEnum = (typeof ContatoOrderByRelevanceFieldEnum)[keyof typeof ContatoOrderByRelevanceFieldEnum]


  export const TelefoneOrderByRelevanceFieldEnum: {
    numero: 'numero'
  };

  export type TelefoneOrderByRelevanceFieldEnum = (typeof TelefoneOrderByRelevanceFieldEnum)[keyof typeof TelefoneOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ContatoWhereInput = {
    AND?: ContatoWhereInput | ContatoWhereInput[]
    OR?: ContatoWhereInput[]
    NOT?: ContatoWhereInput | ContatoWhereInput[]
    id?: IntFilter<"Contato"> | number
    nome?: StringFilter<"Contato"> | string
    idade?: IntFilter<"Contato"> | number
    telefones?: TelefoneListRelationFilter
  }

  export type ContatoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    telefones?: TelefoneOrderByRelationAggregateInput
    _relevance?: ContatoOrderByRelevanceInput
  }

  export type ContatoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContatoWhereInput | ContatoWhereInput[]
    OR?: ContatoWhereInput[]
    NOT?: ContatoWhereInput | ContatoWhereInput[]
    nome?: StringFilter<"Contato"> | string
    idade?: IntFilter<"Contato"> | number
    telefones?: TelefoneListRelationFilter
  }, "id">

  export type ContatoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    _count?: ContatoCountOrderByAggregateInput
    _avg?: ContatoAvgOrderByAggregateInput
    _max?: ContatoMaxOrderByAggregateInput
    _min?: ContatoMinOrderByAggregateInput
    _sum?: ContatoSumOrderByAggregateInput
  }

  export type ContatoScalarWhereWithAggregatesInput = {
    AND?: ContatoScalarWhereWithAggregatesInput | ContatoScalarWhereWithAggregatesInput[]
    OR?: ContatoScalarWhereWithAggregatesInput[]
    NOT?: ContatoScalarWhereWithAggregatesInput | ContatoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contato"> | number
    nome?: StringWithAggregatesFilter<"Contato"> | string
    idade?: IntWithAggregatesFilter<"Contato"> | number
  }

  export type TelefoneWhereInput = {
    AND?: TelefoneWhereInput | TelefoneWhereInput[]
    OR?: TelefoneWhereInput[]
    NOT?: TelefoneWhereInput | TelefoneWhereInput[]
    id?: IntFilter<"Telefone"> | number
    numero?: StringFilter<"Telefone"> | string
    contatoId?: IntFilter<"Telefone"> | number
    contato?: XOR<ContatoScalarRelationFilter, ContatoWhereInput>
  }

  export type TelefoneOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    contatoId?: SortOrder
    contato?: ContatoOrderByWithRelationInput
    _relevance?: TelefoneOrderByRelevanceInput
  }

  export type TelefoneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TelefoneWhereInput | TelefoneWhereInput[]
    OR?: TelefoneWhereInput[]
    NOT?: TelefoneWhereInput | TelefoneWhereInput[]
    numero?: StringFilter<"Telefone"> | string
    contatoId?: IntFilter<"Telefone"> | number
    contato?: XOR<ContatoScalarRelationFilter, ContatoWhereInput>
  }, "id">

  export type TelefoneOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    contatoId?: SortOrder
    _count?: TelefoneCountOrderByAggregateInput
    _avg?: TelefoneAvgOrderByAggregateInput
    _max?: TelefoneMaxOrderByAggregateInput
    _min?: TelefoneMinOrderByAggregateInput
    _sum?: TelefoneSumOrderByAggregateInput
  }

  export type TelefoneScalarWhereWithAggregatesInput = {
    AND?: TelefoneScalarWhereWithAggregatesInput | TelefoneScalarWhereWithAggregatesInput[]
    OR?: TelefoneScalarWhereWithAggregatesInput[]
    NOT?: TelefoneScalarWhereWithAggregatesInput | TelefoneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Telefone"> | number
    numero?: StringWithAggregatesFilter<"Telefone"> | string
    contatoId?: IntWithAggregatesFilter<"Telefone"> | number
  }

  export type ContatoCreateInput = {
    nome: string
    idade: number
    telefones?: TelefoneCreateNestedManyWithoutContatoInput
  }

  export type ContatoUncheckedCreateInput = {
    id?: number
    nome: string
    idade: number
    telefones?: TelefoneUncheckedCreateNestedManyWithoutContatoInput
  }

  export type ContatoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    telefones?: TelefoneUpdateManyWithoutContatoNestedInput
  }

  export type ContatoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    telefones?: TelefoneUncheckedUpdateManyWithoutContatoNestedInput
  }

  export type ContatoCreateManyInput = {
    id?: number
    nome: string
    idade: number
  }

  export type ContatoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
  }

  export type ContatoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
  }

  export type TelefoneCreateInput = {
    numero: string
    contato: ContatoCreateNestedOneWithoutTelefonesInput
  }

  export type TelefoneUncheckedCreateInput = {
    id?: number
    numero: string
    contatoId: number
  }

  export type TelefoneUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    contato?: ContatoUpdateOneRequiredWithoutTelefonesNestedInput
  }

  export type TelefoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    contatoId?: IntFieldUpdateOperationsInput | number
  }

  export type TelefoneCreateManyInput = {
    id?: number
    numero: string
    contatoId: number
  }

  export type TelefoneUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type TelefoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    contatoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TelefoneListRelationFilter = {
    every?: TelefoneWhereInput
    some?: TelefoneWhereInput
    none?: TelefoneWhereInput
  }

  export type TelefoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContatoOrderByRelevanceInput = {
    fields: ContatoOrderByRelevanceFieldEnum | ContatoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContatoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
  }

  export type ContatoAvgOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
  }

  export type ContatoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
  }

  export type ContatoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
  }

  export type ContatoSumOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ContatoScalarRelationFilter = {
    is?: ContatoWhereInput
    isNot?: ContatoWhereInput
  }

  export type TelefoneOrderByRelevanceInput = {
    fields: TelefoneOrderByRelevanceFieldEnum | TelefoneOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TelefoneCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    contatoId?: SortOrder
  }

  export type TelefoneAvgOrderByAggregateInput = {
    id?: SortOrder
    contatoId?: SortOrder
  }

  export type TelefoneMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    contatoId?: SortOrder
  }

  export type TelefoneMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    contatoId?: SortOrder
  }

  export type TelefoneSumOrderByAggregateInput = {
    id?: SortOrder
    contatoId?: SortOrder
  }

  export type TelefoneCreateNestedManyWithoutContatoInput = {
    create?: XOR<TelefoneCreateWithoutContatoInput, TelefoneUncheckedCreateWithoutContatoInput> | TelefoneCreateWithoutContatoInput[] | TelefoneUncheckedCreateWithoutContatoInput[]
    connectOrCreate?: TelefoneCreateOrConnectWithoutContatoInput | TelefoneCreateOrConnectWithoutContatoInput[]
    createMany?: TelefoneCreateManyContatoInputEnvelope
    connect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
  }

  export type TelefoneUncheckedCreateNestedManyWithoutContatoInput = {
    create?: XOR<TelefoneCreateWithoutContatoInput, TelefoneUncheckedCreateWithoutContatoInput> | TelefoneCreateWithoutContatoInput[] | TelefoneUncheckedCreateWithoutContatoInput[]
    connectOrCreate?: TelefoneCreateOrConnectWithoutContatoInput | TelefoneCreateOrConnectWithoutContatoInput[]
    createMany?: TelefoneCreateManyContatoInputEnvelope
    connect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TelefoneUpdateManyWithoutContatoNestedInput = {
    create?: XOR<TelefoneCreateWithoutContatoInput, TelefoneUncheckedCreateWithoutContatoInput> | TelefoneCreateWithoutContatoInput[] | TelefoneUncheckedCreateWithoutContatoInput[]
    connectOrCreate?: TelefoneCreateOrConnectWithoutContatoInput | TelefoneCreateOrConnectWithoutContatoInput[]
    upsert?: TelefoneUpsertWithWhereUniqueWithoutContatoInput | TelefoneUpsertWithWhereUniqueWithoutContatoInput[]
    createMany?: TelefoneCreateManyContatoInputEnvelope
    set?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    disconnect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    delete?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    connect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    update?: TelefoneUpdateWithWhereUniqueWithoutContatoInput | TelefoneUpdateWithWhereUniqueWithoutContatoInput[]
    updateMany?: TelefoneUpdateManyWithWhereWithoutContatoInput | TelefoneUpdateManyWithWhereWithoutContatoInput[]
    deleteMany?: TelefoneScalarWhereInput | TelefoneScalarWhereInput[]
  }

  export type TelefoneUncheckedUpdateManyWithoutContatoNestedInput = {
    create?: XOR<TelefoneCreateWithoutContatoInput, TelefoneUncheckedCreateWithoutContatoInput> | TelefoneCreateWithoutContatoInput[] | TelefoneUncheckedCreateWithoutContatoInput[]
    connectOrCreate?: TelefoneCreateOrConnectWithoutContatoInput | TelefoneCreateOrConnectWithoutContatoInput[]
    upsert?: TelefoneUpsertWithWhereUniqueWithoutContatoInput | TelefoneUpsertWithWhereUniqueWithoutContatoInput[]
    createMany?: TelefoneCreateManyContatoInputEnvelope
    set?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    disconnect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    delete?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    connect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    update?: TelefoneUpdateWithWhereUniqueWithoutContatoInput | TelefoneUpdateWithWhereUniqueWithoutContatoInput[]
    updateMany?: TelefoneUpdateManyWithWhereWithoutContatoInput | TelefoneUpdateManyWithWhereWithoutContatoInput[]
    deleteMany?: TelefoneScalarWhereInput | TelefoneScalarWhereInput[]
  }

  export type ContatoCreateNestedOneWithoutTelefonesInput = {
    create?: XOR<ContatoCreateWithoutTelefonesInput, ContatoUncheckedCreateWithoutTelefonesInput>
    connectOrCreate?: ContatoCreateOrConnectWithoutTelefonesInput
    connect?: ContatoWhereUniqueInput
  }

  export type ContatoUpdateOneRequiredWithoutTelefonesNestedInput = {
    create?: XOR<ContatoCreateWithoutTelefonesInput, ContatoUncheckedCreateWithoutTelefonesInput>
    connectOrCreate?: ContatoCreateOrConnectWithoutTelefonesInput
    upsert?: ContatoUpsertWithoutTelefonesInput
    connect?: ContatoWhereUniqueInput
    update?: XOR<XOR<ContatoUpdateToOneWithWhereWithoutTelefonesInput, ContatoUpdateWithoutTelefonesInput>, ContatoUncheckedUpdateWithoutTelefonesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TelefoneCreateWithoutContatoInput = {
    numero: string
  }

  export type TelefoneUncheckedCreateWithoutContatoInput = {
    id?: number
    numero: string
  }

  export type TelefoneCreateOrConnectWithoutContatoInput = {
    where: TelefoneWhereUniqueInput
    create: XOR<TelefoneCreateWithoutContatoInput, TelefoneUncheckedCreateWithoutContatoInput>
  }

  export type TelefoneCreateManyContatoInputEnvelope = {
    data: TelefoneCreateManyContatoInput | TelefoneCreateManyContatoInput[]
    skipDuplicates?: boolean
  }

  export type TelefoneUpsertWithWhereUniqueWithoutContatoInput = {
    where: TelefoneWhereUniqueInput
    update: XOR<TelefoneUpdateWithoutContatoInput, TelefoneUncheckedUpdateWithoutContatoInput>
    create: XOR<TelefoneCreateWithoutContatoInput, TelefoneUncheckedCreateWithoutContatoInput>
  }

  export type TelefoneUpdateWithWhereUniqueWithoutContatoInput = {
    where: TelefoneWhereUniqueInput
    data: XOR<TelefoneUpdateWithoutContatoInput, TelefoneUncheckedUpdateWithoutContatoInput>
  }

  export type TelefoneUpdateManyWithWhereWithoutContatoInput = {
    where: TelefoneScalarWhereInput
    data: XOR<TelefoneUpdateManyMutationInput, TelefoneUncheckedUpdateManyWithoutContatoInput>
  }

  export type TelefoneScalarWhereInput = {
    AND?: TelefoneScalarWhereInput | TelefoneScalarWhereInput[]
    OR?: TelefoneScalarWhereInput[]
    NOT?: TelefoneScalarWhereInput | TelefoneScalarWhereInput[]
    id?: IntFilter<"Telefone"> | number
    numero?: StringFilter<"Telefone"> | string
    contatoId?: IntFilter<"Telefone"> | number
  }

  export type ContatoCreateWithoutTelefonesInput = {
    nome: string
    idade: number
  }

  export type ContatoUncheckedCreateWithoutTelefonesInput = {
    id?: number
    nome: string
    idade: number
  }

  export type ContatoCreateOrConnectWithoutTelefonesInput = {
    where: ContatoWhereUniqueInput
    create: XOR<ContatoCreateWithoutTelefonesInput, ContatoUncheckedCreateWithoutTelefonesInput>
  }

  export type ContatoUpsertWithoutTelefonesInput = {
    update: XOR<ContatoUpdateWithoutTelefonesInput, ContatoUncheckedUpdateWithoutTelefonesInput>
    create: XOR<ContatoCreateWithoutTelefonesInput, ContatoUncheckedCreateWithoutTelefonesInput>
    where?: ContatoWhereInput
  }

  export type ContatoUpdateToOneWithWhereWithoutTelefonesInput = {
    where?: ContatoWhereInput
    data: XOR<ContatoUpdateWithoutTelefonesInput, ContatoUncheckedUpdateWithoutTelefonesInput>
  }

  export type ContatoUpdateWithoutTelefonesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
  }

  export type ContatoUncheckedUpdateWithoutTelefonesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
  }

  export type TelefoneCreateManyContatoInput = {
    id?: number
    numero: string
  }

  export type TelefoneUpdateWithoutContatoInput = {
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type TelefoneUncheckedUpdateWithoutContatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type TelefoneUncheckedUpdateManyWithoutContatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}