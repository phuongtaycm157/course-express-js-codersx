module.exports = {
	postCreate: function(req, res, next) {
		var user = req.body;
        var error = []
        if (!user.firstName) error.push('First Name');
        if (!user.lastName) error.push('Last Name');
        if (!user.email) error.push('Email');
        if (error.length){
            res.render('users/create',{
                user: user,
                error: error
            });
            return;
        }
		next();
	}
}