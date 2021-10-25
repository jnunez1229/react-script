import React from 'react'

interface IProps{
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}
// const List = ({people}:IProps) =>{
const List: React.FC<IProps> = ({people}) =>{

    const renderList = ()=> {
        return people.map((person) => {
            return(
                <li className="List">
                <div className="List">
                    <img src={person.url} alt={person.name} className="List-img" />
                    <h2>{person.name}</h2>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                    </div> 
                
            </li>
            )
        })
    }

    return (
        <ul>
             {renderList()}
        </ul>
    )
}

export default List;