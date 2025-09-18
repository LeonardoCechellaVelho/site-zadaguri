const fs = require("fs");

// Novo meme recebido do workflow
const newMeme = JSON.parse(fs.readFileSync("new_meme.json", "utf-8"));

// Carregar posts.json existente ou iniciar vazio
let posts = [];
if (fs.existsSync("posts.json")) {
  posts = JSON.parse(fs.readFileSync("posts.json", "utf-8"));
}

// Adicionar novo meme
posts.push(newMeme);

// Salvar de volta no arquivo
fs.writeFileSync("posts.json", JSON.stringify(posts, null, 2));
console.log("✅ Meme adicionado ao posts.json");
