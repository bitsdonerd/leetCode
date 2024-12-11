# LeetCode-Style JavaScript Exercises

Este repositório contém exercícios personalizados no estilo [LeetCode](https://leetcode.com/) desenvolvidos em JavaScript, juntamente com testes automatizados usando [Jest](https://jestjs.io/). O objetivo é praticar e aprimorar habilidades de programação, lógica e resolução de problemas.

## 📚 Estrutura do Projeto

- **`src/challenges/`**: Contém os arquivos de exercícios em JavaScript.
- **`package.json`**: Configuração do projeto, incluindo dependências.
- **`reverse.test.js`**: Contém os testes para validar as soluções dos exercícios e a Configuração do Jest (se aplicável).

## 🚀 Como Usar

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/seu-usuario/leetCode.git
   cd leetCode
   ```

2. **Instale as dependências**:
   Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
   ```bash
   npm install
   ```

3. **Execute os testes**:
   Use o Jest para validar as soluções.
   ```bash
   jest --watch
   ```

4. **Adicione seus próprios exercícios**:
   Crie um arquivo na pasta `challenges/` e o correspondente teste.

## 🧩 Exemplo de Exercício

### Arquivo: `exercises/sum.js`
```javascript
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

### Arquivo: `tests/sum.test.js`
```javascript
const sum = require('../exercises/sum');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
```

## 🛠️ Tecnologias Utilizadas

- **Linguagem**: JavaScript
- **Testes**: Jest

## 🤝 Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça as alterações desejadas e commit:
   ```bash
   git commit -m 'Adicionei um novo exercício'
   ```
4. Envie as alterações para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request no GitHub.

## 📜 Licença

Este projeto está sob a licença [MIT](LICENSE).

