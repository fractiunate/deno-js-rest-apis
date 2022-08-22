import { Application, oakCors } from "./deps.ts";
import {setupRoutes} from "./routes/setup.routes.ts";
import {movieRoutes} from "./routes/movie.routes.ts";
import * as logger from "./middleware/logger.ts";

const app = new Application();
const port = 8000

// const sleep = (ms: number) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });

// const loadOriginsFromDataBase = async () => {
//   await sleep(3000);
//   return ["http://localhost:1234", "http://localhost:3000"];
// };

// const corsOptions: CorsOptions = {
//     origin: async (requestOrigin) => {
//       const origins = await loadOriginsFromDataBase(); // Simulate asynchronous task
//         return origins; // --> use in routes
//     },
//   };
  
app.use(oakCors());

app.use(logger.log);
app.use(logger.time);

app.use(setupRoutes.routes());
app.use(setupRoutes.allowedMethods());

app.use(movieRoutes.routes());
app.use(movieRoutes.allowedMethods());


console.info(`CORS-enabled web server listening on port ${port}`);
await app.listen({port: port});