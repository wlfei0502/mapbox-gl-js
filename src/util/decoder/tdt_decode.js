// @flow
//let CryptoJS = require("crypto-js");
import cryptoJS from 'crypto-js';
//import tripledes from 'crypto-js/DES';

class TDTDecode {

    arrayBuffer2String(arr: ArrayBuffer) {
        return String.fromCharCode.apply(null, new Uint8Array(arr));
    }

    string2ArrayBuffer(str: string) {
        let buf = new ArrayBuffer(str.length * 2); // 每个字符占用2个字节
        let bufView = new Uint16Array(buf);
        for (let i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }

    encryptByDES(data: string, key: string) {
        let keyHex = cryptoJS.enc.Utf8.parse(key);
        let encrypted = cryptoJS.DES.encrypt(data, keyHex, {
                mode: cryptoJS.mode.ECB,
                padding: cryptoJS.pad.Pkcs7
            }
        );
        return encrypted.toString();
    }

    decryptByDES(data: string, key: string) {
        // console.log('解密开始');
        // console.log(cryptoJS.mode.ECB);
        // console.log(cryptoJS.pad.Pkcs7);
        // console.log('解密结束');
        //debugger;
        // let cryptoJsObj = cryptoJS.DES.decrypt(data, cryptoJS.enc.Utf8.parse(key), {
        //     mode: cryptoJS.mode.ECB,
        //     padding : cryptoJS.pad.Pkcs7
        // });
        // console.log(cryptoJsObj);
        // console.log(cryptoJsObj.toString(cryptoJS.enc.Utf8));
        // return cryptoJsObj.toString(cryptoJS.enc.Utf8);


        let keyHex = cryptoJS.enc.Utf8.parse(key);
        // let decrypted = cryptoJS.DES.decrypt({
        //     ciphertext: cryptoJS.enc.Base64.parse(data)
        // }, keyHex, {
        //     mode: cryptoJS.mode.ECB,
        //     padding: cryptoJS.pad.Pkcs7
        // });

        let decrypted = cryptoJS.DES.decrypt(data, keyHex, {
            mode: cryptoJS.mode.ECB,
            padding: cryptoJS.pad.Pkcs7
        });

        return decrypted.toString(cryptoJS.enc.Utf8);

    }

}

export default TDTDecode;






// function TDTDecode(){

// }

// TDTDecode.prototype.stringToByte = function(str) {
//     let bytes = new Array();
//     let len, c;
//     len = str.length;
//     for (let i = 0; i < len; i++) {
//         c = str.charCodeAt(i);
//         if (c >= 0x010000 && c <= 0x10FFFF) {
//             bytes.push(((c >> 18) & 0x07) | 0xF0);
//             bytes.push(((c >> 12) & 0x3F) | 0x80);
//             bytes.push(((c >> 6) & 0x3F) | 0x80);
//             bytes.push((c & 0x3F) | 0x80);
//         } else if (c >= 0x000800 && c <= 0x00FFFF) {
//             bytes.push(((c >> 12) & 0x0F) | 0xE0);
//             bytes.push(((c >> 6) & 0x3F) | 0x80);
//             bytes.push((c & 0x3F) | 0x80);
//         } else if (c >= 0x000080 && c <= 0x0007FF) {
//             bytes.push(((c >> 6) & 0x1F) | 0xC0);
//             bytes.push((c & 0x3F) | 0x80);
//         } else {
//             bytes.push(c & 0xFF);
//         }
//     }
//     return bytes;
// }

// export default TDTDecode


//var crypto_js = require("crypto-js");
// import cryptoJS from 'crypto-js';

// function ArrayBuffer2String(arr) {
//     return String.fromCharCode.apply(null, new Uint8Array(arr));
// }

// function String2ArrayBuffer(str) {
//     let buf = new ArrayBuffer(str.length * 2); // 每个字符占用2个字节
//     let bufView = new Uint16Array(buf);
//     for (let i = 0, strLen = str.length; i < strLen; i++) {
//         bufView[i] = str.charCodeAt(i);
//     }
//     return buf;
// }

// //let key = "d86d7bab3d6ac01ad9dc6a897652f2d2";
// function DesDecode(data, key) {
//     let keyHex = cryptoJS.CryptoJS.enc.Utf8.parse(key);
//     // direct decrypt ciphertext
//     let decrypted = cryptoJS.CryptoJS.DES.decrypt({
//         ciphertext : cryptoJS.CryptoJS.enc.Base64.parse(data)
//     }, keyHex, {
//         mode : cryptoJS.CryptoJS.mode.ECB,
//         padding : cryptoJS.CryptoJS.pad.Pkcs7
//     });
//     //console.log(decrypted.toString(cryptoJS.CryptoJS.enc.Utf8))
//     return decrypted.toString(cryptoJS.CryptoJS.enc.Utf8);

// }

// export default {
//     ArrayBuffer2String,
//     String2ArrayBuffer,
//     DesDecode
// }