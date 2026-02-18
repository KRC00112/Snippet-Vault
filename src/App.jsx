
import './App.css'

function App() {

  return (
    <div className='page'>
        <header>
            <div>Snippet Vault</div>
        </header>
        <section className=''>
            <div className='card'>
                <input type='text' className='input-title card-border' placeholder='Give snippet a title'></input>
                <textarea className='input-snippet card-border' placeholder='Paste snippet' rows={10}></textarea>
                <button className='add-snippet-btn card-border' >Add Snippet</button>
            </div>
        </section>

    </div>
  )
}

export default App
