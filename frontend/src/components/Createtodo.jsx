import { useState } from "react"

export function Createtodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input  style = {{
            margin : 10,
            padding : 10
        }}type="text" placeholder="title" onChange={ (e) => {
            setTitle(e.target.value);
        }
        }></input> <br></br>

        <input style = {{
            margin : 10,
            padding : 10
        }} type="text" placeholder="description" onChange = {(e) => {
            setDescription(e.target.value);
        }}></input><br></br>

        <button style = {{
            margin : 10,
            padding : 10
        }} onClick={async () => {
            fetch("http://localhost:3000/todos", {
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "Content-type" : "application/json"
                }
            }) 
            .then( async (res) => {
                const json = res.json ;
                alert('todo created');
            })
        }}>Createtodo</button>
    </div>
}