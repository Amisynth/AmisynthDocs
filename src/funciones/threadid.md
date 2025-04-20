

# $ThreadID[] 

Devuelve el ID del hilo (thread) a partir de su nombre.

## Sintaxis 
```
$ThreadID[Nombre del hilo]
```

### Parámetro
- `Nombre del hilo` `(Tipo: Texto || Indicador: Obligatorio)`: El nombre exacto del hilo que deseas buscar.


### Ejemplo
```
$ThreadID[soporte-ayuda]
```

**Resultado:**  
```
112233445566778899
```

> El nombre debe coincidir exactamente con el del hilo. Si hay varios con el mismo nombre, puede devolver solo el primero que se encuentre.
