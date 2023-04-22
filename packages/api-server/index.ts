import express from 'express';
import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';

const appRouter = trpc.router().query("hello", {
  resolve() {
    return "Hello World";
  }
})


const app = express();
app.use(cors());
const port = 8080;

app.use("/trpc", trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext() { }
}));

app.get("/", (_, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
