

# $onThreadRemove

`$onThreadRemove` se activa cuando un hilo (thread) es eliminado o removido de un servidor.

```
$onThreadRemove
```

Este evento se ejecuta **cuando un hilo es eliminado** de un canal, ya sea de manera manual o automática (por inactividad o por configuraciones del servidor).

> 📌 Se recomienda tener solo uno o pocos `$onThreadRemove` por bot para mantener la organización y evitar conflictos.

## Sintaxis

> No requiere parámetros específicos. Puedes utilizar funciones como `$threadID[]`, `$threadName[]`, `$channelID[]` o `$channelType[]` para obtener detalles sobre el hilo eliminado.

### Ejemplo

```python
bot = ...

bot.new_event("$onThreadRemove", "🗑️ El hilo `$threadName[]` ha sido eliminado del canal <#$channelID[]>.")

bot.run(...)
```

