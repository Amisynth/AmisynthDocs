# $getLeaderboardPosition[]
Obtener la posición en una tabla de clasificación para una variable dada.

**Sintaxis**
```
$getLeaderboardPosition[Tipo de variable;Nombre de variable;Tipo de ordenación;(ID de usuario)]
```

**Parámetros**

- `Tipo de variable` `(Tipo: Enumeración || Indicador: Obligatorio)`: El tipo de variable. Tipos de variable:

    - `users` - [Variable de usuario](../gen/variables.md#user-variables)
    - `guilds` - [Variable de servidor](../gen/variables.md#server-variables)
    - `channels` - [Variable de canal por servidor](../gen/variables.md#server-variables)
    - `global` - [Variable global](../gen//variables.md#globalglobal-user-variables)
    - `global_users` - [Variable de usuario global](../gen//variables.md#globalglobal-user-variables)

- `Nombre de variable` `(Tipo: Cadena || Indicador: Obligatorio)`: El nombre de la variable para la que se generará la tabla de clasificación. 

- `Tipo de ordenamiento` `(Tipo: Enumeración || Indicador: Obligatorio)`: El tipo de ordenamiento. Tipos de ordenamiento:

    - `asc` - Ordena los valores en orden ascendente.

    - `desc` - Ordena los valores en orden descendente.

- `ID de usuario`: `(Tipo: Copo de nieve || Indicador: Opcional)`: El ID del usuario del que desea obtener una posición en la tabla de clasificación.

**Ejemplo**
```
Su posición en la tabla de clasificación: $getLeaderboardPosition[usuario;Monedas;desc]
```
