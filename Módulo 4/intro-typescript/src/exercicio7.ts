function dnaToRna(dna: string): string {
    let dnaSplit: string[] = dna.split("")

    let rnaArray: string[] = dnaSplit.map((x: string) => {
        switch (x) {
            case "A":
                return "U";
                break;
            case "T":
                return "A";
                break;
            case "C":
                return "G";
                break;
            case "G":
                return "C";
                break;
        }
    })

    return rnaArray.join("")
}

console.log(dnaToRna("ATTGCTGCGCATTAACGACGCGTA"))