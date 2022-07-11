import knex from 'knex'
import { config } from 'dotenv'
import { User } from '../model/UserInterface';
import { Casino, LOCATION, NACIONALITY, Result, ResultItem, UserCasino } from '../model/CasinoInterface';

config()

export const isEven = (integer: number): any => { }

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   },
});

export function performPurchase(user: User, value: number): User | undefined {
   if (user.balance >= value) {
      return {
         ...user,
         balance: user.balance - value
      }
   }
   return undefined
}

export function verifyAge(casino: Casino, users: UserCasino[]): Result {

   const allowed: UserCasino[] = []
   const unAllowed: UserCasino[] = []

   for (let user of users) {
      // br 
      if (casino.location === LOCATION.BRAZIL) {
         if (user.age >= 18) {
            allowed.push(user)
         } else {
            unAllowed.push(user)
         }
      }
      // american
      else if (casino.location === LOCATION.EUA) {
         if (user.age >= 21) {
            allowed.push(user)
         } else {
            unAllowed.push(user)
         }
      }
   }

   return {
      brazilians: {
         allowed: allowed.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((user) => user.name),
         unallowed: unAllowed.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((user) => user.name),
      },
      americans: {
         allowed: allowed.filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((user) => user.name),
         unallowed: unAllowed.filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((user) => user.name)
      }
   }
}