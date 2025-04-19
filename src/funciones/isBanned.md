# $isBanned[]

Devuelve si un usuario está baneado del servidor actual. Requiere el permiso `BAN_MEMBERS`.

> 🧙‍♂️ "true" significa que el usuario está baneado, "false" significa que no.

## Sintaxis
```
$isBanned[ID de usuario]
```

### Parámetros
- `ID de usuario` `(Tipo: Copo de nieve || Indicador: Obligatorio)`: El usuario para consultar su estado de baneo.

## Ejemplo
```
$isBanned[$authorID[]]
```
![alt text](image-131.png)