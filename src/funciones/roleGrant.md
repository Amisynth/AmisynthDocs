
# $roleGrant[]

Añade o elimina roles del usuario proporcionado.

## Sintaxis  
```
$roleGrant[ID de usuario;+/-ID de rol;...]
```

**Parámetros**

- `ID de usuario` `(Tipo: Snowflake || Obligatorio)`: El usuario al que se le otorgarán o eliminarán roles.  

- `ID de rol` `(Tipo: Snowflake || Obligatorio)`: El rol a añadir o eliminar.  
  - Usa `+` antes del ID del rol para añadirlo.  
  - Usa `-` antes del ID del rol para eliminarlo.  
  - Usa `;` como separador para múltiples roles.  

**Ejemplo**  

```plaintext
$nomention
$roleGrant[3869969062509936;-9368562753613496]
```

![alt text](image-24.png)

![alt text](image-25.png)

