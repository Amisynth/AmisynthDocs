
# $categoryNames[]  

`$categoryNames[]` retorna todos los nombres de las categorías del servidor.  

### **Sintaxis**  
```
$categoryNames[separador;(guild opcional)]
```

### **Parámetros**  

- `Separador` (Tipo: Cadena | Obligatorio) → Especifica el carácter o texto que separará los nombres de las categorías en la lista.  
- `Guild ID` (Tipo: ID | Opcional) → ID del servidor del que se desean obtener los nombres de las categorías. Si se omite, se usará el servidor donde se ejecutó el comando.  


### **Ejemplo**  

```python
bot.new_event("$onMessage", "Lista de categorías: `$categoryNames[, ]`")
```
🔹 Devuelve algo como: `Información, General, Juegos, Staff`  

```python
bot.new_event("$onMessage", "Categorías del servidor con ID 123456789: `$categoryNames[ | ;123456789]`")
```
🔹 Devuelve los nombres de las categorías del servidor con ID `123456789`, separados por ` | `.  
