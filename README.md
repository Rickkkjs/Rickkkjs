# Portfólio de elétrica industrial

Site estático, responsivo e personalizável para apresentar os serviços de um profissional da área elétrica.

## Abrir o site

Abra `index.html` em um navegador. Não é necessário instalar dependências nem configurar um servidor.

## Personalização

1. **Nome e apresentação:** no `index.html`, substitua “SEU NOME”, “Seu Nome”, `[Sua cidade]` e os textos de exemplo.
2. **Contato:** no início de `script.js`, configure `email`, `whatsapp` e `instagram`.
   - WhatsApp: informe o número com código do país e DDD, somente números (por exemplo, `5511999999999`). O link fica oculto até ser configurado.
   - Instagram: informe o nome do perfil, com ou sem `@`. O link fica oculto até ser configurado.
   - O formulário valida os campos e prepara uma mensagem no aplicativo de e-mail do visitante. Para receber solicitações, informe um endereço real em `email` e verifique se o visitante tem um aplicativo de e-mail configurado.
3. **Serviços, perguntas frequentes e região:** edite os respectivos textos diretamente no `index.html`.
4. **Projetos:** substitua os três projetos de exemplo por trabalhos reais. Para incluir uma foto, coloque o arquivo de imagem no projeto e troque o conteúdo do bloco `.project-art` no HTML por uma imagem, por exemplo:

   ```html
   <div class="project-art">
     <img src="images/painel-industrial.jpg" alt="Painel elétrico instalado em ambiente industrial">
   </div>
   ```

   A regra de imagem já está incluída em `styles.css`; mantenha a classe `project-art` para preservar o recorte responsivo.

5. **Formação e certificações:** atualize os cartões de qualificações somente com informações verdadeiras e vigentes. Não anuncie registro ou autorização profissional que não possua.
6. **Aparência:** ajuste as cores e fontes nas variáveis do início de `styles.css`. As fontes Manrope e DM Sans carregam do Google Fonts; sem conexão, o site usa fontes de sistema.

## Recursos incluídos

- Layout responsivo para celular, tablet e desktop.
- Menu compacto em telas pequenas, com suporte a teclado.
- Alternância entre tema claro e escuro, salva no navegador.
- Animações suaves de entrada, respeitando a preferência por movimento reduzido.
- Formulário de orçamento preparado para abrir o aplicativo de e-mail.
- Links sociais ocultos até que os respectivos perfis sejam configurados.
- Navegação por âncoras, perguntas frequentes expansíveis e ano do rodapé atualizado automaticamente.

## Antes de publicar

Troque os nomes, contatos, cidade, exemplos de projeto e textos de qualificação. Revise as informações de serviços, segurança e região de atendimento para que representem com precisão sua atuação profissional.
