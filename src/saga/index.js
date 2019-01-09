import { put, takeLatest, all } from 'redux-saga/effects';
import {dataRecived} from'../action/index'

function* fetchData()
{
    const data=[
        {
            toEmail:"xyz@SpeechGrammarList.com",
            Subject:"Work Regarding",
            CreateDate:"20-1-2019",
            Body:"Hello abc I am writing this mail for last work regarding",
            Status:"Succesful"
    
        },
        {
            toEmail:"abc@SpeechGrammarList.com",
            Subject:"Funtion ",
            CreateDate:"22-1-2019",
            Body:"I am write this mail to you for fuction invitetion",
            Status:"Succesful"
       
        },
        {
            toEmail:"def@SpeechGrammarList.com",
            Subject:"Convocation ",
            CreateDate:"22-1-2019",
            Body:"I am write this mail to you for Convocation invitetion",
            Status:"Failed"
       
        }
    ]
    yield put(dataRecived(data));
  

}

function* action(){
   
 yield takeLatest("GET_Data",fetchData);

}

export default function* rootSaga() {
    yield all([
      action(),
       
    ]);
  }
  