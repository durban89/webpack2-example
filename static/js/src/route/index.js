import Bundle from '../bundle';
// import AppComponent from 'bundle-loader?lazy!./components/AppComponent';
// import HomeComponent from 'bundle-loader?lazy!./home/components/HomeComponent';


import AppComponent from '../components/AppComponent';
import HomeComponent from '../home/components/HomeComponent';


const App = () => {
  <Bundle load={AppComponent}>
    {(App) => <App />}
  </Bundle>
}

const Home = () => {
  <Bundle load={HomeComponent}>
    {(Home) => <Home />}
  </Bundle>
}

// const createRoute = () => {
//   return {
//     path: '/home',
//     component: App,
//     indexRoute: {
//       getComponent(location, cb) {
//         System.import('./home/components/HomeComponent')
//           .then(loadRoute(cb))
//           .catch(errorLoading)
//       }
//     },
//   }
// }

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

const createRoute = () => {
  return {
    component: AppComponent,
    childRoutes: [{
      path: '/home',
      getComponent(location, cb) {
        System.import('../home/components/HomeComponent').then(loadRoute(cb)).catch(errorLoading);
      }
    }]
  }
}

export default createRoute;
