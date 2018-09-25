O poder real dos booleanos é que eles podem surgir ao fazer comparações de valores diferentes com alguns operadores matemáticos.

Por exemplo, sabemos que se perguntarmos a alguém "2 é maior que 1?" a pessoa nos dirá "Se é verdade, 2 é maior que 1", o mesmo acontece em JavaScript quando escrevemos o seguinte:

```javascript
console.log (2> 1) // Isso imprimirá "true" na tela
```

Isso significa que "2> 1" tem um valor de ** true **. Nós também poderíamos ter escrito o mesmo código da seguinte forma

```javascript
var valorVerdade  = 2> 1; // Como vimos 2> 1, ele retorna um valor de verdade e o atribuímos a uma variável
console.log (valorVerdade) // Isso imprimirá "true" na tela
```

E se perguntarmos a alguém "é 2 menos de 1?" a pessoa dirá "Isso é falso, 2 não é menos que 1", o mesmo acontece em JavaScript quando escrevemos o seguinte:

```javascript
console.log (2 <1) // Isso será impresso na tela "false"
```

> Para continuar, defina duas variáveis: `umNumeroPequeno` e `umNumeroGrande`, e atribua a elas valores numéricos diferentes de acordo com seus nomes.
Então eu defini a variável `eMenor` e atribui o resultado da comparação se `umNumeroPequeno` é **menor** do que `umNumeroGrande`; e definiu a variável `eMaior`, com o resultado de comparar se` umNumeroPequeno` é ** maior ** que` aNumeroGrande`.