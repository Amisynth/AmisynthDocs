# $addField[]

$addField Añade un campo a una incrustación.

**Sintaxis**
```
$addField[Nombre;Valor;(¿Inline?;Índice)]
```

📌 Puedes añadir hasta 25 campos por incrustación.

**Parámetros**

- `Nombre` (Tipo: Cadena || Indicador: Obligatorio): El nombre del campo. No puede superar los 256 caracteres.

- `Valor` (Tipo: Cadena || Indicador: Obligatorio): El valor del campo. No puede superar los 1024 caracteres.

- `¿Inline?` (Tipo: Bool || Indicador: Opcional): Si la opción es sí, los campos aparecerán en la misma línea. Sin embargo, si tienes más de 3 campos (o si son demasiado largos) con la opción en línea 

- `habilitada`, el bot devolverá filas con 3 campos (2 si hay una miniatura) en cada fila. Por defecto, está configurado como no.

- `Índice` (Tipo: Entero || Indicador: Opcional): Añade el campo a un número de índice de incrustación especificado. (aprender más)