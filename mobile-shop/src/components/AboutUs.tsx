import { Component } from 'react';

interface mycomponet {
  message: string
}
interface mystate {
  data: number
}


export default class AboutUs extends Component<mycomponet, mystate>{
  constructor(props: mycomponet) {
    super(props);
    this.state = {
      data: 1
    }
  }
  render() {
    return (
      <h1>{this.props.message}</h1>
    )
  }
}