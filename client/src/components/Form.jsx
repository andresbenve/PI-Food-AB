import React, {  useState} from 'react' 
    import { useDispatch, } from 'react-redux'
    import { formCreateRecipe  } from '../actions'

export default function Form() {
const dispatch = useDispatch()
const [input, setInput] = useState({
    title: '',
    summary: '',
    image: '',
    spoonacularScore: '',
    healthScore: '',
    dieta: [],
    stepbystep: ''  
})


const handleChange = (e) => {
e.preventDefault()
if(e.target.name === 'dieta'){
    setInput({
        ...input,
        [e.target.name]: [input.dieta] + ' ' + [e.target.value]
    })
} else {
setInput({
    ...input,
    [e.target.name]: e.target.value
})}}
const handleSubmit = (e) => {
e.preventDefault()
dispatch(formCreateRecipe(input))
setInput({
    title: '',
    summary: '',
    image: '',
    spoonacularScore: '',
    healthScore: '',
    dieta: [],
    stepbystep: ''  
})
}



    return (
        <div>
        <form onSubmit={(e) => handleSubmit(e)}>
        <p></p>
        <label>Title</label>
        <p></p>
        <input 
        type="text"
        name='title'
        value={input.title}
        onChange={(e) => handleChange(e)}
        />
        <p></p>
        <label>summary</label>
        <p></p>
        <textarea 
        type="text"
        name='summary'
        value={input.summary}
        onChange={(e) => handleChange(e)}
        />
        <p></p>
        <label>image</label>
        <p></p>
        <input 
        type="text"
        name='image'
        value={input.image}
        onChange={(e) => handleChange(e)}
        />
        <p></p>
        <label>spoonacularScore</label>
        <p></p>
        <input 
        type="number"
        name='spoonacularScore'
        value={input.spoonacularScore}
        onChange={(e) => handleChange(e)}
        />
        <p></p>
        <label>healthScore</label>
        <p></p>
        <input 
        type="number"
        name='healthScore'
        value={input.healthScore}
        onChange={(e) => handleChange(e)}
        />
        <p></p>
        <label>dieta</label>
        <p></p>
        <select 
        type="select"
        name='dieta'
        value={input.dieta}
        onChange={(e) => handleChange(e)}
        >
        <option value="vegan">vegan</option>
        <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
        <option value="primal">primal</option>
        <option value="gulten free">gulten free</option>
        <option value="dairy free">dairy free</option>
        <option value="Pescetarian">Pescetarian</option>
        <option value="paleolithic">paleolithic</option>
        <option value="Ketogenic">Ketogenic</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
        <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
        <option value="Low FODMAP">Low FODMAP</option>
        <option value="Whole30">Whole30</option>
        </select>
        <p></p>
        {input.dieta}
        <p></p>
        <label>Step by step</label>
        <p></p>
        <input 
        type="text"
        name='stepbystep'
        value={input.stepbystep}
        onChange={(e) => handleChange(e)}
        />
        <p></p>

        <input type="submit" value='Send'/>
            </form>
        </div>
    )
}
