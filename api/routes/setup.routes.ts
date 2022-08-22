import {Router, Context} from "../deps.ts";
import { uniqueId } from "../services/uniqueId.ts";
import * as favsService from "../services/favs.service.ts";

function init({request, response}: Context) {
  const id = request.headers.get("X-MID") ?? uniqueId();
  // const favs = favsService.getFavs(id);
  response.body = { id }; // ,favs
}

function initDigitCode({request, response}: Context) {
  const id = request.headers.get("DIGIT-CODE") ?? uniqueId();
  // const favs = favsService.getFavs(id);
  response.body = { id }; // ,favs
}




export const setupRoutes = new Router()
  .get("/init", init);


// const router = new Router();
// router.get("/book", oakCors(corsOptions), (context) => {
//   context.response.body = Array.from(books.values());
// });

