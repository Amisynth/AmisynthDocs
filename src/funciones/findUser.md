# $findUser[]



**Sintaxis**
```
$findUser[User;(¿Devolver el ID del autor?)]
```

**Parámetros**

- `User` `(Tipo: String || Flag: Emptyable)`: El nombre de usuario, el ID o la mención del usuario que se buscará.

- `¿Devolver el ID del autor?` `(Tipo: Bool || Flag: Optional)`: Si se devuelve el ID del autor si no se encontró ningún usuario. El valor predeterminado es `yes`.

**Ejemplo**
```
$findUser[Saul]
```

![alt text](image-124.png)

> [¿Cómo funciona `$message[]`?](../funciones/message.md)
