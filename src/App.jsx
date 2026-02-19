
import './App.css'
import {useState} from "react";




function AllSnippets({snippets}) {


    return (
        <div className="">
            {snippets.map((item, index) => (
                <div key={item.id} className="card right-card">
                    {item.title}[{item.language}]
                    {item.code}
                </div>
            ))}

        </div>
    )

}

function AddSnippet({languageList, addSnippetOnClick}){
    const [title, setTitle] = useState('')
    const [language, setLanguage] = useState(languageList[0]);
    const [code, setCode] = useState('');


    return(
        <div className='card'>
            <p className='create-snippet-heading'>NEW SNIPPET</p>
            <input type='text' className='input-title card-border' placeholder='Give snippet a title' value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            <select className='languages-drop-down' name="languages" value={language} onChange={(e)=>{setLanguage(e.target.value)}}>
                {languageList.map((item,index) => (
                    <option key={index} >{item}</option>
                ))}
            </select>
            <textarea className='input-snippet card-border' placeholder='Paste snippet' rows={10} value={code} onChange={(e)=>{setCode(e.target.value)}}></textarea>
            <button className='add-snippet-btn card-border' onClick={()=>addSnippetOnClick({id:Date.now(),title:title,language:language,code:code})}>Add Snippet</button>
        </div>
    );

}


function App() {

    const languageList=['Select a language','HTML', 'CSS', 'JavaScript', 'Python', 'C++', 'C'];

    const [snippets,setSnippets]=useState([]);

    const addSnippetOnClick=(item)=>{
        if(item.language!==languageList[0]) {
            setSnippets(prev => [...prev, item]);
        }
    }


  return (
    <div className='page'>
        <header>
            <div>Snippet Vault</div>
        </header>
        <section className='workspace'>
            <section className='left-section'>
                <AddSnippet addSnippetOnClick={addSnippetOnClick} languageList={languageList}/>
            </section>
            <section className='right-section'>
                <AllSnippets snippets={snippets}/>
            </section>
        </section>


    </div>
  )
}

export default App
