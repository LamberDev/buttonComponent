import './styles/App.css';
import Button from './components/Button';

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
        <hr></hr>
        <Button startIcon="delete_icon"/>
        <hr></hr>
        <Button endIcon="delete_icon"/>
        <hr></hr>
        <Button startIcon="add_icon"/>
        <hr></hr>
        <Button endIcon="add_icon"/>
        <hr></hr>
        <Button startIcon="star_icon"/>
        <hr></hr>
        <Button endIcon="star_icon"/>
        <hr></hr>
        <Button startIcon="thumb_up"/>
        <hr></hr>
        <Button endIcon="thumb_up"/>
        <hr></hr>
        <Button startIcon="thumb_down"/>
        <hr></hr>
        <Button endIcon="thumb_down"/>
      </header>
    </div>
  );
}

export default App;
