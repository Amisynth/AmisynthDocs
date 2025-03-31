

# $get[]
La función `$get[]` recupera el valor almacenado en una variable temporal mediante `$let`.  

### `Sintaxis`  
```plaintext
$get[Nombre]
```

### `Parámetros`  
- `Nombre` `(Tipo: String || Flag: Required)`: El nombre de la variable a recuperar.  

### `Ejemplo`  
```plaintext
$nomention
$let[user;Izana]
Usuario guardado: $get[user]
```
