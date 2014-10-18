// require charge la dépendance http dans la variable du même nom
var http = require('http');
// puis on crée un serveur, avec en paramètre un callback
http.createServer(function (req, res) {
	// Dans le callback : ce code est exécuté a chaque requete 
	// traitée par le serveur (pas de paramètre : écoute root)
	// parametres : request et response
	// on met à la main le code 200 : HTTP OK dans le header
	res.writeHead(200, {'Content-Type': 'text/plain'});
  	// puis on écrit Hello World dans la réponse
  	res.end('Hello World\n');
  	// le serveur écoute le client local sur le port 1337
}).listen(1337, '127.0.0.1', function(){
	// calback exécuté quand listen(...) est prêt
	console.log('Server running at http://127.0.0.1:1337/');	
});