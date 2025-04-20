# $kick[]

Expulsa al usuario proporcionado.

## Sintaxis
```
$kick[ID de usuario;(razón)]
```

### Parámetros
- `ID de usuario` `(Tipo: Copo de nieve || Indicador: Obligatorio)`: El usuario que se expulsará del servidor.
- `razón` `(Tipo: Cadena || Indicador: Vacante)`: El motivo del registro de auditoría para la expulsión.

## Ejemplo
```
$nomention
$onlyPerms[kick;❌ ¡Necesitas el permiso `kick` para usar esto!]
$argsCheck[>1;❌ Por favor, proporciona un usuario para expulsar. Uso: `!kick (usuario) <razón>`.]
$kick[$mentioned[1];$message[2]]
✅ Expulsado `$username[$mentioned[1]]#$discriminator[$mentioned[1]]`!
```

![ejemplo](https://user-images.githubusercontent.com/69215413/123518740-4742a600-d675-11eb-8581-1707b6989203.png)