/*
Considere que a gente só possa fazer três operações
com `string`: adicionar um caractere ao final dele,
remover um caractere do final dele ou substituir um
caractere por outro.Dizemos que uma `string` é
'one edit' de outra se ela for o resultado da original
a partir de UMA SÓ dessas operações.Escreva um método
que determine se uma `string` é 'one edit' de outra.
*/

// const checkOneEdit = (input: string, input2: string): boolean => {
//     if (input2.length - input.length > 1) {
//         return false
//     }

//     if (input.length > input2.length) {
//         return input.includes(input2)
//     }

//     if (input2.length > input.length) {
//         return input2.includes(input)
//     }

//     let uncommonChars = 0
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] !== input2[i]) {
//             uncommonChars += 1
//         }
//     }

//     return uncommonChars === 1
// }

// console.log(checkOneEdit("banana", "bananaa"))