import React, { useState } from "react";
import {IState as Props} from "../App"

interface IProps{
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    // setPeople: React.Dispatch<React.SetStateAction<{
    //     name: string; 
    //     age: number;
    //     url: string;
    //     note?: string|undefined;
    // }[]>>
}



const AddToList: React.FC<IProps> = ({setPeople, people}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleClick = ():void => {
        if(!input.name || !input.age || !input.img){
            alert("Please fill out all fields");
            return;
        }

        setPeople([...people, {
            name: input.name,
            age: parseInt(input.age),
            url: input.img,
            note: input.note
        }]);

        setInput({
            name: "",
            age: "",
            note: "",
            img: ""
        });
    }

    return (
        <div className="AddToList">
            <input type="text"
            placeholder="Name"
            className="AddToList" 
            value={input.name}
            name="name"
            onChange={handleChange}
            // onChange={(e) => {}}
            />

            <input type="number"
            placeholder="Age"
            className="AddToList" 
            value={input.age}
            name="age"
            onChange={handleChange}
            />

            <input type="text"
            placeholder="Image URL"
            className="AddToList" 
            value={input.img}
            name="img"
            onChange={handleChange}
            />

            <textarea 
            placeholder="Notes"
            className="AddToList" 
            value={input.note}
            name="note"
            onChange={handleChange}
            />

            <button 
                className="AddToList-btn"
                onClick={handleClick}
            >Add To List</button>

        </div>
    );
}

export default AddToList;


