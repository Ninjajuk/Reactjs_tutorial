'use client'
const { createContext, useState, useMemo, useContext, useCallback } = require("react");

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)

    const login = useCallback(() => {
        setuser({ name: 'Samsu' })
    }, [])

    const logout = () => {
        setuser(null)
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)