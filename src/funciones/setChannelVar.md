# $setChannelVar[]

Actualiza el valor de una variable para un canal.

**Sintaxis**
```
$setChannelVar[Nombre de la variable;Nuevo valor;(ID del canal)]
```

**Parámetros**
- `Nombre de la variable` `(Tipo: Cadena || Marca: Obligatorio)`: La variable que se actualizará.

- `Nuevo valor` `(Tipo: Cadena || Marca: Vaciable)`: El nuevo valor de la variable.

- `ID del canal` `(Tipo: Copo de nieve || Marca: Opcional)`: El canal al que se asignará el nuevo valor. Si no hay "ID del canal", se usará el canal actual.

> 📝 Los valores de las variables de canal no tienen un límite de caracteres!

**Ejemplo**

```ruby
Variable de canal por servidor creada y establecida correctamente
$setChannelVar[contador;1;$channelID[]]
```

![alt text](image-66.png)

> Para obtener más información, consulte la [Guía de variables](../gen/variables.md).