import dotenv from 'dotenv'

dotenv.config()

//in minutes
export const dailyStatsInterval = 2

export const mysqlHost = process.env.MYSQL_HOST
export const mysqlUser = process.env.MYSQL_USER
export const mysqlPassword = process.env.MYSQL_PASSWORD
export const mysqlDatabase = process.env.MYSQL_DATABASE
export const mongodbUri = process.env.MONGODB_URI

export const isProduction = process.env.NODE_ENV === 'production'