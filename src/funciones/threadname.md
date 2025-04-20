
# $ThreadName[]

Devuelve el nombre del hilo (thread) a partir de su ID.

## Sintaxis
```
$ThreadName[(ID del hilo)]
```

### Parámetro

- `ID del hilo` `(Tipo: Entero || Indicador: Opcional)`: El identificador del hilo del cual se desea obtener el nombre si no espeicifica devuelve el ID en el evento.


### Ejemplo  
```
$ThreadName[112233445566778899]
```

**Resultado:**  
```
soporte-ayuda
```

> Asegúrate de que el ID pertenezca a un hilo válido y accesible por el bot.

