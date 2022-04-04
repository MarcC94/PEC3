> ### PEC3_Ej2 Teoria
>
> #### TypeError en code1.ts
>
> Al hacer "const a = 1 + '2'", "a" pasa a ser de tipo "number" a tipo "string". Cuando después se multiplica este valor * 4 en la última línea del código se produce un error al detectar que "a" es un string y no un número, lo que resulta en no poder hacer la multiplicación. Esto es debido al tipado estático de TypeScript.
> Algunas ventajas serían:
>
> - Detención temprana de algunos tipos de errores, p.e.j errores de asignación.
> - Es más sencillo refactorizar nombres de variables, funciones, métodos etc.
> - En general el código es más expresivo, y muchas veces es fácil entender lo que se está haciendo gracias a los tipos.
> - Mejor autocompletado del código. Como el compilador tiene más información, es más fácil que ayude mientras se escribe el código, ganando en productividad.
>
> (Dentro de la carpeta PEC3_Ej2 se encuentra la imagen "TypeError.png" con la captura del error)
>
> #### Para cada uno de los valores del fichero code2.ts, ¿Qué tipo de datos inferirá TypeScript? Explica por qué se ha inferido este tipo de datos.
>
> const a = 1042;   // const a: number
>
> const b = 'apples and oranges'; // const b: string
>
> const c = 'pineapples'; // const c: string
>
> const d = [true, true, false]; // const d: boolean[]
>
> const e = { type: 'ficus' }; // const e: {type: string}
>
> const f = [1, false]; // const f: (number|boolean)[]
>
> const g = [3]; // const g: number[]
>
> const h = null; // const h: null
>
> TypeScript establece el tipo de dato haciendo un typeof para obtener el tipo sobre el valor asignado a cada una de las variables constantes.
>
> #### ¿Por qué se dispara cada uno de los errores del fichero code3.ts?
>
> Error TS2588: No se puede modificar el valor de una constante una vez inicializada.
>
> Error TS2345: No se puede asignar un argumento de tipo "string" al parámetro de tipo "number".
>
> Error TS2322: El tipo "number" no se puede asignar al tipo "never".
>
> Error TS2571: El objeto es de tipo "unknown" y debería ser de tipo "any", "number" o "bigint" o un tipo de enumeración para realizar la multiplicación.
>
> #### ¿Cuál es la diferencia entre una clase y una interface en TypeScript?
>
> Una interfaz es una estructura virtual que solo existe en el contexto de TS. El compilador de TS se basa en la interfaz para la verificación de tipos. Después de la compilación final en JS, la interfaz se elimina.
>
> A diferencia de la interfaz, la clase existe en el contexto como un tipo de variable de TS. La clase puede proporcionar métodos de implementación específicos para variables y métodos. Su función no es solo limitar la estructura de datos. 

> Por tanto, cuando queramos solo restringir la estructura de datos será mejor utilizar interfaces. Sin embargo, cuando aparte de restrigir la estructura de datos queramos utilizar métodos elegiremos clases.