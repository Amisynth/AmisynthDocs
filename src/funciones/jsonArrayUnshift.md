
# $jsonArrayUnshift[]
La función `$jsonArrayUnshift` agrega un valor al inicio de un array JSON.  

**Sintaxis**  
```plaintext
$jsonArrayUnshift[Key;...;Value]
```

**Parámetros**  
- `key` `(Tipo: String || Requerido)` La clave del array JSON donde se añadirá el valor.  

- `value` `(Tipo: Float, String, Bool, Integer || Requerido)` El valor que se agregará al inicio del array.  

**Ejemplo**  
```plaintext
$jsonParse[{
    'music': ['Paranoid - MADKID', 'Ping! 2 - Exyl, 'Tokyo - Leat'eq]
}]

$jsonArrayUnshift[music;Side Character - Cloudfodder]

Música:
> $jsonJoinArray[music;, ]
```  


![alt text](image-50.png)


> Para obtener más información, consulte la Guía de [JSON Funciones](../gen/json.md).