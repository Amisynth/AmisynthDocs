
# $onReactionAdd  

`$onReactionAdd` es un evento que se activa cuando un usuario añade una reacción a un mensaje en el servidor.  

### **Sintaxis**  
```
$onReactionAdd
```

> 📌 **Nota:** Este evento se usa como un disparador, no dentro del código del comando.  



### **Ejemplo**  

```python
bot.new_event("$onReactionAdd", "El usuario `$username[]` reaccionó con `$reactionAdd[]` en el canal <#$channelID[]>.")
```
🔹 Si un usuario llamado "Juan" reacciona con "❤️" en el canal `#general`, el bot enviará:  
   **"El usuario `Juan` reaccionó con `❤️` en el canal `#general`."**  

