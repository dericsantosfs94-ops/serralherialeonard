# Auditoria Final - Serralheria Leonard

## Resumo da Auditoria Visual

Após análise minuciosa de todas as imagens vinculadas ao portfólio no arquivo `company.ts`, foram identificadas diversas inconsistências entre o texto descritivo e o conteúdo visual, além de problemas de enquadramento e profissionalismo em algumas fotos.

### Itens a MANTER (Qualidade Comercial)

1. `foto_18.jpg`: Portão preto premium (fechado).
2. `foto_17.jpg`: Portão preto premium (aberto/basculante).
3. `foto_2.jpg`: Janela/Esquadria preta instalada.
4. `foto_11.jpg`: Divisória comercial em alumínio.
5. `foto_25.jpg`: Fachada completa com cobertura branca e piscina.
6. `foto_1.jpg`: Fachada da loja (institucional).
7. `5174908402084285518.jpg`: Foto do proprietário (para seção Sobre).
8. `foto_19.jpg`: Portão branco de lâminas (Reclassificar para categoria Portões).
9. `foto_23.jpg`: Cobertura branca em fachada (Reclassificar para categoria Coberturas).

### Itens a REMOVER (Incompatíveis ou Baixa Qualidade)

| ID / Arquivo | Motivo da Remoção |
| --- | --- |
| `foto_4.jpg` | Selfie do proprietário em obra; não mostra o portão amadeirado descrito. |
| `foto_5.jpg` | Foto de obra com andaime; não mostra o portão amadeirado descrito. |
| `foto_6.jpg` | Mostra escada interna; descrição fala de portão basculante branco. |
| `foto_7.jpg` | Mostra escada interna; descrição fala de portão de lâminas. |
| `foto_8.jpg` | Mostra corrimão interno; descrição fala de frota de caminhão. |
| `foto_16.jpg` | Enquadramento ruim (vassoura e bagunça aparecendo); descrição de fachada não condiz. |
| `foto_10.jpg` | Selfie invasiva com careta; enquadramento amador para vitrine de vendas. |
| `foto_13.jpg` | Mostra montagem de divisória; descrição fala de esquadria espelhada. |
| `foto_14.jpg` | Foto de oficina muito carregada; não é o acabamento final descrito. |
| `foto_15.jpg` | Selfie na oficina; descrição fala de entrega em residência. |
| `foto_20.jpg` | Descrição genérica e foto de bastidor que não agrega valor de venda imediato. |
| `foto_21.jpg` | Foto documental de transporte; baixo apelo visual para conversão. |
| `foto_22.jpg` | Obra inacabada com entulho; descrição de pergolado não condiz. |
| `foto_26.jpg` | Mostra cobertura de garagem; descrição fala de guarda-corpo inox. |
| `foto_27.jpg` | Mostra fachada; descrição fala de escada. |
| `foto_28.jpg` | Dedo no quadro e enquadramento ruim; descrição incompatível. |
| `foto_9.jpg` | **CRÍTICO**: Logotipo inapropriado na camisa do trabalhador (Pornhub). |

## Plano de Ação

1. Editar `client/src/data/company.ts` para remover os itens da lista de remoção.
2. Reorganizar os itens mantidos para garantir harmonia visual e foco em vendas.
3. Ajustar descrições dos itens mantidos que foram reclassificados.
4. Melhorar o layout no `Projects.tsx` se necessário para lidar com menos itens de forma elegante.
