# Validação do tema comercial unificado

A prévia local confirma que o header e o Hero usam uma base marfim clara, com verde floresta e grafite nos textos e ações. A logo LS aparece com o diamante preto legível.

As superfícies principais de About, CategoryChapter, Services, Workshop, Instagram, Contact, Projects e Footer foram convertidas para `--background`, `--paper-muted` ou `--paper-green`. Textos anteriormente dependentes do tema escuro foram convertidos para `--foreground`, `--muted-foreground` e `--emerald-deep`.

As texturas foram reduzidas para baixa opacidade, mantendo profundidade sem recriar blocos pretos. O build e o typecheck precisam ser executados após a última alteração antes do commit.
