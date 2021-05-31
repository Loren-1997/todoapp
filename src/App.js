import React ,{Component} from 'react'
import TodoItem from './component/TodoItem/TodoItem';
import AddItem from './component/AddItem/AddItem'

class App extends Component{

  state={
    items:[
      {id:1,name:'loren',age:24},
      {id:2,name:'Mohammad',age:23},
      {id:3,name:'Laure',age:25}
    ]
  }
  deletItem=(id)=>{
    let items=this.state.items.filter(item=>{
      return item.id !==id
    })
    this.setState({items})
  }

  addItem=(item)=>{
    item.id=Math.random();
    let items=this.state.items;
    items.push(item)
    this.setState({items}
    )
  }

  render(){
    return(
      <div className="container">
        <h1 className="text-center">Todo List</h1>
        <TodoItem items={this.state.items} deletItem={this.deletItem}/>
         <AddItem addItem={this.addItem}/>
      </div>
    )
    }
  }


export default App;
