// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import Body from './Component/Body';
import Head from './Component/Head';
import appStore from './Utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
     <Head/>
     <Body/>
    </div>
    </Provider>
  );
}

export default App;
