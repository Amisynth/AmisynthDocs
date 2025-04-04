# $setVar[]

Establece el valor de una variable globalmente o para un usuario globalmente.

**Sintaxis**
```
$setVar[Nombre de la variable;Nuevo valor;(ID de usuario)]
```

### Parámetros
- `Nombre de la variable` `(Tipo: Cadena || Marca: Obligatorio)`: La variable que se actualizará.

- `Nuevo valor` `(Tipo: Cadena || Marca: Vaciable)`: El nuevo valor de la variable.

- `ID de usuario` `(Tipo: Copo de nieve || Marca: Opcional)`: El usuario al que se asignará globalmente el nuevo valor. Establece el tipo de variable como usuario global si "ID de usuario" está presente.

> 📝 Los valores de las variables globales no tienen un límite de caracteres.

**Ejemplo**

```
Variable global creada y establecida correctamente
$setVar[contador;1]
```

![alt text](image-67.png)

> Para obtener más información, consulte la [Guía de variables](../gen/variables.md).