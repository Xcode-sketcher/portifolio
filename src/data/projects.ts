export interface ProjectLink {
  label: string;
  url: string;
}

export interface TradeOff {
  title: string;
  description: string;
  verdict: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  category: "Destaque" | "Full Stack" | "Back-end";
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  coverImage: string;
  carouselImages: string[];
  methodologies: string[];
  libraries: string[];
  links: ProjectLink[];
  tradeOffs: TradeOff[];
}

export const projectsData: ProjectData[] = [
  {
    slug: "stacker",
    title: "Stacker",
    category: "Destaque",
    shortDescription: "API REST estruturada para gestão de usuários, habilidades e projetos no cenário de freelancers.",
    fullDescription: "O Stacker é uma API back-end voltada para uma plataforma de freelancers. O foco deste projeto foi priorizar a aplicação de padrões de projetos limpos e testáveis logo na raiz, separando responsabilidades e criando regras granulares para o domínio financeiro da aplicação.",
    tags: ["C#", "ASP.NET 10", "Back-end", "Arquitetura Limpa", "DDD", "CQRS"],
    coverImage: "/backend_placeholder.png",
    carouselImages: ["/backend_placeholder.png"],
    methodologies: [
      "Clean Architecture (Núcleo isolado)",
      "Domain-Driven Design (DDD) básico",
      "CQRS (Separação de comandos e consultas)",
      "Repository Pattern",
      "Soft Delete"
    ],
    libraries: [
      "MediatR",
      "FluentValidation",
      "Entity Framework Core",
      "Dapper",
      "Npgsql",
      "xUnit"
    ],
    links: [
      { label: "Ver Repositório (GitHub)", url: "https://github.com/Xcode-sketcher/Stacker" },
    ],
    tradeOffs: [
      {
        title: "Overhead do CQRS e Clean Architecture",
        description: "Separar comandos, consultas e multiplicar os mapeamentos exigiu muito mais arquivos numa API de escopo inicial menor.",
        verdict: "Valeu a pena apenas como demonstração arquitetural e base visando escopo futuro. Para um serviço minúsculo na prática mercadológica, o 'overhead' gerado por MediatR pode atrasar o deploy prático, mas garante estabilidade se o projeto escalar."
      }
    ]
  },
  {
    slug: "pra-onde-foi",
    title: "PraOndeFoi",
    category: "Full Stack",
    shortDescription: "Sistema simples para planejamento de rotas e acompanhamento de destinos.",
    fullDescription: "PraOndeFoi é uma aplicação full stack base focada em orquestrar rotas simples e gerenciar anotações de viagem mapeadas pelo usuário. Um projeto limpo dividindo responsabilidades entre uma API e uma interface visual.",
    tags: ["Angular", "TypeScript", "C#", "Full-stack"],
    coverImage: "https://raw.githubusercontent.com/Xcode-sketcher/IPraOndeFoi/main/image-1.png",
    carouselImages: [
      "https://raw.githubusercontent.com/Xcode-sketcher/IPraOndeFoi/main/image-1.png",
      "https://raw.githubusercontent.com/Xcode-sketcher/IPraOndeFoi/main/image.png",
      "https://raw.githubusercontent.com/Xcode-sketcher/IPraOndeFoi/main/image-3.png"
    ],
    methodologies: [
      "Interface Client-side Rendering (Angular SPA)",
      "Arquitetura de API RESTful",
      "Relacionamento de Banco de Dados Padrão"
    ],
    libraries: [
      "Angular & TypeScript",
      "RxJS",
      ".NET Core",
      "Entity Framework"
    ],
    links: [
      { label: "Front-end (GitHub)", url: "https://github.com/Xcode-sketcher/IPraOndeFoi" },
      { label: "Back-end (GitHub)", url: "https://github.com/Xcode-sketcher/PraOndeFoi" },
    ],
    tradeOffs: [
      {
        title: "Separação Física Total (Angular x C#)",
        description: "Separar os projetos desde do dia um acarreta em configurar CORS e debugar em paralelo.",
        verdict: "Totalmente válido, tornou a camada de apresentação neutra. Se a interface evoluir ou precisar rodar num sistema isolado, a API já está desacoplada e funcional."
      }
    ]
  },
  {
    slug: "pets-tudo",
    title: "PetsTudo E-commerce & Adoção",
    category: "Back-end",
    shortDescription: "API em .NET 10 para gerenciamento de e-commerce e adoção pet.",
    fullDescription: "Desenvolvida como objeto de estudo, o PetsTudo adota o SOLID e arquitetura em camadas para isolar domínios de carrinho de compra, autenticação JWT, e cadastro de animais visando entender o fluxo de permissões baseadas no usuário administrativo.",
    tags: ["C#", ".NET 10", "E-commerce", "Estudo"],
    coverImage: "/backend_placeholder.png",
    carouselImages: ["/backend_placeholder.png"],
    methodologies: [
      "Arquitetura em Camadas (N-Tier)",
      "Role-based Access Control (RBAC)",
      "Princípios SOLID",
      "Processamento de Transações (Carrinho Volátil)"
    ],
    libraries: [
      "Entity Framework Core",
      "JWT e BCrypt",
      "Swagger/OpenAPI"
    ],
    links: [
      { label: "Analisar Repositório", url: "https://github.com/Xcode-sketcher/PetsTudo" }
    ],
    tradeOffs: [
      {
        title: "Carrinho em Estado Volátil (RAM)",
        description: "Decidi manter o carrinho de compras dinâmico apenas em memória, sem persistência no banco.",
        verdict: "Foi uma escolha de escopo para focar nos testes da integração do Token JWT com o sistema de roles, deixando a complexidade do carrinho um passo para o futuro caso aplicasse Redis."
      }
    ]
  },
  {
    slug: "listae-api",
    title: "Listae Task Manager",
    category: "Back-end",
    shortDescription: "API REST concisa para gerenciamento pessoal de tarefas usando EF Core e autenticação.",
    fullDescription: "Projeto voltado a consolidar o fluxo padrão do desenvolvimento web: uma API de tarefas que cobre a autorização e CRUD fundamental, validando JWT Identity e uso de Database Providers com EF Core.",
    tags: ["C#", ".NET 9", "CRUD", "JWT"],
    coverImage: "/backend_placeholder.png",
    carouselImages: ["/backend_placeholder.png"],
    methodologies: [
      "Endpoints CRUD padronizados",
      "Inversão de Controle e Injeção de Dependência",
      "Data Provider Flexibility"
    ],
    libraries: [
      "ASP.NET Core",
      "EF Core Migrations"
    ],
    links: [
      { label: "Ver Código Fonte", url: "https://github.com/Xcode-sketcher/ListaeAPI" }
    ],
    tradeOffs: [
      {
        title: "Modelagem Simples vs. Arquiteturas Complexas",
        description: "Optei por evitar arquiteturas avançadas como Clean/MediatR e estudar estritamente Controller > Service > Repository.",
        verdict: "Decisão didática e correta. Para um todo-list API de estudos, implementar um CRUD enxuto ajudou a solidificar bem a base da responsabilidade única."
      }
    ]
  },
  {
    slug: "desafio-back-end-transacoes",
    title: "Sistema de Transações Financeiras",
    category: "Back-end",
    shortDescription: "Desafio técnico implementando recepção de transações e estatísticas sub-minuto.",
    fullDescription: "Este projeto foi a minha implementação em C# como prova prática para um desafio técnico focado em capturas assíncronas de fluxos financeiros, calculando métricas dentro de um intervalo fixo baseado nos carimbos temporais de entrada.",
    tags: ["C#", ".NET 9", "Finance", "Moq"],
    coverImage: "/backend_placeholder.png",
    carouselImages: ["/backend_placeholder.png"],
    methodologies: [
      "Mocking Framework",
      "Teste de Integração (WebApplicationFactory)"
    ],
    libraries: [
      ".NET 9 SDK",
      "xUnit",
      "Moq"
    ],
    links: [
      { label: "Explorar Repositório", url: "https://github.com/Xcode-sketcher/Desafio-Back-End" }
    ],
    tradeOffs: [
      {
        title: "Testes de Integração nativos VS Postman",
        description: "Estruturar uma API e testes robustos para testar a capacidade de lidar com transações financeiras em tempo real e extrair estatísticas.",
        verdict: "A escolha de usar testes de integração nativos em C# foi crucial para garantir a integridade dos dados financeiros. Ao simular requisições HTTP diretamente no ambiente de teste, consegui validar o comportamento da API de forma muito mais coesa."
      }
    ]
  },
  {
    slug: "contactando",
    title: "Contactando",
    category: "Full Stack",
    shortDescription: "Aplicação de estudos para gerenciar contatos e usuários no formato multi-inquilino.",
    fullDescription: "Buscando entender o ecossistema MVC clássico do .NET, centralizei a gestão de multi-tenant em um projeto único para testar a funcionalidade de Identity e dados isolados usando Global Queries no banco.",
    tags: ["Blazor", "MVC", "C#", "Full-stack"],
    coverImage: "/Contactando.png",
    carouselImages: ["/Contactando.png"],
    methodologies: [
      "Arquitetura MVC Tradicional / Razor",
      "Tenant-based Architecture",
      "Comunicação Realtime Base"
    ],
    libraries: [
      ".NET 10",
      "Entity Framework Core",
      "ASP.NET Core Identity",
      "SignalR",
      "AutoMapper / CsvHelper"
    ],
    links: [
      { label: "Repositório Principal", url: "https://github.com/Xcode-sketcher/Contactando" },
    ],
    tradeOffs: [
      {
        title: "Multi-Tenant via Global Query Filter em Banco Único",
        description: "Centralizar múltiplos clientes num só banco em vez de um banco para cada, exigindo atenção dobrada em lógicas restritivas.",
        verdict: "Decisão acertada pro escopo de custo e infraestrutura. Gerenciar uma instância só de PostgreSQL facilitou enormemente o deploy lúdico."
      }
    ]
  },
  {
    slug: "rpg-combat-engine",
    title: "RPG-Combat-Engine",
    category: "Back-end",
    shortDescription: "Motor base para processar combates lógicos sob turnos tradicionais.",
    fullDescription: "Experimento logico focado estritamente na mecânica abstrata atuarial de status básicos em combates e de sistemas lúdivos sem depender de gráficos.",
    tags: ["C#", ".NET Core", "Back-end", "OOP"],
    coverImage: "/backend_placeholder.png",
    carouselImages: ["/backend_placeholder.png"],
    methodologies: [
      "Controle de Estados em Batalha",
      "Sistema Base em Turnos",
      "Polimorfismo e Design Patterns Básicos"
    ],
    libraries: [
      "C# Native",
      "xUnit"
    ],
    links: [
      { label: "Ver Código Fonte", url: "https://github.com/Xcode-sketcher/RPG-Combat-Engine" }
    ],
    tradeOffs: [
      {
        title: "Receber e trabalhar com notações e condições de combate",
        description: "A API recebe e processa notações e condições de combate, permitindo que os jogadores definam suas ações e estratégias de forma clara e objetiva.",
        verdict: "Ajudou a entender como lidar com notações e condições de combate, e como simular cenários complexos em um ambiente controlado. Simulando lançamentos de dados de diferentes faces em notação propria como 2d6+2."
      }
    ]
  },
  {
    slug: "papertrader",
    title: "PaperTrader",
    category: "Back-end",
    shortDescription: "Plataforma focada na simulação isolada e segura de compras financeiras (papertrade).",
    fullDescription: "Pilar de Back-end com atenção prototípica em prevenção de concorrência e race condition, desenvolvido como objeto de estudos sobre travas (locks) no banco relacional.",
    tags: ["C#", ".NET Core", "Back-end", "Testes Concorrentes"],
    coverImage: "/backend_placeholder.png",
    carouselImages: ["/backend_placeholder.png"],
    methodologies: [
      "Prevenção Básica contra Race Conditions",
      "Concorrência Pessimista no EF Core"
    ],
    libraries: [
      "C#",
      "Entity Framework Core"
    ],
    links: [
      { label: "Analisar Repositório", url: "https://github.com/Xcode-sketcher/PaperTrader" }
    ],
    tradeOffs: [
      {
        title: "Lidar com imprevisibilidade",
        description: "O mercado financeiro é imprevisível, e lidar com isso em código é um desafio. Portanto, nesta API cada transação simula uma variação aleatória de até 5% no valor do ativo. além de condições de padrão, onde após 5 quedas há uma chance de 60% da próxima ser uma alta.",
        verdict: "Ajudou a entender como lidar com imprevisibilidade em código, e como simular cenários complexos em um ambiente controlado."
      }
    ]
  },
  {
    slug: "proc-estatistica",
    title: "ProcEstatistica",
    category: "Back-end",
    shortDescription: "Aproximação experimental para algoritmos numéricos usando C#.",
    fullDescription: "Tentativa de explorar o peso da computação matemática com C# Tasks visando entender comportamentos de memória contra processamentos sem fim.",
    tags: ["C#", ".NET Core", "Algoritmos", "Tasks"],
    coverImage: "/backend_placeholder.png",
    carouselImages: ["/backend_placeholder.png"],
    methodologies: [
      "Performance Assessment",
      "Uso de Genericos com Regras"
    ],
    libraries: [
      "C# System.Threading.Tasks",
      "C# Native Array Math"
    ],
    links: [
      { label: "Ver Source", url: "https://github.com/Xcode-sketcher/ProcEstatistica" }
    ],
    tradeOffs: [
      {
        title: "C# em vez de Python para Scripts Algorítmicos",
        description: "Ignorar o ecossistema pronto de Data Science do Python em prol de dominar funções nativas sob Threading com tipagem forte do .NET.",
        verdict: "Embora improdutivo pela falta da biblioteca 'Pandas', fortaleceu o core do entendimento sobre como linguagens gerenciam a fila e Garbage Collection."
      }
    ]
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(project => project.slug === slug);
}
