import React from 'react'

const UserContext = React.createContext('IT_GURUKUL')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }