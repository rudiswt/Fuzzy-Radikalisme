import {decorate, observable, action} from 'mobx'

class Store {

    dataJawaban = []
  
    setJawaban(data) {
        this.dataJawaban = data
    }
  
  }
  
  decorate(Store, {
    dataJawaban: observable,
    setJawaban: action
  })
  
  const NewStore = new Store()
  
  export default NewStore