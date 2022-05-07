import './App.css';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <hr></hr>
        <Button variant="outline" />
        <hr></hr>
        <Button variant="text" />
        <hr></hr>
        <Button disableShadow />
        <hr></hr>
        <Button disabled />
        <hr></hr>
        <Button variant="text"  disabled />
        <hr></hr>
        <Button size="sm"/>
        <hr></hr>
        <Button variant="md"/>
        <hr></hr>
        <Button variant="lg"/>
        <hr></hr>
        <Button color="default"/>
        <hr></hr>
        <Button color="primary"/>
        <hr></hr>
        <Button color="secondary"/>
        <hr></hr>
        <Button color="danger"/>
      </header>
    </div>
  );
}

export default App;
