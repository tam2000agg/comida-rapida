import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore'
function Sizee()
{
  var scr=document.getElementsByTagName("body");
    var w = window.outerWidth;
    if(w<=640)
  scr[0].style.backgroundColor="mediumpurple";
  else if(w<=1007)
  scr[0].style.backgroundColor="mediumslateblue";
  else
  scr[0].style.backgroundColor="seagreen";

}
const store =ConfigureStore();
function App() {
  Sizee();
  window.onresize=Sizee;
  
  return (
    <Provider store={store}>
<BrowserRouter>

    <div onresize="sizee()">
    <Main />
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
