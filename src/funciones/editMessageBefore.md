
# $editMessagBefore[]  

`$editMessagBefore[]` devuelde el mensaje ya editado.

### **Sintaxis**  
```
$editMessagBefore[]
```

### **Parámetros**  

> No requiere Parametros, solo funcion en el evento `$onMessageEdit`

### **Ejemplo**  

```python
bot.new_event("$onMessageEdit", 
            """
$editMessagBefore[]
            """
)
```