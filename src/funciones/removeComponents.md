# $removeComponent[]

Elimina un componente específico de un mensaje.

**Sintaxis**
```
$removeComponent[ID personalizado;(ID del mensaje)]
```

**Parámetros**

- `ID personalizado` `(Tipo: Cadena || Marca: Obligatorio)`: El ID personalizado del menú/botón de selección que se eliminará del mensaje, si establece `-1` borra todos los componentes.

- `ID del mensaje` `(Tipo: Copo de nieve || Marca: Vacante)`: El mensaje del que se eliminará el componente; usa el mensaje actual del bot si no se proporciona el `ID del mensaje`.


**Ejemplo**

```
$removeComponent[-1;1358629564787724399]
```
![alt text](../gen/image-4.png)