
# $jsonArrayAppend  
La función `$jsonArrayAppend` agrega un valor al final de la clave JSON especificada.  

### **Sintaxis**  
```plaintext
$jsonArrayAppend[Key;...;Value]
```

### **Parámetros**  
- `key` `(Tipo: String || Obligatorio)` La clave JSON donde se agregará el valor.  
- `value` `(Tipo: Integer, Bool, Float, String || Obligatorio)` El valor que se agregará al final del array.  

### **Ejemplo**  
```plaintext
$jsonParse[{
    "computer": [{
        "apps": {
            "software": ["BlueStacks", "Krita", "Visual Studio Code"],
            "games": ["GTA 5", "RDR 2", "CS:GO", "Cyberpunk 2077"]
        }
    },{
        "cpu": "Intel",
        "gpu": "NVIDIA",
        "ram": "XPG"
    }]
}]

$onlyIf[$checkCondtion[$jsonExists[computer;0;apps;$message[1]]==true];¡La categoría especificada no existe! Categorías disponibles: `software` y `games`]

$let[value;$replaceText[$message;$message[1];]]

$jsonArrayAppend[computer;0;apps;$message[1];$get[value]]

¡Se agregó una nueva aplicación a la categoría `$message[1]`!  
Aplicaciones actuales en la categoría `$message[1]`: $json[computer;0;apps;$message[1]]
```  
```