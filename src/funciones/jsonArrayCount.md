
# $jsonArrayCount  []
La función `$jsonArrayCount` cuenta los elementos en la clave JSON especificada.  

### **Sintaxis**  
```plaintext
$jsonArrayCount[Key;...]
```

### **Parámetros**  
- `key` `(Tipo: String || Obligatorio)` La clave JSON donde se contarán los elementos.  

### **Ejemplo**  
```plaintext

$jsonParse[{
    'computer': [{
        'apps': {
            'software': ['BlueStacks', 'Krita', 'Visual Studio Code'],
            "games": ['GTA 5', 'RDR 2', 'CS:GO', 'Cyberpunk 2077']
        }
    },{
        'cpu': 'Intel',
        'gpu': 'NVIDIA',
        'ram': 'XPG'
    }]
}]

$onlyIf[$checkCondition[$jsonExists[computer;0;apps;$message[-1]]==true];¡La categoría especificada no existe! Categorías disponibles: `software` y `games`]

La cantidad de aplicaciones en `$message[-1]` es: $jsonArrayCount[computer;0;apps;$message[-1]].
```  
