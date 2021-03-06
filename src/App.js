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

const SearchResult = React.lazy(() =>
    import(
        /* webpackPrefetch: true, webpackChunkName: "SearchResult" */ './containers/SearchResult/SearchResult'
    )
);

const App = () => (
    <BrowserRouter>
        <Navbar>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        path="/detail/:id(.*)"
                        render={({ match }) => <Detail id={match.params.id} />}
                    />
                    <Route exact path="/bookmark" component={Bookmark} />
                    <Route
                        path="/search/:query"
                        render={({ match }) => (
                            <SearchResult
                                query={decodeURIComponent(match.params.query)}
                            />
                        )}
                    />
                    <Route render={() => <Redirect push to="/" />}></Route>
                </Switch>
            </Suspense>
        </Navbar>
    </BrowserRouter>
);

export default App;
