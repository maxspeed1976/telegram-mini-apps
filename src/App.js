import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./component/Header/Header";
//const tg = window.Telegram.WebApp;
const {user, onClose, onToggleButton} = useTelegram();
function App() {
    const { onToggleButton,tg} = useTelegram();
    useEffect(() => {
        tg.ready();
    } , []);

    const onClose =()=>{
tg.close();
    }
  return (
    <div className="App">

        <button onClick={onToggleButton}>
            Toggle
        </button>
    </div>
  );
}

export default App;
