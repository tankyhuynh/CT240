
function sendSuccess(res,data ,code=200){
    res.status(code).send(data);
    res.end();
}
function sendReject(res , error ,code=400){
    res.status(code).send({error});
    res.end();
}
module.exports = {
    sendSuccess,
    sendReject
}