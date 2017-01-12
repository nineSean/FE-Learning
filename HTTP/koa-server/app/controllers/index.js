module.exports = {
    index: function *(next) {
        yield this.render('index.hbs');
        yield next;
    },
    jquery: function *(next) {
        yield this.render('jquery.hbs');
        yield next;
    },
    index2: function *(next) {
        yield this.render('index2.hbs');
        yield next;
    },
    a: function *(next) {
        yield this.render('a.hbs');
        yield next;
    },
    data: function *(next) {

        // from mysql

        var userData = {
            name: 'frank',
            age: 25
        }

        var userDataString = JSON.stringify(userData)  // '{"name":"frank","age":25}'

        var callback = this.query.call2

        callback = callback.replace(/\(/g, '')
        callback = callback.replace(/\)/g, '')

        this.body = callback + '(' + userDataString + ')'
        //this.body = '<script>' + callback + '(' + userDataString + ')' + '</script>'
    },

    post: function *(next) {
        var username = this.request.body.username;
        var password = this.request.body.password;

        console.log(password);

        if(password === '123'){
            yield this.render('post.hbs');
            yield next;
        }else{
            yield this.render('error.hbs');
            yield next;
        }
        // 提交到数据库...
        // mysql ...

        //yield this.render('post.hbs', {
        //    name: name,
        //    phone: phone
        //});

        // this.body = {
        //     errorCode: 0,
        //     data: {
        //         name: name,
        //         phone: phone
        //     }
        // }
        // yield next;
    },
    post2: function *(next) {
        var name = this.request.body.name
        var phone = this.request.body.phone
        // 提交到数据库...
        // mysql ...

        yield this.render('post2.hbs', {
            name2: name, //方应杭
            phone2: phone
        });
        yield next;
    }

};