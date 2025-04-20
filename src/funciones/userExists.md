# $userExists[]

Verifica si un usuario con el ID especificado existe y puede ser accedido por el bot o sistema.  
Devuelve un valor booleano (`true` o `false`).

## Sintaxis
```
$userExists[ID del usuario]
```


### Parámetros

- `ID del usuario` `(Tipo: Entero || Indicador: Obligatorio)`: El ID del usuario que se desea verificar.


**Ejemplo**
```
$userExists[487430318500872203]
```

**Resultado:** `True` (si el usuario existe y puede ser accedido)  
**Resultado alternativo:** `False` (si no existe, fue eliminado, o no es visible para el bot)

![alt text](image-154.png)

> Esta función es útil para validar datos antes de ejecutar otras acciones como baneos, menciones, registros o asignaciones.  
> Puede ayudar a prevenir errores al intentar usar un ID inválido o desconocido.

> El usuario puede no existir si el ID es incorrecto, ha sido eliminado, o si el bot no tiene acceso a esa información.
