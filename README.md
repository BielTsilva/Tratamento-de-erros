# Tratamento-de-erros
Aprendendo como tratar erros no javascript.


## Atividade: validação de erros por tipo

 O objetivo é que a função receba um array e retorne ele caso o seu tamanho
corresponda ao número enviado como parâmetro na função. 
 Caso contrário, um erro será lançado.

  - Crie uma função que recebe um array e um número 
  - Realize as seguintes validações
    - se os parâmetros não forem enviados, lance um erro do tipo "ReferenceError"
    - se o array não for do tipo 'object', lance um erro do tipo "TypeError"
    - se o número não for do tipo 'number', lance um erro do tipo "TypeError"
    - se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
  - Utilize a declaração try...catch
  - filtre as chamadas de catch por cada tipo de erro utilizando o operador "instanceof"