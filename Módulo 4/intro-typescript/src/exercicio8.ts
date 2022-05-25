function reverseString(string: string): string {
    //-- separando as letras
    let splitString: string[] = string.split("")

    //-- reverse das letras 
    let reverseString: string[] = splitString.reverse()

    //-- juntando as letras do reverse 
    let joinReverseString: string = reverseString.join("")

    return joinReverseString
}

console.log(reverseString("abcd"))