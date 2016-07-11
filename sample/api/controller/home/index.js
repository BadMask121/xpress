/**
 * @author xpress
 * @date 16/1/10
 * @desc
 */

exports.index = Controller
    .post()
    .version(1.0)
    .channel(2.0)
    .validate({
        body: {
            username: {type: 'string', required: true, len: {gt: 2, lt: 20}, val: {like: ''}},
            password: {type: 'string', required: true, len: {gt: 2, lt: 20}},
            scores  : {type: 'array',  required: true, len: {gte: 2,  lte: 20}, val:{eq: [100, 98]}},
            age     : {type: 'number', required: true, val: {gte: 0, lte: 100}},
            channel : {type: 'number', required: true, val: {eq: 2}},
            height  : {type: 'number', required: true, val: {neq: 10}},
            gender  : {type: 'bool',   required: true, val: {in: [true, false]}},
            mind    : {type: 'number', required: true, val: {nin: [0,1]}}
        }
    })
    .handle( function(req, res, next){
        res.json({
            code: 1,
            msg: null,
            data: {
                version: 1.0
            }
        });
    });