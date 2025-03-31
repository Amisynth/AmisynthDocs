# $titleURL[]


$titleURL Establece el título como hipervínculo.

> 📝 Solo funciona si también se usa $title.

Sintaxis
```
$titleURL[Enlace;(Índice)]
```
**Parámetros**

- `Enlace` (Tipo: URL || Marca: Vaciable): El enlace al que se establecerá el hipervínculo del título.

- `Índice` (Tipo: Entero || Marca: Opcional): A qué incrustación debe pertenecer el hipervínculo del título. El valor predeterminado es 1. (Más información)

**Ejemplo #1**
```
$title[Titulo con url]
$titleURL[https:/example.com]
```

![alt text](image-7.png)