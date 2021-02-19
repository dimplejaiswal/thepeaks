import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const Home = React.lazy(() =>
    import(
        /* webpackPrefetch: true, webpackChunkName: "Home" */ './containers/Home/Home'
    )
);

const Detail = React.lazy(() =>
    import(
        /* webpackPrefetch: true, webpackChunkName: "Detail" */ './containers/Detail/Detail'
    )
);

const Bookmark = React.lazy(() =>
    import(
        /* webpackPrefetch: true, webpackChunkName: "Bookmark" */ './containers/Bookmark/Bookmark'
    )
);

const App = () => (
    <BrowserRouter>
        <Navbar>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/detail/:id" component={Detail} />
                    <Route exact path="/bookmark" component={Bookmark} />
                    <Route render={() => <Redirect push to="/" />}></Route>
                </Switch>
            </Suspense>
        </Navbar>
    </BrowserRouter>
);

export default App;
