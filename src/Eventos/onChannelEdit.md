

# $onChannelEdit

`$onChannelEdit` se activa cuando un canal del servidor es editado.

```
$onChannelEdit
```

Este evento se dispara **cuando se cambia el nombre, tipo, posición, permisos o cualquier otra propiedad de un canal**.

> 📌 Se recomienda tener solo uno o pocos `$onChannelEdit` por bot para una mejor organización.

**Sintaxis**

> No requiere parámetros. Puedes usar funciones como `$channelID[]`, `$channelName[]`, `$newChannelName[]`, entre otras (dependiendo del sistema que estés usando).

**Ejemplo**

```python
bot = ...

bot.new_event("$onChannelEdit", "🔧 El canal `$channelName[$channelID[]]` ha sido editado.")

bot.run(...)
```

