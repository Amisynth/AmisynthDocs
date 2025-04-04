# $getVar[]

Obtiene el valor de una variable global o de usuario global.

**Sintaxis**
```
$getVar[Nombre de la variable;(ID de usuario)]
```

> 🧙‍♂️ Para una variable global, no es necesario proporcionar un `ID de usuario`. Para una variable de usuario global, sí es necesario.

**Parámetros**

- `Nombre de la variable` `(Tipo: Cadena || Indicador: Obligatorio)`: El nombre de la variable de la que se obtiene el valor.

- `ID de usuario` `(Tipo: Copo de nieve, Cadena || Indicador: Vacantable)`: El usuario del que se obtiene el valor (si es un usuario global).

**Ejemplo**
```
¡Tienes $getVar[Money;$mentioned[1]] monedas!
```

![ejemplo](https://user-images.githubusercontent.com/69215413/126073974-8fbd707f-aaeb-4500-9db2-7ac923b3df74.png)

> Para más información, consulta la [Guía de variables](../gen/variables.md).