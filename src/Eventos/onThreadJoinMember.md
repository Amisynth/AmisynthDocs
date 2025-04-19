

# $onThreadJoinMember

`$onThreadJoinMember` se activa cuando un miembro se une a un hilo (thread) en un canal del servidor.

```
$onThreadJoinMember
```

Este evento se dispara **cuando un usuario entra en un hilo** dentro de un canal, ya sea un hilo de texto o de voz.

> 📌 Puedes tener varios `$onThreadJoinMember` por bot, pero se recomienda mantener el código organizado para evitar conflictos o redundancias.

## Sintaxis

> No requiere parámetros específicos. Puedes usar funciones como `$threadID[]`, `$threadName[]`, `$userID[]`, `$username[]` para obtener detalles sobre el hilo y el miembro que se unió.

### Ejemplo

```python
bot = ...

bot.new_event("$onThreadJoinMember", "🎉 El usuario $username[] se ha unido al hilo `$threadName[]`.")

bot.run(...)
```
