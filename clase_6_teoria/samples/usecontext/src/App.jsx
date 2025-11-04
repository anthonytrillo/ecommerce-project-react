import { UserProvider, useUser } from "./context/UserContext"

function Navbar() {
  const { user, login, logout } = useUser();

  return (
    <nav>
      {user ? (
        <>
          <span>Hola, {user.name}</span>
          <button onClick={logout}>Salir</button>
        </>
      ) : (
        <button onClick={() => login("Carlos")}>Iniciar Sesión</button>
      )}
    </nav>
  )
}

function App() {
  return (
    <UserProvider>
      <Navbar />
    </UserProvider>
  )
}

export default App
