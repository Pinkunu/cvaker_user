//
//
//app.get('/', function (req, res) {
//    if (req.session && req.session.user) {
//        res.sendFile(__dirname + '/templates/forms.html');
//    } else {
//        res.redirect('/login');
//    }
//});
//app.get('/login', function (req, res) {
//    if (req.session && req.session.user) {
//        res.redirect('/');
//    } else {
//        res.sendFile(__dirname + '/client/login.html');
//
//    }
//});
//app.get('/inservice', function (req, res) {
//
//    var sFileContent = fs.readFileSync(__dirname + "/accounts.json");
//    var arrAccounts = JSON.parse(sFileContent);
//
//    for (var i = 0; i < arrAccounts.length; i++) {
//        var oAccount = arrAccounts[i];
//        if (oAccount.email == req.query.uname && oAccount.password == req.query.pwd) {
//            req.session.user = oAccount;
//            res.redirect('/');
//            return;
//        }
//    }
//    res.redirect('/fail');
//});
//
//app.get('/outservice', function (req, res) {
//    req.session.destroy();
//    res.redirect('/');
//
//});
