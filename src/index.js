const dotenv = require("dotenv")
const Koa = require("koa");
const Router = require("koa-router");

dotenv.config()

const app = new Koa();
const router = new Router();

router.get("/", async function (ctx) {
    ctx.body = {
        message: "Hello World!"
    }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT);