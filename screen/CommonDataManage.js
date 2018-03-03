import {
  AsyncStorage,
} from 'react-native';

export default class CommonDataManage {
  static myinstance = null;

  _currentPoint = 0;
  _mode = "";
  _question_type = "";
  _question_year = "";

  _wrong_list = [];

  //saving data inside the phone
  async _saveData()
  {
    try{
      await AsyncStorage.setItem("@JapQuiz:list",
                              JSON.stringify({score: this._currentPoint,
                                              wrong_list: this._wrong_list,}));
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

    if (listOfData.wrong_list)
      this._wrong_list = listOfData.wrong_list;
    else
      this._wrong_list = [];
  }
  

  static getInstance()
  {
    if (this.myinstance == null){
      this.myinstance = new CommonDataManage();
      this.myinstance.fetchData();
    }
    return this.myinstance;
  }

  //manipulate with the list
  appendWrongQuestion(url, data, type)
  {
    var temp_data = {url : url, data: data, type: type};
    this._wrong_list.push(temp_data);

    this._saveData();
  }

  getWrongQuestion(index)
  {
    return this._wrong_list[index];
  }

  getWrongList()
  {
    return this._wrong_list;
  }

  removeWrongQuestion(index)
  {
    this._wrong_list.splice(index, 1);
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