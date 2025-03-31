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

**Ejemplo #1:**

```

$addField[¡El nombre del campo 1!;¡El valor del campo 1!]
$addField[¡El nombre del campo 2!;¡El valor del campo 2!]
$addField[¡El nombre del campo 3!;¡El valor del campo 3!]
```

![alt text](image-5.png)

**Ejemplo #2:**

```
$nomention
$addField[¡Nombre del campo 1!;¡Valor del campo 1!;true]
$addField[¡Nombre del campo 2!;¡Valor del campo 2!;true]
$addField[¡Nombre del campo 3!;¡Valor del campo 3!;true]
```


![alt text](image-6.png)



