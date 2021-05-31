import React from 'react';


const TodoItem=(props)=>{
    const {items}=props;
    let length =items.length;
    const {deletItem}=props;
    const ItemList= length ?(items.map(item =>{
        return(
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={()=> deletItem(item.id)}>&times;</span>
            </div>
        )
    })
    ): <p>there is no item to show</p>
    return(
        <div className="ListItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>

             {ItemList}
        </div>
        
    )
}
export default TodoItem