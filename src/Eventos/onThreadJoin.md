

# $onThreadJoin

`$onThreadJoin` se activa cuando el **bot** se une a un hilo (thread).

```
$onThreadJoin
```

Este evento se ejecuta **cuando el bot se añade a un hilo**, ya sea automáticamente al ser mencionado, al recibir permisos, o manualmente.

> 📌 Este evento solo se activa para el bot, **no para otros miembros**. Para detectar cuando un usuario se une a un hilo, usa `$onThreadJoinMember`.

## Sintaxis

> No requiere parámetros específicos. Puedes usar funciones como `$threadID[]`, `$threadName[]`, `$channelID[]` para obtener información del hilo.

### Ejemplo

```python
bot = ...

bot.new_event("$onThreadJoin", "🤖 Me he unido al hilo `$threadName[]` en el canal <#$channelID[]>.")

bot.run(...)
```
