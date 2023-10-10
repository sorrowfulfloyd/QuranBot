const surah = [
  {
    id: 1,
    name: "Al Fatiha",
    aya: 7,
    english: "The Opening",
    turkish: "Fatiha",
    place: "Makkah",
    arabic: "الفاتحة",
  },
  {
    id: 2,
    name: "Al Baqarah",
    aya: 286,
    english: "The Cow",
    turkish: "Bakara",
    place: "Madinah",
    arabic: "البقرة",
  },
  {
    id: 3,
    name: "Al Imran",
    aya: 200,
    english: "The Family of Imran",
    turkish: "Al-i İmran",
    place: "Madinah",
    arabic: "آل عمران",
  },
  {
    id: 4,
    name: "An Nisa",
    aya: 176,
    english: "The Women",
    turkish: "Nisa",
    place: "Madinah",
    arabic: "النساء",
  },
  {
    id: 5,
    name: "Al Ma'idah",
    aya: 120,
    english: "The Table",
    turkish: "Maide",
    place: "Madinah",
    arabic: "المائدة",
  },
  {
    id: 6,
    name: "Al An'am",
    aya: 165,
    english: "The Cattle",
    turkish: "En'am",
    place: "Makkah",
    arabic: "الأنعام",
  },
  {
    id: 7,
    name: "Al A'raf",
    aya: 206,
    english: "The Heights",
    turkish: "A'raf",
    place: "Makkah",
    arabic: "الأعراف",
  },
  {
    id: 8,
    name: "Al Anfal",
    aya: 75,
    english: "The Spoils of War",
    turkish: "Enfal",
    place: "Madinah",
    arabic: "الأنفال",
  },
  {
    id: 9,
    name: "At Tawbah",
    aya: 129,
    english: "The Repentance",
    turkish: "Tevbe",
    place: "Madinah",
    arabic: "التوبة",
  },
  {
    id: 10,
    name: "Al Yunus",
    aya: 109,
    english: "Jonah",
    turkish: "Yunus",
    place: "Makkah",
    arabic: "يونس",
  },
  {
    id: 11,
    name: "Hud",
    aya: 123,
    english: "Hud",
    turkish: "Hud",
    place: "Makkah",
    arabic: "هود",
  },
  {
    id: 12,
    name: "Yusuf",
    aya: 111,
    english: "Joseph",
    turkish: "Yusuf",
    place: "Makkah",
    arabic: "يوسف",
  },
  {
    id: 13,
    name: "Ar Ra'd",
    aya: 43,
    english: "The Thunder",
    turkish: "Ra'd",
    place: "Madinah",
    arabic: "الرعد",
  },
  {
    id: 14,
    name: "Ibrahim",
    aya: 52,
    english: "Abraham",
    turkish: "İbrahim",
    place: "Makkah",
    arabic: "ابراهيم",
  },
  {
    id: 15,
    name: "Al Hijr",
    aya: 99,
    english: "The Stoneland",
    turkish: "Hicr",
    place: "Makkah",
    arabic: "الحجر",
  },
  {
    id: 16,
    name: "An Nahl",
    aya: 128,
    english: "The Honey Bee",
    turkish: "Nahl",
    place: "Makkah",
    arabic: "النحل",
  },
  {
    id: 17,
    name: "Al Isra'",
    aya: 111,
    english: "The Night Journey",
    turkish: "İsra",
    place: "Makkah",
    arabic: "الإسراء",
  },
  {
    id: 18,
    name: "Al Kahf",
    aya: 110,
    english: "The Cave",
    turkish: "Kehf",
    place: "Makkah",
    arabic: "الكهف",
  },
  {
    id: 19,
    name: "Maryam",
    aya: 98,
    english: "Mary",
    turkish: "Meryem",
    place: "Makkah",
    arabic: "مريم",
  },
  {
    id: 20,
    name: "Ta Ha",
    aya: 135,
    english: "Ta Ha",
    turkish: "Taha",
    place: "Makkah",
    arabic: "طه",
  },
  {
    id: 21,
    name: "Al Anbiya",
    aya: 112,
    english: "The Prophets",
    turkish: "Enbiya",
    place: "Makkah",
    arabic: "الأنبياء",
  },
  {
    id: 22,
    name: "Al Hajj",
    aya: 78,
    english: "The Pilgrimage",
    turkish: "Hac",
    place: "Madinah",
    arabic: "الحج",
  },
  {
    id: 23,
    name: "Al Mu minun",
    aya: 118,
    english: "The Believers",
    turkish: "Mü'minun",
    place: "Makkah",
    arabic: "المؤمنون",
  },
  {
    id: 24,
    name: "An Nur",
    aya: 64,
    english: "The Light",
    turkish: "Nur",
    place: "Madinah",
    arabic: "النور",
  },
  {
    id: 25,
    name: "Al Furqan",
    aya: 77,
    english: "The Criterion",
    turkish: "Furkan",
    place: "Makkah",
    arabic: "الفرقان",
  },
  {
    id: 26,
    name: "As Su'ara",
    aya: 227,
    english: "The Poets",
    turkish: "Şuara",
    place: "Makkah",
    arabic: "الشعراء",
  },
  {
    id: 27,
    name: "An Naml",
    aya: 93,
    english: "The Ant",
    turkish: "Neml",
    place: "Makkah",
    arabic: "النمل",
  },
  {
    id: 28,
    name: "Al Qasas",
    aya: 88,
    english: "The Narrations",
    turkish: "Kasas",
    place: "Makkah",
    arabic: "القصص",
  },
  {
    id: 29,
    name: "Al Ankabut",
    aya: 69,
    english: "The Spider",
    turkish: "Ankebut",
    place: "Makkah",
    arabic: "العنكبوت",
  },
  {
    id: 30,
    name: "Ar Rum",
    aya: 60,
    english: "Rome",
    turkish: "Rum",
    place: "Makkah",
    arabic: "الروم",
  },
  {
    id: 31,
    name: "Luqman",
    aya: 34,
    english: "Luqman",
    turkish: "Lokman",
    place: "Makkah",
    arabic: "لقمان",
  },
  {
    id: 32,
    name: "As Sajdah",
    aya: 30,
    english: "The Prostration",
    turkish: "Secde",
    place: "Makkah",
    arabic: "السجدة",
  },
  {
    id: 33,
    name: "Al Ahzab",
    aya: 73,
    english: "The Clans",
    turkish: "Ahzab",
    place: "Madinah",
    arabic: "الأحزاب",
  },
  {
    id: 34,
    name: "Saba'",
    aya: 54,
    english: "Sheba",
    turkish: "Sebe",
    place: "Makkah",
    arabic: "سبإ",
  },
  {
    id: 35,
    name: "Fatir",
    aya: 45,
    english: "The Originator",
    turkish: "Fatır",
    place: "Makkah",
    arabic: "فاطر",
  },
  {
    id: 36,
    name: "Ya'sin",
    aya: 83,
    english: "Ya Sin",
    turkish: "Yasin",
    place: "Makkah",
    arabic: "يس",
  },
  {
    id: 37,
    name: "As Saffat",
    aya: 182,
    english: "Those Who Set The Ranks",
    turkish: "Saffat",
    place: "Makkah",
    arabic: "الصافات",
  },
  {
    id: 38,
    name: "Saad",
    aya: 88,
    english: "Ṣād",
    turkish: "Sad",
    place: "Makkah",
    arabic: "ص",
  },
  {
    id: 39,
    name: "Az Zumar",
    aya: 75,
    english: "The Crowds",
    turkish: "Zümer",
    place: "Makkah",
    arabic: "الزمر",
  },
  {
    id: 40,
    name: "Ghafir",
    aya: 85,
    english: "The Forgiver",
    turkish: "Mü'min",
    place: "Makkah",
    arabic: "غافر",
  },
  {
    id: 41,
    name: "Fussilat",
    aya: 54,
    english: "Expounded",
    turkish: "Fussilet",
    place: "Makkah",
    arabic: "فصلت",
  },
  {
    id: 42,
    name: "As Sura",
    aya: 53,
    english: "The Consultation",
    turkish: "Şura",
    place: "Makkah",
    arabic: "الشورى",
  },
  {
    id: 43,
    name: "Az Zukhruf",
    aya: 89,
    english: "The Gold Adornments",
    turkish: "Zuhruf",
    place: "Makkah",
    arabic: "الزخرف",
  },
  {
    id: 44,
    name: "Ad Dukhan",
    aya: 59,
    english: "The Smoke",
    turkish: "Duhan",
    place: "Makkah",
    arabic: "الدخان",
  },
  {
    id: 45,
    name: "Al Jaathiyah",
    aya: 37,
    english: "The Kneeling Down",
    turkish: "Casiye",
    place: "Makkah",
    arabic: "الجاثية",
  },
  {
    id: 46,
    name: "Al Ahqaf",
    aya: 35,
    english: "Winding Sand tracts",
    turkish: "Ahkaf",
    place: "Makkah",
    arabic: "الأحقاف",
  },
  {
    id: 47,
    name: "Muhammad",
    aya: 38,
    english: "Muhammad",
    turkish: "Muhammed",
    place: "Madinah",
    arabic: "محمد",
  },
  {
    id: 48,
    name: "Al Fath",
    aya: 29,
    english: "The Victory",
    turkish: "Fetih",
    place: "Madinah",
    arabic: "الفتح",
  },
  {
    id: 49,
    name: "Al Hujurut",
    aya: 18,
    english: "The Private Apartments",
    turkish: "Hucurat",
    place: "Madinah",
    arabic: "الحجرات",
  },
  {
    id: 50,
    name: "Qaaf",
    aya: 45,
    english: "Q̈āf",
    turkish: "Kaf",
    place: "Makkah",
    arabic: "ق",
  },
  {
    id: 51,
    name: "Ad Dariyat",
    aya: 60,
    english: "The Wind That Scatter",
    turkish: "Zariyat",
    place: "Makkah",
    arabic: "الذاريات",
  },
  {
    id: 52,
    name: "At Toor",
    aya: 49,
    english: "The Mount",
    turkish: "Tur",
    place: "Makkah",
    arabic: "الطور",
  },
  {
    id: 53,
    name: "An Najm",
    aya: 62,
    english: "The Star",
    turkish: "Necm",
    place: "Makkah",
    arabic: "النجم",
  },
  {
    id: 54,
    name: "Al Qamar",
    aya: 55,
    english: "The Moon",
    turkish: "Kamer",
    place: "Makkah",
    arabic: "القمر",
  },
  {
    id: 55,
    name: "Ar Rahman",
    aya: 78,
    english: "The Most Merciful",
    turkish: "Rahman",
    place: "Madinah",
    arabic: "الرحمن",
  },
  {
    id: 56,
    name: "Al Waqiah",
    aya: 96,
    english: "The Inevitable",
    turkish: "Vakıa",
    place: "Makkah",
    arabic: "الواقعة",
  },
  {
    id: 57,
    name: "Al Hadeed",
    aya: 29,
    english: "The Iron",
    turkish: "Hadid",
    place: "Madinah",
    arabic: "الحديد",
  },
  {
    id: 58,
    name: "Al Mujadila",
    aya: 22,
    english: "The Pleading",
    turkish: "Mücadele",
    place: "Madinah",
    arabic: "المجادلة",
  },
  {
    id: 59,
    name: "Al Hashr",
    aya: 24,
    english: "The Mustering",
    turkish: "Haşr",
    place: "Manidah",
    arabic: "الحشر",
  },
  {
    id: 60,
    name: "Al Mumtahanah",
    aya: 13,
    english: "The Examined One",
    turkish: "Mümtehine",
    place: "Madinah",
    arabic: "الممتحنة",
  },
  {
    id: 61,
    name: "As Saff",
    aya: 14,
    english: "The Ranks",
    turkish: "Saff",
    place: "Madinah",
    arabic: "الصف",
  },
  {
    id: 62,
    name: "Al Jumu'ah",
    aya: 11,
    english: "Congregation (Friday)",
    turkish: "Cuma",
    place: "Madinah",
    arabic: "الجمعة",
  },
  {
    id: 63,
    name: "Al Munafiqoon",
    aya: 11,
    english: "The Hypocrites",
    turkish: "Münafikun",
    place: "Madinah",
    arabic: "المنافقون",
  },
  {
    id: 64,
    name: "At Taghabun",
    aya: 18,
    english: "The Cheating",
    turkish: "Tegabün",
    place: "Madinah",
    arabic: "التغابن",
  },
  {
    id: 65,
    name: "At Talaq",
    aya: 12,
    english: "Divorce",
    turkish: "Talak",
    place: "Madinah",
    arabic: "الطلاق",
  },
  {
    id: 66,
    name: "At Tahreem",
    aya: 12,
    english: "The Prohibition",
    turkish: "Tahrim",
    place: "Madinah",
    arabic: "التحريم",
  },
  {
    id: 67,
    name: "Al Mulk",
    aya: 30,
    english: "The Dominion",
    turkish: "Mülk",
    place: "Makkah",
    arabic: "الملك",
  },
  {
    id: 68,
    name: "Al Qalam",
    aya: 52,
    english: "The Pen",
    turkish: "Kalem",
    place: "Makkah",
    arabic: "القلم",
  },
  {
    id: 69,
    name: "Al Haaqqah",
    aya: 52,
    english: "The Sure Reality",
    turkish: "Hakka",
    place: "Makkah",
    arabic: "الحاقة",
  },
  {
    id: 70,
    name: "Al Ma'arij",
    aya: 44,
    english: "The Ways of Ascent",
    turkish: "Mearic",
    place: "Makkah",
    arabic: "المعارج",
  },
  {
    id: 71,
    name: "Nooh",
    aya: 28,
    english: "Noah",
    turkish: "Nuh",
    place: "Makkah",
    arabic: "نوح",
  },
  {
    id: 72,
    name: "Al Jinn",
    aya: 28,
    english: "The Jinn",
    turkish: "Cin",
    place: "makkah",
    arabic: "الجن",
  },
  {
    id: 73,
    name: "Al Muzammil",
    aya: 20,
    english: "The Enfolded One",
    turkish: "Müzzemmil",
    place: "Makkah",
    arabic: "المزمل",
  },
  {
    id: 74,
    name: "Al Muddathir",
    aya: 56,
    english: "The One Wrapped Up",
    turkish: "Müddessir",
    place: "Makkah",
    arabic: "المدثر",
  },
  {
    id: 75,
    name: "Al Qiyamah",
    aya: 40,
    english: "Resurrection",
    turkish: "Kıyamet",
    place: "Makkah",
    arabic: "القيامة",
  },
  {
    id: 76,
    name: "Al Insaan",
    aya: 31,
    english: "The Human",
    turkish: "İnsan",
    place: "Madinah",
    arabic: "الانسان",
  },
  {
    id: 77,
    name: "Al Mursalat",
    aya: 50,
    english: "Those Sent Forth",
    turkish: "Mürselat",
    place: "Makkah",
    arabic: "المرسلات",
  },
  {
    id: 78,
    name: "An Naba",
    aya: 40,
    english: "The Great News",
    turkish: "Nebe",
    place: "Makkah",
    arabic: "النبأ",
  },
  {
    id: 79,
    name: "An Naaziat",
    aya: 46,
    english: "Those Who Tear Out",
    turkish: "Naziat",
    place: "Makkah",
    arabic: "النازعات",
  },
  {
    id: 80,
    name: "Abasa",
    aya: 42,
    english: "He Frowned",
    turkish: "Abese",
    place: "Makkah",
    arabic: "عبس",
  },
  {
    id: 81,
    name: "At Takweer",
    aya: 29,
    english: "The Folding Up",
    turkish: "Tekvir",
    place: "Makkah",
    arabic: "التكوير",
  },
  {
    id: 82,
    name: "Al Infitar",
    aya: 19,
    english: "The Overthrowing",
    turkish: "İnfitar",
    place: "Makkah",
    arabic: "الإنفطار",
  },
  {
    id: 83,
    name: "Al Mutaffifin",
    aya: 36,
    english: "The Cleaving Asunder",
    turkish: "Mutaffifin",
    place: "Makkah",
    arabic: "المطففين",
  },
  {
    id: 84,
    name: "Al Inshiqaaq",
    aya: 25,
    english: "The Dealers in Fraud",
    turkish: "İnşikak",
    place: "Makkah",
    arabic: "الإنشقاق",
  },
  {
    id: 85,
    name: "Al Burooj",
    aya: 22,
    english: "The Constellations",
    turkish: "Buruc",
    place: "Makkah",
    arabic: "البروج",
  },
  {
    id: 86,
    name: "At Taariq",
    aya: 17,
    english: "The Morning Star",
    turkish: "Tarık",
    place: "Makkah",
    arabic: "الطارق",
  },
  {
    id: 87,
    name: "Al A'laa",
    aya: 19,
    english: "The Most High",
    turkish: "A'la",
    place: "Makkah",
    arabic: "الأعلى",
  },
  {
    id: 88,
    name: "Al Ghaashiyah",
    aya: 26,
    english: "The Overwhelming Event",
    turkish: "Gaşiye",
    place: "Makkah",
    arabic: "الغاشية",
  },
  {
    id: 89,
    name: "Al Fajr",
    aya: 30,
    english: "The Daybreak",
    turkish: "Fecr",
    place: "Makkah",
    arabic: "الفجر",
  },
  {
    id: 90,
    name: "Al Balad",
    aya: 20,
    english: "The City",
    turkish: "Beled",
    place: "Makkah",
    arabic: "البلد",
  },
  {
    id: 91,
    name: "Ash Shams",
    aya: 15,
    english: "The Sun",
    turkish: "Şems",
    place: "Makkah",
    arabic: "الشمس",
  },
  {
    id: 92,
    name: "Al Layl",
    aya: 21,
    english: "The Night",
    turkish: "Leyl",
    place: "Makkah",
    arabic: "الليل",
  },
  {
    id: 93,
    name: "Ad Dhuha",
    aya: 11,
    english: "The Glorious Morning Light",
    turkish: "Duha",
    place: "Makkah",
    arabic: "الضحى",
  },
  {
    id: 94,
    name: "Ash Sharh",
    aya: 8,
    english: "The Opening Up of the Heart",
    turkish: "İnşirah",
    place: "Makkah",
    arabic: "الشرح",
  },
  {
    id: 95,
    name: "At Teen",
    aya: 8,
    english: "The Fig Tree",
    turkish: "Tin",
    place: "Makkah",
    arabic: "التين",
  },
  {
    id: 96,
    name: "Al Alaq",
    aya: 19,
    english: "The Clinging Clot",
    turkish: "Alak",
    place: "Makkah",
    arabic: "العلق",
  },
  {
    id: 97,
    name: "Al Qadr",
    aya: 5,
    english: "The Night of Honor",
    turkish: "Kadir",
    place: "Makkah",
    arabic: "القدر",
  },
  {
    id: 98,
    name: "Al Bayyinah",
    aya: 8,
    english: "The Clear Evidence",
    turkish: "Beyyine",
    place: "Madinah",
    arabic: "البينة",
  },
  {
    id: 99,
    name: "Az Zalzalah",
    aya: 8,
    english: "The Earthquake",
    turkish: "Zilzal",
    place: "Madinah",
    arabic: "الزلزلة",
  },
  {
    id: 100,
    name: "Al Aadiyaat",
    aya: 11,
    english: "The Courser",
    turkish: "adiyat",
    place: "Makkah",
    arabic: "العاديات",
  },
  {
    id: 101,
    name: "Al Qaari'ah",
    aya: 11,
    english: "The Striking Hour",
    turkish: "Karia",
    place: "Makkah",
    arabic: "القارعة",
  },
  {
    id: 102,
    name: "At Takaathur",
    aya: 8,
    english: "The Piling Up",
    turkish: "Tekasür",
    place: "Makkah",
    arabic: "التكاثر",
  },
  {
    id: 103,
    name: "Al Asr",
    aya: 3,
    english: "The Time",
    turkish: "Asr",
    place: "Makkah",
    arabic: "العصر",
  },
  {
    id: 104,
    name: "Al Humazah",
    aya: 9,
    english: "The Scandalmonger",
    turkish: "Hümeze",
    place: "Makkah",
    arabic: "الهمزة",
  },
  {
    id: 105,
    name: "Al Feel",
    aya: 5,
    english: "The Elephant",
    turkish: "Fil",
    place: "Makkah",
    arabic: "الفيل",
  },
  {
    id: 106,
    name: "Quraysh",
    aya: 4,
    english: "The Quraysh",
    turkish: "Kureyş",
    place: "Makkah",
    arabic: "قريش",
  },
  {
    id: 107,
    name: "Al Maa'oon",
    aya: 7,
    english: "The Neighbourly Assistance",
    turkish: "Maun",
    place: "Makkah",
    arabic: "الماعون",
  },
  {
    id: 108,
    name: "Al Kawthar",
    aya: 3,
    english: "Abundance",
    turkish: "Kevser",
    place: "Makkah",
    arabic: "الكوثر",
  },
  {
    id: 109,
    name: "Al Kaafiroon",
    aya: 6,
    english: "The Disbelievers",
    turkish: "Kafirun",
    place: "Makkah",
    arabic: "الكافرون",
  },
  {
    id: 110,
    name: "An Nasr",
    aya: 3,
    english: "The Help",
    turkish: "Nasr",
    place: "Madinah",
    arabic: "النصر",
  },
  {
    id: 111,
    name: "Al Masad",
    aya: 5,
    english: "The Plaited Rope",
    turkish: "Tebbet",
    place: "Makkah",
    arabic: "المسد",
  },
  {
    id: 112,
    name: "Al Ikhlaas",
    aya: 4,
    english: "Purity of Faith",
    turkish: "İhlas",
    place: "Makkah",
    arabic: "الإخلاص",
  },
  {
    id: 113,
    name: "Al Falaq",
    aya: 5,
    english: "The Rising Dawn",
    turkish: "Felak",
    place: "Makkah",
    arabic: "الفلق",
  },
  {
    id: 114,
    name: "An Naas",
    aya: 6,
    english: "Mankind",
    turkish: "Nas",
    place: "Makkah",
    arabic: "الناس",
  },
];

module.exports = surah;
