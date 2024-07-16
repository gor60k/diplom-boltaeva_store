import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import React, { useContext, useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {

  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(() => {setLoading(false)})
  }, [])

  if(loading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <AppRouter />
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
})

export default App;
