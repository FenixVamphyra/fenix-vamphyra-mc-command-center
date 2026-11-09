# Fênix Vamphyra — MC Command Center

Aplicativo web instalável (PWA), em português, pensado para uso no celular e com estética hip-hop/anime, painéis escuros translúcidos, detalhes neon e abertura com avatar original.

## O que esta versão já inclui

- Tela de abertura com avatar, identidade visual e ícone próprio do aplicativo.
- Início com atalhos rápidos para as principais áreas.
- Cadastro, edição, busca, filtro e exclusão de eventos.
- Roteiros por evento, blocos reordenáveis e modo palco com tamanho de texto ajustável.
- Temporizador de palco.
- Cadastro de convidados/artistas/coletivos e opção de autorização para divulgação.
- Cadastro de parceiros, patrocinadores, editais e equipes.
- Encerramento de eventos, arquivo histórico e seleção de eventos para o portfólio.
- Biblioteca para importar materiais no armazenamento local do navegador.
- Personalização de cor, transparência, fonte, avatar e fundo.
- Exportação/importação de backup JSON e exportação de resumo do portfólio.
- Manifesto PWA, ícones Android/iOS e cache para abrir o shell offline depois da primeira visita.

## Importante, sem promessa falsa

Esta é uma PWA estática, não um APK Android assinado. Depois de publicada em HTTPS, pode ser instalada pelo Chrome no Android usando **Instalar app** ou **Adicionar à tela inicial**. A disponibilidade do botão de instalação depende do navegador e do estado do site. Um APK nativo e publicação na Play Store são etapas separadas.

Os dados são guardados localmente no navegador/dispositivo. Não existe sincronização em nuvem entre aparelhos. Exporte o backup regularmente; limpar dados do navegador pode apagar os registros locais. Arquivos muito grandes na biblioteca podem atingir o limite de armazenamento do navegador.

## Publicar pelo GitHub Pages

1. Extraia o ZIP no celular ou computador.
2. Abra seu repositório no GitHub pelo navegador.
3. Use **Add file → Upload files** e envie o conteúdo desta pasta, mantendo `index.html`, `app.js`, `styles.css`, `manifest.webmanifest`, `sw.js`, `.nojekyll` e a pasta `assets` na raiz do repositório.
4. Faça **Commit changes**.
5. No repositório, entre em **Settings → Pages**.
6. Em **Build and deployment**, escolha **Deploy from a branch**; selecione a branch `main` e a pasta `/(root)` e salve.
7. Aguarde o GitHub Pages publicar e abra o endereço HTTPS exibido nessa página.
8. No Android, abra esse endereço no Chrome. Menu `⋮` → **Instalar app** ou **Adicionar à tela inicial**.

Se o projeto estiver dentro de uma subpasta do repositório, a instalação pode funcionar, mas o caminho publicado será diferente. O mais simples é deixar `index.html` e os arquivos principais diretamente na raiz.

## Teste antes de instalar

- Crie um evento de teste, feche e reabra o site e confirme que ele continua na lista.
- Adicione um bloco de roteiro e abra o Modo palco.
- Cadastre uma pessoa e um parceiro.
- Exporte um backup JSON e guarde-o fora do navegador.
- Teste o site em HTTPS e confirme que a abertura, o ícone e os estilos carregam.

## Privacidade e identidade

Os três arquivos `avatar-full-transparent-*.png` foram preservados sem edição. Os ícones do aplicativo são versões de enquadramento do primeiro avatar original; não substituem os avatares usados na tela de capa.
