
# $jsonJoinArray[]  
La función `$jsonJoinArray` une un array JSON bajo la clave especificada utilizando el separador dado.  

> La función `$jsonJoinArray` devolverá una cadena vacía si el valor es `null`, la clave no existe, no se ejecutaron las funciones `$jsonParse` o `$jsonSet`, o si se ejecutó `$jsonClear`.  

**Sintaxis**  
```plaintext
$jsonJoinArray[Key;...;Separator]
```

**Parámetros**  
- `Key` `(Tipo: String || Flag: Required)`: La clave JSON que apunta a un array que será recuperado.  
- `Separator` `(Tipo: String || Flag: Required)`: El separador que se utilizará para unir los elementos del array.  

**Ejemplo**  
```plaintext

$jsonParse[{
    'music': ['Paranoid - MADKID', 'Ping! 2 - Exyl', 'Tokyo - Leat\'eq']
}]

Music:
> $jsonJoinArray[music;, ]
```

![alt text](image-54.png)




>> Para obtener más información, consulte la Guía de [JSON Funciones](/gen/json.md).