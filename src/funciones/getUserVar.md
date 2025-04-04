# $getUserVar[]

Devuelve el valor de una variable de usuario local.

**Sintaxis**
```
$getUserVar[Nombre de la variable;(ID del usuario;ID del servidor)]
```
**Parámetros**
- `Nombre de la variable` `(Tipo: Cadena || Indicador: Obligatorio)`: El nombre de la variable que se obtendrá.

- `ID del usuario` `(Tipo: Cadena, Copo de nieve || Indicador: Vacante)`: El usuario para el que se obtendrá el valor de la variable. Si no se proporciona ningún usuario, se utiliza el autor.

- `ID del servidor` `(Tipo: Copo de nieve || Indicador: Opcional)`: El servidor para el que se obtendrá el valor de la variable. Si no se proporciona ningún gremio, se utiliza el gremio actual.

**Ejemplo**
```
<@$mentioned[1]> tiene $getUserVar[Money;$mentioned[1]] monedas.
```

![ejemplo](https://user-images.githubusercontent.com/69215413/123357288-40157e00-d537-11eb-84bc-71f81764434f.png)

> Para más información, consulta la [Guía de variables](../gen/variables.md).