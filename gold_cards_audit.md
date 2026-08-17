# Inspeção completa — Cards de serviços e sistema visual

A interface atual usa cards de serviço em papel marfim com bordas verdes muito discretas. A estrutura é funcional, mas os cards têm pouca diferenciação visual em relação ao fundo e os CTAs parecem elementos separados, sem uma assinatura de marca forte.

A correção aplicada introduz um dourado comercial mais sofisticado, com fundo dourado muito claro (`--gold-tint`), borda dourada, ícones em moldura dourada, linha superior animada, elevação de 6px no hover e CTA em dourado. O movimento é limitado a transformações e transições curtas e é desativado para `prefers-reduced-motion`.

Skills consideradas nesta inspeção: `ck:frontend-design` para direção estética e anti-slop, `imagegen` para roteamento de assets visuais, `web-design-guidelines` para revisão de interface e `read-special-images` para leitura da captura fornecida.

Checks técnicos executados após a alteração: `pnpm check` e `pnpm build`, ambos concluídos com sucesso.
