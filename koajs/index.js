const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
  if ("/" == ctx.path) {
    ctx.body = "<h1>Index Page</h1>";
  }
  else if ("/about" == ctx.path) {
    ctx.body = "<h1>About Page</h1>";
  }
  else if ("/contact" == ctx.path) {
    ctx.body = "<h1>Contact Page</h1>";
  }
});

app.listen(3000);
