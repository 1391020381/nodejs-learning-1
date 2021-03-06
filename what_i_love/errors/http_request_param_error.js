const HTTPBaseError=require('./http_base_error');

const ERROR_CODE=4000000;

class HTTPReqParamError extends HTTPBaseError{

    // paramName是错误类型名(userId等)，desc是展示给用户看的信息，
    constructor(paramName,desc,msg){

        // httpStatusCode,httpMsg,errCode,msg
        super(200,desc,ERROR_CODE,paramName+'wrong:'+msg)
    }
}

module.exports=HTTPReqParamError;