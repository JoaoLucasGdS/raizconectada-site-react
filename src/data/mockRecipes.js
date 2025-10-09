const mockRecipes = [
  {
    "id": 1,
    "title": "Bolo de cenoura com cobertura de chocolate",
    "subtitle": "Tempo: 40–60 min • Fácil",
    "image": "/recipeImages/f1.jpg",
    "description": "Ingredientes (massa): 3 cenouras médias (≈ 360 g), 3–4 ovos, 1 xícara (chá) de óleo, 1½–2 xícaras (chá) de açúcar, 2 xícaras (chá) de farinha de trigo, 1 colher (sopa) de fermento em pó e 1 pitada de sal. Ingredientes (cobertura): 3 colheres (sopa) de chocolate em pó ou cacau, 2 colheres (sopa) de açúcar, 1 colher (sopa) de manteiga e 3–4 colheres (sopa) de leite. Um clássico do café da tarde brasileiro, o bolo de cenoura combina uma massa úmida e levemente adocicada com uma cobertura de chocolate brilhante. Fácil de preparar e perfeito para acompanhar um café ou lanche da tarde.",
    "link": "https://claradesousa.pt/receita/bolo-de-cenoura-com-cobertura-de-chocolate/?utm_source=chatgpt.com"
  },
  {
    "id": 2,
    "title": "Panqueca doce simples",
    "subtitle": "Tempo: 20 min • Fácil",
    "image": "/recipeImages/f2.jpg",
    "description": "Ingredientes: 1 xícara de farinha de trigo; 1 xícara de leite integral; 4 colheres de sopa de açúcar; 1 colher de chá de fermento em pó; 1 ovo; ½ colher de chá de extrato de baunilha; pitada de sal. Leve descrição: Uma panqueca doce leve, perfeita para café da manhã ou lanche da tarde — massa macia feita no liquidificador, frita até dourar dos dois lados, servida com o acompanhamento que você gostar — frutas, mel, doce de leite, geleia, etc.",
    "link": "https://essareceitafunciona.com.br/panqueca-doce/"
  },
  {
    "id": 3,
    "title": "Salada de Frutas com Maracujá",
    "subtitle": "Tempo: 20 min • Fácil",
    "image": "/recipeImages/f3.jpg",
    "description": "Ingredientes: 1 caixa ou lata de leite condensado (395 g); 2 maracujás grandes (polpa); 1 caixa de creme de leite (200 g); suco de ½ limão; 200 g de uva vermelha sem sementes; 1 maçã média; 200 g de morango; 2 mangas palmer grandes; 2 bananas prata médias; 1 e ½ laranja média. Leve descrição: Uma salada de frutas refrescante e com toque especial de maracujá: as frutas variadas trazem cor, sabor e nutrientes, enquanto o creme de maracujá feito com leite condensado, creme de leite e limão envolve tudo com leve acidez. Pode ser servida gelada e agrada como sobremesa leve ou lanche.",
    "link": "https://www.receiteria.com.br/receita/salada-de-frutas-com-maracuja/"
  },
  {
    "id": 4,
    "title": "Recheio de Morango para Bolo",
    "subtitle": "Tempo: 35 min • Fácil",
    "image": "/recipeImages/f4.jpg",
    "description": "Ingredientes: 1 lata de leite condensado; 1 caixinha de creme de leite (200 g); 1 colher (sopa) de amido de milho dissolvida em 1/2 xícara de leite; 2 xícaras de morangos picados (aprox. 250 g). Leve descrição: Creme cozido e aveludado feito com leite condensado, creme de leite e amido — depois de frio, mistura-se morangos picados para dar frescor e textura. Fica ótimo para rechear bolos, tortas e combina cremosidade com o sabor frutado dos morangos.",
    "link": "https://www.tudogostoso.com.br/receita/302449-recheio-de-morango-para-bolo.html"
  },
  {
    "id": 5,
    "title": "Pavlova com frutas",
    "subtitle": "Tempo: até 2 h • Médio",
    "image": "/recipeImages/f5.jpg",
    "description": "Ingredientes (merengue): 2 claras de ovo; 2/3 xícara (chá) de açúcar; manteiga e farinha para untar a assadeira. Ingredientes (cobertura): 1 manga; 1 kiwi; 1/2 xícara (chá) de morangos; 1 xícara (chá) de creme de leite fresco; 1/4 xícara (chá) de açúcar. Leve descrição: Suspiros assados crocantes por fora e macios por dentro, cobertos com creme batido e frutas frescas — uma sobremesa delicada, colorida e ideal para festas e ocasiões especiais.",
    "link": "https://panelinha.com.br/receita/pavlova-com-frutas"
  },
  {
    "id": 6,
    "title": "Torta de Maçã (Apple Pie)",
    "subtitle": "Tempo: ~1 h 30 min • Médio",
    "image": "/recipeImages/f6.jpg",
    "description": "Ingredientes (massa): 300 g de farinha de trigo; 2 colheres (sopa) de açúcar; 175 g de manteiga sem sal gelada em cubinhos; 1 gema; 1 colher (sopa) de água gelada; 1 pitada de sal. Ingredientes (recheio): 675 g de maçãs (≈ 6–7 unidades) descascadas e fatiadas; 1 colher (sopa) de farinha de trigo (ou amido de milho); 50 g de açúcar mascavo; 1 colher (sopa) de manteiga; canela a gosto; raspas de limão (opcional). Leve descrição: Clássica torta de maçã com massa quebradiça caseira e recheio de maçãs levemente caramelizadas no açúcar mascavo e canela — combina a textura crocante da massa com o sabor macio e aromático das frutas. Ótima servida morna com sorvete ou chantilly.",
    "link": "https://www.kitchenaid.com.br/blog/receitas/doces/torta-de-maca-americana"
  },
  {
    "id": 7,
    "title": "Bolo de Banana com Aveia",
    "subtitle": "Tempo: ~1 h • Fácil",
    "image": "/recipeImages/f7.jpg",
    "description": "Ingredientes: 2 bananas-prata maduras; 2 ovos; 1/2 xícara (chá) de óleo; 1/2 xícara (chá) de açúcar (ou demerara); 1/2 xícara (chá) de farinha de trigo; 1/2 xícara (chá) de farinha de trigo integral; 1/2 xícara (chá) de aveia em flocos finos; 1 colher (chá) de fermento em pó; 1 colher (chá) de canela em pó; óleo ou manteiga para untar a forma. Leve descrição: Bolo úmido e rústico que aproveita a doçura natural das bananas e a textura da aveia — opção simples e nutritiva para o café da manhã ou lanche. Geralmente batido no liquidificador e assado até dourar; combina bem com uma cobertura leve de mel ou iogurte natural.",
    "link": "https://panelinha.com.br/receita/bolo-de-banana-com-aveia"
  },
  {
    "id": 8,
    "title": "Cheesecake de Frutas Vermelhas",
    "subtitle": "Tempo: ~1 h 30 min (+3 h de geladeira) • Médio",
    "image": "/recipeImages/f8.jpg",
    "description": "Ingredientes (base): 1 pacote de biscoito maisena; 100 g de manteiga/margarina derretida. Ingredientes (creme): 400–450 g de cream cheese; 1 lata de leite condensado (395 g); 1 caixa de creme de leite (200 g); 1 colher (chá) de extrato de baunilha; 2–3 ovos. Ingredientes (cobertura de frutas vermelhas): ~300–400 g de morangos; ~200–300 g de framboesas/amoras/mirtilos (ou mistura de frutas vermelhas); 100–150 g de açúcar (ajustar a gosto) e suco de 1/2 limão. Leve descrição: Cheesecake com base crocante de biscoito e recheio cremoso de cream cheese, finalizado com uma calda ou mistura fresca de frutas vermelhas — combinação de textura cremosa e acidez/frutado das berries. Ótimo servido gelado e perfeito para sobremesas de ocasiões especiais.",
    "link": "https://receitas.globo.com/ana-maria-braga/doces/cheesecake-de-frutas-vermelhas.ghtml"
  },
  {
    "id": 9,
    "title": "Crumble de Aveia com Maçã",
    "subtitle": "Tempo: 40–50 min • Fácil",
    "image": "/recipeImages/f9.jpg",
    "description": "Ingredientes: 4 maçãs (fuji ou verdes) cortadas em fatias; caldo de 1 limão; 1½ xícara (chá) de aveia em flocos finos; 100 g de manteiga gelada em cubinhos; 1 colher (sopa) de farinha de trigo; 2 colheres (sopa) de açúcar mascavo; 2 colheres (sopa) de nozes picadas (opcional); 1 colher (sopa) de uva-passa (opcional); 1 colher (sopa) de manteiga para untar o refratário. Leve descrição: Farofa crocante de aveia e manteiga cobrindo maçãs temperadas com limão (e canela se quiser) — uma sobremesa rústica, aquecida e reconfortante que fica ótima servida quente com sorvete de creme ou uma colher de chantilly.",
    "link": "https://panelinha.com.br/receita/crumble-de-aveia-com-maca"
  },
  {
    "id": 10,
    "title": "Trifle de Verão com Frutos Vermelhos",
    "subtitle": "Tempo: ~30–40 min (+2–3 h na geladeira) • Médio",
    "image": "/recipeImages/f10.jpg",
    "description": "Ingredientes: 1 kg de morangos; 500 g de mirtilos; 250 g de framboesas; 225 g de doce de morango (geleia) sem sementes; 200 g de palitos champanhe (ou pão-de-ló cortado em cubos); 400 ml de creme de leite para chantilly (nata); 450 g de cream cheese (ou queijo-creme); 200 g de açúcar de confeiteiro (açúcar em pó); 1 colher (chá) de extrato de baunilha; folhas de hortelã para decorar. Leve descrição: Sobremesa em camadas visualmente impressionante — frutas vermelhas frescas intercaladas com camadas de creme de queijo e chantilly e pedaços de palitos champanhe (ou pão-de-ló). Refrescante, colorida e perfeita para servir gelada em almoços ou festas de verão; rende várias porções dependendo do recipiente utilizado.",
    "link": "https://claradesousa.pt/receita/trifle-de-verao-com-frutos-vermelhos/"
  }
]

export default mockRecipes;
