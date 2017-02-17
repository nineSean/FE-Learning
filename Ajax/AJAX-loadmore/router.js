/**
 * 使用范例
 */


app.get('/loading', function (req, res) {
    var start = req.query.start,
        len = req.query.length,
        data = [];

    for(var i = start + 1; i<= start + len; i++){
        data.push(i);
    }

    res.send({
        status: 1,
        data: data
    });
});
