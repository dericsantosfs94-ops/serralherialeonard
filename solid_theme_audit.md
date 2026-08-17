# Auditoria do tema sólido e elegante

A interface foi consolidada em uma única superfície de fundo neutra baseada em `--background`. Os tokens `--paper-muted`, `--paper-green` e `--gold-tint` foram alinhados à mesma cor de fundo para evitar a sensação de duas paletas concorrentes.

Foram removidas texturas decorativas, manchas verdes, brilhos difusos, linhas em gradiente e overlays em gradiente nas seções principais, no Hero, na galeria de projetos, no contato, no Instagram, na oficina, na história e na página 404. O dourado permanece somente como acento de marca em bordas, linhas, ícones e estados interativos.

A página 404 também foi harmonizada com o mesmo sistema de fundo, tipografia, verde de ação e dourado de destaque.

A verificação estática não encontrou ocorrências restantes de `bg-gradient`, `gradient-`, `backgroundImage`, `texture` ou `blur-[` nos componentes principais. `pnpm check` e `pnpm build` foram concluídos com sucesso.
