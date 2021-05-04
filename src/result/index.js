
function sendSuccess(res,data ,code=200){
    res.status(code).json({data});
    res.end();
}
function sendReject(res , error ,code=400){
    res.status(code).json({error});
    res.end();
}
module.exports = {
    sendSuccess,
    sendReject
}