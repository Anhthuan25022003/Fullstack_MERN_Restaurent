import 'dotenv/config';
export const enviroment ={
    MONGODB_URI: process.env.MONGODB_URI,
    DATABASE_NAME: process.env.DATABASE_NAME
}
console.log(enviroment)