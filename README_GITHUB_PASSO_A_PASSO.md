# Guia tranquilo — publicar e instalar no Android

## Antes de começar

- Não apague o repositório atual.
- Se já houver arquivos de outra versão, faça o download/backup deles primeiro.
- O ZIP deste projeto é o pacote do site instalável; não é um APK.

## Parte 1 — enviar os arquivos ao GitHub

1. Baixe `fenix-vamphyra-mc-command-center-v0.2.zip`.
2. Extraia o ZIP. Você verá `index.html`, `app.js`, `styles.css`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, os READMEs e a pasta `assets`.
3. Abra o GitHub no Chrome: `https://github.com` e entre na sua conta.
4. Abra o repositório que você já usa para este aplicativo.
5. Na página principal do repositório, toque em **Add file** → **Upload files**.
6. Selecione os arquivos extraídos e a pasta `assets`. O ponto mais importante: **`index.html` precisa ficar na raiz do repositório**, não dentro de uma pasta extra chamada `fenix_vamphyra_mc`.
7. Role até **Commit changes**. Escreva algo como `Atualiza MC Command Center v0.2` e confirme em **Commit changes**.
8. Espere a página do repositório terminar de atualizar.

> Se o seletor de arquivos do seu Android não permitir escolher a pasta `assets` e os arquivos juntos, não tente improvisar apagando coisas. Faça essa etapa em um computador, ou envie os arquivos em lotes mantendo a mesma estrutura. Não altere os nomes dos arquivos.

## Parte 2 — ligar o GitHub Pages

1. Dentro do mesmo repositório, abra **Settings**. No aplicativo GitHub, se não aparecer, abra o repositório no Chrome e use a opção **Desktop site / Versão para computador** no menu do Chrome.
2. No menu de configurações, procure **Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Em **Branch**, selecione `main` e, ao lado, a pasta `/(root)`.
5. Toque em **Save**.
6. Aguarde um pouco e atualize a página **Settings → Pages**. O GitHub mostrará o endereço publicado começando com `https://`.
7. Abra esse endereço. Não use o link de edição do GitHub nem o link que termina em `github.com/.../blob/...`; o endereço certo é o do **GitHub Pages**.

## Parte 3 — instalar no celular

1. Abra o endereço HTTPS do GitHub Pages no **Chrome** do Android.
2. Espere a tela de Fênix Vamphyra carregar completamente.
3. Toque no menu de três pontinhos `⋮` do Chrome.
4. Escolha **Instalar app**. Se essa opção não aparecer, escolha **Adicionar à tela inicial**.
5. Confirme o nome **Fênix MC** ou **Fênix Vamphyra**.
6. Volte à tela inicial do celular. O ícone será o avatar enquadrado a partir do avatar original.
7. Toque no ícone para abrir. A tela de abertura aparece por um instante e depois entra no aplicativo.

## Parte 4 — conferir se está tudo certo

- Abra o aplicativo e vá em **Agenda e eventos → Novo evento**.
- Crie um evento com o nome `TESTE — pode apagar depois` e salve.
- Saia da Agenda e volte: o evento deve continuar lá.
- Entre em **Roteiros**, selecione esse evento, crie um bloco e salve.
- Abra **Modo palco** e confira se o texto aparece.
- Em **Configurações**, toque em **Exportar backup JSON** e guarde o arquivo num lugar seguro.

## Se algo der errado

- **Aparece lista de arquivos ou 404:** provavelmente `index.html` não está na raiz ou a publicação ainda não terminou.
- **A tela aparece sem imagens:** confira se a pasta `assets` foi enviada inteira, sem mudar o nome.
- **Não aparece “Instalar app”:** abra o endereço HTTPS publicado pelo GitHub Pages no Chrome atualizado. Tente `⋮ → Adicionar à tela inicial`.
- **Aparece a versão antiga:** feche o app e abra o site novamente com internet. Se persistir, no Chrome abra o site, atualize a página e aguarde alguns segundos para o service worker renovar o cache.
- **Não aparece Settings no aplicativo GitHub:** use o Chrome em `github.com`, abra o repositório e ative **Versão para computador** no menu do Chrome.

**Não apague os arquivos do repositório para tentar corrigir uma falha.** Se uma etapa não aparecer como descrita, pare ali e me diga exatamente o que apareceu na tela.
