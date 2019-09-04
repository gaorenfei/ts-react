import * as React from 'react';
import './index.css'
interface HelloProps{
  name:string,
  age:number
}
export class App extends React.Component{
 render(){
     return (
      <div className='app'>
             <Hello2 name={'高飞34223'} age={246789}/>
      </div>
     );
 };
}

export class Hello2 extends React.Component<HelloProps,{}>{
  constructor(props:HelloProps) {
    super(props);
    this.state = {
    };
  }
 render(){
     return (
      <div>
             我是{this.props.name},今年{this.props.age}岁了啊
      </div>
     );
 };
}

export default App