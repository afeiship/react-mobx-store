import { computed, toJS } from 'mobx';
import NxStore from 'next-store';


const SESSION = 'sessionStorage';
const LOCAL = 'localStorage';

export default class {

  @computed
  get $local(){
    NxStore.engine=LOCAL;
    return NxStore.gets();
  }
  set $local(inValue){
    NxStore.engine=LOCAL;
    NxStore.sets(inValue);
  }

  @computed
  get $session(){
    NxStore.engine=SESSION;
    return NxStore.gets();
  }
  set $session(inValue){
    NxStore.engine=SESSION;
    NxStore.sets(inValue);
  }

}
