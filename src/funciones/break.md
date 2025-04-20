# $break[]
Rompe la ejecución de un bucle en el que se encuentra.

La función `$break[]` detiene inmediatamente la ejecución de un bucle como `$while[]`, `$for[]`, o cualquier ciclo repetitivo.


### Ejemplo 
```bash
$while[True; 
   $print[Ejecutando ciclo...]
   $break[]
]
```
Este ciclo se detendrá después de una sola ejecución debido al `$break[]`.

> Útil para interrumpir ciclos cuando se cumple una condición sin esperar a que termine todo el ciclo.

