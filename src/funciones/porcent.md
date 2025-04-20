# $porcent[]

Calcula el porcentaje indicado de un número dado.  
Devuelve el valor correspondiente al `%` aplicado sobre el número base.

## Sintaxis
```
$porcent[Número base; Porcentaje a aplicar]
```

### Parámetros

- `Número base` `(Tipo: Decimal/Entero || Indicador: Obligatorio)`: El número al cual se le aplicará el porcentaje.  

- `Porcentaje a aplicar` `(Tipo: Decimal/Entero || Indicador: Obligatorio)`: El valor porcentual que se aplicará sobre el número base.



### Ejemplo
```
$porcent[200;10]
```
**Resultado:** `20`  
(El 10% de 200 es 20)

![alt text](image-148.png)


> Ambos valores deben ser numéricos válidos, de lo contrario puede producir errores o resultados inesperados.

> Soporta valores decimales. Ejemplo: `$porcent[250.5;12.5]` devolverá `31.3125`.

> Si el porcentaje es mayor a 100, el resultado será mayor que el número base.

> Esta función es útil para cálculos rápidos de descuentos, aumentos o proporciones.

