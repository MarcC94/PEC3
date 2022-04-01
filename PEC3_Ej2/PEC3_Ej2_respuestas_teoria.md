>#### PEC3_Ej2 Teoria
>
> ### TypeError en code1.ts
>
> Al hacer "const a = 1 + '2'", "a" pasa a ser de tipo number a tipo string. Cuando después se multiplica este valor * 4 en la última línea del código se produce un error al detectar que "a" es un string y no un número, lo que resulta en no poder hacer la multiplicación.
Algunas ventajas serían:
>
> Detención temprana de algunos tipos de errores, p.e.j errores de asignación.
> Es más sencillo refactorizar nombres de variables, funciones, métodos etc.
> En general el código es más expresivo, y muchas veces es fácil entender lo que se está haciendo gracias a los tipos.
> Mejor autocompletado del código. Como el compilador tiene más información, es más fácil que ayude mientras se escribe el código, ganando en productividad.