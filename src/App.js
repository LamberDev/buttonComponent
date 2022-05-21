import './styles/App.css';
import Button from './components/Button';

function App() {
  return (
    <main className="App">
        <div className='buttton_container'>
          <Button />
          <Button variant="outline" />
          <Button variant="text" />
          <Button disableShadow />
          <Button disabled />
          <Button variant="text"  disabled />
        </div>

        <div className='buttton_container'>
          <Button size="sm"/>
          <Button variant="md"/>
          <Button variant="lg"/>
        </div>

        <div className='buttton_container'>
          <Button color="default"/>
          <Button color="primary"/>
          <Button color="secondary" text="Secondary"/>
          <Button color="danger" text="Danger"/>
        </div>

        <div className='buttton_container'>
          <Button startIcon="delete_icon"/>
          <Button endIcon="delete_icon"/>
          <Button startIcon="add_icon"/>
          <Button endIcon="add_icon"/>
          <Button startIcon="star_icon"/>
          <Button endIcon="star_icon"/>
          <Button startIcon="thumb_up"/>
          <Button endIcon="thumb_up"/>
          <Button startIcon="thumb_down"/>
          <Button endIcon="thumb_down"/>
        </div>
    </main>
  );
}

export default App;
