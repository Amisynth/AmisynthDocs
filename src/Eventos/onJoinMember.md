# $onJoinMember

$onJoined Se activa cuando un usuario se une al servidor.

```
$onJoinedMember
```

es una llamada de retorno, lo que significa que se utiliza en el disparador del comando (no en el código). El comando se ejecuta cuando un usuario se une al servidor.

> 📌 Se puede tener varios $onJoinMember por bot, pero no es recomendable.

**Sintaxis**

> No requiere Sintaxis, pero para uso de mensajes en un dicho canal use funciones como $sendMessage o $sendEmbedMessage

**Ejemplo**

```python
bot = ...

bot.new_event("$onJoinMember", "$sendMessage[Hi;false;1353757407079301123]")

bot.run(..)
```