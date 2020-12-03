//import config from '../config/config';
//import {makeRequest} from '../util/ajax';
//import TDTDecode from '../util/decoder/tdt_decode';
//import window from '../window';

var tdtJson = {
    tdtKey: 'd86d7bab3d6ac01ad9dc6a897652f2d2',
    tdtArr: tdtJson,
    tdtArrUrl: 'http://192.9.104.112:80/vector/key'
};
exports.tdtJson = tdtJson;

window.onload = function(){
    let loadTdtArrParameters = {
        url: tdtJson.tdtArrUrl,
        type: 'string'
    }
    //debugger
    tdtJson.tdtArr = [11,12,13,14];
    console.log('tdtJson.tdtArr=' + tdtJson.tdtArr);
    // const request = makeRequest(loadTdtArrParameters, (err: ?Error, data: ?String, cacheControl: ?string, expires: ?string) => {
    //     if (err) {
    //         //callback(err);
    //     } else if (data) {
    //         console.log(data);
    //         //debugger;
    //         //字符串解密
    //         let key ='d86d7bab3d6ac01ad9dc6a897652f2d2';
    //         const decodeData = new TDTDecode();
    //         //将字符串进行解密
    //         let dataStrDecode = decodeData.decryptByDES(data, key);
    //         console.log('将字符串进行解密:'+dataStrDecode);

    //         const tdtArrNum = dataStrDecode.split(',');

    //         config.tdtArr = tdtArrNum;
    //         console.log('生成解密数组:'+config.tdtArr);
    //     }
    // });
};