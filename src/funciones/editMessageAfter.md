
# $editMessageAfter[]  

`$editMessageAfter[]` devuelde el mensaje ya editado.

### **Sintaxis**  
```
$editMessageAfter[]
```

### **Parámetros**  

> No requiere Parametros, solo funcion en el evento `$onMessageEdit`

### **Ejemplo**  

```python
bot.new_event("$onMessageEdit", 
            """
$editMessageAfter[]
            """
)
```