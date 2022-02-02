module.exports = (io) => {

    io.on('connection', socket => {

        console.log('new connection',socket.id);

		socket.on('send location', (location) =>{ 
            console.log('location',location)
            // socket.emit('get location', location);
            socket.broadcast.emit('get location', location);
        });
        
		socket.on('send videoRef', (videoTracks) =>{ 
            console.log('videoRef ',videoTracks)
            // socket.emit('get location', location);
            socket.broadcast.emit('get videoRef', videoTracks);
        });
        
		// socket.on('fetchMovies', () => fetchMovies(socket));
        
        // socket.on('addMovie', (data) => addMovie(socket, data));

        // socket.on('updateMovie', (data) => updateMovie(socket, data));

        // socket.on('deleteMovie', (id) => deleteMovie(socket, id));
        
		// socket.on('disconnect', () => console.log('disconnected')); 
		
	})
}