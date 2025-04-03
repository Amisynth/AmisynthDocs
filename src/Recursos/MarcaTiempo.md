# Marca de Tiempo en Discord

Los timestamps en Discord se utilizan para mostrar la hora en múltiples formatos. La información se ajusta automáticamente a la zona horaria y el idioma del usuario. Los timestamps en Discord están basados en el sistema de Tiempo Unix, lo que significa que son dinámicos. Pueden ser utilizados por cualquier persona, incluidos usuarios, webhooks y aplicaciones.

## Sintaxis

Sintaxis del timestamp: `<t:unixTime:Style>`

## Estilos

Aquí tienes una lista de todos los estilos de formato de tiempo admitidos:

| Estilo | Entrada | Salida | Descripción |
| :---: | :---: | :---: | :---: |
| t | `<t:1667219160:t>` | 12:26 AM | Hora corta |
| T | `<t:1667219160:T>` | 12:26:00 AM | Hora larga |
| d | `<t:1667219160:d>` | 31/10/2022 | Fecha corta |
| D | `<t:1667219160:D>` | 31 de octubre de 2022 | Fecha larga |
| f | `<t:1667219160:f>` | 31 de octubre de 2022 12:26 AM | Fecha/Hora corta |
| F | `<t:1667219160:F>` | Lunes, 31 de octubre de 2022 12:26 AM | Fecha/Hora larga |
| R | `<t:1667219160:R>` | Hace 27 minutos | Tiempo relativo |

> 📌 El estilo predeterminado es `f` si no se especifica un estilo.

## Usabilidad

Funciones que devuelven timestamps en formato UNIX:
- [`$getTimestamp`](../funciones/getTimestamp.md)

### Ejemplo

```
$nomention
<t:$getTimestamp:D>
```

![image](https://user-images.githubusercontent.com/113247745/199022364-84ebdc91-4259-4f1f-9299-832784349db4.png)