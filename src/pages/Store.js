import {decorate, observable, action} from 'mobx'

class Store {

    dataJawaban = []
  
    setJawaban(data) {
        this.dataJawaban = data
        console.log(this.dataJawaban)
    }
  
  }
  
  decorate(Store, {
    dataJawaban: observable,
    setJawaban: action
  })
  
  const NewStore = new Store()
  
  export default NewStore