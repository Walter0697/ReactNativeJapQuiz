import {
  AsyncStorage,
} from 'react-native';

export default class CommonDataManage {
  static myinstance = null;

  _currentPoint = 0;
  _mode = "";
  _question_type = "";
  _question_year = "";

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

  setQuestionType(type)
  {
    this._question_type = type;
  }

  getQuestionType()
  {
    return this._question_type;
  }

  setQuestionYear(year)
  {
    this._question_year = year;
  }

  getQuestionYear()
  {
    return this._question_year;
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