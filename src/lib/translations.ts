export type Translations = {
  nav: {
    forBusinesses: string;
    howItWorks: string;
    forPublishers: string;
    pricing: string;
    articles: string;
    langToggle: string;
    login: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    description: string;
    steps: string[];
    startCampaign: string;
    joinPublisher: string;
    freePosts: string;
    campaignDistribution: string;
    postsDelivered: string;
    businesses: string;
    publishers: string;
    pricePerPost: string;
    platforms: {
      facebook: string;
      instagram: string;
      tiktok: string;
      twitter: string;
      linkedin: string;
      whatsapp: string;
    };
  };
  forBusinesses: {
    badge: string;
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
    cta: string;
  };
  brandNetwork: {
    titleLine1: string;
    titleLine2: string;
    description: string;
    promoteLabel: string;
    promoteItems: string[];
    cta: string;
    whyLabel: string;
    whyItems: string[];
  };
  forPublishers: {
    wallet: string;
    balance: string;
    availableBalance: string;
    pendingEarnings: string;
    pendingAmount: string;
    totalEarned: string;
    totalAmount: string;
    minWithdrawal: string;
    minAmount: string;
    withdraw: string;
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    flow: string[];
    cta: string;
  };
  publisherLevels: {
    title: string;
    top: string;
    levels: { name: string; price: string; desc: string }[];
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    distributionCost: string;
    price: string;
    perPost: string;
    exampleCalc: string;
    exampleFormula: string;
    exampleTotal: string;
    articleCreation: string;
    articles: { length: string; name: string; price: string; desc: string }[];
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  freeTrial: {
    title: string;
    newBusinesses: string;
    freePosts: string;
    description: string;
    cta: string;
  };
  finalCta: {
    title: string;
    description: string;
    startCampaign: string;
    joinPublisher: string;
  };
  footer: {
    tagline: string;
    links: { label: string; href: string }[];
    copyright: string;
  };
  flowDiagram: {
    steps: string[];
  };
};

export const translations: Record<"en" | "ar", Translations> = {
  en: {
    nav: {
      forBusinesses: "For Businesses",
      howItWorks: "How It Works",
      forPublishers: "For Publishers",
      pricing: "Pricing",
      articles: "Articles",
      langToggle: "العربية",
      login: "Login",
      getStarted: "Get Started",
    },
    hero: {
      badge: "Human-Powered Advertising Network",
      titleLine1: "People Are Your",
      titleLine2: "New Media",
      subtitle: "Turn real people and social networks into your advertising power.",
      description:
        "POSTATO is a human-powered advertising and content distribution platform that helps businesses promote their brands, products, and services through real people and social networks.",
      steps: [
        "Create a campaign.",
        "Choose your audience.",
        "Distribute your content.",
        "Reach more people.",
      ],
      startCampaign: "Start Your Campaign",
      joinPublisher: "Join as a Publisher",
      freePosts: "10 Free Posts",
      campaignDistribution: "Campaign Distribution",
      postsDelivered: "Posts delivered this week",
      businesses: "Businesses",
      publishers: "Publishers",
      pricePerPost: "AED 0.60 / post",
      platforms: {
        facebook: "Facebook",
        instagram: "Instagram",
        tiktok: "TikTok",
        twitter: "Twitter/X",
        linkedin: "LinkedIn",
        whatsapp: "WhatsApp",
      },
    },
    forBusinesses: {
      badge: "For Businesses",
      title: "Create. Distribute. Reach. Grow.",
      subtitle:
        "Launch your campaign in minutes and start reaching people through real social networks.",
      steps: [
        {
          title: "Create Your Campaign",
          desc: "Add your company details and choose what you want to promote.",
        },
        {
          title: "Add Your Links",
          desc: "Add your website, product page, WhatsApp, Facebook, Instagram, TikTok, or Google Maps.",
        },
        {
          title: "Create Content",
          desc: "Use your existing content or let POSTATO create a professional article for your campaign.",
        },
        {
          title: "Choose Your Target",
          desc: "Select your country, city, Emirate, or target area.",
        },
        {
          title: "Choose Your Reach",
          desc: "Select how many posts you want.",
        },
        {
          title: "Launch Your Campaign",
          desc: "Pay for your campaign and let POSTATO distribute your content through its publisher network.",
        },
        {
          title: "Track Your Results",
          desc: "Monitor campaign progress, completed posts, publishers, clicks, article views, and traffic.",
        },
      ],
      cta: "Start Your Campaign",
    },
    brandNetwork: {
      titleLine1: "Your Brand. Their",
      titleLine2: "Network",
      description:
        "Your customers are already connected to hundreds and thousands of people. POSTATO helps you use the power of social networks to distribute your content and reach more potential customers.",
      promoteLabel: "PROMOTE:",
      promoteItems: [
        "Your Website",
        "Your Services",
        "Your Social Media",
        "Your Google Maps Location",
        "Your Products",
        "Your Offers",
        "Your WhatsApp",
        "Your Articles",
      ],
      cta: "Start Your Campaign",
      whyLabel: "WHY POSTATO?",
      whyItems: [
        "Reach more people",
        "Target specific locations",
        "Promote your business",
        "Increase brand visibility",
        "Distribute your content",
        "Drive traffic to your website",
        "Generate potential leads",
        "Track your campaign",
      ],
    },
    forPublishers: {
      wallet: "Publisher Wallet",
      balance: "AED 25.50",
      availableBalance: "Available Balance",
      pendingEarnings: "Pending Earnings",
      pendingAmount: "AED 3.00",
      totalEarned: "Total Earned",
      totalAmount: "AED 75.50",
      minWithdrawal: "Minimum Withdrawal",
      minAmount: "AED 50",
      withdraw: "Withdraw Earnings",
      badge: "For Publishers",
      titleLine1: "Your Network. Your",
      titleLine2: "Earnings",
      description:
        "You don't need to be an influencer. If you have real and active social media accounts, you can complete tasks for businesses and earn money for approved posts.",
      flow: ["Join", "Get Tasks", "Post", "Submit", "Get Paid"],
      cta: "Join POSTATO Team",
    },
    publisherLevels: {
      title: "Publisher Levels",
      top: "TOP",
      levels: [
        {
          name: "Basic Publisher",
          price: "AED 0.20 / Approved Post",
          desc: "For real and active accounts with a basic social network.",
        },
        {
          name: "Trusted Publisher",
          price: "AED 0.25 / Approved Post",
          desc: "For publishers with good engagement and reliable task performance.",
        },
        {
          name: "Premium Publisher",
          price: "AED 0.30 / Approved Post",
          desc: "For publishers with larger networks, multiple active platforms, and strong engagement.",
        },
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "Transparent Pricing",
      subtitle: "AED 0.60 per post per link. Scale as you grow.",
      distributionCost: "DISTRIBUTION COST",
      price: "AED 0.60",
      perPost: "per post / per link",
      exampleCalc: "Example calculation",
      exampleFormula: "3 Links × 100 Posts × AED 0.60",
      exampleTotal: "Total: AED 180",
      articleCreation: "Article Creation",
      articles: [
        {
          length: "500–700 words",
          name: "Quick Article",
          price: "AED 49",
          desc: "Perfect for introducing your business or service.",
        },
        {
          length: "800–1,200 words",
          name: "Professional Article",
          price: "AED 99",
          desc: "Professional and structured content.",
        },
        {
          length: "1,500–2,000 words",
          name: "SEO Article",
          price: "AED 199",
          desc: "Includes keyword research and SEO optimization.",
        },
        {
          length: "Full package",
          name: "Premium Content",
          price: "AED 349",
          desc: "Article + SEO + images + CTA + internal links + content optimization.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What is POSTATO?",
          a: "POSTATO is a human-powered advertising and content distribution platform that helps businesses promote their brands, products, and services through real people and social networks.",
        },
        {
          q: "Do I need to be an influencer to become a publisher?",
          a: "No. If you have real and active social media accounts, you can complete tasks for businesses and earn money for approved posts.",
        },
        {
          q: "How much can publishers earn?",
          a: "Publishers earn between AED 0.20 and AED 0.30 per approved post, depending on their publisher level and engagement.",
        },
        {
          q: "How much does a business campaign cost?",
          a: "Distribution costs AED 0.60 per post per link. Total cost depends on how many links and posts you choose for your campaign.",
        },
        {
          q: "Can I target a specific location?",
          a: "Yes. You can select your country, city, Emirate, or a specific target area when creating your campaign.",
        },
        {
          q: "Does POSTATO offer free trials?",
          a: "Yes. New businesses get 10 free posts to try POSTATO before launching a paid campaign.",
        },
      ],
    },
    freeTrial: {
      title: "Try POSTATO for Free.",
      newBusinesses: "New businesses get",
      freePosts: "10 Free Posts",
      description:
        "Create your first campaign and see how POSTATO works before launching a paid campaign.",
      cta: "Start My Free Trial",
    },
    finalCta: {
      title: "Your Brand. Their Network. Your Growth",
      description:
        "Stop relying on advertising alone. Create your campaign and let real people help your business reach more people.",
      startCampaign: "Start Your Campaign",
      joinPublisher: "Join as a Publisher",
    },
    footer: {
      tagline: "The Human-Powered Advertising Network.",
      links: [
        { label: "Home", href: "#" },
        { label: "For Businesses", href: "#for-businesses" },
        { label: "How It Works", href: "#for-businesses" },
        { label: "For Publishers", href: "#for-publishers" },
        { label: "Pricing", href: "#pricing" },
        { label: "Login", href: "#login" },
      ],
      copyright: "© 2026 POSTATO. All rights reserved.",
    },
    flowDiagram: {
      steps: ["Social Post", "Article", "Website / WhatsApp / Maps", "Potential Customer"],
    },
  },
  ar: {
    nav: {
      forBusinesses: "للشركات",
      howItWorks: "كيف يعمل",
      forPublishers: "للناشرين",
      pricing: "الأسعار",
      articles: "المقالات",
      langToggle: "English",
      login: "تسجيل الدخول",
      getStarted: "ابدأ الآن",
    },
    hero: {
      badge: "شبكة إعلانية يقودها البشر",
      titleLine1: "الناس هم",
      titleLine2: "إعلامك الجديد",
      subtitle: "حوّل الأشخاص الحقيقيين وشبكات التواصل الاجتماعي إلى قوة إعلانية لك.",
      description:
        "بوستاتو هي منصة إعلانية وتوزيع محتوى يقودها البشر، تساعد الشركات على الترويج لعلاماتها التجارية ومنتجاتها وخدماتها من خلال أشخاص حقيقيين وشبكات التواصل الاجتماعي.",
      steps: ["أنشئ حملتك.", "اختر جمهورك.", "وزّع محتواك.", "صِل إلى المزيد من الناس."],
      startCampaign: "ابدأ حملتك",
      joinPublisher: "انضم كناشر",
      freePosts: "10 منشورات مجانية",
      campaignDistribution: "توزيع الحملة",
      postsDelivered: "المنشورات المُنجزة هذا الأسبوع",
      businesses: "شركة",
      publishers: "ناشر",
      pricePerPost: "0.60 درهم / منشور",
      platforms: {
        facebook: "فيسبوك",
        instagram: "إنستغرام",
        tiktok: "تيك توك",
        twitter: "تويتر/إكس",
        linkedin: "لينكدإن",
        whatsapp: "واتساب",
      },
    },
    forBusinesses: {
      badge: "للشركات",
      title: "أنشئ. وزّع. صِل. انمُ.",
      subtitle: "أطلق حملتك خلال دقائق وابدأ الوصول إلى الناس عبر شبكات تواصل اجتماعي حقيقية.",
      steps: [
        {
          title: "أنشئ حملتك",
          desc: "أضف بيانات شركتك واختر ما تريد الترويج له.",
        },
        {
          title: "أضف روابطك",
          desc: "أضف موقعك الإلكتروني، صفحة المنتج، واتساب، فيسبوك، إنستغرام، تيك توك، أو خرائط جوجل.",
        },
        {
          title: "أنشئ المحتوى",
          desc: "استخدم محتواك الحالي أو دع بوستاتو ينشئ مقالاً احترافياً لحملتك.",
        },
        {
          title: "حدد هدفك",
          desc: "اختر دولتك، مدينتك، الإمارة، أو المنطقة المستهدفة.",
        },
        {
          title: "حدد مدى انتشارك",
          desc: "اختر عدد المنشورات التي تريدها.",
        },
        {
          title: "أطلق حملتك",
          desc: "ادفع لحملتك ودع بوستاتو يوزّع محتواك عبر شبكة ناشريه.",
        },
        {
          title: "تابع نتائجك",
          desc: "راقب تقدم الحملة، المنشورات المكتملة، الناشرين، النقرات، مشاهدات المقالات، والزيارات.",
        },
      ],
      cta: "ابدأ حملتك",
    },
    brandNetwork: {
      titleLine1: "علامتك التجارية.",
      titleLine2: "شبكتهم",
      description:
        "عملاؤك متصلون بالفعل بمئات وآلاف الأشخاص. تساعدك بوستاتو على استخدام قوة شبكات التواصل الاجتماعي لتوزيع محتواك والوصول إلى مزيد من العملاء المحتملين.",
      promoteLabel: "روّج لـ:",
      promoteItems: [
        "موقعك الإلكتروني",
        "خدماتك",
        "وسائل التواصل الاجتماعي الخاصة بك",
        "موقعك على خرائط جوجل",
        "منتجاتك",
        "عروضك",
        "واتساب الخاص بك",
        "مقالاتك",
      ],
      cta: "ابدأ حملتك",
      whyLabel: "لماذا بوستاتو؟",
      whyItems: [
        "الوصول إلى مزيد من الناس",
        "استهداف مواقع محددة",
        "الترويج لعملك",
        "زيادة ظهور علامتك التجارية",
        "توزيع محتواك",
        "زيادة الزيارات إلى موقعك",
        "توليد عملاء محتملين",
        "تتبع حملتك",
      ],
    },
    forPublishers: {
      wallet: "محفظة الناشر",
      balance: "25.50 درهم",
      availableBalance: "الرصيد المتاح",
      pendingEarnings: "الأرباح المعلّقة",
      pendingAmount: "3.00 درهم",
      totalEarned: "إجمالي الأرباح",
      totalAmount: "75.50 درهم",
      minWithdrawal: "الحد الأدنى للسحب",
      minAmount: "50 درهم",
      withdraw: "سحب الأرباح",
      badge: "للناشرين",
      titleLine1: "شبكتك.",
      titleLine2: "أرباحك",
      description:
        "لست بحاجة لأن تكون مؤثراً. إذا كانت لديك حسابات حقيقية ونشطة على وسائل التواصل الاجتماعي، يمكنك إنجاز مهام للشركات وكسب المال مقابل المنشورات المعتمدة.",
      flow: ["انضم", "احصل على المهام", "انشر", "أرسل", "احصل على أموالك"],
      cta: "انضم إلى فريق بوستاتو",
    },
    publisherLevels: {
      title: "مستويات الناشرين",
      top: "الأفضل",
      levels: [
        {
          name: "ناشر أساسي",
          price: "0.20 درهم / منشور معتمد",
          desc: "للحسابات الحقيقية والنشطة ذات شبكة تواصل اجتماعي أساسية.",
        },
        {
          name: "ناشر موثوق",
          price: "0.25 درهم / منشور معتمد",
          desc: "للناشرين ذوي التفاعل الجيد والأداء الموثوق في المهام.",
        },
        {
          name: "ناشر مميز",
          price: "0.30 درهم / منشور معتمد",
          desc: "للناشرين ذوي الشبكات الأكبر ومنصات نشطة متعددة وتفاعل قوي.",
        },
      ],
    },
    pricing: {
      badge: "الأسعار",
      title: "أسعار شفافة",
      subtitle: "0.60 درهم لكل منشور لكل رابط. توسّع مع نمو عملك.",
      distributionCost: "تكلفة التوزيع",
      price: "0.60 درهم",
      perPost: "لكل منشور / لكل رابط",
      exampleCalc: "مثال للحساب",
      exampleFormula: "3 روابط × 100 منشور × 0.60 درهم",
      exampleTotal: "الإجمالي: 180 درهم",
      articleCreation: "إنشاء المقالات",
      articles: [
        {
          length: "500-700 كلمة",
          name: "مقال سريع",
          price: "49 درهم",
          desc: "مثالي للتعريف بعملك أو خدمتك.",
        },
        {
          length: "800-1200 كلمة",
          name: "مقال احترافي",
          price: "99 درهم",
          desc: "محتوى احترافي ومنظّم.",
        },
        {
          length: "1500-2000 كلمة",
          name: "مقال محسّن لمحركات البحث",
          price: "199 درهم",
          desc: "يشمل بحث الكلمات المفتاحية وتحسين محركات البحث.",
        },
        {
          length: "باقة كاملة",
          name: "محتوى مميز",
          price: "349 درهم",
          desc: "مقال + تحسين محركات بحث + صور + دعوة لاتخاذ إجراء + روابط داخلية + تحسين المحتوى.",
        },
      ],
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          q: "ما هي بوستاتو؟",
          a: "بوستاتو هي منصة إعلانية وتوزيع محتوى يقودها البشر، تساعد الشركات على الترويج لعلاماتها التجارية ومنتجاتها وخدماتها من خلال أشخاص حقيقيين وشبكات التواصل الاجتماعي.",
        },
        {
          q: "هل يجب أن أكون مؤثراً لأصبح ناشراً؟",
          a: "لا. إذا كانت لديك حسابات حقيقية ونشطة على وسائل التواصل الاجتماعي، يمكنك إنجاز مهام للشركات وكسب المال مقابل المنشورات المعتمدة.",
        },
        {
          q: "كم يمكن أن يكسب الناشرون؟",
          a: "يكسب الناشرون بين 0.20 و0.30 درهم لكل منشور معتمد، حسب مستوى الناشر ومدى تفاعله.",
        },
        {
          q: "كم تكلف حملة الأعمال؟",
          a: "تبلغ تكلفة التوزيع 0.60 درهم لكل منشور لكل رابط. تعتمد التكلفة الإجمالية على عدد الروابط والمنشورات التي تختارها لحملتك.",
        },
        {
          q: "هل يمكنني استهداف موقع معين؟",
          a: "نعم. يمكنك اختيار دولتك، مدينتك، الإمارة، أو منطقة مستهدفة محددة عند إنشاء حملتك.",
        },
        {
          q: "هل تقدم بوستاتو تجارب مجانية؟",
          a: "نعم. تحصل الشركات الجديدة على 10 منشورات مجانية لتجربة بوستاتو قبل إطلاق حملة مدفوعة.",
        },
      ],
    },
    freeTrial: {
      title: "جرّب بوستاتو مجاناً.",
      newBusinesses: "تحصل الشركات الجديدة على",
      freePosts: "10 منشورات مجانية",
      description: "أنشئ حملتك الأولى وشاهد كيف تعمل بوستاتو قبل إطلاق حملة مدفوعة.",
      cta: "ابدأ تجربتي المجانية",
    },
    finalCta: {
      title: "علامتك التجارية. شبكتهم. نموّك",
      description:
        "توقف عن الاعتماد على الإعلانات وحدها. أنشئ حملتك ودع أشخاصاً حقيقيين يساعدون عملك على الوصول إلى المزيد من الناس.",
      startCampaign: "ابدأ حملتك",
      joinPublisher: "انضم كناشر",
    },
    footer: {
      tagline: "الشبكة الإعلانية التي يقودها البشر.",
      links: [
        { label: "الرئيسية", href: "#" },
        { label: "للشركات", href: "#for-businesses" },
        { label: "كيف يعمل", href: "#for-businesses" },
        { label: "للناشرين", href: "#for-publishers" },
        { label: "الأسعار", href: "#pricing" },
        { label: "تسجيل الدخول", href: "#login" },
      ],
      copyright: "© 2026 بوستاتو. جميع الحقوق محفوظة.",
    },
    flowDiagram: {
      steps: ["منشور اجتماعي", "مقال", "الموقع / واتساب / الخرائط", "عميل محتمل"],
    },
  },
};
