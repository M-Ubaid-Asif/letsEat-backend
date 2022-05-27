import { config } from "dotenv"
import { createServer } from "http"
import app from "../app.js"
import logger from "../config/logger.js"

config()
/*
    normalize port into a number,string or false


*/

function normalizePort(val) {
	const port = parseInt(val, 10)

	console.log("---->port : ", port)
	if (isNaN(port)) {
		return val
	}

	if (port >= 0) {
		return port
	}

	return false
}

// get port from environment and store express
const port = normalizePort(process.env.PORT || "3000")

//Event listener for http server 'error' event

function onError(error) {
	if (error.syscall !== "listen") {
		throw error
	}

	const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			_error(`${bind} requires elevated privileges`)
			process.exit(1)
		case "EADDRINUSE":
			_error(`${bind} is already in use`)
			process.exit(1)
		default:
			throw error
	}
}

// create http server

const server = createServer(app)

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	const addr = server.address()
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
logger.info(`Server has started on ${port}`)
server.on("error", onError)
server.on("listening", onListening)