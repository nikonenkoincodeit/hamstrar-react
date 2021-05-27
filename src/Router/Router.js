import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Battle from "../pages/Battle";
import Gallery from "../pages/Gallery";
import Error from "../pages/Error";
// import Blog from '../pages/Blog';
// import Contacts from '../pages/Contacts';

// import Users from '../pages/Users';
// import UserId from '../pages/Users/UserId';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/battle" component={Battle} />
        <Route path="/gallery" component={Gallery} />
        {/* <Route path="/blog" component={Blog} />
          <Route path="/contacts" component={Contacts} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:nameUser" component={UserId} /> */}
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
