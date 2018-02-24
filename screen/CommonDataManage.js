import {
  AsyncStorage,
} from 'react-native';

export default class CommonDataManage {
  static myinstance = null;

  _currentPoint = 0;
  _mode = "";
  _question_type = "";
  _question = "";
  _answer = "";

  //saving data inside the phone
  async _saveData()
  {
    try{
      await AsyncStorage.setItem("@JapQuiz:list",
                              JSON.stringify({score: this._currentPoint}));
    }
    catch(error)
    {
      console.log(error.toString());
    }
  }

  //fetching information from the phone storage
  async fetchData()
  {
    /*AsyncStorage.getItem("@JapQuiz:list")
      .then((response) => {
        return JSON.parse(response);
      })
      .then((parsedResponse) => {
        if (parsedResponse)
          this._currentPoint = parsedResponse.score;   
        else
          this._currentPoint = 0;
      });*/
    let response = await AsyncStorage.getItem('@JapQuiz:list');
    let listOfData = await JSON.parse(response) || [];

    if (listOfData.score)
      this._currentPoint = listOfData.score;
    else
      this._currentPoint = 0;
  }
  

  static getInstance()
  {
    if (this.myinstance == null){
      this.myinstance = new CommonDataManage();
      this.myinstance.fetchData();
    }
    return this.myinstance;
  }

  setMode(mode)
  {
    this._mode = mode;
  }

  getMode()
  {
    return this._mode;
  }

  changePoint(value)
  {
    this._currentPoint += value;
    this._saveData()
  }

  getPoint()
  {
    return this._currentPoint;
  }
}