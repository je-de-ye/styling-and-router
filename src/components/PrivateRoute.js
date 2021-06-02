import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component }) {
    // console.log("rest", rest);
    const isLogin = true
    return (
        <Route
      render={(props) =>
        // console.log(1)
        isLogin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
    )
}

export default PrivateRoute
