
const App = () => {
  
  let isLoggedIn = false;

  const handleLogin = () => {
    isLoggedIn = true;
    document.getElementById("message").innerText = "Welcome User";
    document.getElementById("btn").innerText = "Logout";
  };

  const handleLogout = () => {
    isLoggedIn = false;
    document.getElementById("message").innerText = "Please Login";
    document.getElementById("btn").innerText = "Login";
  };

  const handleClick = () => {
    isLoggedIn ? handleLogout() : handleLogin();
  };

  return (
    <>
    <div>
      <h2 id="message">
        {isLoggedIn ? "Welcome User" : "Please Login"}
      </h2>

      <button id="btn" onClick={handleClick}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
</>
  )
}

export default App