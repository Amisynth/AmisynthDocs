
# $let[]
La función `$let[]` almacena un valor en una variable temporal dentro de la ejecución del comando.  

**Sintaxis** 
```plaintext
$let[Nombre;Valor]
```

**Parámetros**
- `Nombre` `(Tipo: String || Flag: Required)`: El nombre de la variable.

- `Valor` `(Tipo: String, Integer, Float, Bool || Flag: Required)`: El valor a almacenar.  

**Ejemplo**
```plaintext
$let[user;Izana]
Usuario guardado: $get[user]
```

![alt text](image-23.png)