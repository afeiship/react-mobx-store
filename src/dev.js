import './dev.scss';
import ReactMobxStore from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-mobx-store">
        <ReactMobxStore />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
