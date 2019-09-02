import * as React from 'react';

interface HelloProps{
  name:string,
  age:number
}
export class App extends React.Component{
 render(){
     return (
      <div>
             <Hello2 name={'高飞34223'} age={29614334434}/>
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