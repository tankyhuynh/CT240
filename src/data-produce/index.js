function request(data, lprops){
    lprops.forEach(el=> {
        if(!data[el])  throw new Error("Data incorrect!")});
    return data;
}
function merger(req){
    return {...req.body, ...req.params, ...req.query};
}


module.exports = {
    request,
    merger
}