
# $onThreadDelete

`$onThreadDelete` se activa cuando un hilo (thread) es eliminado en el servidor.

```
$onThreadDelete
```

Este evento se ejecuta **cuando un hilo existente es eliminado**, ya sea manualmente por un usuario o automáticamente por inactividad (dependiendo de la configuración del servidor).

> 📌 Puedes tener varios `$onThreadDelete` en tu bot, pero se recomienda mantener una estructura clara para evitar redundancias.

### Sintaxis

> No requiere parámetros específicos. Puedes usar funciones como `$threadID[]`, `$channelID[]`, para obtener detalles sobre el hilo eliminado.

**Ejemplo**

```python
bot = ...

bot.new_event("$onThreadDelete", "❌ El hilo `$threadName[]` ha sido eliminado del canal <#$channelID[]>.")

bot.run(...)
```
