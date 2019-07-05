var pokemon = {
	firstname : 'pika',
	lastname : 'chu',
	 pokname : function(){
	 	var fullname = this.firstname + '' + this.lastname;
	 	return fullname;
	}
};

var pokmon = function(){
	console.log(this.pokname + 'I choose you');
};

var logpok = pokmon.bind(pokemon);
logpok();