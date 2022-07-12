import { config } from 'dotenv'
import { User } from '../model/UserInterface';
import { Casino, LOCATION, NACIONALITY, Result, ResultItem, UserCasino } from '../model/CasinoInterface';

import { Post, PostModel } from './model/PostModel';
import Knex from 'knex';

config()

export const isEven = (integer: number): any => { }

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

export class BaseDataBase {
   private static connection = Knex({
      client: 'mysql',
      connection: {
         host: process.env.DB_HOST,
         user: process.env.DB_USER,
         password: process.env.DB_PASS,
         database: process.env.DB_SCHEMA,
         port: 3306,
         multipleStatements: true
      }
   })
   protected getConnection() {
      return BaseDataBase.connection
   }
}

export class PostData extends BaseDataBase {

   protected POSTS_TABLE_NAME = "labook_posts"

   createPost = async (post: PostModel | Post) => {
      try {
         await this.getConnection()
            .insert(post)
            .into(this.POSTS_TABLE_NAME)

      } catch (error: any) {
         throw new Error(error.sqlmessage || "Internal error.");
      }
   }

   getPostById = async (id: string) => {
      try {
         const result = await this.getConnection()
            .select()
            .from(this.POSTS_TABLE_NAME)
            .where({ id })

         return result[0]
      } catch (error: any) {
         throw new Error(error.sqlmessage || "Internal error.");
      }
   }
}

