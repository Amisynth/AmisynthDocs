# $description[]

$description Añade una descripción a una incrustación.

**Sintaxis**

```
$description[mensaje;(índice)]
```

**Parámetros**

- `Message` (Tipo: Cadena || Marca: Vaciable): El texto que se usará para la descripción. No puede superar los 4096 caracteres.

- `Indice` (Tipo: Entero || Marca: Opcional): A qué incrustación debe pertenecer la descripción. El valor predeterminado es 1. (Más información)


**Permisos**

Permisos necesarios que el bot debe tener para que esta función funcione correctamente:

- sendmessages
- sendmessagesinthreads
- embedlinks