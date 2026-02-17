
import './App.css'

function App() {

  return (
    <div>
        <header>
            <div>Snippet Vault</div>
        </header>
        <section>
            <div className='card'>
                <h5>Make a new Snippet</h5>
                <input type='text' placeholder='Give snippet a title'></input>
                <input type='textarea' placeholder='Paste snippet'></input>
                <button>Add Snippet</button>
            </div>
        </section>

    </div>
  )
}

export default App
