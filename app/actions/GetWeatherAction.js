

import * as TYPES from '../ActionType';

export function actionGetWeather(list){
    return (dispatch) => {
        console.log(dispatch,"disp")
        //发起请求
        fetch('http://10.10.11.184:3000/list')
      .then((response) =>{
        console.log(response._bodyText)
      })

        //actions传递给reducer
        dispatch({
                type : TYPES.INIT,
                message : '开始获取',
                bean : list,
            });
     
    }
}
