export default class CommonDataManage {
  static myinstance = null;

  _currentPoint = 0;
  _mode = "";
  _question_type = "";
  _question = "";
  _answer = "";

  static getInstance()
  {
    if (this.myinstance == null){
      this.myinstance = new CommonDataManage();
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

  changePoint(value)
  {
    this._currentPoint += value;
  }

  getPoint()
  {
    return this._currentPoint;
  }
}