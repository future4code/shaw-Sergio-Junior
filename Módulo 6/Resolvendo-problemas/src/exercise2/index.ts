/*
Implemente um método que performe uma compressão
de string usando a contagem dos caracteres
repetidos em sequência. Caso o resultado final
tenha um tamanho maior do que a string inicial,
seu programa deve retornar a string inicial
*/

const stringCompression = (input: string): string => {
    const substrings = [];
    let firstChar = input[0];
    let charCount = 0;

    for (let char of input) {
        if (char !== firstChar) {
            substrings.push(firstChar + charCount)
            firstChar = char;
            charCount = 0;
        }
        charCount++
    }

    substrings.push(firstChar + charCount)
    let result = "";
    for (let key of substrings) {
        result += key
    }


    return result.length > input.length ? input : result;
}

console.log(stringCompression("aabbb"))
