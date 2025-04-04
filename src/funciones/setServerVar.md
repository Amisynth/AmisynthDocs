# $setServerVar[]

Actualiza el valor de una variable para un servidor.

**Sintaxis**
```
$setServerVar[Nombre de la variable;Nuevo valor;(ID del servidor)]
```

**Parámetros**
- `Nombre de la variable` `(Tipo: Cadena || Marca: Obligatorio)`: La variable que se actualizará.

- `Nuevo valor` `(Tipo: Cadena || Marca: Vaciable)`: El nuevo valor de la variable.

- `ID del servidor` `(Tipo: Copo de nieve || Marca: Opcional)`: El servidor al que se asignará el nuevo valor. Si no se proporciona ningún "ID del servidor", se utiliza el servidor actual.

> 📝 Los valores de las variables del servidor no tienen un límite de caracteres).

> Para más información, consulta la [Guía de Variables](../gen/variables.md).