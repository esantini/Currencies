import * as express from "express";
import * as path from "path";

const app = express();

// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// // uncomment after placing your favicon in /public
// import * as favicon from 'serve-favicon';
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static(path.join(__dirname, "../public")));

app.use("/$", (req: express.Request, res: express.Response, next: express.NextFunction) => {
	console.log("\nServing: home");
	res.render("index", { page: "home" });
});

interface IError extends Error {
	status?: any;
}
// catch 404 and forward to error handler
app.use( (req: express.Request, res: express.Response, next: express.NextFunction) => {
	const err: IError = new Error("Not Found");
	err.status = 404;
	next(err);
});

// error handler
app.use( (err: IError, req: express.Request, res: express.Response, next: express.NextFunction) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	console.log("Bitacaro!!", new Date(), err);

	// render the error page
	res.status(err.status || 500);
	res.render("error", { page: "error", error: err.message });
});

app.listen(port);
console.log("Listening on port " + port + "\n");

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: any): number | string | false {
	const parsedPort = parseInt(val, 10);
	if (isNaN(parsedPort)) {
		// named pipe
		return val;
	}
	if (parsedPort >= 0) {
		// port number
		return parsedPort;
	}
	return false;
}

export default app;
