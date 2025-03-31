
# $username[]  

`$username[]` retorna el nombre de usuario de un miembro del servidor.  

### **Sintaxis**  
```
$username[(ID de usuario)]
```

### **Parámetros**  

- `ID de usuario` *(Tipo: ID | Opcional)* → Especifica el ID del usuario del que se desea obtener el nombre. Si se omite, devuelve el nombre del usuario que ejecutó el comando o activó el evento.  



### **Ejemplo**  


```python
bot.new_command(name="etc",
                type="text", 
                code="El nombre de usuario con ID 987654321 es `$username[987654321]`.")
```
🔹 Si el usuario con ID `987654321` se llama "Carlos", el mensaje será:  
   **"El nombre de usuario con ID 987654321 es `Carlos`."**  
