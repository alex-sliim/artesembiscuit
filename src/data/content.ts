const topoCasamento = "/images/produto-topo-casamento.jpg";
const lembrancinhas = "/images/produto-lembrancinhas.jpg";
const caneca = "/images/produto-caneca.jpg";
const boneca = "/images/produto-boneca.jpg";
const maternidade = "/images/produto-maternidade.jpg";
const familia = "/images/produto-familia.jpg";

export interface Product {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  message: string;
  rotate: string;
}

export const products: Product[] = [
  {
    id: "topo-casamento",
    name: "Topo de Bolo de Casamento",
    tag: "O mais pedido",
    description:
      "Noivinhos modelados com as características do casal — penteado, traje e até o buquê. Um detalhe que eterniza o grande dia.",
    image: topoCasamento,
    message:
      "Olá! Amei os topos de bolo de casamento no site da Artes em Biscuitt e quero fazer um orçamento!",
    rotate: "-rotate-2",
  },
  {
    id: "lembrancinhas",
    name: "Lembrancinhas de Festa",
    tag: "Sucesso garantido",
    description:
      "Mimos temáticos para aniversários, chás de bebê e batizados. Seus convidados levam para casa muito mais do que uma lembrança.",
    image: lembrancinhas,
    message:
      "Olá! Quero orçar lembrancinhas personalizadas em biscuit para a minha festa. Pode me ajudar?",
    rotate: "rotate-1",
  },
  {
    id: "canecas",
    name: "Canecas Decoradas",
    tag: "Presente perfeito",
    description:
      "Canecas com flores, folhas e detalhes em porcelana fria aplicados à mão. O presente artesanal que aquece o coração.",
    image: caneca,
    message:
      "Olá! Vi as canecas decoradas em biscuit no site e quero encomendar uma de presente. Qual o prazo?",
    rotate: "rotate-2",
  },
  {
    id: "bonecas",
    name: "Bonecas Encantadoras",
    tag: "Feitas à mão",
    description:
      "Personagens decorativas cheias de personalidade — cada traço, cachinho e florzinha modelados um a um, com muito carinho.",
    image: boneca,
    message:
      "Olá! Me apaixonei pelas bonecas em biscuit do site. Quero uma personalizada para decorar meu cantinho!",
    rotate: "rotate-1",
  },
  {
    id: "maternidade",
    name: "Porta Maternidade",
    tag: "Chegada do bebê",
    description:
      "Guirlandas delicadas para anunciar o momento mais esperado da família, com flores, laços e o nomezinho do bebê.",
    image: maternidade,
    message:
      "Olá! Estou grávida (ou vou presentear uma mamãe) e quero um enfeite de porta maternidade. Envio mais detalhes?",
    rotate: "-rotate-1",
  },
  {
    id: "familia",
    name: "Miniatura de Família",
    tag: "Só a sua família",
    description:
      "Sua família em miniatura: cada pessoa (e o pet!) representada em uma peça única para decorar e emocionar.",
    image: familia,
    message:
      "Olá! Quero uma miniatura da minha família em biscuit para presentear. Como funcionam as personalizações?",
    rotate: "rotate-2",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  time: string;
  piece: string;
  text: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ana Beatriz Souza",
    avatar:
      "https://images.pexels.com/photos/8957650/pexels-photo-8957650.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=160&w=160",
    time: "14:32",
    piece: "Topo de bolo de casamento",
    text: "O topo ficou PERFEITO! Idêntico a nós dois — até o buquê tinha as flores do meu casamento. Chorei quando abri a caixa.",
    stars: 5,
  },
  {
    id: "t2",
    name: "Juliana Costa",
    avatar:
      "https://images.pexels.com/photos/34430248/pexels-photo-34430248.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=160&w=160",
    time: "09:15",
    piece: "Lembrancinhas de aniversário",
    text: "Encomendei 40 lembrancinhas para o aniversário da minha filha e foi um sucesso! Todo mundo perguntando onde eu tinha feito.",
    stars: 5,
  },
  {
    id: "t3",
    name: "Mariana Silva",
    avatar:
      "https://images.pexels.com/photos/20769917/pexels-photo-20769917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=160&w=160",
    time: "18:47",
    piece: "Porta maternidade",
    text: "A guirlanda da maternidade ficou a coisa mais linda! Delicada, caprichada e chegou antes do prazo combinado.",
    stars: 5,
  },
  {
    id: "t4",
    name: "Rodrigo Mendes",
    avatar:
      "https://images.pexels.com/photos/2124943/pexels-photo-2124943.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=160&w=160",
    time: "20:03",
    piece: "Miniatura de família",
    text: "Presenteei minha esposa com a nossa família em miniatura e ela amou. A qualidade impressiona, cada detalhezinho no lugar.",
    stars: 5,
  },
  {
    id: "t5",
    name: "Camila Rodrigues",
    avatar:
      "https://images.pexels.com/photos/40402940/pexels-photo-40402940.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=160&w=160",
    time: "11:26",
    piece: "Caneca decorada",
    text: "A caneca virou a minha favorita! As florzinhas em biscuit são perfeitas. Já vou pedir mais duas para dar de presente.",
    stars: 5,
  },
  {
    id: "t6",
    name: "Patrícia Almeida",
    avatar:
      "https://images.pexels.com/photos/8173485/pexels-photo-8173485.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=160&w=160",
    time: "16:58",
    piece: "Boneca decorativa",
    text: "Atendimento incrível do início ao fim. Me mandou fotos de cada etapa da produção. Dá para sentir o amor em cada peça!",
    stars: 5,
  },
];

export const heroAvatars = [
  "https://images.pexels.com/photos/8957650/pexels-photo-8957650.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=96&w=96",
  "https://images.pexels.com/photos/34430248/pexels-photo-34430248.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=96&w=96",
  "https://images.pexels.com/photos/2124943/pexels-photo-2124943.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=96&w=96",
  "https://images.pexels.com/photos/20769917/pexels-photo-20769917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=96&w=96",
];

export const faqs = [
  {
    q: "Quanto tempo leva para minha peça ficar pronta?",
    a: "Depende do tamanho e da complexidade: peças únicas levam em média de 7 a 15 dias úteis, e encomendas de lembrancinhas em quantidade podem levar até 30 dias. Recomendamos fazer o pedido com antecedência — quanto antes, mais detalhes conseguimos caprichar!",
  },
  {
    q: "Vocês enviam para outras cidades?",
    a: "Sim! Preparamos cada peça com embalagem reforçada e muita proteção para chegar inteirinha até você. Também é possível combinar retirada pessoalmente em nossa região. Chame no WhatsApp para combinarmos a melhor forma de entrega.",
  },
  {
    q: "Posso personalizar a peça do meu jeito?",
    a: "Com certeza! Cores, roupinhas, penteados, acessórios, tema da festa, nomes e datas — tudo é feito sob medida conforme suas referências. É essa a mágica do biscuit: nenhuma peça é igual à outra.",
  },
  {
    q: "Como faço para receber um orçamento?",
    a: "É simples: clique em qualquer botão do site e você será direcionada(o) para o nosso WhatsApp. Conte sua ideia, envie referências se tiver, e respondemos rapidinho com todas as informações!",
  },
];
