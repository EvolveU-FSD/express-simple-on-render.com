const express = require("express");
const app = express();
app.use(require('body-parser').urlencoded({ extended: false }));

const port = process.env.PORT || 3001;

const handleForm = (req, res) => {
  return "The sum of your numbers is: " + (+req.body.firstNum + +req.body.secondNum); 
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/", (req, res) => res.type('html').send(sayHello));

app.post("/handle_form", (req, res) => res.type('html').send(handleForm(req, res)));



const sayHello = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello InceptionU!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 32);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <div>
        Hello InceptionU!
    </div>
    <br/><br/>
    <div>
        <form action="/handle_form" method="POST">
          <label for="First Number">First Number:</label>
          <input type="text" id="firstNum" name="firstNum" />
          <br />
          <label for="Second Number">Second Number:</label>
          <input type="text" id="secondNum" name="secondNum" />
          <br />
          <input type="submit" value="submit" />
        </form>
    </div>
  </body>
</html>
`
