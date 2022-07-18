export class HashGeneratorMocks {
   public hash = () => {
      return "HASHED_PASS_MOCK"
   }

   public compareHash = async (s: string, hash: string) => {
      return s === hash
   }
}
