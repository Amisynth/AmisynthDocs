
# $roleGrant

Añade o elimina roles del usuario proporcionado.

## Sintaxis  
```
$roleGrant[ID de usuario;+/-ID de rol;...]
```

## Parámetros  

- `ID de usuario` (Tipo: Snowflake || Obligatorio): El usuario al que se le otorgarán o eliminarán roles.  

- `ID de rol` (Tipo: Snowflake || Obligatorio): El rol a añadir o eliminar.  
  - Usa `+` antes del ID del rol para añadirlo.  
  - Usa `-` antes del ID del rol para eliminarlo.  
  - Usa `;` como separador para múltiples roles.  

## Ejemplos  

### Ejemplo #1  
```plaintext
$nomention
$roleGrant[3869969062509936;-9368562753613496]
```

### Ejemplo #2  
```plaintext
$roleGrant[$mentioned[1];+$mentionedRoles[1]]
<@$mentioned[1]> usuario recibió el rol <@&$mentionedRoles[1]>
```
