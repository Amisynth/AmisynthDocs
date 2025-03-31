# $channelNames[]

$channelNames[] retornar todos los nombre de los canales del servidor


### **Sintaxis**  
```
$channelNames[separador;(guild opcional)]
```

### **Parámetros**  

- `Separador` *(Tipo: Cadena | Obligatorio)* → Especifica el carácter o texto que separará los nombres de los canales en la lista. 
 
- `Guild ID` *(Tipo: ID | Opcional)* → ID del servidor del que se desean obtener los nombres de los canales. Si se omite, se usará el servidor donde se ejecutó el comando.  


### **Ejemplo**  

```python
bot.new_event("$onMessage", "Lista de canales: `$channelNames[, ]`")
```
🔹 Devuelve algo como: `general, memes, música, sugerencias`  

```python
bot.new_event("$onMessage", "Canales del servidor con ID 123456789: `$channelNames[ | ;123456789]`")
```
🔹 Devuelve los nombres de los canales del servidor con ID `123456789`, separados por ` | `.  

