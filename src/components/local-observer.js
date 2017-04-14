import { PureComponent } from 'react';
import { autorun, toJS } from 'mobx';

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.autorun();
  }

  autorun(){
    const {store} = this.props;
    this._disposer = autorun(() => {
      if (this.condition()) {
        this.conditionChange(store,toJS);
      }
    });
  }

  condition(){
    const {store} = this.props;
    return store;
  }

  conditionChange(){
    //to be impl
  }

  componentWillUnmount(){
    this._disposer();
  }

  render(){
    return null;
  }
};
