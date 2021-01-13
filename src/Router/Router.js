import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contacts from '../pages/Contacts';
import Error from '../pages/Error';
import Users from '../pages/Users';
import UserId from '../pages/Users/UserId';
import Header from '../components/Header'

export default function Router () {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contacts" component={Contacts} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:nameUser" component={UserId} />
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    );
}