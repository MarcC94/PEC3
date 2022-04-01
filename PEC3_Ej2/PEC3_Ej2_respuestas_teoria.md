>### PEC3_Ej2 Teoria
>
>#### TypeError en code1.ts
>
> Al hacer "const a = 1 + '2'", "a" pasa a ser de tipo number a tipo string. Cuando después se multiplica este valor * 4 en la última línea del código se produce un error al detectar que "a" es un string y no un número, lo que resulta en no poder hacer la multiplicación.
Algunas ventajas serían:
>
> Detención temprana de algunos tipos de errores, p.e.j errores de asignación.
> Es más sencillo refactorizar nombres de variables, funciones, métodos etc.
> En general el código es más expresivo, y muchas veces es fácil entender lo que se está haciendo gracias a los tipos.
> Mejor autocompletado del código. Como el compilador tiene más información, es más fácil que ayude mientras se escribe el código, ganando en productividad.
>
>#### Para cada uno de los valores del fichero code2.ts, ¿Qué tipo de datos inferirá TypeScript? Explica por qué se ha inferido este tipo de datos.
>
>const a = 1042;   // const a: number
>const b = 'apples and oranges'; // const b: string
>const c = 'pineapples'; // const c: string
>const d = [true, true, false]; // const d: boolean[]
>const e = { type: 'ficus' }; // const e: {type: string}
>const f = [1, false]; // const f: (number|boolean)[]
>const g = [3]; // const g: number[]
>const h = null; // const h: null

>TypeScript establece el tipo de dato haciendo un typeof para obtener el tipo sobre el valor asignado a cada una de las variables constantes.
