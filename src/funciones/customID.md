
# $customID[]  

`$customID[]` retorna el **ID personalizado** de una interacción con botones o menús desplegables en Discord.  

### **Sintaxis**  
```
$customID[]
```

> 📌 **Nota:** Solo funciona dentro de eventos como `$onInteraction`.  



### **Ejemplo**  

```python
bot.new_event("$onInteraction", "Has interactuado con el botón de ID `$customID[]`.")
```
🔹 Si un usuario hace clic en un botón con ID `"boton_aceptar"`, el bot responderá:  
   **"Has interactuado con el botón de ID `boton_aceptar`."**  

