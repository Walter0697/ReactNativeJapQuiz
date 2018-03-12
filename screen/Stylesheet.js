import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  backContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  main_content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 150,
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 50,
    margin: 10,
  },
  backButton: {
    fontSize: 20,
    textAlign: 'left',
    justifyContent: 'center',
  },
  clearButton: {
    fontSize: 20,
    textAlign: 'right',
    justifyContent: 'center',
  },
  instruction: {
    textAlign: 'center',
    color: '#333333',
    fontSize : 20,
    marginBottom: 20,
  },
  button: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    margin: 20,
  },
  buttonBox: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#009688',
    borderRadius: 5,
    marginBottom: 20
  },
  input: {
    height: 40,
  },
  flatList: {
    flex: 10,
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
  },
});