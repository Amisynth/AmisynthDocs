
# Anatomía de Comandos

1. **Comando Básico**: `$funcion[...]`
   
   Cada comando comienza con el signo `$`, seguido por el nombre de la función o comando que se desea ejecutar. Este símbolo indica que el bot debe realizar una acción basada en la solicitud. Los comandos se procesan en el siguiente formato:

   ```
   $funcion[argumento1;argumento2;...]
   ```

2. **Argumentos del Comando**: `[argumento1;argumento2;...]`

   Los argumentos son los parámetros que el comando necesita para ejecutar una acción. Estos se separan por un punto y coma (`;`). Los argumentos son esenciales porque permiten al bot identificar lo que se debe hacer y sobre qué se debe hacer.

   **Tipos de Argumentos**:
   
   - `Obligatorios`: Son los que siempre deben ser proporcionados por el usuario para ejecutar el comando correctamente.
   
   - `Opcionales`: Son aquellos que pueden ser omitidos. En este caso, el sistema usará valores predeterminados o el contexto para procesar la solicitud.

3. **Separador de Argumentos**: `;`

   El punto y coma (`;`) es el delimitador que separa los diferentes argumentos dentro del comando. Todos los argumentos se incluyen en el mismo bloque de corchetes (`[]`), pero se separan por punto y coma para facilitar su interpretación.

