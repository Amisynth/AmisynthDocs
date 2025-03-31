
# $jsonClear[]
La función `$jsonClear` elimina el objeto JSON actual, restableciendo su contenido.  

### **Sintaxis**  
```plaintext
$jsonClear[]
```

### **Ejemplo**  
```plaintext
$jsonParse[{
    'username': 'Izana',
    'tag': '6700',
    'identity': {
        'age': 16
        }
    }]
Nombre de usuario: $json[username]  
$jsonClear[]
Nombre de usuario: $optOff[$json[username]]
```  
