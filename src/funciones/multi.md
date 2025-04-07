# $multi[]
Multiplica los números proporcionados.

**Sintaxis**
```
$multi[Número;..]
```

**Parámetros**
- `Número` `(Tipo: Coma flotante, Entero || Indicador: Obligatorio)`: Los números a multiplicar. Use punto y coma `;` como separador para separar varios números.

**Ejemplo**
```
$argsCheck[>2;❌ Uso no válido. Uso: `!multiplicar (número1) (número2)`]
$multi[$mensaje[1];$mensaje[2]]
```

![alt text](image-85.png)