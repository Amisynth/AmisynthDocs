
# $average[]
Calcula el promedio (media aritmética) de los números proporcionados.


**Sintaxis**
```
$average[Número;..]
```

**Parámetros**
- `Número` `(Tipo: Coma flotante, Entero || Indicador: Obligatorio)`: Los números a promediar. Use punto y coma `;` como separador para pasar varios números.

**Ejemplo**
```
$argsCheck[>2;❌ Uso no válido. Uso: `!promedio (número1) (número2)`]
$average[$message[1];$message[2]]
```

![alt text](image-94.png)
