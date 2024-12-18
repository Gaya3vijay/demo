import logo from './logo.svg';
import './App.css';
import Header from './comp/Header';
import Button from './comp/reus/Button';
import { HEADER_LABLE } from './constant/headerConst';

function App() {
  return (
    <div className="App">
      <Header headerLable={HEADER_LABLE}
      >hello</Header>
      <Button name={"Login"}  className={"blue"}/>
      <Button name={"SignIn"}/>
    </div>
  );
}

export default App;
