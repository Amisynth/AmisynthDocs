# $userAvatar[]

Devuelve la URL del avatar de un usuario.

## Sintaxis
```
$userAvatar[(ID de usuario)]
```

### Parámetros
- `ID de usuario` `(Tipo: Copo de nieve || Marca: Opcional)`: El usuario para el que se devolverá el avatar si no se establece un ID devuelve del autor.

## Ejemplo
```
$userAvatar[]
```

![alt text](image-135.png)

> 📌 Opcionalmente, puedes añadir la cadena de consulta `?size=VALUE` al final de la URL para aumentar el tamaño del avatar. El valor de `tamaño` admite cualquier potencia de dos entre 16 y 4096.