# $onLeaveMember



$onLeaveMember Se activa cuando un usuario se va del servidor.

```
$onLeaveMember
```

es una llamada de retorno,  El comando se ejecuta cuando un usuario se va del servidor.

> 📌 Se puede tener varios $onLeaveMember por bot, pero no es recomendable.

**Sintaxis**

> No requiere Sintaxis, pero para uso de mensajes en un dicho canal use funciones como $sendMessage o $sendEmbedMessage

**Ejemplo**

```python
bot = ...

bot.new_event("$onLeaveMember", "$sendMessage[Bye;false;1353757407079301123]")

bot.run(..)
```