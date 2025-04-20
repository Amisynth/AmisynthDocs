# $power[]

Eleva un número (base) a una potencia (exponente).  
Devuelve el resultado de calcular `base ^ exponente`.

## Sintaxis
```
$power[Base; Exponente]
```

### Parámetros

- `Base` `(Tipo: Decimal/Entero || Indicador: Obligatorio)`: El número que será elevado a la potencia.  

- `Exponente` `(Tipo: Decimal/Entero || Indicador: Obligatorio)`: La potencia a la que se elevará la base.

---

### Ejemplo
```
$power[2;3]
```
**Resultado:** `8`  
(2 elevado a la 3 = 2 × 2 × 2 = 8)


![alt text](image-149.png)


> Ambos parámetros deben ser valores numéricos.  
> Si el exponente es 0, el resultado siempre será `1`, excepto si la base es 0 (lo cual puede resultar en una indeterminación en algunos sistemas).  
> Soporta exponentes negativos y decimales: `$power[2;-2]` dará `0.25`.

> Esta función es útil para cálculos matemáticos, físicos o financieros en automatizaciones.

