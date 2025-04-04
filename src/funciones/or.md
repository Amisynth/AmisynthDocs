# $or[]
Devuelve `True` si al menos una de las condiciones proporcionadas es `True`; de lo contrario, devuelve `False`.

## Sintaxis
```
$or[Condiciones;...]
```

**Parámetros**
- `Condiciones` `(Tipo: Cadena || Flag: Requerido)`: La condición a comprobar. Separe las condiciones con `;`.

**Signos**
`==` - Igual

`!=` - No igual

`<` - Menor que

`>` - Mayor que

`>=` - Mayor o igual que

`<=` - Menor o igual que
- El significado de estos signos puede variar según el orden o la intención de la sentencia if.
- Si usa texto como `x` o `y`, no puede usar otros signos además de `==` y `!=`. Sin embargo, para los números, puedes usar cualquier signo de la lista anterior.

**Ejemplo**
```
$or[$nickname[]==Saul;$message[-1]==Actualizar]
```

![alt text](image-62.png)