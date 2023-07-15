interface IContents {
  // Nav
  about: string;
  contacts: string;
  makeSweet: string;
  // Hero
  mainHeader: string;
  heroTagline: string;
  slogan: string;
  heroSelectors: {
    birthdayCake: string;
    cakesAndPies: string;
    cupCakes: string;
    gingerBread: string;
  };
  // Info
  infoHeader: string;
  ingredients: string;
  ingredientsText: {
    h1: string;
    p1: string;
    h2: string;
    p2: string;
  };
  design: string;
  designText: {
    h1: string;
    p1: string;
    h2: string;
    p2: string;
  };
  order: string;
  orderText: {
    h1: string;
    p1: string;
    h2: string;
    p2: string;
  };
  important: string;
  importantText: {
    h1: string;
    p1: string;
    p2: string;
  };
  // Footer
  footerContacts: {
    address: string;
    phone: string;
    email: string;
  };
  footerOther: {
    contacts: string;
    question: string;
    callBack: string;
    follow: string;
    menu: string;
    cart: string[];
    rights: string;
  };
  callBackBtn: string;
  // Menu
  menuContent: IMenuContent;
  sweetness: string;
  sourness: string;
  taste: string;
}

interface IMenuItemData {
  itemName: string;
  description: string;
  tasteAccent: string;
}

export interface IMenuContent {
  moussesCakes: {
    name: string;
    chocolatePassionFruit: IMenuItemData;
  };
}

const address = "Natalie 23 str, Eilat";
const phone = "972-54-283-07777";
const email = "nataliecakes@gmail.com";
const rights =
  "Natalie Cakes, all rights reserved. Designed and developed by Andrew Shmorhun. 2023";

export const menuContentRu: IMenuContent = {
  moussesCakes: {
    name: "муссовые торты",
    chocolatePassionFruit: {
      itemName: "шоколад - маракуя",
      description: "will be created from description function",
      tasteAccent: "шоколад с экзотической кислинкой",
    },
  },
};

const contents: IContents = {
  // Navigation
  about: "про нас",
  contacts: "контакты",
  makeSweet: "подсластить!",
  // Hero
  mainHeader: "Сделайте свой день сладким!",
  heroTagline:
    "Порадуйте себя и своих близких празднечными тортами как от известных шеф-поваров, так и от отработанныч годами рецептами и классическими сочетаниями.",
  slogan: "Сделайте себе праздник",
  heroSelectors: {
    birthdayCake: "авторские торты",
    cakesAndPies: "торты & пироги",
    cupCakes: "капкейки",
    gingerBread: "пряники",
  },
  /// Info
  infoHeader: "информация",
  ingredients: "ингредиенты",
  ingredientsText: {
    h1: "Только лучшие продукты",
    p1: "В нашем меню вы найдете торты, как от известных шеф-поваров, так и отработанные годами рецепты и классические сочетания. Мы используем только качественные ингредиенты - 82% сливочного масла животного происхождения, качественный испанский и бельгийский шоколад, немецкий сливочный сыр и пюре из натуральных ягод и фруктов.",
    h2: "Не используем",
    p2: "Мы не используем консерванты, стабилизаторы, ароматизаторы, усилители вкуса и эмульгаторы.",
  },
  design: "дизайн",
  designText: {
    h1: "Базовый декор",
    p1: "В зависимости от пожеланий торт может быть любого цвета и оттенка, муссовые коржи покрываются зеркальной глазурью, бисквитные с кремом на основе сливочного сыра. В стоимость украшения входит лаконичный декор, это может быть небольшая композиция из макарон, бизе, простой шоколадный декор (перья, шары), надпись на торте белым или темным шоколадом.",
    h2: "Авторский декор",
    p2: "Дополнительный декор оплачивается отдельно - живые цветы, ягодный декор, печать тематических изображений, авторские пряники, рисунок глазурью и т.д.",
  },
  order: "Заказ",
  orderText: {
    h1: "Как заказывать?",
    p1: "Заказы принимаются за 3-7 дней, с 10:00 до 18:00, сообщая заранее дату, на которую нужен торт. В течение короткого периода времени мы можем предложить вам несколько доступных начинок из нашего меню.",
    h2: "Доставка и самовывоз.",
    p2: "По предварительной договоренности вы можете забрать торты с 10:00 до 18:00 или заказать доставку в Эйлате. Доставка рассчитывается индивидуально.",
  },
  important: "Важно!",
  importantText: {
    h1: "предоплата 50%",
    p1: "Если вы выбрали темные цвета глазури или крема, будьте готовы, что они могут оставлять следы и окрашивать язык. Мы используем качественные пищевые красители, но они все равно красят!",
    p2: "Некоторый декор (шарики, макароны), чтобы не упасть при транспортировке, можно крепить на зубочистки, будьте осторожны при нарезке и перед тем, как давать детям!",
  },
  // Footer
  footerContacts: {
    address,
    phone,
    email,
  },
  footerOther: {
    contacts: "контакты",
    question: "еще есть вопросы?",
    callBack: "Мы перезвоним вам!",
    follow: "подписаться",
    menu: "меню",
    cart: ["бисквитные торты", "классические торты", "чизкейки", "муссы"],
    rights,
  },
  callBackBtn: "обратный вызов",
  //Menu
  menuContent: menuContentRu,
  sweetness: "сладость",
  sourness: "кислинка",
  taste: "вкусовой акцент",
};
export { contents, type IContents };
