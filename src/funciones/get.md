

# $get[]
La función `$get[]` recupera el valor almacenado en una variable temporal mediante `$let`.  

**Sintaxis** 
```plaintext
$get[Nombre]
```

**Parametros**
- `Nombre` `(Tipo: String || Flag: Required)`: El nombre de la variable a recuperar.  

**Ejemplo**
```plaintext
$let[user;Izana]
Usuario guardado: $get[user]
```
![alt text](image-23.png)