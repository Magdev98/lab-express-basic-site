const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(`${__dirname}/public`));
app.set("view engine", "hbs");
hbs.registerPartials(`${__dirname}/views/partials`);

app.get("/", (req, res) => {
  res.render("home", {
    navbar: true,
    title: 'Alfons Mucha',
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    navbar: true,
    title: 'About the painter',
  });
});

app.get("/work", (req, res) => {
  res.render("work", {
    navbar: true,
    title: 'Painter work',
  });
});

app.get("/photogallery", (req, res) => {
  res.render("photogallery", {
    navbar: true,
    title:'Photo Gallery',
  });
});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
