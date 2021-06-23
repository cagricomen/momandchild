import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 1,
        name: "MUZLU YOĞURTLU PÜRE",
        image: images.muzluyogurt,
        duration: "10 mins",
        serving: 1,
        isBookmark: false,
        category: "6+ AY",
        author: {
            profilePic: images.UserProfile5,
            name: "Maria",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.muz,
                description: "Muz",
                quantity: "Yarım adet"
            },
            {
                id: 2,
                icon: icons.yogurt,
                description: "Ev yoğurdu",
                quantity: "2 yemek kaşığı"
            },
            {
                id: 3,
                icon: icons.biskuvi,
                description: "Bebe Bisküvisi",
                quantity: "2 Adet"
            },
            {
                id: 4,
                icon: icons.tarif,
                description: "Bebe Bisküvisini ıslatmadan tabakta kuru haldeyken ezip toz haline getirin.",
                quantity: "Tarif"
            },
            {
                id: 5,
                icon: icons.tick,
                description: "Ardından muzu çatalla ezerek püre haline getirin.",
            },
            {
                id: 6,
                icon: icons.tick,
                description: "Ardından yoğurt ilavesiyle tüm malzemeleri karıştırarak bebeğinize servis edin.",
            },

        ],
    },
    {
        id: 2,
        name: "KARNABAHAR YEMEĞİ",
        image: images.karnabahar,
        duration: "30 mins",
        serving: 1,
        isBookmark: true,
        category: "6+ AY",
        author: {
            profilePic: images.UserProfile8,
            name: "Mandy",
        },
        ingredients: [
            {
                id: 0,
                icon: icons.irmik,
                description: "İrmik",
                quantity: "1 tatlı kaşığı"
            },
            {
                id: 1,
                icon: icons.su,
                description: "Su",
                quantity: "1 çay bardağı"
            },
            {
                id: 2,
                icon: icons.karna,
                description: "Karnabahar",
                quantity: "1 yemek kaşığı"
            },
            {
                id: 3,
                icon: icons.havuc,
                description: "Havuç",
                quantity: "1 yemek kaşığı"
            },
            {
                id: 4,
                icon: icons.yogurt,
                description: "Yoğurt",
                quantity: "1 yemek kaşığı"
            },
            {
                id: 5,
                icon: icons.tarif,
                description: "Karnabahar ve havucu ayrı bir tencerede iyice haşlayalım.",
                quantity: "Tarif"
            },
            {
                id: 6,
                icon: icons.tick,
                description: "İrmiğimizi 1 çay bardağı suda minik tencerede pişirelim. ",
            },
            {
                id: 7,
                icon: icons.tick,
                description: "Tüm malzemeleri birleştirelim.",
            },
            {
                id: 8,
                icon: icons.tick,
                description: "Bebeğinizin yeme zevkine göre çatalla ezelim veya blendırdan geçirelim.",
            },
            {
                id: 9,
                icon: icons.danger,
                description: "Alerji riskini ekarte etmek için, lütfen tüm içeriği 3 gün kuralı ile daha önceden denemiş olunuz.",
            },
        ],
    },
    {
        id: 3,
        name: "KARANFİLLİ ÇAVDARLI MAMA",
        image: images.karanfilli,
        duration: "30 mins",
        serving: 1,
        isBookmark: false,
        category: "6+ AY",
        author: {
            profilePic: images.UserProfile9,
            name: "Jessie",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.cavdarun,
                description: "Çavdar Unu",
                quantity: "1 çay kaşığı"
            },
            {
                id: 2,
                icon: icons.pirincun,
                description: "Pirinç Unu",
                quantity: "1 çay kaşığı"
            },
            {
                id: 3,
                icon: icons.su,
                description: "Sıcak Su",
                quantity: "1 çay bardağı"
            },
            {
                id: 4,
                icon: icons.karanfil,
                description: "Karanfil",
                quantity: "1 tatlı kaşığı karanfil"
            },
            {
                id: 5,
                icon: icons.formul,
                description: "Formül Süt",
                quantity: "2 ölçek kuru haliyle"
            },
            {
                id: 6,
                icon: icons.tarif,
                description: "Karanfiller çay bardağına konur. Üzerine sıcak su konur ve demlenir.",
                quantity: "Tarif"
            },
            {
                id: 7,
                icon: icons.tick,
                description: "Minik tencereye unlar konur. Üzerine karanfil çayı dökülür ve pişirilir.",
            },
            {
                id: 8,
                icon: icons.tick,
                description: "Pişen muhallebi bir kaba alınır ve ılınınca kuru haliyle 2 ölçek formül süt konulur.",
            },

        ],
    },
    {
        id: 4,
        name: "MEYVE ŞÖLENİ",
        image: images.meyvesoleni,
        duration: "5 min",
        serving: 1,
        isBookmark: false,
        category: "8+ AY",
        author: {
            profilePic: images.UserProfile7,
            name: "Ali Baba",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.muz,
                description: "Muz",
                quantity: "Yarım adet"
            },
            {
                id: 2,
                icon: icons.seftali,
                description: "Şeftali",
                quantity: "Yarım olgun"
            },
            {
                id: 3,
                icon: icons.kiraz,
                description: "Kiraz",
                quantity: "4 adet"
            },
            {
                id: 4,
                icon: icons.elma,
                description: "Elma",
                quantity: "Çeyrek"
            },
            {
                id: 5,
                icon: icons.tarif,
                description: "Tüm malzemeleri bir kaba alıp blendırlıyoruz.",
                quantity: "Tarif"
            },
            {
                id: 6,
                icon: icons.tick,
                description: "Son olarak muz parçacıklarıyla süslüyoruz.",
            },
            {
                id: 7,
                icon: icons.danger,
                description: "Şeftali ile elmanın kabuklarını soyun ve kirazın çekirdeklerini çıkarın.",
            },

        ],
    },
    {
        id: 5,
        name: "BEBEKLERE İLK OMLET ",
        image: images.omlet,
        duration: "10 min",
        serving: 1,
        isBookmark: false,
        category: "8+ AY",
        author: {
            profilePic: images.UserProfile5,
            name: "Maria",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.sarisi,
                description: "Yumurta sarısı",
                quantity: "1 adet"
            },
            {
                id: 2,
                icon: icons.lor,
                description: "Bebek loru",
                quantity: "1 tatlı kaşığı"
            },
            {
                id: 3,
                icon: icons.tereyag,
                description: "Tereyağı",
                quantity: "1 tatlı kaşığı"
            },
            {
                id: 4,
                icon: icons.tarif,
                description: "Yumurta sarısını ve loru bir kasede çırpın.",
                quantity: "Tarif"
            },
            {
                id: 5,
                icon: icons.tick,
                description: "Erimiş tereyağlı minik tavada karışımı arkalı önlü pişirin.",
            },
            {
                id: 6,
                icon: icons.danger,
                description: "Alerji riskini ekarte etmek için, lütfen tüm içeriği 3 gün kuralı ile daha önceden denemiş olunuz. ",
            },

        ],
    },
    {
        id: 6,
        name: "PATATESLİ SULU KÖFTE",
        image: images.patatesli,
        duration: "30 min",
        serving: 1,
        isBookmark: true,
        category: "8+ AY",
        author: {
            profilePic: images.UserProfile4,
            name: "Carla",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.kiyma,
                description: "Dana Kıyma",
                quantity: "250 gram"
            },
            {
                id: 2,
                icon: icons.siyez,
                description: "Siyez Bulguru",
                quantity: "1 çay bardağı"
            },
            {
                id: 3,
                icon: icons.nane,
                description: "Nane",
                quantity: "1 tatlı kaşığı"
            },
            {
                id: 4,
                icon: icons.kekik,
                description: "Kekik",
                quantity: "1 çay kaşığı"
            },
            {
                id: 5,
                icon: icons.kimyon,
                description: "Kimyon",
                quantity: "1 çay kaşığı"
            },
            {
                id: 6,
                icon: icons.onion,
                description: "Soğan",
                quantity: "1 Adet"
            },
            {
                id: 7,
                icon: icons.patates,
                description: "Patates",
                quantity: "3 Adet"
            },
            {
                id: 8,
                icon: icons.tomato,
                description: "Domates Sos",
                quantity: "2 yemek kaşığı"
            },
            {
                id: 9,
                icon: icons.tereyag,
                description: "Tereyağı",
                quantity: "1 yemek kaşığı"
            },
            {
                id: 10,
                icon: icons.reyhan,
                description: "Reyhan Otu",
                quantity: "1 tatlı kaşığı"
            },
            {
                id: 11,
                icon: icons.tarif,
                description: "İlk etapta köfteleri hazırlayacağız. Kıymanın üzerine, rondodan geçirilmiş soğanı, yıkanmış ve temiz bez üzerinde iyice kurulanmış bulguru, nane kekik kimyonu ilave edip yoğuralım.",
            },
            {
                id: 12,
                icon: icons.tick,
                description: "Köfteleri minik toplar halinde elimizde yuvarlayarak şekil verelim. Yulaf unu serpilmiş tepsiye koyalım.",
            },
            {
                id: 13,
                icon: icons.tick,
                description: "Bir yandan küp küp doğranmış patatesi, malzemeyi 2-3 parmak geçecek seviyede su ve domates sosu ile pişirelim. Salça kullanacak olanlar salçayı sulandırarak koyabilir.",
            },
            {
                id: 14,
                icon: icons.tick,
                description: "Yemek kaynadıktan sonra köfteleri de ilave edelim.",
            },
            {
                id: 15,
                icon: icons.tick,
                description: "Yemek pişmeye yakın tereyağını ilave edelim ki yağ çok pişmesin.Pişen yemeğe reyhan otu dökülür.",
            },
        ],
    },
    {
        id: 7,
        name: "SİYEZ KURABİYESİ",
        image: images.kurabiye,
        duration: "45 min",
        serving: 3,
        isBookmark: false,
        category: "12+ AY",
        author: {
            profilePic: images.UserProfile4,
            name: "Carla",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.yogurt,
                description: "Ev yogurdu",
                quantity: "Yarım çay bardağı"
            },
            {
                id: 2,
                icon: icons.tereyag,
                description: "Tereyağı",
                quantity: "Yarım çay bardağı"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Yumurta",
                quantity: "1 adet"
            },
            {
                id: 4,
                icon: icons.siyezun,
                description: "Siyez Unu",
                quantity: "Alabildiğine siyez unu"
            },
            {
                id: 5,
                icon: icons.karbonat,
                description: "Karbonat",
                quantity: "1 çay kaşığı"
            },
            {
                id: 6,
                icon: icons.tarcin,
                description: "Tarçın",
                quantity: "1 tatlı kaşığı"
            },
            {
                id: 7,
                icon: icons.ceviz,
                description: "Ceviz (Dövülmüş)",
                quantity: "Yarım çay bardağı"
            },
            {
                id: 8,
                icon: icons.tarif,
                description: "Sıvı malzemeleri kaba alarak karıştırın.",
            },
            {
                id: 9,
                icon: icons.tick,
                description: "Ardından katı malzemeleri karıştırma kabına alın.",
            },
            {
                id: 10,
                icon: icons.tick,
                description: "Unu kontrollü ilave edin. Herkesin yoğurt kıvamı farklı olduğu için unu göz kararı koyacağız. Klasik kulak memesi kıvamını yakalayacağız. Tavsiyem, kurabiyede hafif ele yapışan bir hamur olması.",
            },
            {
                id: 11,
                icon: icons.tarif,
                description: "Pişirme kağıdı serili tepsiye cevizden az küçük parçalar halinde elinizle yuvarlayıp hafif yassılaştırarak diziniz.",
            },
            {
                id: 12,
                icon: icons.tick,
                description: "170⁰C' de tahmini 25 dk kontrollü olarak pişirin.",
            },
            {
                id: 13,
                icon: icons.danger,
                description: "Alerji riskini ekarte etmek için, lütfen tüm içeriği 3 gün kuralı ile daha önceden denemiş olunuz.",
            },
        ],
    },
    {
        id: 8,
        name: "YOĞURTLU MİLKSHAKE",
        image: images.milkshake,
        duration: "25 min",
        serving: 2,
        isBookmark: false,
        category: "12+ AY",
        author: {
            profilePic: images.UserProfile6,
            name: "Jessica",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.formul,
                description: "Formül Süt",
                quantity: "60 cc"
            },
            {
                id: 2,
                icon: icons.yogurt,
                description: "Ev yogurdu",
                quantity: "30 cc"
            },
            {
                id: 3,
                icon: icons.bal,
                description: "Bal ",
                quantity: "1 tatlı kaşığı"
            },
            {
                id: 4,
                icon: icons.ceviz,
                description: "Dövülmüş Ceviz",
                quantity: "4-5 adet"
            },
            {
                id: 5,
                icon: icons.muz,
                description: "Muz",
                quantity: "Yarım adet"
            },
            {
                id: 6,
                icon: icons.tarif,
                description: "Tüm malzemeleri bir kaba alalım ve blendırlayalım.",
            },
        ],
    },
    {
        id: 9,
        name: "KARABUĞDAYLI MAŞ FASULYESİ",
        image: images.masyemegi,
        duration: "1 hour",
        serving: 2,
        isBookmark: true,
        category: "12+ AY",
        author: {
            profilePic: images.UserProfile6,
            name: "Jessica",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.masfasulye,
                description: "Maş Fasulyesi",
                quantity: "1 yemek kaşığı"
            },
            {
                id: 2,
                icon: icons.karabugday,
                description: "Karabuğday",
                quantity: "2 tatlı kaşığı"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Soğan ",
                quantity: "Çeyrek adet"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Domates Sos",
                quantity: "2 yemek kaşığı"
            },
            {
                id: 5,
                icon: icons.kiyma,
                description: "Dana Kıyma",
                quantity: "1 ceviz büyüklüğü"
            },
            {
                id: 6,
                icon: icons.eriste,
                description: "Sebzeli Erişte",
                quantity: "2 yemek kaşığı"
            },
            {
                id: 7,
                icon: icons.kimyon,
                description: "Kimyon",
                quantity: "1-2 fiske kimyon"
            },
            {
                id: 8,
                icon: icons.tereyag,
                description: "Tereyağı",
                quantity: "1 tatlı kaşığı"
            },
            {
                id: 9,
                icon: icons.tarif,
                description: "Maş fasulyeleri geceden ıslatılır. Islatmadıysanız 5 dk haşlayarak, o sıcak suda 15 dk bekletip suyunu süzün.",
            },
            {
                id: 10,
                icon: icons.tick,
                description: "Soğanlar mini mini doğranarak su ile sotelenir.",
            }, {
                id: 11,
                icon: icons.tick,
                description: "Ardından maş fasulyesi, karabuğday ve 1 yemek kaşığı domates sos ilave edilerek malzemeleri 3-4 parmak geçecek seviyede su ile pişirilir.",
            }, {
                id: 12,
                icon: icons.tick,
                description: "Diğer yandan donmuş kıyma başka bir minik tencereye alınarak az miktarda su, 1 yemek kaşığı domates sos ve kimyon ile kısık ateşte çözdürülür ve pişirilir.",
            }, {
                id: 13,
                icon: icons.tick,
                description: "Fasülyeler piştiğinde erişteler, tereyağı ve pişmiş kıyma karışımı tencereye atılır. Erişteler 7-8 dk sonra pişecektir. Erişte piştiğinde yemek hazırdır.",
            },
        ],
    }

]

const categories = trendingRecipes
const bookMarkRecipe = [trendingRecipes[1], trendingRecipes[5], trendingRecipes[8]]
const category6 = [trendingRecipes[0], trendingRecipes[1], trendingRecipes[2]]
const category8 = [trendingRecipes[3], trendingRecipes[4], trendingRecipes[5]]
const category12 = [trendingRecipes[6], trendingRecipes[7], trendingRecipes[8]]
const allCategory = [category6, category8, category12]
export default {
    trendingRecipes,
    categories,
    bookMarkRecipe,
    category6,
    category8,
    category12,
    allCategory
}