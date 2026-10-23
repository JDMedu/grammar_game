// 「문법의 나라」 4단계 해동 대사 (원작 985장 재작성) + 지속효과 + 목표
const DIALOGUE = [
{
"id": 1,
"name": "tower",
"theme": "buildings",
"char": "general",
"cond": "",
"wait": "70",
"weight": "8",
"text": "전하, 도성 방비가 허술하옵니다. 새로 망루를 세워야 하옵니다.",
"R": {
"c": "세워라",
"r": "",
"s": {
"군사": "10?",
"국고": "-10"
},
"cmd": "tower_keep"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"군사": "-5",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 2,
"name": "fortifications",
"theme": "buildings",
"char": "general",
"cond": "tower_keep and military<40 and !fortification_keep",
"wait": "100",
"weight": "20",
"text": "도성을 지킬 산성을 쌓아야 하옵니다. 돈은 들겠으나 그만한 값을 할 것이옵니다.",
"R": {
"c": "쌓아라",
"r": "",
"s": {
"군사": "?20",
"국고": "-30"
},
"cmd": "fortification_keep"
},
"L": {
"c": "돈이 아깝다",
"r": "",
"s": {
"군사": "?-5"
},
"cmd": ""
}
},
{
"id": 3,
"name": "school",
"theme": "buildings",
"char": "monk",
"cond": "!school_keep",
"wait": "100",
"weight": "10",
"text": "도성에 서당을 세워 백성을 가르치소서.",
"R": {
"c": "세워라",
"r": "",
"s": {
"문법": "10",
"민심": "10",
"국고": "-15?"
},
"cmd": "add_nun and school_keep"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "-10",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 4,
"name": "sculpture",
"theme": "buildings",
"char": "merchant",
"cond": "treasure>60 and marketplace_keep",
"wait": "200",
"weight": "10",
"text": "객주들이 장터에 전하의 석상을 세우고 싶어 하옵니다. 어떠하시옵니까?",
"R": {
"c": "세우게 하라",
"r": "",
"s": {
"문법": "-5",
"민심": "5",
"국고": "-5"
},
"cmd": ""
},
"L": {
"c": "낯간지럽다",
"r": "",
"s": {
"문법": "10"
},
"cmd": ""
}
},
{
"id": 5,
"name": "marketplace",
"theme": "buildings",
"char": "merchant",
"cond": "!marketplace_keep",
"wait": "60",
"weight": "8",
"text": "전하, 장시를 여는 것이 어떠하옵니까? 이웃 나라와 물건을 사고팔 수 있사옵니다.",
"R": {
"c": "열어라",
"r": "",
"s": {
"문법": "-5",
"민심": "10",
"국고": "10"
},
"cmd": "marketplace_keep"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"민심": "-5",
"국고": "-15"
},
"cmd": ""
}
},
{
"id": 6,
"name": "centralbank",
"theme": "buildings",
"char": "merchant",
"cond": "marketplace_keep and treasure>60 and !centralbank_keep",
"wait": "350",
"weight": "15",
"text": "저희 객주들이 장사를 다스려 온 덕에 나라 살림이 넉넉해졌사옵니다. 이제 상평창을 세우시면 어떠하옵니까?",
"R": {
"c": "세워라",
"r": "",
"s": {
"문법": "-20?",
"국고": "5"
},
"cmd": "centralbank_keep"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"국고": "-5?"
},
"cmd": ""
}
},
{
"id": 7,
"name": "church_blessing",
"theme": "buildings",
"char": "monk",
"cond": "nb_church_keep>3",
"wait": "del",
"weight": "30",
"text": "전하, 새로 연 서원에 친히 현판을 내려 주시겠사옵니까?",
"R": {
"c": "써 주겠다",
"r": "",
"s": {
"문법": "15",
"국고": "-5"
},
"cmd": ""
},
"L": {
"c": "바쁘다",
"r": "",
"s": {
"문법": "-10"
},
"cmd": ""
}
},
{
"id": 8,
"name": "church",
"theme": "buildings",
"char": "priest",
"cond": "nb_church_keep<8",
"wait": "60",
"weight": "10",
"text": "전하, 서원을 하나 더 세워야 하옵니다.",
"R": {
"c": "세워라",
"r": "",
"s": {
"문법": "15?",
"국고": "-10"
},
"cmd": "nb_church_keep+"
},
"L": {
"c": "이미 넉넉하지 않으냐",
"r": "",
"s": {
"문법": "-10?"
},
"cmd": ""
}
},
{
"id": 9,
"name": "barn",
"theme": "buildings",
"char": "farmer",
"cond": "!barn_keep and dynasty>3",
"wait": "70",
"weight": "10",
"text": "전하, 모두가 쓸 곡식 창고를 지어 주시옵소서. 곡식을 쌓아 두면 흉년에도 버틸 수 있사옵니다.",
"R": {
"c": "지어라",
"r": "",
"s": {
"민심": "5",
"국고": "-20"
},
"cmd": "barn_keep"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"민심": "-15"
},
"cmd": ""
}
},
{
"id": 10,
"name": "bird",
"theme": "buildings",
"char": "priest",
"cond": "dynasty>1",
"wait": "40",
"weight": "5",
"text": "북쪽 고을 백성들이 요사스러운 말에 홀려 글을 멀리한다 하옵니다. 서원을 더 늘려야 하겠사옵니다.",
"R": {
"c": "늘려라",
"r": "",
"s": {
"문법": "15",
"민심": "5",
"국고": "-10?"
},
"cmd": "nb_church_keep+"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "-10"
},
"cmd": ""
}
},
{
"id": 11,
"name": "cathedral",
"theme": "buildings",
"char": "priest",
"cond": "!cathedral_keep",
"wait": "80",
"weight": "20",
"text": "하늘과 글의 이치를 받들어 집현전을 세우시옵소서.",
"R": {
"c": "세워라",
"r": "",
"s": {
"문법": "10?30",
"국고": "-30"
},
"cmd": ">>>>>>>>>>>>>>>>>>>_cathedral_finished_keep"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "-10",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 12,
"name": "_cathedral_finished_keep",
"theme": "buildings",
"char": "priest",
"cond": "",
"wait": "",
"weight": "",
"text": "집현전이 다 지어졌사옵니다! 성대하게 잔치를 여시옵소서! 성대하게!",
"R": {
"c": "잔치를 열어라",
"r": "",
"s": {
"문법": "15",
"군사": "5",
"민심": "5",
"국고": "-15?"
},
"cmd": "cathedral_keep"
},
"L": {
"c": "조용히 넘어가자",
"r": "",
"s": {
"문법": "-10"
},
"cmd": "cathedral_keep"
}
},
{
"id": 13,
"name": "first_priest",
"theme": "church",
"char": "priest",
"cond": "age<5",
"wait": "60",
"weight": "13",
"text": "만수무강하시옵소서, 전하! 전하의 만수무강을 위해 치성을 드리겠사옵니다.",
"R": {
"c": "고맙구나",
"r": "",
"s": {
"문법": "20?",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "그런 데 쓸 돈은 없다",
"r": "",
"s": {
"문법": "-20?",
"국고": "5"
},
"cmd": ""
}
},
{
"id": 14,
"name": "schizm",
"theme": "church",
"char": "priest",
"cond": "spiritual>60",
"wait": "40",
"weight": "20",
"text": "이 나라의 학문이 위태롭사옵니다. 지금이야말로 서원을 새로 손볼 때이옵니다!",
"R": {
"c": "음, 괜찮겠지…",
"r": "",
"s": {
"문법": "20",
"군사": "-10",
"민심": "-10"
},
"cmd": ">inquisition2"
},
"L": {
"c": "자, 진정하라",
"r": "",
"s": {
"문법": "-10"
},
"cmd": ""
}
},
{
"id": 15,
"name": "inquisition",
"theme": "church",
"char": "priest",
"cond": "spiritual<40",
"wait": "40",
"weight": "25",
"text": "이 나라는 집현전의 권위가 너무 약하옵니다. 백성들이 글과 법도를 우습게 여기옵니다!",
"R": {
"c": "권위를 세워 주마",
"r": "",
"s": {
"문법": "10?"
},
"cmd": ">"
},
"L": {
"c": "백성 탓은 그만하라",
"r": "",
"s": {
"문법": "-5?"
},
"cmd": ""
}
},
{
"id": 16,
"name": "inquisition2",
"theme": "church",
"char": "priest",
"cond": "!inquisition",
"wait": "100",
"weight": "5",
"text": "집현전이 백성의 말과 글을 바로잡고 벌할 권한을 주시옵소서. 산림의 큰 선비께서 그 값을 넉넉히 치르겠다 하옵니다.",
"R": {
"c": "권한을 주마",
"r": "",
"s": {
"문법": "40",
"군사": "-10?",
"민심": "-10?",
"국고": "20"
},
"cmd": "inquisition"
},
"L": {
"c": "그건 지나치다",
"r": "",
"s": {
"문법": "-20",
"군사": "5?",
"민심": "10?",
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 17,
"name": "dime",
"theme": "church",
"char": "priest",
"cond": "treasure<40",
"wait": "80",
"weight": "15",
"text": "백성에게 서원세를 새로 걷고 싶사옵니다. 물론 거둔 것의 일부는 왕실과 나누겠사옵니다.",
"R": {
"c": "걷어라",
"r": "",
"s": {
"문법": "15",
"민심": "-15?",
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "백성이 힘들다",
"r": "",
"s": {
"문법": "-10"
},
"cmd": ""
}
},
{
"id": 18,
"name": "pelerinage",
"theme": "church",
"char": "priest",
"cond": "",
"wait": "100",
"weight": "8",
"text": "전하, 옛 성현의 묘소 참배를 나라 행사로 삼고자 하옵니다.",
"R": {
"c": "그리하라",
"r": "",
"s": {
"문법": "20",
"민심": "5",
"국고": "-10?"
},
"cmd": ">>>>>>>>>>>_starmand"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "-10",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 19,
"name": "saint",
"theme": "church",
"char": "priest",
"cond": "cathedral_keep",
"wait": "50",
"weight": "10",
"text": "집현전에서 이름난 노학자의 장례를 치르옵니다. 전하께서도 힘을 보태 주시기를 바라옵니다.",
"R": {
"c": "보태겠다",
"r": "",
"s": {
"문법": "10?",
"국고": "-10?"
},
"cmd": ""
},
"L": {
"c": "그럴 필요는 없겠지…",
"r": "",
"s": {
"문법": "-10?"
},
"cmd": ""
}
},
{
"id": 20,
"name": "wiches",
"theme": "church",
"char": "priest",
"cond": "spiritual<40 and year>720",
"wait": "50",
"weight": "12",
"text": "백성 대부분이 잡귀를 섬기고 있사옵니다. 무녀들을 모두 내쫓아야 하옵니다!",
"R": {
"c": "좋을 대로 하라…",
"r": "",
"s": {
"문법": "20?",
"민심": "-5?"
},
"cmd": "witchhunt and isCoward"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "-5?",
"민심": "10?"
},
"cmd": ""
}
},
{
"id": 21,
"name": "",
"theme": "church",
"char": "monk",
"cond": "",
"wait": "120",
"weight": "8",
"text": "크, 큰일이옵니다. 유생 하나가 다른 유생을 물어뜯고, 물린 유생이 또 다른 유생을 물어뜯어… 걷잡을 수 없이 번지고 있사옵니다.",
"R": {
"c": "대장군을 불러라!",
"r": "",
"s": {
"문법": "10?"
},
"cmd": ">"
},
"L": {
"c": "구미호의 짓이냐?",
"r": "",
"s": {
"문법": "-10?"
},
"cmd": "add_werewolf and >_weremonks"
}
},
{
"id": 22,
"name": "_",
"theme": "",
"char": "general",
"cond": "",
"wait": "",
"weight": "",
"text": "아마도 구미호가 아닐는지요. 신은 감당할 수가 없사옵니다.",
"R": {
"c": "구미호라니?",
"r": "",
"s": {
"문법": "-10?"
},
"cmd": "add_werewolf and >_weremonks"
},
"L": {
"c": "명령이다",
"r": "(유생들은 <general>에게 끌려가 갇혔다. 문초 끝에 자기들도 여우에 홀렸다고 털어놓았다.)",
"s": {
"군사": "-10?"
},
"cmd": "add_werewolf and >_weremonks"
}
},
{
"id": 23,
"name": "_weremonks",
"theme": "",
"char": "werewolf",
"cond": "",
"wait": "",
"weight": "",
"text": "구미호라니요…? 설마 그럴 리가요. '몸을 너무 안 움직인 탓'이옵니다.",
"R": {
"c": "아…",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "흠…",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 24,
"name": "",
"theme": "church",
"char": "anyone",
"cond": "",
"wait": "130",
"weight": "8",
"text": "훈장 댁 여인들이 고양이처럼 울기 시작했사옵니다. 그 괴이한 버릇이 온 마을로 번지고 있사옵니다.",
"R": {
"c": "대장군을 불러라!",
"r": "(왕은 군사를 보내 고양이 소리를 내는 여인들을 진정시켰다. 집현전은 몹시 부끄러워했지만 고마워했다.)",
"s": {
"문법": "5?",
"군사": "-15?"
},
"cmd": "witchhunt"
},
"L": {
"c": "내버려 두어라…",
"r": "(여인들은 몇 해 동안 울어 댔다. 집현전은 그들을 요사스럽다 하여 서당 문을 닫아 버렸다.)",
"s": {
"문법": "-15?"
},
"cmd": ""
}
},
{
"id": 25,
"name": "witchhunt",
"theme": "church",
"char": "witch",
"cond": "witchhunt",
"wait": "15",
"weight": "100",
"text": "죄 없는 무녀들이 요물로 몰려 쫓겨나고 있사옵니다. 이런 몹쓸 일을 그대로 두어서는 아니 되옵니다.",
"R": {
"c": "멈추게 하라",
"r": "",
"s": {
"문법": "-10?",
"민심": "10"
},
"cmd": "!witchhunt and yes_witch++"
},
"L": {
"c": "짐은 모르는 일이다",
"r": "",
"s": {
"문법": "10",
"민심": "-20"
},
"cmd": "isCoward"
}
},
{
"id": 26,
"name": "wiches_alt",
"theme": "church",
"char": "anyone",
"cond": "spiritual>60 and demography<40 and year>620",
"wait": "40",
"weight": "10",
"text": "성난 무리가 저잣거리 주막을 덮치고 있사옵니다! 주막 사람들이 도깨비에 씌었다고 외치옵니다!",
"R": {
"c": "무리를 흩어라!",
"r": "",
"s": {
"문법": "-5",
"민심": "-10"
},
"cmd": ""
},
"L": {
"c": "먼저 사정을 알아보라",
"r": "",
"s": {
"문법": "10"
},
"cmd": "witchhunt and isCoward"
}
},
{
"id": 27,
"name": "theocracy",
"theme": "church",
"char": "priest",
"cond": "inquisition",
"wait": "200",
"weight": "12",
"text": "전하께서는 집현전의 법도를 어기셨사옵니다. 옥체를 잠시 모셔야겠사옵니다.",
"R": {
"c": "뉘우치겠다",
"r": "",
"s": {
"문법": "5",
"군사": "-20?",
"국고": "-5"
},
"cmd": "theocracy"
},
"L": {
"c": "닥쳐라!",
"r": "",
"s": {
"문법": "-100"
},
"cmd": ">_end_fire"
}
},
{
"id": 28,
"name": "money_church",
"theme": "church",
"char": "priest",
"cond": "nb_church_keep>3",
"wait": "46",
"weight": "10",
"text": "전하, 서원이 가진 논밭과 건물을 돌보는 데 힘을 보태 주시옵소서.",
"R": {
"c": "보태겠다",
"r": "",
"s": {
"문법": "10",
"국고": "-15"
},
"cmd": ""
},
"L": {
"c": "서원 일은 서원이 하라",
"r": "",
"s": {
"문법": "-5",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 29,
"name": "mess",
"theme": "church",
"char": "priest",
"cond": "",
"wait": "80",
"weight": "10",
"text": "돌아가신 선왕을 기리는 제사를 올리시옵소서.",
"R": {
"c": "올려라",
"r": "",
"s": {
"문법": "5",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "그럴 겨를이 없다",
"r": "",
"s": {
"문법": "-10?",
"군사": "-10?"
},
"cmd": ""
}
},
{
"id": 30,
"name": "",
"theme": "church",
"char": "monk",
"cond": "!has_prophet",
"wait": "del",
"weight": "50",
"text": "전하, 어떤 이는 요즘 도는 역병이 사람들에게 너그러움을 가르치려는 하늘의 뜻이라 하옵니다…",
"R": {
"c": "그럴 수도 있겠지",
"r": "(<monk>를(을) 밀치고 한 사내가 편전으로 들어왔다.)",
"s": {
"문법": "-5"
},
"cmd": "add_prophet and >"
},
"L": {
"c": "아니다…",
"r": "(<monk>를 밀치고 한 사내가 편전으로 들어왔다.)",
"s": {
"문법": "-5"
},
"cmd": "add_prophet and >"
}
},
{
"id": 31,
"name": "_",
"theme": "church",
"char": "prophet",
"cond": "",
"wait": "",
"weight": "",
"text": "이보게! 나와 함께 빌어 주게. 하늘이 내게 무시무시한 뜻을 보였네! 짐승이라네!",
"R": {
"c": "무슨 뜻이냐?",
"r": "",
"s": {
"문법": "-5"
},
"cmd": ">"
},
"L": {
"c": "청하지 않은 자는 만나지 않는다",
"r": "",
"s": {
"문법": "-5"
},
"cmd": ">_prophetroom"
}
},
{
"id": 32,
"name": "_",
"theme": "church",
"char": "prophet",
"cond": "",
"wait": "",
"weight": "",
"text": "모든 것이 무너지고 모두가 비참하게 죽는 것을 보았네. 나는 도깨비를 불러내어 하늘에 내 믿음을 보이겠네!",
"R": {
"c": "좋구나…",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ">_prestprophet"
},
"L": {
"c": "위병!",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ">_prestprophet"
}
},
{
"id": 33,
"name": "_prophetroom",
"theme": "church",
"char": "prophet",
"cond": "",
"wait": "",
"weight": "",
"text": "아니야. 이곳은 내가 걷는 땅이야. 그러니 하늘의 땅이나 다름없지!",
"R": {
"c": "그럴지도 모르겠군…",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ">"
},
"L": {
"c": "위병!",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ">"
}
},
{
"id": 34,
"name": "_prestprophet",
"theme": "church",
"char": "priest",
"cond": "",
"wait": "",
"weight": "",
"text": "어리석은 자이옵니다! 이런 사문난적은 엄히 다스려야 하옵니다!",
"R": {
"c": "다스려라",
"r": "(망나니가 마지못해 도사를 끌고 갔다.)",
"s": {
"문법": "5"
},
"cmd": ">_ressucite"
},
"L": {
"c": "놓아주어라",
"r": "",
"s": {
"문법": "-5"
},
"cmd": ">"
}
},
{
"id": 35,
"name": "_judegeprophet",
"theme": "church",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "전하, <priest>가(이) <prophet>를(을) 사문난적이라 부르며 망나니에게 끌고 갔사옵니다!",
"R": {
"c": "흥, 그러하냐…",
"r": "",
"s": {
"문법": "10"
},
"cmd": ">_ressucite"
},
"L": {
"c": "어찌 다들 제멋대로냐?",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ">_ressucite"
}
},
{
"id": 36,
"name": "_ressucite",
"theme": "church",
"char": "prophet",
"cond": "",
"wait": "",
"weight": "",
"text": "나는 다시 살아났다! 하늘의 뜻을 받들어 기울어 가는 이 나라에 사랑과 기쁨의 말을 전하려고!",
"R": {
"c": "하… 하하… 하하하하…",
"r": "",
"s": {
"민심": "5"
},
"cmd": ">"
},
"L": {
"c": "하아…",
"r": "",
"s": {
"민심": "5"
},
"cmd": ">"
}
},
{
"id": 37,
"name": "_",
"theme": "church",
"char": "executioner",
"cond": "",
"wait": "",
"weight": "",
"text": "소인 잘못이 아니옵니다. 이 녀석이 횃불 든 군졸과 부딪치는 바람에 형틀이 다 타 버렸을 뿐이옵니다.",
"R": {
"c": "아하… 아하하하… 하…",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ""
},
"L": {
"c": "…우스운 소리로군",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ""
}
},
{
"id": 38,
"name": "",
"theme": "church",
"char": "prophet",
"cond": "",
"wait": "80",
"weight": "10",
"text": "이 나라 장사치들에게 바른 도리가 무엇인지 알려 주지! 보아라!",
"R": {
"c": "마음대로 해 보라",
"r": "",
"s": {
"문법": "-5",
"군사": "-5?",
"민심": "5?"
},
"cmd": ">"
},
"L": {
"c": "돈을 줄 테니 그만두어라",
"r": "(<prophet>는(은) 낙담하여 떠났지만 엽전은 챙겼다.)",
"s": {
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 39,
"name": "_",
"theme": "church",
"char": "merchant",
"cond": "",
"wait": "",
"weight": "",
"text": "전하, 조금 곤란한 일이 생겼사옵니다…",
"R": {
"c": "짐이 돈으로 풀겠다",
"r": "(<prophet>가 장터에서 설법을 하다 가축을 놀라게 하여 다친 사람이 많이 났다.)",
"s": {
"국고": "-20"
},
"cmd": ""
},
"L": {
"c": "(못 들은 척한다.)",
"r": "(<prophet>는(은) 장터에서 설법을 하다 가축을 놀라게 하여 다친 사람이 많이 났다.)",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 40,
"name": "",
"theme": "church",
"char": "prophet",
"cond": "",
"wait": "100",
"weight": "10",
"text": "아직도 하늘을 믿지 않는 자들을 만나러 가겠네. 내게 볼일이 있는가?",
"R": {
"c": "여기 머물러라",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"국고": "-5"
},
"cmd": ""
},
"L": {
"c": "이웃 나라로 가 보라",
"r": "(<prophet>가 다녀간 뒤 이웃 나라는 어지러워졌고 우리나라는 오히려 자리를 굳혔다.)",
"s": {
"군사": "10?",
"민심": "-5",
"국고": "?20"
},
"cmd": ""
}
},
{
"id": 41,
"name": "",
"theme": "church",
"char": "diplomat",
"cond": "has_prophet",
"wait": "del",
"weight": "10",
"text": "전하, <prophet>가 정신이 온전치는 않으나 해로운 자는 아니옵니다. 백성들은 '얼간이 도사'라 부르며 아끼고 있사옵니다.",
"R": {
"c": "좋을 대로 하라",
"r": "",
"s": {
"문법": "-15?",
"군사": "-5",
"민심": "10",
"국고": "-5"
},
"cmd": ""
},
"L": {
"c": "그자에게서 눈을 떼지 마라",
"r": "",
"s": {
"문법": "5?",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 42,
"name": "",
"theme": "church",
"char": "anyone",
"cond": "has_prophet and year>1000",
"wait": "del",
"weight": "100",
"text": "<prophet>가 요괴의 심부름꾼이라는 자들을 불태우려다 그만 불에 타 죽었사옵니다!",
"R": {
"c": "장례를 성대히 치러라",
"r": "",
"s": {
"문법": "-5?",
"민심": "15?",
"국고": "-5"
},
"cmd": "del_prophet"
},
"L": {
"c": "성가신 자가 사라졌군",
"r": "",
"s": {
"문법": "5?",
"민심": "-10?"
},
"cmd": "del_prophet"
}
},
{
"id": 43,
"name": "",
"theme": "church",
"char": "anyone",
"cond": "!has_prophet and year>1100",
"wait": "del",
"weight": "14",
"text": "소문에 새 도사가 나타났다 하옵니다만…",
"R": {
"c": "그러하냐…",
"r": "",
"s": {},
"cmd": "add_prophet and >"
},
"L": {
"c": "말도 안 되는 소리…",
"r": "",
"s": {},
"cmd": "add_prophet and >"
}
},
{
"id": 44,
"name": "_",
"theme": "church",
"char": "prophet>fanzy",
"cond": "",
"wait": "",
"weight": "",
"text": "나를 기억하는가? 또 살아났다네!",
"R": {
"c": "축하한다",
"r": "",
"s": {
"문법": "-5?",
"민심": "10?"
},
"cmd": ""
},
"L": {
"c": "네 말은 믿지 않는다",
"r": "",
"s": {
"문법": "5?",
"민심": "-10?"
},
"cmd": ""
}
},
{
"id": 45,
"name": "",
"theme": "church",
"char": "prophet>fanzy",
"cond": "year>1100",
"wait": "100",
"weight": "10",
"text": "학사와 유생은 하늘의 심부름꾼이 아니야.",
"R": {
"c": "네가 틀렸다",
"r": "",
"s": {
"문법": "5?"
},
"cmd": ""
},
"L": {
"c": "네 말이 맞다",
"r": "",
"s": {
"문법": "-15?"
},
"cmd": ""
}
},
{
"id": 46,
"name": "priestunhappy",
"theme": "church",
"char": "priest",
"cond": "no_priest>1",
"wait": "60",
"weight": "10",
"text": "전하께서는 신의 말을 귀담아듣지 않으시는군요. 백성이든 왕이든 하늘의 뜻 아래 있음을 잊지 마시옵소서!",
"R": {
"c": "뉘우치겠다",
"r": "",
"s": {
"문법": "15?"
},
"cmd": ""
},
"L": {
"c": "너도 하늘은 아니지 않으냐",
"r": "",
"s": {
"문법": "-10?"
},
"cmd": ">>>>_priesttreason"
}
},
{
"id": 47,
"name": "_priesttreason",
"theme": "treason",
"char": "priest",
"cond": "",
"wait": "",
"weight": "",
"text": "전하의 뜻과 상관없이 오늘은 옛 성현의 묘소에 꼭 가 주셔야겠사옵니다. 목숨이 걸린 일이옵니다.",
"R": {
"c": "가겠다",
"r": "",
"s": {
"문법": "5",
"민심": "-5?"
},
"cmd": ">"
},
"L": {
"c": "가지 않겠다",
"r": "",
"s": {
"문법": "-15?"
},
"cmd": ">"
}
},
{
"id": 48,
"name": "_crypt_death",
"theme": "treason",
"char": "priest",
"cond": "",
"wait": "",
"weight": "",
"text": "성현들께서 전하의 허물을 용서하시기를… (등 뒤에 누군가의 기척이 느껴진다.)",
"R": {
"c": "무슨 뜻이냐!",
"r": "(무장한 유생이 뒤에서 왕의 손을 묶었다.)",
"s": {
"문법": "100?"
},
"cmd": ">_end_fire"
},
"L": {
"c": "위병!",
"r": "(왕은 아슬아슬하게 위기를 피했다. <priest>는(은) 망나니에게 넘겨졌다.)",
"s": {
"문법": "-20?"
},
"cmd": "del_priest"
}
},
{
"id": 49,
"name": "holyking",
"theme": "church",
"char": "monk",
"cond": "spiritual>70",
"wait": "120",
"weight": "10",
"text": "전하께서 성현의 반열에 오르셨사옵니다! 산림의 큰 선비께서 대궐 안에 거처를 짓고 싶다 하옵니다.",
"R": {
"c": "허락한다",
"r": "",
"s": {
"문법": "10",
"군사": "-15?",
"민심": "-5",
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "대궐은 내 집이다",
"r": "",
"s": {
"문법": "-15?"
},
"cmd": ">>>priestunhappy"
}
},
{
"id": 50,
"name": "rumour",
"theme": "conspiracy",
"char": "doctor",
"cond": "has_nobleman and !conspiracy_keep",
"wait": "100",
"weight": "15",
"text": "전하, 은밀히 아뢸 말씀이 있사옵니다. 대제학께서는 잠시 기다리셔야겠사옵니다만…",
"R": {
"c": "들어 보자",
"r": "(의원이 안쪽 방으로 들어가 조심스레 입을 열었다… 지난주에 앓아누웠던 <nobleman>에 관한 이야기다.)",
"s": {
"문법": "-5?",
"군사": "5",
"민심": "5"
},
"cmd": ">"
},
"L": {
"c": "대제학 앞에서 말하라",
"r": "",
"s": {
"문법": "10",
"군사": "-5?",
"민심": "-5?",
"국고": "-5?"
},
"cmd": ">church"
}
},
{
"id": 51,
"name": "_rumour2",
"theme": "conspiracy",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "",
"text": "얕은 잠이 든 <nobleman>이(가) 잠꼬대로 전하를 해칠 계획을 입에 올렸사옵니다. 직접 데려올까요?",
"R": {
"c": "데려오라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "못 들은 것으로 하라",
"r": "",
"s": {
"군사": "-5?",
"민심": "-5?",
"국고": "-5?"
},
"cmd": ""
}
},
{
"id": 52,
"name": "_rumour3",
"theme": "conspiracy",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "말도 안 되는 소리이옵니다! 그 의원이야말로 속이 시커먼 자이옵니다. 그자가 숨은 방에서 무엇을 했는지부터 캐물으소서!",
"R": {
"c": "바른대로 말하라!",
"r": "(왕이 말을 멈추자 <nobleman>은(는) 무릎을 꿇고) \"그림자 정승…!\" (이라고 외쳤다.)",
"s": {
"문법": "-5?"
},
"cmd": "> and del_nobleman and conspiracy_keep"
},
"L": {
"c": "의원을 불러라",
"r": "",
"s": {
"문법": "5",
"민심": "-5?"
},
"cmd": ">_hidden_room"
}
},
{
"id": 53,
"name": "_rumour4",
"theme": "conspiracy",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "",
"text": "…죽었사옵니다! 독살이옵니다! 누군가 입을 막으려 한 것이 틀림없사옵니다.",
"R": {
"c": "범인을 찾아라",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "그 숨은 방 말인데…",
"r": "",
"s": {
"문법": "10?"
},
"cmd": ">_hidden_room"
}
},
{
"id": 54,
"name": "",
"theme": "conspiracy",
"char": "merchant",
"cond": "conspiracy_keep",
"wait": "120",
"weight": "10",
"text": "이름난 거상이 누군가에게 살해되었사옵니다. 범인이 '그림자 정승'이라는 소문도 있사옵니다. 조사해 볼까요?",
"R": {
"c": "조사하라",
"r": "",
"s": {
"국고": "5?"
},
"cmd": ""
},
"L": {
"c": "장사치 일에는 끼지 않겠다",
"r": "",
"s": {
"군사": "-5",
"국고": "-15?"
},
"cmd": ""
}
},
{
"id": 55,
"name": "rumour_spy",
"theme": "conspiracy",
"char": "spy",
"cond": "conspiracy_keep",
"wait": "200",
"weight": "10",
"text": "연못 개구리가 그러더이다. 그림자 정승이 범인이라고.",
"R": {
"c": "개구리?",
"r": "",
"s": {
"국고": "-10"
},
"cmd": ">"
},
"L": {
"c": "물러가라",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 56,
"name": "_rumour_spy2",
"theme": "conspiracy",
"char": "spy",
"cond": "",
"wait": "",
"weight": "",
"text": "그림자 정승은 전하 바로 눈앞에 숨어 있사옵니다.",
"R": {
"c": "그러하냐?",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "눈앞이라니?",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 57,
"name": "intro",
"theme": "conspiracy",
"char": "spy",
"cond": "",
"wait": "400",
"weight": "12",
"text": "나는 여기 없소… 나는 그림자요…",
"R": {
"c": "뭐라…?",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "농인가…?",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 58,
"name": "",
"theme": "conspiracy",
"char": "spy",
"cond": "!terrorism",
"wait": "100",
"weight": "10",
"text": "교활한 뱀이 전하의 소맷자락 속에 숨어 있사옵니다.",
"R": {
"c": "뭐라?",
"r": "",
"s": {},
"cmd": ">>>>terror"
},
"L": {
"c": "물러가라",
"r": "",
"s": {},
"cmd": ">>>>terror"
}
},
{
"id": 59,
"name": "rumour1",
"theme": "conspiracy",
"char": "spy",
"cond": "has_nun and school_keep",
"wait": "200",
"weight": "6",
"text": "서당에 역적이 들끓고 근거 없는 소문이 넘쳐나옵니다. 제 귀가 되어 주는 자가 있는데, 알아볼까요?",
"R": {
"c": "알아보라",
"r": "",
"s": {
"문법": "-5?",
"군사": "5?",
"국고": "-8"
},
"cmd": ">"
},
"L": {
"c": "놔두어라",
"r": "",
"s": {
"군사": "-10?"
},
"cmd": ""
}
},
{
"id": 60,
"name": "_",
"theme": "conspiracy",
"char": "spy",
"cond": "",
"wait": "",
"weight": "",
"text": "참으로 안타깝사옵니다… 역적 가운데 <nun> 훈장도 있었사옵니다…",
"R": {
"c": "그자를 잡아라",
"r": "",
"s": {
"문법": "-10"
},
"cmd": ">"
},
"L": {
"c": "더는 듣고 싶지 않다…",
"r": "",
"s": {
"문법": "10"
},
"cmd": ""
}
},
{
"id": 61,
"name": "_",
"theme": "conspiracy",
"char": "spy",
"cond": "",
"wait": "",
"weight": "",
"text": "그리고 망나니 <executioner>도 한패였사옵니다.",
"R": {
"c": "쓸 만한 소식이구나…",
"r": "",
"s": {
"문법": "-10?"
},
"cmd": ""
},
"L": {
"c": "더는 듣고 싶지 않다…",
"r": "",
"s": {
"문법": "15?"
},
"cmd": ""
}
},
{
"id": 62,
"name": "conspiracy1",
"theme": "conspiracy",
"char": "spy",
"cond": "has_general",
"wait": "40",
"weight": "10",
"text": "<general>, 물살을 거슬러 오르는 연어 같구려…",
"R": {
"c": "그러하냐…",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ""
},
"L": {
"c": "잊어라…",
"r": "",
"s": {
"군사": "10"
},
"cmd": ""
}
},
{
"id": 63,
"name": "traitor",
"theme": "conspiracy",
"char": "spy",
"cond": "nb_murder>0 and has_queen",
"wait": "40",
"weight": "10",
"text": "고양이를 풀어 두었지요. 신나게 쥐를 잡고 있사옵니다.",
"R": {
"c": "고양이?",
"r": "",
"s": {
"군사": "5",
"민심": "5"
},
"cmd": ">"
},
"L": {
"c": "적당히 하라…",
"r": "",
"s": {
"문법": "-10?",
"민심": "-5?"
},
"cmd": ""
}
},
{
"id": 64,
"name": "_traitor_clue",
"theme": "conspiracy",
"char": "spy",
"cond": "",
"wait": "",
"weight": "",
"text": "고양이 울음 값은 비싸게 받겠사옵니다.",
"R": {
"c": "값을 치르마",
"r": "",
"s": {
"국고": "-20"
},
"cmd": ">"
},
"L": {
"c": "그런 건 안 산다",
"r": "",
"s": {
"군사": "-10?"
},
"cmd": ""
}
},
{
"id": 65,
"name": "_",
"theme": "conspiracy",
"char": "spy",
"cond": "",
"wait": "",
"weight": "",
"text": "고양이 한 마리가 전하의 침전에 숨어 전하를 노리고 있사옵니다.",
"R": {
"c": "음…",
"r": "",
"s": {
"군사": "5?"
},
"cmd": "!nb_murder"
},
"L": {
"c": "너는 미쳤구나…",
"r": "",
"s": {
"군사": "-5?",
"민심": "5?"
},
"cmd": "!nb_murder"
}
},
{
"id": 66,
"name": "assasin1",
"theme": "conspiracy",
"char": "general",
"cond": "!nb_murder and military>60",
"wait": "300",
"weight": "10",
"text": "지하 궁에서 두 손이 없는 시신이 나왔사옵니다. 누구인지는 알 수 없사옵니다. 군사를 늘리시겠사옵니까?",
"R": {
"c": "늘려라",
"r": "",
"s": {
"군사": "10"
},
"cmd": "nb_murder+"
},
"L": {
"c": "군졸들은 쓸모가 없다…",
"r": "",
"s": {
"군사": "-5?"
},
"cmd": "nb_murder+ and >>assasin2"
}
},
{
"id": 67,
"name": "",
"theme": "",
"char": "monk",
"cond": "nb_murder>0 and has_general",
"wait": "100",
"weight": "10",
"text": "지하 궁에서 사람을 죽인 자는 그 사악한 망나니이옵니다!",
"R": {
"c": "네 말을 믿겠다",
"r": "",
"s": {
"문법": "10?",
"군사": "-5?"
},
"cmd": ">"
},
"L": {
"c": "네 말은 믿지 않는다",
"r": "",
"s": {
"문법": "-10?",
"군사": "5"
},
"cmd": ">"
}
},
{
"id": 68,
"name": "_",
"theme": "",
"char": "executioner",
"cond": "",
"wait": "",
"weight": "",
"text": "제 일이 험한 건 맞사오나 즐기지는 않사옵니다. 실은 텃밭에 나물을 기르고 산천 구경하는 게 낙이옵니다.",
"R": {
"c": "그대를 믿겠다",
"r": "",
"s": {
"문법": "-5?",
"민심": "10"
},
"cmd": ">"
},
"L": {
"c": "그 말은 믿지 않는다",
"r": "",
"s": {
"문법": "10?",
"민심": "-5"
},
"cmd": ">>>>assasin2"
}
},
{
"id": 69,
"name": "_",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "그럼 살인범은 누구이옵니까?",
"R": {
"c": "짐은 알고 있다",
"r": "",
"s": {},
"cmd": ">_whois"
},
"L": {
"c": "모른다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 70,
"name": "_whois",
"theme": "",
"char": "jester",
"cond": "has_priest",
"wait": "10",
"weight": "100",
"text": "대제학?",
"R": {
"c": "그래, 대제학이다",
"r": "",
"s": {
"문법": "-20?",
"군사": "2?",
"민심": "2?",
"국고": "2?"
},
"cmd": "del_priest and >>>assasin2"
},
"L": {
"c": "아니다",
"r": "",
"s": {},
"cmd": ">_whois"
}
},
{
"id": 71,
"name": "_whois",
"theme": "",
"char": "diplomat",
"cond": "has_doctor",
"wait": "10",
"weight": "100",
"text": "의원?",
"R": {
"c": "그래, 의원이다",
"r": "",
"s": {
"문법": "2?",
"군사": "2?",
"민심": "-20?",
"국고": "2?"
},
"cmd": "del_doctor and >>>assasin2"
},
"L": {
"c": "아니다",
"r": "",
"s": {},
"cmd": ">_whois"
}
},
{
"id": 72,
"name": "_whois",
"theme": "",
"char": "priest",
"cond": "has_general",
"wait": "10",
"weight": "100",
"text": "대장군?",
"R": {
"c": "그래, 대장군이다",
"r": "(<general>은(는) 살인을 시킨 것이 자기라고 털어놓았다. 왕에게서 군사를 늘릴 허락을 받아 내려 한 짓이었다.)",
"s": {
"문법": "8?",
"군사": "-20?",
"민심": "8?",
"국고": "8?"
},
"cmd": "!nb_murder and del_general"
},
"L": {
"c": "아니다",
"r": "",
"s": {},
"cmd": ">_whois"
}
},
{
"id": 73,
"name": "_whois",
"theme": "",
"char": "farmer",
"cond": "has_merchant",
"wait": "10",
"weight": "100",
"text": "객주?",
"R": {
"c": "그래, 객주다",
"r": "",
"s": {
"문법": "2?",
"군사": "2?",
"민심": "2?",
"국고": "-20?"
},
"cmd": ""
},
"L": {
"c": "아니다",
"r": "",
"s": {},
"cmd": ">_whois"
}
},
{
"id": 74,
"name": "_whois",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "1",
"text": "실은 모르시는 것 아니옵니까…?",
"R": {
"c": "나중에 말하겠다",
"r": "",
"s": {
"문법": "-5?",
"군사": "5?",
"민심": "-5?",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "…",
"r": "",
"s": {
"문법": "-5?",
"군사": "5?",
"민심": "-5?",
"국고": "-5?"
},
"cmd": ""
}
},
{
"id": 75,
"name": "assasin2",
"theme": "conspiracy",
"char": "general",
"cond": "nb_murder>0",
"wait": "6",
"weight": "20",
"text": "지하 궁에서 또 시신이 나왔사옵니다. 백성들이 불안에 떨며 군사를 늘려 달라 하옵니다.",
"R": {
"c": "늘려라",
"r": "",
"s": {
"군사": "15",
"국고": "-5"
},
"cmd": "nb_murder+"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"민심": "-10"
},
"cmd": "nb_murder+"
}
},
{
"id": 76,
"name": "assasin3",
"theme": "conspiracy",
"char": "monk",
"cond": "nb_murder>1 and has_queen",
"wait": "reign",
"weight": "8",
"text": "전하, 중전마마께서 변을 당하셨사옵니다… 옥체가 지하 궁에서 발견되었다 하옵니다…",
"R": {
"c": "경비를 늘려라",
"r": "",
"s": {
"군사": "20",
"국고": "-10?"
},
"cmd": "del_queen and !queendom"
},
"L": {
"c": "말도 안 된다…!",
"r": "",
"s": {
"군사": "-10",
"민심": "5"
},
"cmd": "del_queen and !queendom"
}
},
{
"id": 77,
"name": "",
"theme": "conspiracy",
"char": "diplomat",
"cond": "conspiracy_keep",
"wait": "200",
"weight": "20",
"text": "전하, 큰일이옵니다. (다급하게) 어서 저를 따라오시옵소서. 자! 어서요!",
"R": {
"c": "따라간다",
"r": "(<diplomat>을(를) 따라 대궐 밖으로 나서자마자 몸에 힘이 빠지고 눈앞이 빙글빙글 돌기 시작했다.)",
"s": {
"문법": "-100?",
"군사": "-100?",
"민심": "-100?",
"국고": "-100?"
},
"cmd": "> and add_lady"
},
"L": {
"c": "여기서 말하라",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 78,
"name": "_",
"theme": "conspiracy",
"char": "diplomat>dark",
"cond": "",
"wait": "",
"weight": "",
"text": "이게 누구신가. 가엾은 전하. 눈을 떠 보시겠사옵니까? (눈이 가려져 아무것도 보이지 않고 두 손도 묶여 있다.)",
"R": {
"c": "…누구냐?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(입을 다문다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 79,
"name": "_",
"theme": "conspiracy",
"char": "diplomat>dark",
"cond": "",
"wait": "",
"weight": "",
"text": "좋사옵니다. 그럼 잘 들으시옵소서… 소인이 바로 '그림자 정승'이옵니다…",
"R": {
"c": "뭐라?",
"r": "(쿵 하는 소리와 함께 누군가 왕을 풀어 주었다.) \"늦기 전에 달아나시옵소서!\"",
"s": {},
"cmd": ">_madrun and nb_madrun+++"
},
"L": {
"c": "(입을 다문다.)",
"r": "(쿵 하는 소리와 함께 누군가 왕을 풀어 주었다.) \"늦기 전에 달아나시옵소서!\"",
"s": {},
"cmd": ">_madrun and nb_madrun+++"
}
},
{
"id": 80,
"name": "_madrun",
"theme": "conspiracy",
"char": "diplomat>dark",
"cond": "",
"wait": "3",
"weight": "10",
"text": "(눈이 가려진 채 왕은 죽을힘을 다해 달렸다.)",
"R": {
"c": "(왼쪽으로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun"
},
"L": {
"c": "(오른쪽으로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun"
}
},
{
"id": 81,
"name": "_madrun",
"theme": "conspiracy",
"char": "lady>dark",
"cond": "",
"wait": "3",
"weight": "10",
"text": "이쪽이옵니다!",
"R": {
"c": "(목소리 쪽으로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun and nb_madrun-"
},
"L": {
"c": "(오른쪽으로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun and nb_madrun+"
}
},
{
"id": 82,
"name": "_madrun",
"theme": "conspiracy",
"char": "diplomat>dark",
"cond": "",
"wait": "3",
"weight": "10",
"text": "(발밑에 풀이 자라 있는 것 같다. 나무에 부딪히지 않아야 할 텐데…)",
"R": {
"c": "(왼쪽으로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun"
},
"L": {
"c": "(오른쪽으로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun"
}
},
{
"id": 83,
"name": "_madrun",
"theme": "conspiracy",
"char": "lady>dark",
"cond": "",
"wait": "3",
"weight": "10",
"text": "그쪽이 아니옵니다! 오른쪽이옵니다!",
"R": {
"c": "(왼쪽으로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun"
},
"L": {
"c": "(오른쪽으로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun and nb_madrun-"
}
},
{
"id": 84,
"name": "_madrun",
"theme": "conspiracy",
"char": "diplomat>dark",
"cond": "",
"wait": "3",
"weight": "10",
"text": "(멀리서 물 흐르는 소리가 들린다.)",
"R": {
"c": "(그대로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun and nb_madrun+"
},
"L": {
"c": "(오른쪽으로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun"
}
},
{
"id": 85,
"name": "_madrun",
"theme": "conspiracy",
"char": "diplomat>dark",
"cond": "",
"wait": "3",
"weight": "10",
"text": "(가까이에 강이 있는 것 같다.)",
"R": {
"c": "(왼쪽으로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun and nb_madrun-"
},
"L": {
"c": "(그대로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun and nb_madrun+"
}
},
{
"id": 86,
"name": "_madrun",
"theme": "conspiracy",
"char": "diplomat>dark",
"cond": "",
"wait": "3",
"weight": "10",
"text": "(왼쪽에서 누군가 큰 소리로 부른다.)",
"R": {
"c": "(왼쪽으로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun and nb_madrun+"
},
"L": {
"c": "(오른쪽으로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun"
}
},
{
"id": 87,
"name": "_madrun",
"theme": "conspiracy",
"char": "end>dead_king_drown",
"cond": "nb_madrun>4",
"wait": "3",
"weight": "40",
"text": "(왕은 갑자기 차가운 물에 빠졌다. 물살을 거스르려 몸부림쳤지만 소용없었다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 88,
"name": "_madrun",
"theme": "conspiracy",
"char": "lady>dark",
"cond": "!nb_madrun",
"wait": "3",
"weight": "40",
"text": "자, 여기까지 왔으니 이제 괜찮사옵니다!",
"R": {
"c": "(멈춰 선다.)",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(그대로 달린다.)",
"r": "",
"s": {},
"cmd": ">_madrun and nb_madrun++++"
}
},
{
"id": 89,
"name": "_",
"theme": "conspiracy",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "전하, 저이옵니다. <lady>이옵니다. 소리를 내시면 아니 되옵니다. 놈들이 눈치챌 것이옵니다.",
"R": {
"c": "(뒤를 돌아본다.)",
"r": "(왕은 큰 그루터기 그늘에 엎드려 있었다. 횃불을 든 사내들이 다가왔지만 알아채지 못하고 지나갔다.)",
"s": {},
"cmd": ">"
},
"L": {
"c": "(가만히 있는다.)",
"r": "(<lady>의 숨은 가쁘고 머리도 흐트러져 있다. 여럿이 곁을 지나쳐 가는 소리가 들렸지만 멈추는 이는 없었다.)",
"s": {},
"cmd": ">"
}
},
{
"id": 90,
"name": "_",
"theme": "conspiracy",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "위험은 사라졌사옵니다. 함께 대궐로 돌아가시지요.",
"R": {
"c": "고맙소",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "무슨 일이 있었던 것이오?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 91,
"name": "_",
"theme": "conspiracy",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "전하께서 대궐을 나서시는 것을 보고 몰래 뒤따랐사옵니다. 그랬더니 <diplomat>이(가) 전하께 몹쓸 짓을…",
"R": {
"c": "그대는 용감하구려",
"r": "",
"s": {
"문법": "50",
"군사": "50",
"민심": "50",
"국고": "50"
},
"cmd": "del_diplomat and isLover and >>>>_senatorrevealed"
},
"L": {
"c": "고맙소",
"r": "",
"s": {
"문법": "50",
"군사": "50",
"민심": "50",
"국고": "50"
},
"cmd": "del_diplomat and >"
}
},
{
"id": 92,
"name": "_",
"theme": "conspiracy",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "아니옵니다, 고맙다니요. 전하를 위해서라면 무슨 일이든 하겠사옵니다.",
"R": {
"c": "(손을 꼭 잡는다.)",
"r": "",
"s": {},
"cmd": "isLover and >>>>_senatorrevealed"
},
"L": {
"c": "참으로 고맙소",
"r": "",
"s": {},
"cmd": "isLover and >>>>_senatorrevealed"
}
},
{
"id": 93,
"name": "_senatorrevealed",
"theme": "conspiracy",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "전하, 그 '모험'이 있던 날로부터 세 해가 지났사옵니다. 저희에게는 이제 시간이 많지 않사옵니다.",
"R": {
"c": "무슨 말이오?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "시간이라니?",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 94,
"name": "_",
"theme": "conspiracy",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "전하께서는 제 말을 거스르실 수 없사옵니다. 전하께 걸린 상사병의 저주 때문이지요.",
"R": {
"c": "저주라니…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "그럴 리가…",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 95,
"name": "_",
"theme": "conspiracy",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "하지만 사실은 연모와는 아무 상관이 없다는 것, 아시지요. 부디 용서하시옵소서. 전하께서 제 말을 꼭 들어 주셔야만 했사옵니다.",
"R": {
"c": "말해 보시오",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "…",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 96,
"name": "_",
"theme": "conspiracy",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "이 저주뿐 아니라 전하께 일어난 모든 일은 도깨비 왕이 꾸민 짓이옵니다.",
"R": {
"c": "도깨비 왕?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "설마…",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 97,
"name": "_",
"theme": "conspiracy",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "그렇사옵니다, 전하. '그림자 정승'은 바로 저이옵니다.",
"R": {
"c": "그대가…?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "믿을 수 없소",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 98,
"name": "_",
"theme": "conspiracy",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "이렇게 전하와 이야기할 틈을 얻으려고, 오랫동안 계책을 꾸미고 여러 일을 벌여 도깨비 왕을 바쁘게 만들었지요.",
"R": {
"c": "그래서?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "어찌 그런 일을…",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 99,
"name": "_",
"theme": "conspiracy",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "시간이 없사옵니다. 잘 들으시옵소서. 도깨비 왕을 속이는 길은 단 하나…",
"R": {
"c": "무엇이오?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "어서 말하시오",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 100,
"name": "_",
"theme": "conspiracy",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "도깨비 왕에게 이룰 수 없는 소원을 비시옵소서. 아무리 애써도 끝내 이룰 수 없는 소원 말이옵니다.",
"R": {
"c": "명심하겠소",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "그런 소원이 있소?",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 101,
"name": "_",
"theme": "conspiracy",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "이제 저는 돌아가야만 하옵니다… 쉿… 방금 이야기는 우리 둘만의 비밀이옵니다.",
"R": {
"c": "알겠소",
"r": "",
"s": {},
"cmd": "!isLover and !conspiracy_keep and isSenator"
},
"L": {
"c": "잠깐, 더 묻고 싶소",
"r": "",
"s": {},
"cmd": "!isLover and !conspiracy_keep and isSenator"
}
},
{
"id": 102,
"name": "rabbit",
"theme": "crusade",
"char": "priest",
"cond": "demography>50 and !crusade_keep",
"wait": "100",
"weight": "10",
"text": "소작인들이 아이를 너무 많이 낳아 가난이 심해지고 있사옵니다. 전하, 방책을 세워 주시옵소서.",
"R": {
"c": "집현전이 방책을 내라",
"r": "",
"s": {
"문법": "15?"
},
"cmd": "add_monk and >_crusade"
},
"L": {
"c": "백성 일에 끼어들지 마라",
"r": "",
"s": {
"민심": "5?"
},
"cmd": ""
}
},
{
"id": 103,
"name": "_crusade",
"theme": "crusade",
"char": "monk",
"cond": "",
"wait": "",
"weight": "",
"text": "사내들을 모두 북벌에 보내시옵소서. 불로초를 찾는 싸움에서 죽는 것은 더없는 영광이옵니다!",
"R": {
"c": "보내라",
"r": "",
"s": {
"문법": "10",
"군사": "20?",
"민심": "-30",
"국고": "-15"
},
"cmd": "crusade_keep and !spice_trade_keep"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "-20?",
"민심": "5?"
},
"cmd": ""
}
},
{
"id": 104,
"name": "crusade_alt",
"theme": "crusade",
"char": "merchant",
"cond": "money<50 and !crusade_keep",
"wait": "100",
"weight": "10",
"text": "전하, 북방 나라와의 사이가 급히 나빠지고 있사옵니다. 놈들은 우리보다 훨씬 부유하옵니다!",
"R": {
"c": "무슨 수가 있느냐?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "더는 듣고 싶지 않다…",
"r": "",
"s": {
"국고": "-15"
},
"cmd": ""
}
},
{
"id": 105,
"name": "_crusade_alt",
"theme": "crusade",
"char": "merchant",
"cond": "",
"wait": "",
"weight": "",
"text": "북벌을 일으키시겠사옵니까?",
"R": {
"c": "좋다",
"r": "",
"s": {
"문법": "10",
"군사": "20?",
"민심": "-30",
"국고": "-15"
},
"cmd": "crusade_keep and !spice_trade_keep"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "-20?",
"민심": "5?"
},
"cmd": ""
}
},
{
"id": 106,
"name": "saintgraal",
"theme": "crusade",
"char": "general",
"cond": "crusade_keep",
"wait": "60",
"weight": "15",
"text": "하늘을 섬기지 않는 자들을 치려면 군자금이 더 필요하옵니다!",
"R": {
"c": "내어 주마",
"r": "",
"s": {
"문법": "5",
"군사": "10?",
"국고": "-20"
},
"cmd": ""
},
"L": {
"c": "더는 못 준다",
"r": "",
"s": {
"문법": "-15",
"군사": "-20?"
},
"cmd": ""
}
},
{
"id": 107,
"name": "saintgraal1",
"theme": "crusade",
"char": "general",
"cond": "crusade_keep",
"wait": "60",
"weight": "15",
"text": "전하, 사막의 성을 불태우고 성안 사람들을 모두 없앨까요?",
"R": {
"c": "그리하라",
"r": "",
"s": {
"문법": "10?",
"군사": "5?",
"민심": "-10?",
"국고": "-5"
},
"cmd": ""
},
"L": {
"c": "그건 아니 된다",
"r": "",
"s": {
"문법": "-5",
"군사": "-10"
},
"cmd": ""
}
},
{
"id": 108,
"name": "saintgraal2",
"theme": "crusade",
"char": "monk",
"cond": "crusade_keep",
"wait": "60",
"weight": "15",
"text": "전하, 사막의 성에 서원을 세우도록 허락해 주시겠사옵니까?",
"R": {
"c": "허락한다",
"r": "",
"s": {
"문법": "25?",
"민심": "5",
"국고": "-25"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "-10?"
},
"cmd": ""
}
},
{
"id": 109,
"name": "saintgraal3",
"theme": "crusade",
"char": "priest",
"cond": "crusade_keep",
"wait": "60",
"weight": "15",
"text": "하늘의 뜻이 내렸사옵니다. 무엇을 잃더라도 불로초를 찾는 싸움을 이어 가야 하옵니다!",
"R": {
"c": "이어 가라",
"r": "",
"s": {
"문법": "20",
"민심": "-5",
"국고": "-20"
},
"cmd": ""
},
"L": {
"c": "이제 그만두자",
"r": "",
"s": {
"문법": "-10?",
"민심": "10"
},
"cmd": ""
}
},
{
"id": 110,
"name": "",
"theme": "crusade",
"char": "homunculus",
"cond": "hopen_keep and crusade_keep and !strawberry_keep",
"wait": "80",
"weight": "20",
"text": "서역 사막 어느 성에 이 세상 가장 큰 비밀이 잠들어 있다네.",
"R": {
"c": "역시 오길 잘했군",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "관심 없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 111,
"name": "_",
"theme": "",
"char": "homunculus",
"cond": "",
"wait": "",
"weight": "",
"text": "솔직히 북벌은 좀 지나치다 싶었는데, 덕분에 이렇게 사막의 성까지 왔구먼…",
"R": {
"c": "그렇다면 다행이군",
"r": "",
"s": {},
"cmd": ">_trackpledge"
},
"L": {
"c": "음…",
"r": "",
"s": {},
"cmd": ">_trackpledge"
}
},
{
"id": 112,
"name": "_trackpledge",
"theme": "",
"char": "homunculus",
"cond": "",
"wait": "",
"weight": "",
"text": "그대가 내게 '얼어붙은 피'를 주었으니 그 보답으로…",
"R": {
"c": "불로초?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "삶의 뜻?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 113,
"name": "_",
"theme": "",
"char": "homunculus",
"cond": "",
"wait": "",
"weight": "",
"text": "아니.",
"R": {
"c": "역시 그런 건 없군",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "그럼 무엇을 주겠느냐?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 114,
"name": "_",
"theme": "",
"char": "homunculus",
"cond": "",
"wait": "",
"weight": "",
"text": "그대에게는 목숨을 주지.",
"R": {
"c": "뭐…?",
"r": "(신선은 왕을 사막 성의 궁 지하로 데려갔다. 그곳에는 구리줄과 손잡이가 잔뜩 달린 괴상한 틀이 있었다.)",
"s": {},
"cmd": ">"
},
"L": {
"c": "뭐…?",
"r": "(신선은 사막 성의 궁 지하에 숨겨진 틀이 있다고 일러 주었다. 구리줄과 손잡이가 잔뜩 달린 괴상한 것이라 한다.)",
"s": {},
"cmd": ">"
}
},
{
"id": 115,
"name": "_",
"theme": "",
"char": "homunculus",
"cond": "",
"wait": "",
"weight": "",
"text": "나는 이 틀에서 태어났지. 그대도 이걸 쓰면 무엇이든 되살릴 수 있다네. 되살리고 싶은 게 있는가?",
"R": {
"c": "있다",
"r": "",
"s": {},
"cmd": ">_makelife"
},
"L": {
"c": "없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 116,
"name": "_makelife",
"theme": "",
"char": "homunculus",
"cond": "niceskel_keep",
"wait": "",
"weight": "max",
"text": "말해 보게.",
"R": {
"c": "천도복숭아!",
"r": "",
"s": {},
"cmd": "strawberry_keep"
},
"L": {
"c": "(아무 말도 하지 않는다.)",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 117,
"name": "_makelife",
"theme": "",
"char": "homunculus",
"cond": "",
"wait": "",
"weight": "10",
"text": "…무엇이 필요한지 잘 생각해 보고 다시 나를 찾아와도 좋네. 여기 사막의 성에서 기다리겠네.",
"R": {
"c": "다시 오겠다",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "됐다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 118,
"name": "saintgraal4",
"theme": "crusade",
"char": "diplomat",
"cond": "crusade_keep",
"wait": "60",
"weight": "15",
"text": "서역 칸의 사신이 사막의 성에서 전하를 뵙기를 청하옵니다.",
"R": {
"c": "만나 보겠다",
"r": "",
"s": {
"문법": "-10",
"군사": "-5",
"민심": "5"
},
"cmd": "> and add_foreign_princess"
},
"L": {
"c": "만나지 않겠다",
"r": "",
"s": {
"문법": "10",
"군사": "5"
},
"cmd": ""
}
},
{
"id": 119,
"name": "hostage",
"theme": "crusade",
"char": "foreign_princess",
"cond": "crusade_keep",
"wait": "60",
"weight": "9",
"text": "부디 이 북벌을 멈추어 주시옵소서. 원하신다면 보물을 가져가시고 군사를 물려 주시옵소서. 쓸데없는 싸움일 뿐이옵니다!",
"R": {
"c": "보물을 받고 물러나겠다",
"r": "(<foreign_princess>는(은) 사막 성의 보물 창고 열쇠를 건네고 왕의 눈을 똑바로 보며 속삭였다.) \"머지않아 꼭 갚아 드리지요…\"",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "15",
"국고": "40"
},
"cmd": "!crusade_keep and isPeaceful"
},
"L": {
"c": "싸움은 계속된다",
"r": "",
"s": {
"문법": "20",
"민심": "-5",
"국고": "-10?"
},
"cmd": ""
}
},
{
"id": 120,
"name": "end_crusade",
"theme": "crusade",
"char": "diplomat",
"cond": "crusade_keep",
"wait": "70",
"weight": "10",
"text": "북벌이 너무 길어졌사옵니다. 우리에게는 이길 길이 없사옵니다. 이제 군사를 물리겠사옵니다!",
"R": {
"c": "물려라",
"r": "",
"s": {
"문법": "-15",
"군사": "-5",
"민심": "5"
},
"cmd": "!crusade_keep and isPeaceful"
},
"L": {
"c": "끝까지 싸워라",
"r": "",
"s": {
"문법": "5",
"군사": "5",
"민심": "-30?",
"국고": "-15?"
},
"cmd": ""
}
},
{
"id": 121,
"name": "intifada",
"theme": "crusade",
"char": "general",
"cond": "crusade_keep",
"wait": "10",
"weight": "15",
"text": "하늘을 믿지 않는 자들이 모두 전하의 죽음을 바라고 있사옵니다! 이대로 북벌을 이어 가시겠사옵니까?",
"R": {
"c": "이어 가라",
"r": "",
"s": {
"문법": "15",
"군사": "5",
"민심": "-10",
"국고": "-10"
},
"cmd": "add_foreign_princess"
},
"L": {
"c": "…그만두자",
"r": "",
"s": {
"문법": "-30",
"군사": "-10",
"민심": "25?"
},
"cmd": "!crusade_keep and isPeaceful"
}
},
{
"id": 122,
"name": "",
"theme": "crusade",
"char": "foreign_princess",
"cond": "!crusade_keep and has_doctor and has_priest",
"wait": "300",
"weight": "30",
"text": "제 나라 사람들이 알아낸 하늘과 땅의 이치를 나누어 드리지요.",
"R": {
"c": "들려 다오",
"r": "",
"s": {
"문법": "-5?",
"군사": "5?",
"민심": "5?"
},
"cmd": "> and add_doctor"
},
"L": {
"c": "필요 없다",
"r": "",
"s": {
"문법": "5?",
"민심": "-5?"
},
"cmd": ""
}
},
{
"id": 123,
"name": "_",
"theme": "",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "",
"text": "이것 참 흥미롭사옵니다… 서역 학자가 알아낸 것과 꼭 맞아떨어지옵니다…",
"R": {
"c": "아…",
"r": "",
"s": {
"문법": "-5?",
"군사": "5?",
"민심": "10?"
},
"cmd": ">"
},
"L": {
"c": "아니… 하지만…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 124,
"name": "_",
"theme": "",
"char": "priest",
"cond": "",
"wait": "",
"weight": "",
"text": "이건 하늘을 업신여기는 짓이옵니다! 이 땅은 하늘이 만든 것이고, 그 둘레를 해가 도는 것이 틀림없는 이치이옵니다!",
"R": {
"c": "네 말이 옳다",
"r": "",
"s": {
"문법": "25?",
"민심": "-10",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "해가 아니라 땅이 돈다",
"r": "",
"s": {
"문법": "-25?",
"민심": "15?",
"국고": "5?"
},
"cmd": ""
}
},
{
"id": 125,
"name": "",
"theme": "crusade",
"char": "foreign_princess",
"cond": "!crusade_keep",
"wait": "200",
"weight": "13",
"text": "저는 이 궁에 머물고 싶사옵니다. 제 나라와 전하의 나라 사이에 다리가 되고자 하옵니다.",
"R": {
"c": "머물러라",
"r": "",
"s": {
"문법": "-10?",
"군사": "5",
"민심": "5?",
"국고": "10?"
},
"cmd": ""
},
"L": {
"c": "돌아가라",
"r": "",
"s": {
"문법": "15"
},
"cmd": "del_foreign_princess"
}
},
{
"id": 126,
"name": "_end_fire",
"theme": "death and accidents",
"char": "end>dead_king_fire",
"cond": "",
"wait": "",
"weight": "",
"text": "(왕은 산 채로 불태워졌고, 그 이름은 모든 책과 비석에서 지워졌다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 127,
"name": "_end_prison",
"theme": "death and accidents",
"char": "end>dead_king_dungeon",
"cond": "",
"wait": "",
"weight": "",
"text": "(왕은 옥에 갇혔고 끝내 백성들에게서도 잊혔다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 128,
"name": "_end_bed",
"theme": "death and accidents",
"char": "end>dead_king_classic",
"cond": "",
"wait": "",
"weight": "",
"text": "(며칠 뒤, 왕은 침전에서 숨을 거두었다. 그 죽음을 슬퍼하는 이도 있었다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 129,
"name": "_end_grand",
"theme": "death and accidents",
"char": "end>dead_king_grand",
"cond": "",
"wait": "",
"weight": "",
"text": "(마침내 왕이 승하하자 온 백성이 슬픔에 잠겼다. 왕은 죽은 뒤에도 성군으로 받들어졌고, 능 앞에는 사당이 세워졌다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 130,
"name": "_end_gangrene",
"theme": "death and accidents",
"char": "end>dead_king_gangrene",
"cond": "",
"wait": "",
"weight": "100",
"text": "(왕은 홀로 쓸쓸히 죽음을 맞았고, 그 몸은 침상에서 썩어 갔다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 131,
"name": "paganism",
"theme": "death and accidents",
"char": "anyone",
"cond": "spiritual=0",
"wait": "",
"weight": "1000000",
"text": "전하! 집현전의 권위가 무너져 말과 글의 법도가 사라졌사옵니다. 백성들이 서로 말을 알아듣지 못하고 들고일어났사옵니다!",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_paganism"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_paganism"
}
},
{
"id": 132,
"name": "_end_paganism",
"theme": "buildings",
"char": "priest",
"cond": "cathedral_keep",
"wait": "6",
"weight": "max",
"text": "집현전으로 피하소서! 서책의 벽이 무리를 막아 줄 것이옵니다. 자, 함께 치성을 드리시지요.",
"R": {
"c": "집현전으로 간다",
"r": "",
"s": {
"문법": "40",
"국고": "-10"
},
"cmd": "inquisition"
},
"L": {
"c": "(그대로 있는다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 133,
"name": "_end_paganism",
"theme": "death and accidents",
"char": "end>dead_king_paganist",
"cond": "",
"wait": "",
"weight": "100",
"text": "(왕은 피난길에 말이 통하지 않는 무리에게 둘러싸였다. 마지막 어명조차 아무도 알아듣지 못했다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 134,
"name": "heavenonearth",
"theme": "death and accidents",
"char": "priest",
"cond": "spiritual=100",
"wait": "",
"weight": "1000000",
"text": "이제 이 나라는 학사들이 다스리옵니다. 틀린 말 한마디 없는 완벽한 문장의 나라이옵니다!",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_heavenonearth"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_heavenonearth"
}
},
{
"id": 135,
"name": "_end_heavenonearth",
"theme": "death and accidents",
"char": "dungeon>door_wall_dark",
"cond": "!intheDungeon",
"wait": "reign",
"weight": "400",
"text": "(왕은 자신을 붙잡으려는 학사들을 피해 대궐 지하로 달아났다. 그곳엔 왕도 몰랐던 미궁이 있었다.)",
"R": {
"c": "(안으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1 and intheDungeon and !spice_trade_keep"
},
"L": {
"c": "(되돌아간다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 136,
"name": "_end_heavenonearth",
"theme": "death and accidents",
"char": "end>dead_king_tearappart",
"cond": "",
"wait": "",
"weight": "100",
"text": "(학사들은 왕을 '살아 있는 운서(韻書)'라 떠받들며 장서각에 모셨고, 왕은 평생 교정만 보다 생을 마쳤다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 137,
"name": "invasion",
"theme": "death and accidents",
"char": "anyone",
"cond": "military=0",
"wait": "",
"weight": "1000000",
"text": "적군이 도성 문 앞까지 이르렀사옵니다! 우리 군은 더는 막아 낼 힘이 없사옵니다!",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_invasion and !nb_war_keep and !warSouth_keep and !warWest_keep and !warEast_keep and !warIslander_keep and !warViking_keep"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_invasion and !nb_war_keep and !warSouth_keep and !warWest_keep and !warEast_keep and !warIslander_keep and !warViking_keep"
}
},
{
"id": 138,
"name": "_end_invasion",
"theme": "buildings",
"char": "general",
"cond": "fortification_keep",
"wait": "6",
"weight": "max",
"text": "산성 덕분에 적을 막아 냈사옵니다. 적은 물러갔지만 성문을 고치려면 백성들을 불러내야 하옵니다.",
"R": {
"c": "불러내라",
"r": "",
"s": {
"군사": "40",
"민심": "-15"
},
"cmd": ""
},
"L": {
"c": "군사들로 고쳐라",
"r": "",
"s": {
"군사": "20"
},
"cmd": "!fortification_keep"
}
},
{
"id": 139,
"name": "_end_invasion",
"theme": "death and accidents",
"char": "end>dead_king_overdose",
"cond": "has_rival",
"wait": "",
"weight": "max",
"text": "(왕은 처남 <rival>이(가) 올린 술잔을 받고 쓰러졌다. 그는 오래전부터 적과 내통한 자였다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 140,
"name": "_end_invasion",
"theme": "death and accidents",
"char": "end>dead_king_army",
"cond": "",
"wait": "",
"weight": "100",
"text": "(왕은 남은 병졸을 이끌고 맞섰으나 정전 계단에서 적병의 칼에 쓰러졌다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 141,
"name": "coup",
"theme": "death and accidents",
"char": "general",
"cond": "military=100",
"wait": "",
"weight": "1000000",
"text": "반정(反正)이옵니다! 병권을 신에게 넘기소서!",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_coup"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_coup"
}
},
{
"id": 142,
"name": "_end_coup",
"theme": "",
"char": "end>dead_king_hang",
"cond": "has_prince",
"wait": "",
"weight": "max",
"text": "(반역한 <general>은(는) <prince>에게 곧바로 붙잡혔다. 세자는 내친김에 아버지마저 상왕으로 물러나게 했다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 143,
"name": "_end_coup",
"theme": "",
"char": "end>dead_king_decapitation",
"cond": "nb_murder>0",
"wait": "",
"weight": "max",
"text": "(왕은 지하 궁 연쇄 살인의 마지막 희생자가 되었다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 144,
"name": "_end_coup",
"theme": "death and accidents",
"char": "end>dead_king_dungeon",
"cond": "",
"wait": "",
"weight": "100",
"text": "(반정을 일으킨 군사들은 왕을 대궐에서 가장 높은 누각에 가두고 백골이 될 때까지 내버려 두었다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 145,
"name": "nodemo",
"theme": "death and accidents",
"char": "anyone",
"cond": "demography=0",
"wait": "",
"weight": "1000000",
"text": "굶주린 백성들이 민란을 일으켰사옵니다. 이제 걷잡을 수 없사옵니다!",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_nodemo"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_nodemo"
}
},
{
"id": 146,
"name": "_end_nodemo",
"theme": "death and accidents",
"char": "end>dead_king_gangrene",
"cond": "plague",
"wait": "6",
"weight": "max",
"text": "(역병이 마침내 대궐 안까지 번졌고 많은 이가 목숨을 잃었다. 왕도 피하지 못했다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 147,
"name": "_end_nodemo",
"theme": "buildings",
"char": "farmer",
"cond": "barn_keep",
"wait": "6",
"weight": "max",
"text": "의창에 곡식을 쌓아 두었사옵니다! 어서 지킬 군사를 보내시옵소서! 굶주린 무리가 몰려오면 위험하옵니다!",
"R": {
"c": "군사를 보내라",
"r": "",
"s": {
"군사": "-15",
"민심": "40"
},
"cmd": ""
},
"L": {
"c": "곡식을 나눠 주어라",
"r": "",
"s": {
"민심": "20"
},
"cmd": "!barn_keep"
}
},
{
"id": 148,
"name": "_end_nodemo",
"theme": "death and accidents",
"char": "end>dead_king_torture",
"cond": "treasure>80",
"wait": "",
"weight": "max",
"text": "(몰려든 무리는 곳간 열쇠를 내놓으라며 왕을 끝없이 다그쳤다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 149,
"name": "_end_nodemo",
"theme": "death and accidents",
"char": "end>dead_king_bird",
"cond": "",
"wait": "",
"weight": "100",
"text": "(대궐은 무리에게 넘어가고 신하들도 뿔뿔이 흩어졌다. 왕 곁엔 까치 몇 마리만 남았다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 150,
"name": "nocontrol",
"theme": "death and accidents",
"char": "anyone",
"cond": "demography=100",
"wait": "",
"weight": "1000000",
"text": "백성의 기세가 하늘을 찔러, 수만 군중이 대궐을 에워쌌사옵니다!",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_nocontrol"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_nocontrol"
}
},
{
"id": 151,
"name": "_end_nocontrol",
"theme": "death and accidents",
"char": "nun",
"cond": "school_keep",
"wait": "30",
"weight": "400",
"text": "소인에게 맡겨 주소서. 앞장선 이들 대부분이 제 서당 아이들이옵니다.",
"R": {
"c": "맡기겠다",
"r": "(<nun>이(가) 엄한 목소리로 앞장선 이들을 꾸짖었다. 버릇이 없다고 나무라자 뜻밖에 금세 얌전해졌다.)",
"s": {
"민심": "-40"
},
"cmd": ""
},
"L": {
"c": "짐이 직접 나서겠다",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 152,
"name": "_end_nocontrol",
"theme": "death and accidents",
"char": "end>dead_king_classic",
"cond": "overall>40",
"wait": "",
"weight": "500",
"text": "(왕은 스스로 왕위에서 물러났지만 그 뒤로도 왕을 해치는 이는 없었다. 평온한 말년을 보내다 몇 해 뒤 승하하였고, 오래도록 성군으로 칭송받았다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 153,
"name": "_end_nocontrol",
"theme": "death and accidents",
"char": "end>dead_king_window",
"cond": "",
"wait": "",
"weight": "100",
"text": "(민란은 날로 거세져 마침내 침전에 불이 붙었다. 불길을 피해 담을 넘던 왕은 발을 헛디뎠다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 154,
"name": "_end_nocontrol",
"theme": "entertainment",
"char": "jester",
"cond": "reddwarf_keep",
"wait": "",
"weight": "400",
"text": "대궐 밖으로 나가는 숨은 길을 내가 알아. 나랑 같이 달아나고 싶으면 주사위로 내기하자!",
"R": {
"c": "어리석구나…",
"r": "",
"s": {},
"cmd": ">_reddwarf_fall_death"
},
"L": {
"c": "좋다, 던져라",
"r": "",
"s": {},
"cmd": "!reddwarf_keep and >_end_nocontrol"
}
},
{
"id": 155,
"name": "_reddwarf_fall_death",
"theme": "entertainment",
"char": "jester>throw",
"cond": "",
"wait": "",
"weight": "",
"text": "전하 목숨이 걸렸어! 이거 한 번으로 정해도 돼?",
"R": {
"c": "정하자",
"r": "(<jester>이(가) 천천히 사발을 들었다. 주사위는…)",
"s": {},
"cmd": ">_playDeath"
},
"L": {
"c": "다시 굴린다",
"r": "",
"s": {},
"cmd": ">_reddwarf_fall_death"
}
},
{
"id": 156,
"name": "_playDeath",
"theme": "entertainment",
"char": "jester>won",
"cond": "",
"wait": "",
"weight": "10",
"text": "짝이다! 전하가 이겼네! 안 죽어도 되겠어~ 아~ 다행이다!",
"R": {
"c": "고맙구나!",
"r": "",
"s": {
"민심": "-40"
},
"cmd": ""
},
"L": {
"c": "어리석은 게 아니라 미쳤구나…",
"r": "",
"s": {
"민심": "-40"
},
"cmd": ""
}
},
{
"id": 157,
"name": "_playDeath",
"theme": "entertainment",
"char": "jester>lost",
"cond": "!dice_keep",
"wait": "",
"weight": "10",
"text": "홀이야! 내가 이겼어! 나도 전하도 끝이로세~♪ 억울하면 저승에서 나랑 한 판 더 하시든가~♪",
"R": {
"c": "어리석은 게 아니라 미쳤구나…",
"r": "",
"s": {},
"cmd": "!reddwarf_keep and >_end_nocontrol"
},
"L": {
"c": "인정할 수 없다!",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 158,
"name": "toorich",
"theme": "death and accidents",
"char": "anyone",
"cond": "treasure=100",
"wait": "",
"weight": "1000000",
"text": "나라에 재물이 넘쳐나옵니다! 팔도의 진미를 모아 큰 잔치를 열면 어떻겠사옵니까?",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_toorich and isFat"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_toorich"
}
},
{
"id": 159,
"name": "_end_toorich",
"theme": "",
"char": "end>dead_king_love_machine",
"cond": "isLover",
"wait": "",
"weight": "1000",
"text": "(왕은 연모하는 이 앞에서 춤을 추다 심장이 멎었다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 160,
"name": "_end_toorich",
"theme": "death and accidents",
"char": "end>dead_king_vomit",
"cond": "",
"wait": "300",
"weight": "100",
"text": "(왕은 과식으로 숨이 막혀 쓰러졌다. 배부른 신하들은 모두 잠들어 아침까지 아무도 몰랐다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 161,
"name": "penniless",
"theme": "death and accidents",
"char": "anyone",
"cond": "treasure=0",
"wait": "",
"weight": "1000000",
"text": "나라 곳간이 텅 비어, 거상과 대감들이 조정을 쥐락펴락하옵니다.",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_penniless"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_penniless"
}
},
{
"id": 162,
"name": "_end_penniless",
"theme": "buildings",
"char": "merchant",
"cond": "centralbank_keep",
"wait": "10",
"weight": "max",
"text": "상평창에서 급히 곡식을 풀어 드리지요. 물론 상평창도 결국 나라 곳간이옵니다만.",
"R": {
"c": "풀어라",
"r": "",
"s": {
"국고": "40"
},
"cmd": "!centralbank_keep"
},
"L": {
"c": "필요 없다",
"r": "",
"s": {},
"cmd": ">_end_penniless"
}
},
{
"id": 163,
"name": "_end_penniless",
"theme": "death and accidents",
"char": "end>dead_king_dogs",
"cond": "overall<30",
"wait": "",
"weight": "100000",
"text": "(대감들은 왕을 내쫓았고, 굶주린 들개들이 고개 너머까지 쫓아왔다. 욕된 왕의 이름은 후세까지 전해졌다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 164,
"name": "_end_penniless",
"theme": "death and accidents",
"char": "end>dead_king_drown",
"cond": "military<20",
"wait": "",
"weight": "10000",
"text": "(대감들은 왕을 먼 섬으로 유배 보냈다. 유배선에서 한 군졸이 왕을 바다로 밀었고, 왕은 금세 물에 잠겼다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 165,
"name": "_end_penniless",
"theme": "death and accidents",
"char": "end>dead_king_fire",
"cond": "spiritual<20",
"wait": "",
"weight": "1000",
"text": "(대감들은 왕을 허수아비로 남겨 두려 했다. 그러나 집현전이 왕을 '어긋난 말의 임금'으로 폐위했다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 166,
"name": "_end_penniless",
"theme": "death and accidents",
"char": "end>dead_king_exil",
"cond": "",
"wait": "",
"weight": "10",
"text": "(대감들이 정사를 쥐고 왕을 먼 섬으로 유배 보냈다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 167,
"name": "_die_gangrene",
"theme": "death and accidents",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "10",
"text": "전하께 몹쓸 종기가 퍼졌사옵니다… 송구하오나 소인이 할 수 있는 일이 없사옵니다.",
"R": {
"c": "말도 안 된다…",
"r": "",
"s": {},
"cmd": ">_end_gangrene"
},
"L": {
"c": "말도 안 된다…",
"r": "",
"s": {},
"cmd": ">_end_gangrene"
}
},
{
"id": 168,
"name": "_die_gangrene",
"theme": "death and accidents",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "10",
"text": "종기가 퍼진 팔은 잘라 내는 수밖에 없사옵니다.",
"R": {
"c": "그리하라",
"r": "",
"s": {
"문법": "5",
"군사": "5",
"민심": "5",
"국고": "-5"
},
"cmd": "isOnearm"
},
"L": {
"c": "팔을 자를 순 없다",
"r": "",
"s": {},
"cmd": ">_end_gangrene"
}
},
{
"id": 169,
"name": "_die_gangrene",
"theme": "death and accidents",
"char": "witch",
"cond": "",
"wait": "300",
"weight": "10",
"text": "전하, 몸속에 썩은 기운이 느껴지옵니다. 소인이 다스리지 않으면 옥체가 위태롭사옵니다.",
"R": {
"c": "다스려 다오",
"r": "",
"s": {
"문법": "-10",
"군사": "5",
"국고": "-5"
},
"cmd": "isOnearm"
},
"L": {
"c": "무녀 손은 빌리지 않겠다",
"r": "",
"s": {
"문법": "10",
"군사": "-5"
},
"cmd": ">_end_gangrene"
}
},
{
"id": 170,
"name": "dead_old_age",
"theme": "death and accidents",
"char": "anyone",
"cond": "older and !dying",
"wait": "reign",
"weight": "10",
"text": "전하께서는 춘추가 높으시어 옥체가 많이 약해지셨사옵니다. 아마 몇 해 뒤면 명이 다하실 것이옵니다.",
"R": {
"c": "아…",
"r": "",
"s": {
"군사": "-5"
},
"cmd": "dying"
},
"L": {
"c": "아…",
"r": "",
"s": {
"군사": "-5"
},
"cmd": "dying"
}
},
{
"id": 171,
"name": "earthquake",
"theme": "death and accidents",
"char": "anyone",
"cond": "",
"wait": "200",
"weight": "12",
"text": "큰 땅울림으로 도성이 크게 무너졌사옵니다! 포도청에 명을 내려 주시옵소서!",
"R": {
"c": "다친 이들부터 구하라",
"r": "",
"s": {
"민심": "5",
"국고": "-40"
},
"cmd": "!barn_keep and !fortification_keep and !school_keep"
},
"L": {
"c": "도둑질부터 막아라",
"r": "",
"s": {
"군사": "5",
"민심": "-40",
"국고": "10"
},
"cmd": "!hospital_keep and !fortification_keep and !school_keep"
}
},
{
"id": 172,
"name": "barnburn",
"theme": "death and accidents",
"char": "farmer",
"cond": "barn_keep",
"wait": "30",
"weight": "10",
"text": "큰일 났사옵니다! 의창에 불이 났사옵니다! 어서 군사를 보내 주시옵소서!",
"R": {
"c": "군사를 보내라",
"r": "",
"s": {
"군사": "-15"
},
"cmd": ""
},
"L": {
"c": "알아서 꺼라",
"r": "",
"s": {
"민심": "-10",
"국고": "-10"
},
"cmd": "!barn_keep"
}
},
{
"id": 173,
"name": "cold",
"theme": "death and accidents",
"char": "anyone",
"cond": "!barn_keep",
"wait": "30",
"weight": "10",
"text": "나라에 서른 해 만의 혹한이 닥쳤사옵니다. 흉년에 쌓아 둔 곡식도 없어 백성들이 굶주리고 있사옵니다.",
"R": {
"c": "비축한 곡식을 나눠라",
"r": "",
"s": {
"민심": "10",
"국고": "-30"
},
"cmd": ""
},
"L": {
"c": "짐더러 어쩌란 말이냐!",
"r": "",
"s": {
"민심": "-40"
},
"cmd": ""
}
},
{
"id": 174,
"name": "fire",
"theme": "death and accidents",
"char": "anyone",
"cond": "",
"wait": "60",
"weight": "8",
"text": "불길이 대궐까지 번지고 있사옵니다!",
"R": {
"c": "산성을 지켜라!",
"r": "",
"s": {
"문법": "-10",
"민심": "-10?",
"국고": "-30"
},
"cmd": ""
},
"L": {
"c": "곳간을 지켜라!",
"r": "",
"s": {
"문법": "-10",
"군사": "-30",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 175,
"name": "plaguestart",
"theme": "",
"char": "anyone",
"cond": "!plague",
"wait": "130",
"weight": "10",
"text": "역병이 의심되는 배 한 척을 살피고 있사옵니다. 혹시 모르니 포구를 막으시겠사옵니까?",
"R": {
"c": "막아라",
"r": "",
"s": {
"군사": "-10",
"민심": "5?",
"국고": "-20?"
},
"cmd": ""
},
"L": {
"c": "열어 두어라",
"r": "",
"s": {
"민심": "-5?",
"국고": "5"
},
"cmd": ">_plague"
}
},
{
"id": 176,
"name": "_plague",
"theme": "death and accidents",
"char": "anyone",
"cond": "!blackpredict",
"wait": "",
"weight": "10",
"text": "다른 배들에서는 역병 기미가 보이지 않았사옵니다. 이제 한시름 놓았사옵니다!",
"R": {
"c": "장사를 다시 열어라",
"r": "",
"s": {
"국고": "10?"
},
"cmd": ""
},
"L": {
"c": "계속 지켜보라",
"r": "",
"s": {
"민심": "5?",
"국고": "-5?"
},
"cmd": ""
}
},
{
"id": 177,
"name": "_plague",
"theme": "death and accidents",
"char": "anyone",
"cond": "",
"wait": "",
"weight": "10",
"text": "역병이 돌았사옵니다! 날마다 백성이 죽어 나가 시신을 다 거둘 수도 없사옵니다…!",
"R": {
"c": "시신을 태우고 산 자를 구하라!",
"r": "",
"s": {
"문법": "-10?",
"군사": "-10?",
"민심": "-5?",
"국고": "-20?"
},
"cmd": "plague"
},
"L": {
"c": "성문을 닫아라",
"r": "",
"s": {
"문법": "-10?",
"군사": "-10?",
"민심": "-20?"
},
"cmd": "plague"
}
},
{
"id": 178,
"name": "",
"theme": "death and accidents",
"char": "anyone",
"cond": "demography<50 and military<50",
"wait": "160",
"weight": "10",
"text": "농민들이 들고일어났사옵니다! 무리가 도성에서 노략질을 하는데 군졸들도 막지 못하옵니다.",
"R": {
"c": "군사를 늘려라",
"r": "",
"s": {
"군사": "30",
"민심": "-10?",
"국고": "-20?"
},
"cmd": "!hospital_keep and !fortification_keep and !school_keep"
},
"L": {
"c": "성문을 닫아라",
"r": "",
"s": {
"문법": "-10?",
"군사": "-10",
"민심": "30?"
},
"cmd": "!barn_keep and !cathedral_keep and !school_keep"
}
},
{
"id": 179,
"name": "",
"theme": "",
"char": "doctor",
"cond": "school_keep",
"wait": "160",
"weight": "10",
"text": "서당은 집현전이 백성에게 엉터리 지식을 퍼뜨리는 도구이옵니다. 당장 없애소서!",
"R": {
"c": "없애라",
"r": "",
"s": {
"문법": "-15",
"민심": "15?"
},
"cmd": "!school_keep"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "5",
"민심": "-10?"
},
"cmd": ""
}
},
{
"id": 180,
"name": "",
"theme": "death and accidents",
"char": "anyone",
"cond": "hospital_keep",
"wait": "160",
"weight": "10",
"text": "혜민서가 미신에 빠진 무리에게 습격당했사옵니다. 하늘의 힘을 지닌 전하의 손만이 병자를 고친다고 외치옵니다.",
"R": {
"c": "짐은 할 수 있다",
"r": "",
"s": {
"문법": "10?",
"군사": "-10?",
"민심": "5?"
},
"cmd": "!hospital_keep"
},
"L": {
"c": "짐은 할 수 없다",
"r": "",
"s": {
"문법": "-5?",
"군사": "5?",
"민심": "-10?"
},
"cmd": "!hospital_keep"
}
},
{
"id": 181,
"name": "",
"theme": "death and accidents",
"char": "anyone",
"cond": "demography<50",
"wait": "160",
"weight": "10",
"text": "사람들이 '하늘에서 내려온 자'에게 습격당했다고 하옵니다. 아마 세금을 피하려는 핑계일 것이옵니다…",
"R": {
"c": "핑계일 것이다",
"r": "",
"s": {
"민심": "-1?"
},
"cmd": ""
},
"L": {
"c": "그들 말을 믿는다",
"r": "",
"s": {
"민심": "15?",
"국고": "-10?"
},
"cmd": ""
}
},
{
"id": 182,
"name": "",
"theme": "death and accidents",
"char": "witch",
"cond": "plague and hospital_keep and demography<40",
"wait": "40",
"weight": "50",
"text": "혜민서를 제대로 꾸리면 역병이 번지는 것을 막을 수 있사옵니다. 일손도 보태 주시고 군사들도 거들게 해 주시옵소서.",
"R": {
"c": "그리하라",
"r": "",
"s": {
"군사": "5",
"민심": "25?",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "무녀 말은 듣지 않는다",
"r": "",
"s": {
"민심": "10?"
},
"cmd": ""
}
},
{
"id": 183,
"name": "",
"theme": "death and accidents",
"char": "anyone",
"cond": "plague and demography>50",
"wait": "40",
"weight": "20",
"text": "역병이 잦아들고 있사옵니다!",
"R": {
"c": "잔치를 열어라!",
"r": "",
"s": {
"민심": "5?",
"국고": "-5"
},
"cmd": ""
},
"L": {
"c": "계속 지켜보라",
"r": "",
"s": {
"문법": "5?",
"민심": "15?"
},
"cmd": ""
}
},
{
"id": 184,
"name": "terror",
"theme": "death and accidents",
"char": "anyone",
"cond": "age>10 and !terrorism",
"wait": "400",
"weight": "15",
"text": "도성에서 큰 폭발이 일어났사옵니다! 자세한 사정은 모르오나, 혹시 모르니 도성 문을 닫으시겠사옵니까?",
"R": {
"c": "닫아라",
"r": "",
"s": {
"국고": "-15"
},
"cmd": "terrorism"
},
"L": {
"c": "열어 두어라",
"r": "",
"s": {
"문법": "-5?",
"군사": "-5?",
"민심": "-5?"
},
"cmd": "terrorism"
}
},
{
"id": 185,
"name": "",
"theme": "",
"char": "general",
"cond": "terrorism",
"wait": "20",
"weight": "20",
"text": "또 폭발이 일어났사옵니다! 서원에 다친 이들을 받도록 허락해 주시옵소서!",
"R": {
"c": "허락한다",
"r": "",
"s": {
"문법": "-15?",
"군사": "5"
},
"cmd": ""
},
"L": {
"c": "서원은 안 된다",
"r": "",
"s": {
"군사": "-10?",
"민심": "-15?"
},
"cmd": ""
}
},
{
"id": 186,
"name": "",
"theme": "",
"char": "merchant",
"cond": "terrorism",
"wait": "20",
"weight": "20",
"text": "또 폭발이 일어났사옵니다! 이번엔 장터에서… 경비를 늘리는 것이 좋지 않겠사옵니까?",
"R": {
"c": "늘려라",
"r": "",
"s": {
"군사": "15?",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "필요 없다",
"r": "",
"s": {
"군사": "-15"
},
"cmd": ""
}
},
{
"id": 187,
"name": "",
"theme": "",
"char": "anyone",
"cond": "terrorism",
"wait": "40",
"weight": "17",
"text": "전하, 백성들이 위협해 오고 있사옵니다! 잇단 폭발이 전하 탓이라며 전하의 목숨을 노리고 있사옵니다!",
"R": {
"c": "군사를 모아라!",
"r": "",
"s": {
"군사": "-10?",
"민심": "-10?"
},
"cmd": ""
},
"L": {
"c": "차분히 달래라",
"r": "(무리는 왕의 말에 귀를 기울이지 않고 성문 밖에 모여들었다.)",
"s": {
"군사": "-20?",
"민심": "100?"
},
"cmd": ""
}
},
{
"id": 188,
"name": "",
"theme": "",
"char": "farmer",
"cond": "terrorism",
"wait": "40",
"weight": "17",
"text": "다들 괴이한 폭발에 겁을 먹어 생업을 이을 수가 없사옵니다! 올해 세금을 면해 주시옵소서!",
"R": {
"c": "면해 주마",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "5?",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "세금은 세금이다",
"r": "",
"s": {
"민심": "-15"
},
"cmd": ""
}
},
{
"id": 189,
"name": "",
"theme": "",
"char": "general",
"cond": "terrorism",
"wait": "100",
"weight": "17",
"text": "전하, 계엄을 선포하시옵소서! 폭발을 일으키는 무리를 막으려면 그 길밖에 없사옵니다!",
"R": {
"c": "선포하라",
"r": "",
"s": {
"문법": "5?",
"군사": "40?",
"민심": "-10?",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"군사": "-20?"
},
"cmd": ""
}
},
{
"id": 190,
"name": "",
"theme": "",
"char": "spy",
"cond": "terrorism",
"wait": "100",
"weight": "15",
"text": "소인은 전하의 등을 노리는 전갈들의 정체를 알고 있사옵니다. 자세히 알고 싶으시옵니까?",
"R": {
"c": "말해 보라",
"r": "",
"s": {
"국고": "-5?"
},
"cmd": ">"
},
"L": {
"c": "관심 없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 191,
"name": "_",
"theme": "",
"char": "spy",
"cond": "",
"wait": "",
"weight": "",
"text": "그들은 '맨머리 동포단'이라 자칭하는 자들로… \"학사는 갓을 써서는 아니 된다\"고 외치며 집현전에서 갈라져 나간 무리이옵니다.",
"R": {
"c": "어리석은 주장이구나…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "말도 안 된다…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 192,
"name": "_",
"theme": "",
"char": "spy",
"cond": "",
"wait": "",
"weight": "",
"text": "놈들의 생각이 거칠어져, 이제는 갓을 쓴 자는 모두 불태워야 한다고 떠들고 있사옵니다.",
"R": {
"c": "흠…",
"r": "",
"s": {},
"cmd": "add_priest and add_merchant and >"
},
"L": {
"c": "막아야겠구나",
"r": "",
"s": {},
"cmd": "add_priest and add_merchant and >"
}
},
{
"id": 193,
"name": "_",
"theme": "",
"char": "priest",
"cond": "",
"wait": "",
"weight": "",
"text": "소신은 갓을 벗을 생각이 없사옵니다! 무엇보다 이건 갓이 아니라 '정자관'이옵니다, 착각하지 마시옵소서!",
"R": {
"c": "어서 벗어라",
"r": "",
"s": {
"문법": "-10?"
},
"cmd": ">"
},
"L": {
"c": "그렇겠지",
"r": "",
"s": {
"문법": "5?"
},
"cmd": ">"
}
},
{
"id": 194,
"name": "_headgear",
"theme": "",
"char": "merchant",
"cond": "",
"wait": "",
"weight": "",
"text": "우리는 싸울 것이옵니다! 자유와, 사랑하는 이들과, 갓을 지키기 위해!",
"R": {
"c": "싸워라",
"r": "",
"s": {
"국고": "5?"
},
"cmd": ">"
},
"L": {
"c": "진정하라",
"r": "",
"s": {
"국고": "-5?"
},
"cmd": ">"
}
},
{
"id": 195,
"name": "_",
"theme": "",
"char": "farmer",
"cond": "",
"wait": "",
"weight": "",
"text": "싫사옵니다… 싸우고 싶지 않사옵니다… 높은 분들 싸움에 휘말리는 건 사절이옵니다.",
"R": {
"c": "그러려무나",
"r": "",
"s": {
"민심": "5?"
},
"cmd": ">>>"
},
"L": {
"c": "나라를 위해 싸워라",
"r": "",
"s": {
"민심": "-5?"
},
"cmd": ">>>"
}
},
{
"id": 196,
"name": "_",
"theme": "",
"char": "spy",
"cond": "",
"wait": "",
"weight": "",
"text": "'맨머리 동포단'이 세력을 넓혀 이제 동쪽 고을을 위협하고 있사옵니다. 이번엔 순대 먹는 꼴이 보기 싫다는군요.",
"R": {
"c": "성가신 놈들은 내버려 두라",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"민심": "5?",
"국고": "10?"
},
"cmd": "!terrorism"
},
"L": {
"c": "군사를 보내라",
"r": "",
"s": {
"문법": "10?",
"군사": "10?",
"민심": "10?",
"국고": "-5"
},
"cmd": "!terrorism"
}
},
{
"id": 197,
"name": "",
"theme": "death and accidents",
"char": "anyone",
"cond": "!hospital_keep",
"wait": "150",
"weight": "10",
"text": "도성에 괴질이 기승을 부리고 있사옵니다!",
"R": {
"c": "병자들을 고쳐라",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "-5",
"국고": "-20"
},
"cmd": ""
},
"L": {
"c": "성문을 닫아라",
"r": "",
"s": {
"문법": "-5",
"군사": "-10?",
"민심": "-40?"
},
"cmd": ""
}
},
{
"id": 198,
"name": "dying",
"theme": "death and accidents",
"char": "ghost",
"cond": "dying",
"wait": "reign",
"weight": "40",
"text": "젊은이여, 너도 곧 숨이 다하겠구나. 늙어서 눈을 감는 왕이라니, 복도 많다.",
"R": {
"c": "아…",
"r": "",
"s": {},
"cmd": ">_end_grand"
},
"L": {
"c": "아…",
"r": "",
"s": {},
"cmd": ">_end_grand"
}
},
{
"id": 199,
"name": "deaf",
"theme": "death and accidents",
"char": "dungeon>dark",
"cond": "older and !isDeaf",
"wait": "40",
"weight": "8",
"text": "(왕은 한밤중에 문득 잠에서 깼다. 허리가 굽고 온몸이 무겁게 지친다.)",
"R": {
"c": "(그대로 깨어 있는다.)",
"r": "",
"s": {},
"cmd": "isDeaf"
},
"L": {
"c": "(다시 잔다.)",
"r": "",
"s": {},
"cmd": "isDeaf"
}
},
{
"id": 200,
"name": "",
"theme": "",
"char": "anyone",
"cond": "older",
"wait": "100",
"weight": "10",
"text": "전하! 숨이 가쁘신 것 같은데, 옥체는 괜찮으시옵니까?",
"R": {
"c": "괜찮다",
"r": "",
"s": {},
"cmd": ">>>>deaf"
},
"L": {
"c": "의원을 불러라",
"r": "",
"s": {},
"cmd": ">>>>pneumonia"
}
},
{
"id": 201,
"name": "pneumonia",
"theme": "death and accidents",
"char": "doctor",
"cond": "older",
"wait": "reign",
"weight": "15",
"text": "전하께서 폐를 앓고 계시옵니다… 이제 얼마 남지 않으셨사옵니다…",
"R": {
"c": "아…",
"r": "",
"s": {},
"cmd": "dying"
},
"L": {
"c": "아…",
"r": "",
"s": {},
"cmd": "dying"
}
},
{
"id": 202,
"name": "bird",
"theme": "diplomacy and war",
"char": "bird",
"cond": "!warIslander_keep",
"wait": "80",
"weight": "8",
"text": "(쪽지에 이렇게 적혀 있다. \"섬나라 백성은 우리의 위협. 먼저 치는 것이 상책이다.\")",
"R": {
"c": "섬나라를 쳐라",
"r": "",
"s": {
"군사": "-15",
"국고": "-5"
},
"cmd": "warIslander_keep and nb_war_keep+"
},
"L": {
"c": "쪽지는 버려라",
"r": "",
"s": {
"민심": "-10",
"국고": "-10"
},
"cmd": "warIslander_keep and nb_war_keep+"
}
},
{
"id": 203,
"name": "",
"theme": "diplomacy and war",
"char": "diplomat",
"cond": "has_jester",
"wait": "300",
"weight": "10",
"text": "우리 나라 깃발은 그리 멋지지 않사옵니다. 이참에 새 무늬로 바꾸면 어떠하옵니까?",
"R": {
"c": "좋은 안이 있느냐?",
"r": "",
"s": {},
"cmd": ">_chooseflag"
},
"L": {
"c": "지금 깃발이 좋다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 204,
"name": "_chooseflag",
"theme": "diplomacy and war",
"char": "priest",
"cond": "",
"wait": "5",
"weight": "10",
"text": "금빛 바탕에 붉은 붓 한 자루는 어떠하옵니까?",
"R": {
"c": "그걸로 하라",
"r": "",
"s": {
"문법": "20",
"군사": "-5",
"민심": "-5"
},
"cmd": ""
},
"L": {
"c": "또 없느냐?",
"r": "",
"s": {},
"cmd": ">_chooseflag"
}
},
{
"id": 205,
"name": "_chooseflag",
"theme": "diplomacy and war",
"char": "general",
"cond": "",
"wait": "5",
"weight": "10",
"text": "푸른 들판에 주황빛 화포는 어떠하옵니까?",
"R": {
"c": "그걸로 하라",
"r": "",
"s": {
"문법": "-5",
"군사": "20",
"민심": "-5"
},
"cmd": ""
},
"L": {
"c": "또 없느냐?",
"r": "",
"s": {},
"cmd": ">_chooseflag"
}
},
{
"id": 206,
"name": "_chooseflag",
"theme": "diplomacy and war",
"char": "farmer",
"cond": "",
"wait": "5",
"weight": "10",
"text": "잿빛 하늘에 걸린 갈색 삽은 어떠하옵니까?",
"R": {
"c": "그걸로 하라",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "20"
},
"cmd": ""
},
"L": {
"c": "또 없느냐?",
"r": "",
"s": {},
"cmd": ">_chooseflag"
}
},
{
"id": 207,
"name": "_chooseflag",
"theme": "diplomacy and war",
"char": "jester",
"cond": "",
"wait": "",
"weight": "1",
"text": "파란 돼지에 보랏빛 익선관도 생각해 보시라고요.",
"R": {
"c": "그걸로 하라",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "-5"
},
"cmd": ""
},
"L": {
"c": "이제 됐다!",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 208,
"name": "",
"theme": "diplomacy and war",
"char": "diplomat",
"cond": "!nb_war_keep and !embassies_keep",
"wait": "80",
"weight": "15",
"text": "이웃 나라에 사신을 머물게 하면 어떠하옵니까. 싸움을 막을 수 있을 것이옵니다.",
"R": {
"c": "사신을 보내라",
"r": "",
"s": {
"군사": "5",
"민심": "10",
"국고": "-15"
},
"cmd": "embassies_keep"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 209,
"name": "library",
"theme": "diplomacy and war",
"char": "diplomat",
"cond": "!library and !warSouth_keep",
"wait": "100",
"weight": "8",
"text": "남쪽 나라 여왕께서 서책 마흔 권을 보내오셨사옵니다. 서고를 지으시지요!",
"R": {
"c": "서고를 지어라",
"r": "",
"s": {
"문법": "-10",
"군사": "5",
"민심": "20?",
"국고": "-10"
},
"cmd": "library"
},
"L": {
"c": "집현전에 두어라",
"r": "",
"s": {
"문법": "5",
"군사": "-5",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 210,
"name": "warwithsouth",
"theme": "diplomacy and war",
"char": "general",
"cond": "!warSouth_keep",
"wait": "100",
"weight": "8",
"text": "남쪽 나라가 날로 커지고 있사옵니다. 늦기 전에 쳐들어가야 하옵니다!",
"R": {
"c": "쳐들어가라",
"r": "",
"s": {
"군사": "-15?"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"민심": "5"
},
"cmd": "warSouth_keep and nb_war_keep+"
}
},
{
"id": 211,
"name": "recruit",
"theme": "diplomacy and war",
"char": "general",
"cond": "",
"wait": "60",
"weight": "8",
"text": "전하, 뜻밖의 일에 대비해 군사를 더 뽑아야 하옵니다!",
"R": {
"c": "뽑아라",
"r": "",
"s": {
"군사": "20",
"민심": "-5?",
"국고": "-15"
},
"cmd": "add_soldier"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"군사": "-20"
},
"cmd": ""
}
},
{
"id": 212,
"name": "",
"theme": "diplomacy and war",
"char": "diplomat",
"cond": "nb_war_keep>0 and embassies_keep",
"wait": "60",
"weight": "12",
"text": "우리가 보낸 사절단 덕에 싸움이 멈출 것이옵니다!",
"R": {
"c": "잘했다",
"r": "",
"s": {
"군사": "-5",
"민심": "15?"
},
"cmd": "!nb_war_keep and !warSouth_keep and !warWest_keep and !warEast_keep and !warIslander_keep and !warViking_keep"
},
"L": {
"c": "믿을 수 없다",
"r": "",
"s": {
"민심": "-10?",
"국고": "-10?"
},
"cmd": ""
}
},
{
"id": 213,
"name": "superwedding",
"theme": "diplomacy and war",
"char": "diplomat",
"cond": "nb_war_keep>0 and !has_queen and !queendom",
"wait": "40",
"weight": "20",
"text": "전하와 북쪽 나라 공주의 혼인이 이루어지면 이 싸움은 끝날 것이옵니다.",
"R": {
"c": "혼인하겠다",
"r": "",
"s": {
"문법": "10",
"군사": "5",
"민심": "5",
"국고": "5"
},
"cmd": "add_queen and !nb_war_keep and !warSouth_keep and !warWest_keep and !warEast_keep and !warIslander_keep and !warViking_keep"
},
"L": {
"c": "그럴 순 없다",
"r": "",
"s": {
"민심": "-10?",
"국고": "-10?"
},
"cmd": ""
}
},
{
"id": 214,
"name": "",
"theme": "diplomacy and war",
"char": "diplomat",
"cond": "nb_war_keep>0 and embassies_keep",
"wait": "100",
"weight": "8",
"text": "사신 머무는 집이 적에게 공격받고 있사옵니다! 지키지 않으면 화친의 희망도 사라지옵니다!",
"R": {
"c": "군사를 보내라",
"r": "",
"s": {
"군사": "-10"
},
"cmd": ""
},
"L": {
"c": "내버려 두어라",
"r": "",
"s": {
"민심": "-5"
},
"cmd": "!embassies_keep"
}
},
{
"id": 215,
"name": "attack",
"theme": "diplomacy and war",
"char": "spy",
"cond": "!eastPower_keep and !has_barbare",
"wait": "50",
"weight": "8",
"text": "굶주린 뱀이 동쪽에 숨어 있사옵니다… 소인이 가서 찾아오지요.",
"R": {
"c": "찾아오라",
"r": "",
"s": {
"국고": "-10"
},
"cmd": ">>>>"
},
"L": {
"c": "필요 없다",
"r": "",
"s": {
"군사": "-10"
},
"cmd": "eastPower_keep"
}
},
{
"id": 216,
"name": "_",
"theme": "diplomacy and war",
"char": "spy",
"cond": "",
"wait": "",
"weight": "",
"text": "야심에 불타는 도마뱀이 대감들을 모아 용이 되어 전하를 짓누르려 꾸미고 있사옵니다.",
"R": {
"c": "(군사를 보낸다.)",
"r": "(왕의 결정으로 동쪽 고을은 법이 사라진 땅이 되어 큰 혼란에 빠졌다.)",
"s": {
"군사": "-15"
},
"cmd": ""
},
"L": {
"c": "(못 들은 척한다.)",
"r": "",
"s": {
"민심": "-5"
},
"cmd": "eastPower_keep"
}
},
{
"id": 217,
"name": "",
"theme": "diplomacy and war",
"char": "spy",
"cond": "year>850",
"wait": "80",
"weight": "9",
"text": "원하시면 동쪽 나라 대감들 침소에 붉은 개미를 풀어 놓을 수도 있사온데… 어찌하시겠사옵니까?",
"R": {
"c": "풀어 놓아라",
"r": "(왕의 결정으로 동쪽 고을은 법이 사라진 땅이 되어 큰 혼란에 빠졌다.)",
"s": {
"국고": "-5"
},
"cmd": ">>> and !eastPower and isShrewd"
},
"L": {
"c": "그만두어라",
"r": "",
"s": {
"군사": "-10?"
},
"cmd": ""
}
},
{
"id": 218,
"name": "",
"theme": "diplomacy and war",
"char": "anyone",
"cond": "!eastPower_keep",
"wait": "60",
"weight": "8",
"text": "동쪽 나라 대감들이 싸움 좋아하는 우두머리 밑에서 힘을 되찾고 있사옵니다! 군사를 보내시옵소서!",
"R": {
"c": "군사를 보내라",
"r": "",
"s": {
"군사": "-15"
},
"cmd": "warEast_keep and eastPower_keep and nb_war_keep+"
},
"L": {
"c": "지켜보자",
"r": "",
"s": {
"민심": "-30?"
},
"cmd": "eastPower_keep and >>>"
}
},
{
"id": 219,
"name": "",
"theme": "diplomacy and war",
"char": "anyone",
"cond": "eastPower_keep and !warWest_keep",
"wait": "60",
"weight": "9",
"text": "동쪽과 남쪽 나라가 손잡고 쳐들어오옵니다! 서쪽 나라에 도움을 청해 볼까요?",
"R": {
"c": "청하라",
"r": "",
"s": {
"군사": "10",
"국고": "-20?"
},
"cmd": "warEast_keep and warSouth_keep and nb_war_keep++"
},
"L": {
"c": "우리 힘으로 막는다",
"r": "",
"s": {
"군사": "-10",
"민심": "-30?"
},
"cmd": "warEast_keep and warSouth_keep and nb_war_keep++"
}
},
{
"id": 220,
"name": "",
"theme": "diplomacy and war",
"char": "anyone",
"cond": "eastPower_keep",
"wait": "40",
"weight": "20",
"text": "동쪽 나라 대감이 쳐들어오옵니다! 군사를 더 뽑지 않으면 이길 길이 없사옵니다.",
"R": {
"c": "뽑아라",
"r": "",
"s": {
"군사": "10",
"민심": "-30"
},
"cmd": "!eastPower_keep"
},
"L": {
"c": "백성을 내몰 순 없다",
"r": "",
"s": {
"군사": "-40?"
},
"cmd": ""
}
},
{
"id": 221,
"name": "barbarian",
"theme": "diplomacy and war",
"char": "general",
"cond": "military<50 and !warEast_keep",
"wait": "80",
"weight": "12",
"text": "북방 오랑캐가 국경으로 다가오고 있사옵니다! 방비를 굳히시옵소서!",
"R": {
"c": "굳혀라",
"r": "",
"s": {
"군사": "20",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"군사": "-25"
},
"cmd": "warEast_keep and nb_war_keep+"
}
},
{
"id": 222,
"name": "",
"theme": "diplomacy and war",
"char": "general",
"cond": "nb_war_keep>0 and military<40",
"wait": "40",
"weight": "13",
"text": "우리나라가 싸움에 졌사옵니다. 적의 요구를 들어주어야만 하옵니다.",
"R": {
"c": "들어주어라",
"r": "",
"s": {
"문법": "-10",
"군사": "-10",
"민심": "-10",
"국고": "-10"
},
"cmd": "!nb_war_keep and !warSouth_keep and !warWest_keep and !warEast_keep and !warIslander_keep and !warViking_keep"
},
"L": {
"c": "끝까지 버틴다",
"r": "",
"s": {
"군사": "15?",
"민심": "-20",
"국고": "-15"
},
"cmd": ""
}
},
{
"id": 223,
"name": "peacetreaty",
"theme": "",
"char": "diplomat",
"cond": "nb_war_keep>0",
"wait": "40",
"weight": "6",
"text": "적이 화친을 청해 왔사옵니다! 싸움을 끝낼 좋은 기회이옵니다!",
"R": {
"c": "화친하라",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"민심": "5?",
"국고": "5?"
},
"cmd": "!nb_war_keep and !warSouth_keep and !warWest_keep and !warEast_keep and !warIslander_keep and !warViking_keep"
},
"L": {
"c": "싸움은 계속된다",
"r": "",
"s": {
"군사": "15?",
"민심": "-20",
"국고": "-15"
},
"cmd": ""
}
},
{
"id": 224,
"name": "",
"theme": "diplomacy and war",
"char": "general",
"cond": "nb_war_keep>0 and military>55",
"wait": "40",
"weight": "12",
"text": "우리 군이 계속 밀고 나아가고 있사옵니다! 이 기세로 적에게 화친 조건을 내밀까요?",
"R": {
"c": "내밀어라",
"r": "",
"s": {
"문법": "10?",
"군사": "10?",
"민심": "10?",
"국고": "10?"
},
"cmd": "!nb_war_keep and !warSouth_keep and !warWest_keep and !warEast_keep and !warIslander_keep and !warViking_keep"
},
"L": {
"c": "끝장을 보자",
"r": "",
"s": {
"군사": "15?",
"민심": "-20",
"국고": "-15"
},
"cmd": ""
}
},
{
"id": 225,
"name": "",
"theme": "diplomacy and war",
"char": "general",
"cond": "nb_war_keep>0 and military>70",
"wait": "40",
"weight": "40",
"text": "쳐들어온 적을 무찔렀사옵니다! 적의 물자를 거둬들일 기회이옵니다!",
"R": {
"c": "장하다!",
"r": "",
"s": {
"문법": "5",
"군사": "30?",
"민심": "5",
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "노략질은 허락하지 않는다",
"r": "",
"s": {
"군사": "-10"
},
"cmd": ""
}
},
{
"id": 226,
"name": "",
"theme": "diplomacy and war",
"char": "diplomat",
"cond": "!warWest_keep and military<40",
"wait": "60",
"weight": "10",
"text": "서쪽 나라 왕이 우리 군의 형편을 알아챈 듯하옵니다. 곧 쳐들어올 것이옵니다!",
"R": {
"c": "군사를 모아 쳐라!",
"r": "",
"s": {
"군사": "10?",
"민심": "-5?",
"국고": "-10?"
},
"cmd": "warWest_keep and nb_war_keep+"
},
"L": {
"c": "물러설 채비를 하라!",
"r": "",
"s": {
"군사": "10?",
"민심": "10?"
},
"cmd": "warWest_keep and nb_war_keep+"
}
},
{
"id": 227,
"name": "",
"theme": "diplomacy and war",
"char": "diplomat",
"cond": "!warSouth_keep and nb_war_keep>0",
"wait": "40",
"weight": "8",
"text": "남쪽 나라 여왕이 우리와 손잡고 싶다는 전갈을 보내왔사옵니다. 함께 쳐들어온 적과 싸울 채비가 되어 있다 하옵니다…",
"R": {
"c": "손을 잡자",
"r": "",
"s": {
"문법": "-5",
"군사": "15",
"민심": "5"
},
"cmd": ""
},
"L": {
"c": "남의 손은 빌리지 않는다",
"r": "",
"s": {
"군사": "-15?"
},
"cmd": ""
}
},
{
"id": 228,
"name": "",
"theme": "diplomacy and war",
"char": "diplomat",
"cond": "!warWest_keep",
"wait": "200",
"weight": "8",
"text": "서쪽 나라 왕이 우리 땅 일부를 사고 싶다는 전갈을 보내왔사옵니다.",
"R": {
"c": "팔아라",
"r": "",
"s": {
"민심": "-20",
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "한 뼘도 못 판다",
"r": "",
"s": {
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 229,
"name": "",
"theme": "diplomacy and war",
"char": "diplomat",
"cond": "!warEast_keep and !eastPower",
"wait": "80",
"weight": "8",
"text": "동쪽 나라 대감이 다시 싸움을 일으켰사옵니다. 그 사이에도 동쪽 나라 백성들이 국경을 넘어오고 있사옵니다.",
"R": {
"c": "받아들여라",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "-5",
"국고": "20"
},
"cmd": ""
},
"L": {
"c": "국경을 막아라",
"r": "",
"s": {
"군사": "20",
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 230,
"name": "",
"theme": "diplomacy and war",
"char": "merchant",
"cond": "!crusade_keep and !nb_war_keep",
"wait": "70",
"weight": "10",
"text": "평화가 이어져 장사도 잘되고 있사옵니다. 지금이야말로 나라 곳간을 채울 때이옵니다.",
"R": {
"c": "곳간을 채워라",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "-5",
"국고": "20"
},
"cmd": ""
},
"L": {
"c": "백성에게 나눠라",
"r": "",
"s": {
"문법": "5",
"군사": "5",
"민심": "5"
},
"cmd": ""
}
},
{
"id": 231,
"name": "battleviking_keep",
"theme": "diplomacy and war",
"char": "general",
"cond": "!warViking_keep",
"wait": "70",
"weight": "8",
"text": "북쪽 바다에서 바다 도적이 쳐들어오옵니다! 지킴을 굳혀야 하옵니다!",
"R": {
"c": "먼저 쳐라!",
"r": "",
"s": {
"문법": "5",
"군사": "-10",
"민심": "-5?",
"국고": "-10"
},
"cmd": "add_soldier and warViking_keep and nb_war_keep+"
},
"L": {
"c": "지킴을 굳혀라!",
"r": "",
"s": {
"문법": "-5",
"군사": "5",
"국고": "-5"
},
"cmd": "add_soldier and warViking_keep and nb_war_keep+"
}
},
{
"id": 232,
"name": "",
"theme": "diplomacy and war",
"char": "merchant",
"cond": "nb_war_keep>1",
"wait": "40",
"weight": "12",
"text": "우리나라는 적이 많아 군비가 큰 짐이옵니다. 정전을 맺어야 하지 않겠사옵니까?",
"R": {
"c": "정전하라",
"r": "",
"s": {
"군사": "-20",
"민심": "10",
"국고": "10"
},
"cmd": "!nb_war_keep and !warSouth_keep and !warWest_keep and !warEast_keep and !warIslander_keep and !warViking_keep"
},
"L": {
"c": "아직 이르다",
"r": "",
"s": {
"민심": "-10",
"국고": "-30"
},
"cmd": ""
}
},
{
"id": 233,
"name": "",
"theme": "diplomacy and war",
"char": "anyone",
"cond": "nb_war_keep=1",
"wait": "40",
"weight": "8",
"text": "싸움이 길어져 그만 멈추자는 청이 빗발치고 있사옵니다. 전하, 부디 결단을 내려 주시옵소서!",
"R": {
"c": "멈추어라",
"r": "",
"s": {
"군사": "-20",
"민심": "10",
"국고": "10"
},
"cmd": "!nb_war_keep and !warSouth_keep and !warWest_keep and !warEast_keep and !warIslander_keep and !warViking_keep"
},
"L": {
"c": "끝까지 싸운다",
"r": "",
"s": {
"민심": "-10",
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 234,
"name": "",
"theme": "diplomacy and war",
"char": "spy",
"cond": "nb_war_keep>0",
"wait": "25",
"weight": "10",
"text": "전하의 적인 멧돼지에게는 약점이 있사옵니다. 조금 지저분한 수단이오나 써 볼 만하옵니다.",
"R": {
"c": "써 보라",
"r": "",
"s": {
"군사": "10?",
"국고": "-5"
},
"cmd": ""
},
"L": {
"c": "그런 짓은 안 한다",
"r": "",
"s": {
"군사": "-10?",
"국고": "5?"
},
"cmd": ""
}
},
{
"id": 235,
"name": "sabotage_battle",
"theme": "diplomacy and war",
"char": "general",
"cond": "nb_war_keep>0",
"wait": "30",
"weight": "8",
"text": "우리 군의 투석기가 누군가에게 모두 부서졌사옵니다!",
"R": {
"c": "배신자를 찾아라!",
"r": "",
"s": {
"문법": "-5?",
"군사": "-5?"
},
"cmd": ""
},
"L": {
"c": "하늘이 지켜 주신다!",
"r": "",
"s": {
"문법": "10?",
"군사": "-15"
},
"cmd": ""
}
},
{
"id": 236,
"name": "",
"theme": "diplomacy and war",
"char": "anyone",
"cond": "nb_war_keep>0 and military<50",
"wait": "40",
"weight": "10",
"text": "적이 투석기로 산성을 두들기고 있사옵니다!",
"R": {
"c": "맞서 쳐라!",
"r": "",
"s": {
"군사": "-20?"
},
"cmd": ""
},
"L": {
"c": "지킴을 굳혀라!",
"r": "",
"s": {
"군사": "5?",
"민심": "-5"
},
"cmd": "!fortification_keep"
}
},
{
"id": 237,
"name": "",
"theme": "diplomacy and war",
"char": "general",
"cond": "warViking_keep and !warSouth_keep",
"wait": "50",
"weight": "8",
"text": "남쪽 나라에서 손을 잡자고 하옵니다. 바다 도적에 대비하고 싶다 하옵니다. 믿을 만한 자들이옵니다.",
"R": {
"c": "손을 잡자",
"r": "",
"s": {
"군사": "5"
},
"cmd": ">>>>victory_viking"
},
"L": {
"c": "짐은 그대를 믿지 않는다",
"r": "",
"s": {
"군사": "-20?"
},
"cmd": ""
}
},
{
"id": 238,
"name": "",
"theme": "diplomacy and war",
"char": "anyone",
"cond": "!has_general and nb_war_keep>0",
"wait": "40",
"weight": "50",
"text": "새 대장군을 세워야 적을 물리칠 수 있을 것이옵니다.",
"R": {
"c": "새로 세워라",
"r": "",
"s": {
"군사": "15",
"국고": "-10"
},
"cmd": "add_general"
},
"L": {
"c": "그럼 짐이 대장군을 맡겠다!",
"r": "",
"s": {
"문법": "5",
"군사": "-20"
},
"cmd": ""
}
},
{
"id": 239,
"name": "victory_viking",
"theme": "diplomacy and war",
"char": "soldier",
"cond": "warViking_keep",
"wait": "10",
"weight": "20",
"text": "우리가 이겼사옵니다! 바다 도적을 몰아냈사옵니다! 포로들은 어찌하시겠사옵니까?",
"R": {
"c": "모두 엄히 벌하라!",
"r": "",
"s": {
"문법": "-5",
"군사": "10",
"민심": "-5"
},
"cmd": "!warViking_keep and nb_war_keep- and add_viking and >>>>_revengeViking"
},
"L": {
"c": "포로는 풀어 주어라",
"r": "",
"s": {
"문법": "5",
"군사": "-10",
"민심": "5",
"국고": "5"
},
"cmd": "nb_war_keep- and !warViking_keep"
}
},
{
"id": 240,
"name": "expedition",
"theme": "diplomacy and war",
"char": "explorator",
"cond": "!colonies_keep and !spice_trade_keep",
"wait": "200",
"weight": "25",
"text": "저는 <explorator>이옵니다. 동쪽 바다 건너 새 뱃길을 열 수 있을지도 모르옵니다. 오늘은 뱃삯을 도와주십사 청하러 왔사옵니다.",
"R": {
"c": "도와주겠다",
"r": "",
"s": {
"문법": "-5",
"군사": "5",
"민심": "10",
"국고": "-15"
},
"cmd": ">>>>>_returnexplorator_keep"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"군사": "-5",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 241,
"name": "_returnexplorator_keep",
"theme": "diplomacy and war",
"char": "explorator",
"cond": "",
"wait": "",
"weight": "12",
"text": "아직 뱃길을 찾지는 못했사오나 그리 쉽게 그만두지는 않겠사옵니다!",
"R": {
"c": "조금 더 돕겠다",
"r": "",
"s": {
"국고": "-5"
},
"cmd": ">>>>>>>_returnexplorator_keep"
},
"L": {
"c": "더는 짐에게 기대지 마라",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 242,
"name": "_returnexplorator_keep",
"theme": "diplomacy and war",
"char": "explorator",
"cond": "",
"wait": "",
"weight": "8",
"text": "새 땅을 찾았사옵니다! 금빛 나무가 우거지고 은빛 강이 흐르며 보석 광산이 이어진 땅이옵니다. 낯선 사람들이 살고 있사옵니다.",
"R": {
"c": "우리 땅으로 삼아라",
"r": "",
"s": {
"문법": "10",
"군사": "-5?",
"민심": "20?",
"국고": "10"
},
"cmd": "colonies_keep"
},
"L": {
"c": "재물만 실어 오라",
"r": "",
"s": {
"문법": "-5?",
"군사": "20?",
"민심": "-5?",
"국고": "30"
},
"cmd": ""
}
},
{
"id": 243,
"name": "",
"theme": "diplomacy and war",
"char": "priest",
"cond": "colonies_keep",
"wait": "170",
"weight": "30",
"text": "새 땅 사람들은 아직 글을 모르옵니다. 우리가 글을 가르쳐 바른 도리를 알려야 하옵니다.",
"R": {
"c": "가르쳐라",
"r": "",
"s": {
"문법": "15",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "그들 방식대로 두어라",
"r": "",
"s": {
"문법": "-5?",
"민심": "5?",
"국고": "10"
},
"cmd": ""
}
},
{
"id": 244,
"name": "",
"theme": "diplomacy and war",
"char": "general",
"cond": "colonies_keep",
"wait": "170",
"weight": "30",
"text": "새 땅에서 값싸게 군사를 모을 수 있사옵니다!",
"R": {
"c": "모아라",
"r": "",
"s": {
"군사": "20?",
"민심": "-5?"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"군사": "-10?"
},
"cmd": ""
}
},
{
"id": 245,
"name": "",
"theme": "diplomacy and war",
"char": "priest",
"cond": "colonies_keep",
"wait": "120",
"weight": "20",
"text": "새 땅에서 난리가 났사옵니다! 그곳 사람들이 고을 일을 스스로 정하고 공정한 재판을 해 달라 하옵니다!",
"R": {
"c": "그들의 안녕을 먼저 살펴라",
"r": "",
"s": {
"문법": "5?",
"민심": "5?",
"국고": "-20?"
},
"cmd": "!colonies_keep"
},
"L": {
"c": "돈줄을 지켜라",
"r": "",
"s": {
"문법": "-5?",
"민심": "-20?",
"국고": "5?"
},
"cmd": "!colonies_keep"
}
},
{
"id": 246,
"name": "",
"theme": "diplomacy and war",
"char": "bird",
"cond": "",
"wait": "500",
"weight": "10",
"text": "깍깍! (소식을 물고 온 것 같은데 부리에는 아무것도 없다…)",
"R": {
"c": "(창틀을 살핀다.)",
"r": "(찢어진 쪽지를 찾았다. 무언가 적혀 있지만 조금밖에 읽을 수 없다.) \"병졸…\"",
"s": {},
"cmd": ">"
},
"L": {
"c": "(용상 밑을 살핀다.)",
"r": "(먼지만 잔뜩 나오고 쪽지는 보이지 않았다.)",
"s": {},
"cmd": ">"
}
},
{
"id": 247,
"name": "_",
"theme": "diplomacy and war",
"char": "general",
"cond": "",
"wait": "",
"weight": "",
"text": "분명 중요한 소식이옵니다… 국경에 군사를 보내 주시옵소서.",
"R": {
"c": "보내라",
"r": "",
"s": {
"군사": "5?",
"민심": "-5?",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "쓸데없는 걱정이다",
"r": "(역시 중요한 소식이었다.)",
"s": {
"문법": "-10?",
"군사": "-70?",
"민심": "-10?",
"국고": "-10?"
},
"cmd": ""
}
},
{
"id": 248,
"name": "_revengeViking",
"theme": "diplomacy and war",
"char": "viking",
"cond": "",
"wait": "",
"weight": "",
"text": "네놈이로구나… 내 부하들을 벌레처럼 죽인 게!",
"R": {
"c": "무엄하다!",
"r": "",
"s": {
"문법": "-20?-1",
"군사": "-20?-1",
"민심": "-20?-1",
"국고": "-20?1"
},
"cmd": ""
},
"L": {
"c": "너는 이제 짐의 종이다",
"r": "",
"s": {
"문법": "-20?-1",
"군사": "-20?-1",
"민심": "-20?-1",
"국고": "-20?1"
},
"cmd": ""
}
},
{
"id": 249,
"name": "trade_herectics",
"theme": "economy",
"char": "monk",
"cond": "has_merchant",
"wait": "60",
"weight": "10",
"text": "서원에서 대대로 만들어 온 물건을 객주들이 팔기 시작했사옵니다. 막아 주시옵소서.",
"R": {
"c": "막아라",
"r": "",
"s": {
"문법": "15?",
"국고": "-30?"
},
"cmd": ">_merchant_react"
},
"L": {
"c": "장사는 장사다",
"r": "",
"s": {
"문법": "-5?",
"국고": "5"
},
"cmd": ""
}
},
{
"id": 250,
"name": "intro_merchant",
"theme": "economy",
"char": "merchant",
"cond": "",
"wait": "del",
"weight": "40",
"text": "저는 객주 대표 <merchant>이옵니다. 보잘것없지만 고마운 마음으로 올리옵니다.",
"R": {
"c": "받겠다",
"r": "",
"s": {
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "뇌물은 받지 않는다",
"r": "",
"s": {
"문법": "5?",
"민심": "5?"
},
"cmd": ""
}
},
{
"id": 251,
"name": "_merchant_react",
"theme": "economy",
"char": "merchant",
"cond": "",
"wait": "",
"weight": "",
"text": "전하, 장사를 막지 말아 주시옵소서! 세금을 새로 매기셔도 좋으니 다시 생각해 주시옵소서.",
"R": {
"c": "세금을 내라",
"r": "",
"s": {
"문법": "-5?",
"국고": "10?"
},
"cmd": ""
},
"L": {
"c": "장사는 금한다",
"r": "",
"s": {
"국고": "-15?"
},
"cmd": ""
}
},
{
"id": 252,
"name": "spice_trade",
"theme": "economy",
"char": "merchant",
"cond": "!spice_trade_keep and !crusade_keep and dynasty>2 and !isSlaver",
"wait": "80",
"weight": "10",
"text": "우리나라는 서역과 장사를 해야 하옵니다. 허락해 주시면 남는 것의 열에 하나를 나라 곳간에 바치겠사옵니다.",
"R": {
"c": "허락한다",
"r": "",
"s": {
"문법": "-10?",
"민심": "5?",
"국고": "15"
},
"cmd": "spice_trade_keep"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "10?"
},
"cmd": ">"
}
},
{
"id": 253,
"name": "_spice_trade2",
"theme": "economy",
"char": "merchant",
"cond": "",
"wait": "",
"weight": "",
"text": "전하께서도 셈이 밝으시군요. 그럼 열에 둘을 바치지요.",
"R": {
"c": "좋다",
"r": "",
"s": {
"문법": "-20?",
"국고": "30"
},
"cmd": "spice_trade_keep"
},
"L": {
"c": "그래도 아니 된다",
"r": "",
"s": {
"문법": "5?",
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 254,
"name": "spice2",
"theme": "economy",
"char": "merchant",
"cond": "spice_trade_keep",
"wait": "30",
"weight": "10",
"text": "객주들이 사병을 모을 권리를 주시면, 독초 밀무역으로 남긴 것의 절반을 나라 곳간에 바치겠사옵니다.",
"R": {
"c": "허락한다",
"r": "",
"s": {
"문법": "-10?",
"군사": "-30?",
"민심": "-5?",
"국고": "40"
},
"cmd": ""
},
"L": {
"c": "말도 안 되는 소리…",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"민심": "5?",
"국고": "-10?"
},
"cmd": ""
}
},
{
"id": 255,
"name": "end_spice",
"theme": "economy",
"char": "merchant",
"cond": "spice_trade_keep",
"wait": "30",
"weight": "15",
"text": "비단길을 오가는 상단이 산적에게 털리는 일이 잇따르고 있사옵니다. 무장한 군졸을 호위로 붙여 주시옵소서.",
"R": {
"c": "붙여 주마",
"r": "",
"s": {
"군사": "-15?"
},
"cmd": ""
},
"L": {
"c": "알아서 지켜라",
"r": "",
"s": {
"국고": "-25?"
},
"cmd": "!spice_trade_keep"
}
},
{
"id": 256,
"name": "end_spice",
"theme": "economy",
"char": "merchant",
"cond": "spice_trade_keep",
"wait": "30",
"weight": "10",
"text": "나라 사이 일로 비단길 장사가 막혔사옵니다. 하루빨리 장사를 다시 열 수 있게 해 주시옵소서.",
"R": {
"c": "군사로 길을 열어라",
"r": "",
"s": {
"군사": "-10"
},
"cmd": ""
},
"L": {
"c": "당분간 참아라",
"r": "",
"s": {
"문법": "5",
"국고": "-15"
},
"cmd": "!spice_trade_keep"
}
},
{
"id": 257,
"name": "trust",
"theme": "economy",
"char": "merchant",
"cond": "no_merchant>1",
"wait": "30",
"weight": "25",
"text": "전하께서는 제 말씀을 하나도 들어주지 않으시는군요. 소인을 믿지 못하시옵니까?",
"R": {
"c": "이번엔 듣겠다",
"r": "",
"s": {
"문법": "-5?",
"군사": "-5?",
"민심": "-5?",
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "믿지 않는다",
"r": "",
"s": {
"국고": "-25?"
},
"cmd": ""
}
},
{
"id": 258,
"name": "poorcondition",
"theme": "economy",
"char": "merchant",
"cond": "overall<40 and !has_parker",
"wait": "100",
"weight": "12",
"text": "외람되오나 이 나라는 몹시 가난하고 약하옵니다. 제 친한 벗이 돕겠다 하옵니다. 값은 한 푼도 바라지 않는다 하옵니다.",
"R": {
"c": "도움을 받겠다",
"r": "",
"s": {
"문법": "20?",
"군사": "20?",
"민심": "20?",
"국고": "20?"
},
"cmd": ""
},
"L": {
"c": "수상하다",
"r": "",
"s": {
"문법": "-1",
"군사": "-1",
"민심": "-1",
"국고": "-1"
},
"cmd": ""
}
},
{
"id": 259,
"name": "",
"theme": "economy",
"char": "merchant",
"cond": "year>1100 and overall<48 and !has_parker",
"wait": "400",
"weight": "40",
"text": "제 친한 벗이 전하를 뵙고 싶어 하옵니다. 선물도 올리겠다 하옵니다.",
"R": {
"c": "만나 보겠다",
"r": "",
"s": {
"문법": "20?",
"군사": "20?",
"민심": "20?",
"국고": "20?"
},
"cmd": ">_parkstart and add_parker"
},
"L": {
"c": "수상하다",
"r": "",
"s": {
"문법": "-1",
"군사": "-1",
"민심": "-1",
"국고": "-1"
},
"cmd": ">"
}
},
{
"id": 260,
"name": "_",
"theme": "economy",
"char": "merchant",
"cond": "",
"wait": "",
"weight": "",
"text": "외람되오나 전하께는 이 제의를 거절하실 길이 없사옵니다. 자세한 것은 그 사람에게 직접 들으시옵소서.",
"R": {
"c": "불러오라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "무슨 소리냐",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 261,
"name": "_parkstart",
"theme": "economy",
"char": "parker",
"cond": "",
"wait": "",
"weight": "",
"text": "오늘은 어떠시옵니까, 얼간이 전하. 제가 드린 선물은 쓸모가 좀 있으셨는지?",
"R": {
"c": "무슨 선물?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "얼간이라니!",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 262,
"name": "_",
"theme": "economy",
"char": "parker",
"cond": "",
"wait": "",
"weight": "",
"text": "그런 푼돈은 코 묻은 돈이지요. '왕실 내기'로 큰돈을 벌었는데요.",
"R": {
"c": "왕실 내기?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "무슨 말이냐…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 263,
"name": "_",
"theme": "economy",
"char": "parker",
"cond": "",
"wait": "",
"weight": "",
"text": "모르셨사옵니까? 이 나라 백성 절반은 전하의 목숨이 몇 해나 붙어 있을지 내기를 걸고, 나머지 절반은 굶어 죽기 직전이옵니다.",
"R": {
"c": "뭐라…?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 264,
"name": "_",
"theme": "economy",
"char": "parker",
"cond": "",
"wait": "",
"weight": "",
"text": "그 내기로 돈 벌 궁리를 한 사람이 바로 저란 말씀이지요. 제 선물은 그저 판을 더 재미있게 할 양념 같은 것이랄까.",
"R": {
"c": "기가 막혀 말도 안 나오는구나…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "이 사기꾼!",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 265,
"name": "_",
"theme": "economy",
"char": "parker",
"cond": "",
"wait": "",
"weight": "",
"text": "쯧쯧… 고마워하실 것 없소이다. 손 안 대고 코 푼 건데. 자, 더 드리지요.",
"R": {
"c": "받겠다",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"민심": "5?",
"국고": "5?"
},
"cmd": ""
},
"L": {
"c": "필요 없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 266,
"name": "",
"theme": "economy",
"char": "parker",
"cond": "",
"wait": "100",
"weight": "10",
"text": "서원을 꼬드겨 아이들 품삯 장사에 돈을 대게 했습죠. 전하께서도 한몫 잡으시렵니까?",
"R": {
"c": "한몫 끼겠다",
"r": "",
"s": {
"문법": "15?",
"민심": "-20?",
"국고": "5"
},
"cmd": ""
},
"L": {
"c": "아이들은 건드리지 마라",
"r": "",
"s": {
"문법": "-5",
"민심": "?10"
},
"cmd": ""
}
},
{
"id": 267,
"name": "",
"theme": "economy",
"char": "parker",
"cond": "",
"wait": "100",
"weight": "10",
"text": "북쪽 끝에서 멋지게 판을 뒤엎으려 하는뎁쇼. 솜씨 좋은 군졸이 필요하옵니다.",
"R": {
"c": "빌려주마",
"r": "",
"s": {
"군사": "-15?",
"국고": "10?"
},
"cmd": ""
},
"L": {
"c": "끼지 않겠다",
"r": "",
"s": {
"문법": "5?"
},
"cmd": ""
}
},
{
"id": 268,
"name": "",
"theme": "economy",
"char": "parker",
"cond": "hospital_keep",
"wait": "100",
"weight": "10",
"text": "저와 친한 좀 수상한 아가씨들이 잔치에 피가 필요하다는군요. 전하의 혜민서에 많을 것 같은데.",
"R": {
"c": "가져가라",
"r": "",
"s": {
"문법": "-15?",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "썩 물러가라",
"r": "",
"s": {
"문법": "5?"
},
"cmd": ""
}
},
{
"id": 269,
"name": "tools",
"theme": "economy",
"char": "merchant",
"cond": "!has_foreign_princess",
"wait": "360",
"weight": "14",
"text": "다른 나라 상인이 처음 보는 농기구를 팔고 있사옵니다. 똑같이 만들면 어떠하옵니까?",
"R": {
"c": "베껴 만들어라",
"r": "",
"s": {
"국고": "-10?"
},
"cmd": ""
},
"L": {
"c": "남의 것은 탐내지 마라",
"r": "",
"s": {
"국고": "10"
},
"cmd": "add_foreign_princess and >"
}
},
{
"id": 270,
"name": "_farming",
"theme": "economy",
"char": "merchant",
"cond": "",
"wait": "300",
"weight": "",
"text": "전하, 현명치 못한 판단이셨사옵니다… 그 다른 나라 상인이 전하를 뵙자고 하옵니다.",
"R": {
"c": "들라 하라",
"r": "",
"s": {},
"cmd": ">_intro_fp_trade and no_merchant++"
},
"L": {
"c": "만나지 않겠다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 271,
"name": "_intro_fp_trade",
"theme": "economy",
"char": "foreign_princess",
"cond": "",
"wait": "",
"weight": "",
"text": "장사하는 여인은 처음 보시오? 우리나라 여인들은 그대를 모시는 궁녀들처럼 머리가 장식이 아니라오.",
"R": {
"c": "어서 오시오!",
"r": "",
"s": {
"문법": "-5",
"국고": "15?"
},
"cmd": ""
},
"L": {
"c": "짐 곁에 오지 마라…",
"r": "",
"s": {
"문법": "5?",
"국고": "-10?"
},
"cmd": "del_foreign_princess"
}
},
{
"id": 272,
"name": "trade",
"theme": "economy",
"char": "anyone",
"cond": "!has_merchant",
"wait": "70",
"weight": "18",
"text": "상인들이 새 객주 모임을 꾸려 대궐에 대표를 보내고 싶다 하옵니다.",
"R": {
"c": "들라 하라",
"r": "",
"s": {
"문법": "-5?",
"군사": "-5?",
"민심": "-5?",
"국고": "15?"
},
"cmd": "add_merchant"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"국고": "-15?"
},
"cmd": ""
}
},
{
"id": 273,
"name": "credit",
"theme": "economy",
"char": "nobleman",
"cond": "treasure>45 and treasure<60",
"wait": "40",
"weight": "10",
"text": "전하, 나라 살림이 쪼들리신다면 엽전 이천 냥을 빌려 드리지요. 이자는 다섯 푼이옵니다.",
"R": {
"c": "빌리겠다",
"r": "",
"s": {
"국고": "10"
},
"cmd": ">>>>_interests"
},
"L": {
"c": "되었다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 274,
"name": "credit2",
"theme": "economy",
"char": "nobleman",
"cond": "treasure<45",
"wait": "40",
"weight": "10",
"text": "전하, 나라 살림이 쪼들리신다면 엽전 팔천 냥을 빌려 드리지요. 이자는 다섯 푼이옵니다.",
"R": {
"c": "빌리겠다",
"r": "",
"s": {
"국고": "40"
},
"cmd": ">>>>_interests_2"
},
"L": {
"c": "되었다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 275,
"name": "_interests",
"theme": "economy",
"char": "nobleman",
"cond": "",
"wait": "5",
"weight": "300",
"text": "전하, 빌려 드린 돈을 받으러 왔사옵니다.",
"R": {
"c": "갚겠다",
"r": "",
"s": {
"국고": "-12"
},
"cmd": ""
},
"L": {
"c": "이자를 베어라!",
"r": "",
"s": {
"문법": "-15?",
"군사": "-15?",
"민심": "-15?"
},
"cmd": "del_nobleman"
}
},
{
"id": 276,
"name": "_interests_2",
"theme": "economy",
"char": "nobleman",
"cond": "",
"wait": "5",
"weight": "300",
"text": "전하, 빌려 드린 돈을 받으러 왔사옵니다.",
"R": {
"c": "갚겠다",
"r": "",
"s": {
"국고": "-48"
},
"cmd": ""
},
"L": {
"c": "이자를 베어라!",
"r": "",
"s": {
"문법": "-15?",
"군사": "-15?",
"민심": "-15?"
},
"cmd": "del_nobleman"
}
},
{
"id": 277,
"name": "hunt",
"theme": "entertainment",
"char": "nobleman",
"cond": "",
"wait": "60",
"weight": "6",
"text": "전하, 멧돼지 사냥이라도 나가시지요.",
"R": {
"c": "가자",
"r": "",
"s": {},
"cmd": ">_hunt_outcome"
},
"L": {
"c": "바쁘다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 278,
"name": "_hunt_outcome",
"theme": "entertainment",
"char": "nobleman",
"cond": "",
"wait": "5",
"weight": "30",
"text": "멋지게 잡으셨사옵니다! 오늘은 성대하게 잔치를 여시지요!",
"R": {
"c": "잔치를 열어라",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"국고": "5?"
},
"cmd": ""
},
"L": {
"c": "고기는 백성에게 나눠라",
"r": "",
"s": {
"문법": "-2?",
"군사": "-2?",
"민심": "15",
"국고": "-2?"
},
"cmd": ""
}
},
{
"id": 279,
"name": "_hunt_outcome",
"theme": "entertainment",
"char": "nobleman",
"cond": "!isStone",
"wait": "5",
"weight": "10",
"text": "사냥감을 놓치셨사옵니다… 겨우 버섯을 땄는데… 갈색 버섯과 파란 버섯이옵니다.",
"R": {
"c": "파란 것을 다오",
"r": "",
"s": {},
"cmd": "isStone"
},
"L": {
"c": "갈색을 다오",
"r": "(아무 일도 일어나지 않았다.)",
"s": {},
"cmd": ""
}
},
{
"id": 280,
"name": "_hunt_outcome",
"theme": "entertainment",
"char": "anyone",
"cond": "",
"wait": "5",
"weight": "10",
"text": "전하, 사냥 중에 크게 다치셨사옵니다! 상처에서 피가 흐르옵니다!",
"R": {
"c": "의원을…!",
"r": "",
"s": {
"문법": "-5?",
"군사": "-5?",
"민심": "-5?",
"국고": "-10?"
},
"cmd": "add_doctor and >_die_gangrene"
},
"L": {
"c": "가만히 두어라…",
"r": "",
"s": {
"문법": "-100",
"군사": "-100",
"민심": "-100",
"국고": "-100"
},
"cmd": ">_end_bed"
}
},
{
"id": 281,
"name": "fun",
"theme": "entertainment",
"char": "courtesan",
"cond": "age=7",
"wait": "70",
"weight": "200",
"text": "오늘은 전하의 스무 번째 생신이옵니다! 소인과 함께 축하하시지요!",
"R": {
"c": "축하하자",
"r": "",
"s": {
"문법": "5",
"군사": "5",
"민심": "5",
"국고": "-15?"
},
"cmd": ""
},
"L": {
"c": "조용히 보내겠다",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "-5?"
},
"cmd": ""
}
},
{
"id": 282,
"name": "",
"theme": "entertainment",
"char": "jester",
"cond": "",
"wait": "200",
"weight": "10",
"text": "전하가 짐승이라면 뭘까요? 호랑이? 헤헤.",
"R": {
"c": "호랑이지",
"r": "",
"s": {
"군사": "6?"
},
"cmd": ">>>_jesterlion"
},
"L": {
"c": "…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 283,
"name": "_",
"theme": "entertainment",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "아니면, 지네?",
"R": {
"c": "지네지",
"r": "",
"s": {
"문법": "6?"
},
"cmd": ">>>_jesterscorp"
},
"L": {
"c": "…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 284,
"name": "_",
"theme": "entertainment",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "그럼, 노루?",
"R": {
"c": "노루지",
"r": "",
"s": {
"민심": "6?"
},
"cmd": ">>>_jestergaz"
},
"L": {
"c": "…",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 285,
"name": "_jesterlion",
"theme": "entertainment",
"char": "anyone",
"cond": "has_jester",
"wait": "",
"weight": "",
"text": "큰일이옵니다! <jester>이(가) 도성에 호랑이를 풀어 놓았사옵니다! 아수라장이옵니다!",
"R": {
"c": "군사를 보내라!",
"r": "",
"s": {
"군사": "-15"
},
"cmd": ""
},
"L": {
"c": "성문을 닫아라",
"r": "",
"s": {
"군사": "-5",
"민심": "-15"
},
"cmd": ""
}
},
{
"id": 286,
"name": "_jesterscorp",
"theme": "entertainment",
"char": "anyone",
"cond": "has_jester",
"wait": "",
"weight": "",
"text": "큰일이옵니다! <jester>이(가) 대궐 안에 지네를 풀어 놓았사옵니다. <monk>이(가) 물려 위독하옵니다!",
"R": {
"c": "광대를 내쫓아라",
"r": "",
"s": {},
"cmd": "del_jester"
},
"L": {
"c": "이 일은 덮어라",
"r": "",
"s": {
"문법": "-10?"
},
"cmd": ""
}
},
{
"id": 287,
"name": "_jestergaz",
"theme": "entertainment",
"char": "anyone",
"cond": "has_jester",
"wait": "",
"weight": "",
"text": "<jester>이(가) 노루를 데리고 도성에 나타나 백성들이 몹시 기뻐하옵니다! 금수원을 지으시면 어떠하옵니까?",
"R": {
"c": "지어라",
"r": "",
"s": {
"민심": "12?"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"민심": "-4?"
},
"cmd": ""
}
},
{
"id": 288,
"name": "song",
"theme": "entertainment",
"char": "jester",
"cond": "",
"wait": "80",
"weight": "5",
"text": "전하를 위해 노래 한 곡 뽑을게. '바보와 전하'라는 노래야.",
"R": {
"c": "불러 보라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "듣고 싶지 않다",
"r": "",
"s": {
"문법": "5"
},
"cmd": ""
}
},
{
"id": 289,
"name": "_song1",
"theme": "entertainment",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "옛날 옛적에~ 가엾은 바보가~ 홀로 쓸쓸히 노래를 했다네~ 자, 다들 들어 봐~ 아주 슬픈 노래였다네~…",
"R": {
"c": "계속해 보라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "거기까지다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 290,
"name": "_song2",
"theme": "entertainment",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "…바보는 짐승을 길렀다네~ '전하'라는 이름의 못난 짐승~…",
"R": {
"c": "계속해 보라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "위병! 저 광대를 잡아라!",
"r": "",
"s": {},
"cmd": "del_jester"
}
},
{
"id": 291,
"name": "_song3",
"theme": "entertainment",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "그래도 전하는 깨끗하고 착하지~ 정말 귀여워~ 언제나 꼬리를 살랑살랑~",
"R": {
"c": "고맙구나",
"r": "",
"s": {
"민심": "10"
},
"cmd": ""
},
"L": {
"c": "끔찍하구나",
"r": "",
"s": {
"문법": "10"
},
"cmd": ""
}
},
{
"id": 292,
"name": "party",
"theme": "entertainment",
"char": "queen",
"cond": "!queendom",
"wait": "60",
"weight": "10",
"text": "전하, 마상 무예 시합을 열어 보시옵소서!",
"R": {
"c": "열어라",
"r": "",
"s": {
"군사": "10?",
"민심": "5?",
"국고": "-20"
},
"cmd": ""
},
"L": {
"c": "짐이 살아 있는 한 아니 된다",
"r": "",
"s": {
"군사": "-5",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 293,
"name": "",
"theme": "entertainment",
"char": "queen",
"cond": "!has_lady and !isLover and !queendom",
"wait": "100",
"weight": "12",
"text": "솜씨 좋은 사촌을 불러 만찬을 여시지요!",
"R": {
"c": "열어라",
"r": "",
"s": {
"민심": "5",
"국고": "-10"
},
"cmd": "add_lady and >lady_intro"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"민심": "-5?"
},
"cmd": ""
}
},
{
"id": 296,
"name": "_reddwarf_fall",
"theme": "entertainment",
"char": "jester",
"cond": "treasure=0",
"wait": "",
"weight": "max",
"text": "날 속여 봤자 소용없어. 곳간이 텅텅 빈 거 다 알아.",
"R": {
"c": "돈을 마련해 오겠다",
"r": "",
"s": {},
"cmd": ">_play5"
},
"L": {
"c": "그만하자",
"r": "",
"s": {},
"cmd": ">_play5"
}
},
{
"id": 298,
"name": "_reddwarf_fall2",
"theme": "entertainment",
"char": "jester",
"cond": "treasure=0",
"wait": "",
"weight": "max",
"text": "날 속여 봤자 소용없어. 곳간이 텅텅 빈 거 다 알아.",
"R": {
"c": "돈을 마련해 오겠다",
"r": "",
"s": {},
"cmd": ">_play15"
},
"L": {
"c": "그만하자",
"r": "",
"s": {},
"cmd": ">_play15"
}
},
{
"id": 300,
"name": "_reddwarf_fall3",
"theme": "entertainment",
"char": "jester",
"cond": "treasure=0",
"wait": "",
"weight": "max",
"text": "날 속여 봤자 소용없어. 곳간이 텅텅 빈 거 다 알아.",
"R": {
"c": "돈을 마련해 오겠다",
"r": "(<jester>이(가) 천천히 사발을 들었다. 주사위는…)",
"s": {},
"cmd": ">_play35"
},
"L": {
"c": "그만하자",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 294,
"name": "reddwarf",
"theme": "entertainment",
"char": "jester",
"cond": "",
"wait": "50",
"weight": "8",
"text": "전하, 나랑 주사위 놀음 안 할래? 전하가 쫄딱 망하면 곤란하니 처음엔 조금씩 걸자.",
"R": {
"c": "좋다, 걸겠다",
"r": "",
"s": {
"국고": "-5"
},
"cmd": ">_reddwarf_fall and reddwarf_keep"
},
"L": {
"c": "놀음은 안 한다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 295,
"name": "_reddwarf_fall",
"theme": "entertainment",
"char": "jester>throw",
"cond": "",
"wait": "",
"weight": "10",
"text": "주사위는 던져졌다! 내가 이길 게 뻔해. 어떻게 할래? 판돈 올릴래?",
"R": {
"c": "(결과를 본다.)",
"r": "(<jester>이(가) 천천히 사발을 들었다. 주사위는…)",
"s": {},
"cmd": ">_play5"
},
"L": {
"c": "(판돈을 올린다.)",
"r": "",
"s": {
"국고": "-10"
},
"cmd": ">_reddwarf_fall2"
}
},
{
"id": 297,
"name": "_reddwarf_fall2",
"theme": "entertainment",
"char": "jester>throw",
"cond": "",
"wait": "",
"weight": "10",
"text": "여기서 그만두다니 체면도 없으셔.",
"R": {
"c": "(결과를 본다.)",
"r": "(<jester>이(가) 천천히 사발을 들었다. 주사위는…)",
"s": {},
"cmd": ">_play15"
},
"L": {
"c": "(판돈을 올린다.)",
"r": "",
"s": {
"국고": "-20"
},
"cmd": ">_reddwarf_fall3"
}
},
{
"id": 299,
"name": "_reddwarf_fall3",
"theme": "entertainment",
"char": "jester>throw",
"cond": "",
"wait": "",
"weight": "10",
"text": "곳간을 통째로 걸 거야?",
"R": {
"c": "(결과를 본다.)",
"r": "(<jester>이(가) 천천히 사발을 들었다. 주사위는…)",
"s": {},
"cmd": ">_play35"
},
"L": {
"c": "(판돈을 올린다.)",
"r": "(<jester>이(가) 천천히 사발을 들었다. 주사위는…)",
"s": {
"국고": "-40"
},
"cmd": ">_play75"
}
},
{
"id": 301,
"name": "_play5",
"theme": "entertainment",
"char": "jester>won",
"cond": "",
"wait": "",
"weight": "10",
"text": "짝이다! 전하가 이기긴 했는데, 이게 바로 '처음 끗발'이란 거지. 다음엔 안 져.",
"R": {
"c": "한 판 더?",
"r": "",
"s": {
"국고": "5"
},
"cmd": ">_reddwarf_fall"
},
"L": {
"c": "그만하자",
"r": "",
"s": {
"국고": "10"
},
"cmd": ""
}
},
{
"id": 302,
"name": "_play5",
"theme": "entertainment",
"char": "jester>lost",
"cond": "!dice_keep",
"wait": "",
"weight": "10",
"text": "홀이야! 내가 이겼네~! 어떻게 할래? 한 번 더 할 거야?",
"R": {
"c": "한 판 더!",
"r": "",
"s": {
"국고": "-5"
},
"cmd": ">_reddwarf_fall"
},
"L": {
"c": "그만하자",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 303,
"name": "_play15",
"theme": "entertainment",
"char": "jester>won",
"cond": "",
"wait": "",
"weight": "10",
"text": "짝!? 말도 안 돼! 에잇~ 내 엽전 돌려줘!",
"R": {
"c": "한 번 더…",
"r": "",
"s": {
"국고": "15"
},
"cmd": ">_reddwarf_fall2"
},
"L": {
"c": "그만하자",
"r": "",
"s": {
"국고": "30"
},
"cmd": ""
}
},
{
"id": 304,
"name": "_play15",
"theme": "entertainment",
"char": "jester>lost",
"cond": "!dice_keep",
"wait": "",
"weight": "10",
"text": "홀이야! 내가 이겼네~! 난 이 놀음 정말 잘하거든. 어떻게 할래? 한 번 더?",
"R": {
"c": "한 판 더!",
"r": "",
"s": {
"국고": "-5"
},
"cmd": ">_reddwarf_fall"
},
"L": {
"c": "그만하자",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 305,
"name": "_play35",
"theme": "entertainment",
"char": "jester>won",
"cond": "",
"wait": "",
"weight": "10",
"text": "짝! 전하가 이겼네… 이런~ 한 번 더! 이번엔 속임수 없기다!",
"R": {
"c": "한 판 더!",
"r": "",
"s": {
"국고": "35"
},
"cmd": ">_reddwarf_fall3"
},
"L": {
"c": "그만하자",
"r": "",
"s": {
"국고": "70"
},
"cmd": ""
}
},
{
"id": 306,
"name": "_play35",
"theme": "entertainment",
"char": "jester>lost",
"cond": "!dice_keep",
"wait": "",
"weight": "10",
"text": "홀이야! 또 내가 이겼어! 이대로면 내가 이 대궐 주인이 되겠네! 한 번 더?",
"R": {
"c": "한 판 더!",
"r": "",
"s": {
"국고": "-5"
},
"cmd": ">_reddwarf_fall"
},
"L": {
"c": "그만하자",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 307,
"name": "_play75",
"theme": "entertainment",
"char": "jester>won",
"cond": "",
"wait": "",
"weight": "10",
"text": "짝! 전하가 이겼군! 하지만 기뻐하는 것도 지금뿐이야…",
"R": {
"c": "무슨 뜻이냐?",
"r": "",
"s": {
"국고": "100"
},
"cmd": ""
},
"L": {
"c": "흥",
"r": "",
"s": {
"국고": "100"
},
"cmd": ""
}
},
{
"id": 308,
"name": "_play75",
"theme": "entertainment",
"char": "jester>lost",
"cond": "!dice_keep",
"wait": "",
"weight": "10",
"text": "홀이야! 이제부터 전하는 내 종이라고!",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 309,
"name": "",
"theme": "entertainement",
"char": "jester",
"cond": "",
"wait": "300",
"weight": "10",
"text": "전하한테 줄 선물이 있어. 오른손이랑 왼손, 어느 쪽이 좋아?",
"R": {
"c": "왼손!",
"r": "(<jester>은(는) 왕에게 죽은 새를 건네고는 괴상한 소리를 지르며 달아났다.)",
"s": {
"군사": "-5?",
"국고": "-5?"
},
"cmd": "del_bird"
},
"L": {
"c": "오른손!",
"r": "(<jester>은(는) 왕에게 금으로 된 붓 한 자루를 건네고는 괴상한 소리를 지르며 달아났다.)",
"s": {
"문법": "-5?",
"국고": "5?"
},
"cmd": ">"
}
},
{
"id": 310,
"name": "_gift1",
"theme": "entertainement",
"char": "monk",
"cond": "",
"wait": "",
"weight": "",
"text": "전하, 그 광대가 서원의 금붓을 훔쳐 갔… 어라? 어찌 전하께서 그 금붓을 가지고 계시옵니까?",
"R": {
"c": "가져가라",
"r": "",
"s": {
"문법": "10",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "나라의 물건이다",
"r": "",
"s": {
"문법": "-15"
},
"cmd": ""
}
},
{
"id": 311,
"name": "",
"theme": "",
"char": "priest",
"cond": "year>900",
"wait": "300",
"weight": "12",
"text": "젊은 천재 화원을 찾아냈사옵니다. 그의 그림은 그야말로 하늘이 내린 재주이옵니다.",
"R": {
"c": "데려오라",
"r": "",
"s": {
"문법": "10",
"국고": "-5?"
},
"cmd": "add_painter and >"
},
"L": {
"c": "그럴 여유는 없다",
"r": "",
"s": {
"문법": "-5",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 312,
"name": "",
"theme": "",
"char": "painter",
"cond": "",
"wait": "del",
"weight": "40",
"text": "소인은 <painter>이옵니다. 전하께서 그림 값을 대 주시면 제 그림이 세상을 바꿀 것이옵니다.",
"R": {
"c": "대 주마",
"r": "",
"s": {
"문법": "5",
"군사": "5",
"민심": "5",
"국고": "-15"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "-10"
},
"cmd": ""
}
},
{
"id": 313,
"name": "",
"theme": "entertainment",
"char": "painter",
"cond": "",
"wait": "160",
"weight": "8",
"text": "전하의 어진을 그리게 해 주시옵소서!",
"R": {
"c": "그려라",
"r": "",
"s": {
"민심": "5",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 314,
"name": "",
"theme": "entertainment",
"char": "painter",
"cond": "",
"wait": "200",
"weight": "10",
"text": "전하의 움직이는 어진을 그리고 싶사옵니다.",
"R": {
"c": "움직이는 어진…?",
"r": "",
"s": {
"민심": "5?"
},
"cmd": ">"
},
"L": {
"c": "그런 건 없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 315,
"name": "_",
"theme": "entertainment",
"char": "painter",
"cond": "",
"wait": "",
"weight": "",
"text": "전하의 옥체에 그림을 그리겠사옵니다. 이것이야말로 가장 새로운 그림이지요!",
"R": {
"c": "해 보라",
"r": "",
"s": {
"문법": "-10?",
"민심": "10?",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "당치 않다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 316,
"name": "",
"theme": "entertainment",
"char": "painter",
"cond": "",
"wait": "200",
"weight": "10",
"text": "집현전 벽과 천장 가득 전하의 업적을 기리는 벽화를 그리고 싶사옵니다!",
"R": {
"c": "그려라",
"r": "",
"s": {
"문법": "5",
"군사": "10?",
"민심": "5",
"국고": "-20?"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "-5",
"군사": "-5"
},
"cmd": ""
}
},
{
"id": 317,
"name": "",
"theme": "entertainment",
"char": "painter",
"cond": "!isLover",
"wait": "120",
"weight": "8",
"text": "오늘은 일을 너무 많이 했군요. 전하, 함께 몸이라도 푸시겠사옵니까?",
"R": {
"c": "자, 겨뤄 보자!",
"r": "",
"s": {
"군사": "5?"
},
"cmd": ">_duel_painter"
},
"L": {
"c": "됐다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 320,
"name": "",
"theme": "entertainment",
"char": "general",
"cond": "has_jester",
"wait": "140",
"weight": "8",
"text": "<jester> 놈이 투석기를 부수었사옵니다. 놈의 팔다리를 꺾어 놓아도 되겠사옵니까?",
"R": {
"c": "<jester>!",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "자, 진정하라",
"r": "",
"s": {
"군사": "-10"
},
"cmd": ">"
}
},
{
"id": 321,
"name": "_",
"theme": "entertainment",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "거인이랑 제기차기를 하고 있었어. 내가 졌지만.",
"R": {
"c": "너를 내쫓겠다!",
"r": "",
"s": {
"민심": "-5"
},
"cmd": "del_jester"
},
"L": {
"c": "군에 물어 주어라",
"r": "",
"s": {
"군사": "10",
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 322,
"name": "",
"theme": "entertainement",
"char": "jester",
"cond": "!spin_keep",
"wait": "500",
"weight": "20",
"text": "전하는 왕 할 재주가 없어.",
"R": {
"c": "뭐라?",
"r": "",
"s": {},
"cmd": ">_springjest"
},
"L": {
"c": "위병!",
"r": "",
"s": {
"문법": "10?",
"군사": "5?"
},
"cmd": ">"
}
},
{
"id": 323,
"name": "_",
"theme": "entertainement",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "잠깐만. 내 얘기 좀 들어 봐.",
"R": {
"c": "말해 보라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "위병!",
"r": "(얼마 뒤 <jester>은(는) 벌을 받아 목숨을 잃었다.)",
"s": {},
"cmd": "del_jester"
}
},
{
"id": 324,
"name": "_springjest",
"theme": "entertainement",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "전하가 하는 일 중에 백성들한테 그나마 인기 있는 건 그 괴상한 봄 잔치밖에 없어.",
"R": {
"c": "짐은 좋아한다만",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"민심": "5?"
},
"cmd": ">"
},
"L": {
"c": "나쁘지 않지",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 325,
"name": "_",
"theme": "entertainement",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "서툰 가야금에 맞춰 뒤뚱뒤뚱 춤추는 게 다잖아? 완전 캄캄한 시대라고. 웃기지도 않아.",
"R": {
"c": "아…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "음…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 326,
"name": "_",
"theme": "entertainement",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "백성들이 원하는 건 얽히고설킨 이야기에 칼싸움에 연모까지 듬뿍 든 짜릿한 구경거리라고!",
"R": {
"c": "그렇구나",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "그런 건 필요 없다",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 327,
"name": "_",
"theme": "entertainement",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "그래서 나를 이 대궐 놀이 판서로 앉혔지. 고마워할 것 없어!",
"R": {
"c": "좋다",
"r": "",
"s": {
"문법": "-10?",
"민심": "5?",
"국고": "?5"
},
"cmd": "spin_keep"
},
"L": {
"c": "싫다면 어쩔 테냐?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 328,
"name": "_",
"theme": "entertainement",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "안 시켜 주면 난 그냥 대궐을 떠날 거고, 전하는 봄 잔치에서 원하는 만큼 춤이나 실컷 추셔.",
"R": {
"c": "허락하마",
"r": "",
"s": {
"문법": "-10?",
"민심": "5?",
"국고": "?5"
},
"cmd": "spin_keep"
},
"L": {
"c": "너를 내쫓겠다!",
"r": "",
"s": {},
"cmd": "del_jester"
}
},
{
"id": 329,
"name": "",
"theme": "entertainement",
"char": "jester",
"cond": "spin_keep",
"wait": "150",
"weight": "10",
"text": "요즘 벌주는 구경은 너무 지루해. 꾸밈을 더 궁리해서 구경꾼 마음을 사로잡아야지. 재미난 놀이랑 불꽃놀이도 준비해서 신나게 해 보자고.",
"R": {
"c": "그리하라",
"r": "",
"s": {
"군사": "-5?",
"민심": "5"
},
"cmd": ">"
},
"L": {
"c": "당치 않다",
"r": "",
"s": {
"군사": "5",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 330,
"name": "_",
"theme": "entertainement",
"char": "executioner",
"cond": "",
"wait": "",
"weight": "",
"text": "방금 그 말은 못 들은 걸로 하시지요.",
"R": {
"c": "그러마",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "다 들었다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 331,
"name": "",
"theme": "entertainement",
"char": "jester",
"cond": "spin_keep",
"wait": "150",
"weight": "10",
"text": "백성들은 전하가 아침에 일어나 뒷간 가는 모습을 보고 싶어 해. 돈을 내고라도 말이야.",
"R": {
"c": "정말이냐?",
"r": "",
"s": {
"문법": "-5?",
"군사": "-5?",
"민심": "15?",
"국고": "10?"
},
"cmd": ""
},
"L": {
"c": "말도 안 된다",
"r": "",
"s": {
"민심": "-5?",
"국고": "-5?"
},
"cmd": ""
}
},
{
"id": 332,
"name": "",
"theme": "entertainement",
"char": "jester",
"cond": "spin_keep and !isLover",
"wait": "150",
"weight": "10",
"text": "전하는 <courtesan>이랑 소문이 좀 나야 돼. 다들 기대하고 있어.",
"R": {
"c": "그래 볼까",
"r": "",
"s": {
"민심": "10?"
},
"cmd": ">"
},
"L": {
"c": "싫다",
"r": "",
"s": {
"민심": "-5?"
},
"cmd": ""
}
},
{
"id": 333,
"name": "_",
"theme": "entertainement",
"char": "courtesan",
"cond": "",
"wait": "",
"weight": "",
"text": "전하… 무엇이든 다 해 드릴게요. 떡 빚는 일만 빼고요.",
"R": {
"c": "그럼 춤을 추어라",
"r": "",
"s": {
"민심": "10?",
"국고": "-5?"
},
"cmd": "isLover"
},
"L": {
"c": "됐다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 334,
"name": "",
"theme": "entertainement",
"char": "jester",
"cond": "spin_keep and !warWest_keep",
"wait": "150",
"weight": "10",
"text": "서쪽 나라에 쳐들어가는 게 어때? 아주 멋진 싸움이 될 거야.",
"R": {
"c": "쳐들어가라",
"r": "",
"s": {
"군사": "-15",
"국고": "-10?"
},
"cmd": "nb_war_keep+ and warWest_keep"
},
"L": {
"c": "싸움은 놀이가 아니다",
"r": "",
"s": {
"민심": "5"
},
"cmd": ""
}
},
{
"id": 335,
"name": "",
"theme": "entertainement",
"char": "jester",
"cond": "spin_keep",
"wait": "150",
"weight": "10",
"text": "전하가 장사에 대해 아무것도 모르는 건 알아. 그래도 상인들 앞에서 즉석 연설을 해 보는 건 어때?",
"R": {
"c": "해 보겠다",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"민심": "5?",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "그만두겠다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 336,
"name": "",
"theme": "entertainement",
"char": "jester",
"cond": "spin_keep",
"wait": "150",
"weight": "10",
"text": "나라 안 모든 걱정은 몽땅 섬나라에서 건너온 사람들 탓으로 돌리자고.",
"R": {
"c": "그리하자",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"민심": "5?",
"국고": "?-15"
},
"cmd": ""
},
"L": {
"c": "남 탓은 안 된다",
"r": "",
"s": {
"국고": "5?"
},
"cmd": ""
}
},
{
"id": 337,
"name": "ratereigns",
"theme": "entertainement",
"char": "jester",
"cond": "!rating_keep and year>800 and mobile_keep",
"wait": "del",
"weight": "100",
"text": "전하! 나라 다스리는 거 재미있어? 그럼 온 세상에 전하의 나라 사랑이랑 고양이 사랑을 자랑해 봐.",
"R": {
"c": "(이 놀이를 동무에게 알린다.)",
"r": "",
"s": {},
"cmd": "rating_keep"
},
"L": {
"c": "싫다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 338,
"name": "ratereigns",
"theme": "entertainement",
"char": "parker",
"cond": "!rating_keep and mobile_keep",
"wait": "del",
"weight": "30",
"text": "안녕, 얼간이 전하! 이 놀이가 재미있다고 소문은 냈어? 어려우면 내가 좀 도와주지.",
"R": {
"c": "(이 놀이를 동무에게 알린다.)",
"r": "",
"s": {
"문법": "20",
"군사": "20",
"민심": "20",
"국고": "20"
},
"cmd": "rating_keep"
},
"L": {
"c": "싫다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 339,
"name": "",
"theme": "entertainement",
"char": "courtesan",
"cond": "age>10",
"wait": "80",
"weight": "5",
"text": "전하… 제 떡 좀 맛보지 않으시겠사옵니까?",
"R": {
"c": "기꺼이 먹겠다",
"r": "(떡이 참으로 맛있다.)",
"s": {
"민심": "5?"
},
"cmd": ">>>>>_toomuchsugar"
},
"L": {
"c": "너무 뜨겁구나",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 340,
"name": "",
"theme": "entertainement",
"char": "courtesan",
"cond": "age>10",
"wait": "80",
"weight": "5",
"text": "이 떡을 드시면 신선 세계에 온 듯한 기분이 드실 것이옵니다.",
"R": {
"c": "하나 더 다오",
"r": "",
"s": {
"민심": "5?"
},
"cmd": ">>>>>_toomuchsugar"
},
"L": {
"c": "속이 더부룩하다",
"r": "",
"s": {
"민심": "-5?"
},
"cmd": ""
}
},
{
"id": 341,
"name": "_toomuchsugar",
"theme": "entertainement",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "",
"text": "단 것을 너무 많이 드셨사옵니다, 전하! 줄이지 않으시면 옥체가 위태롭사옵니다!",
"R": {
"c": "줄이겠다",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "떡을 먹다 죽으면 좋지",
"r": "",
"s": {},
"cmd": "older"
}
},
{
"id": 342,
"name": "",
"theme": "entertainement",
"char": "courtesan",
"cond": "nb_war_keep>0",
"wait": "90",
"weight": "10",
"text": "올해 봄 잔치에는 저와 함께 가시겠사옵니까? 고운 벗들을 불러 이웃 나라 손님들을 대접해 보지요.",
"R": {
"c": "가겠다",
"r": "",
"s": {
"문법": "-10?",
"군사": "5?",
"민심": "5?",
"국고": "-10"
},
"cmd": ">>>peacetreaty"
},
"L": {
"c": "됐다",
"r": "",
"s": {
"문법": "5"
},
"cmd": ""
}
},
{
"id": 343,
"name": "minstrel_add",
"theme": "entertainement",
"char": "nobleman",
"cond": "!has_minstrel",
"wait": "150",
"weight": "40",
"text": "소인은 이름난 소리꾼과 가깝사옵니다. 고운 소리를 함께 즐기시겠사옵니까?",
"R": {
"c": "부르라",
"r": "(이제 나라가 좀 흥겨워지면 좋겠는데…)",
"s": {
"문법": "5",
"군사": "5",
"민심": "5",
"국고": "-10"
},
"cmd": "add_minstrel"
},
"L": {
"c": "됐다",
"r": "(나라 살림은 더 급한 데 써야 한다.)",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 344,
"name": "minstrel_displeased",
"theme": "entertainement",
"char": "minstrel",
"cond": "no_minstrel>1",
"wait": "50",
"weight": "20",
"text": "전하께서는 제 노래가 마음에 들지 않으시는군요. 서쪽 나라로 가겠사옵니다. 그들이라면 제 노래를 알아줄 것이옵니다.",
"R": {
"c": "성가신 자가 떠나는구나",
"r": "(왕은 객주에게 명해 소리꾼이 남긴 악보를 한 장도 남김없이 팔아 치웠다.)",
"s": {
"문법": "-5?",
"군사": "-5?",
"민심": "-5?",
"국고": "20"
},
"cmd": "del_minstrel"
},
"L": {
"c": "떠나지 마라…",
"r": "",
"s": {
"국고": "-6"
},
"cmd": ""
}
},
{
"id": 345,
"name": "minstrel_write",
"theme": "entertainement",
"char": "minstrel",
"cond": "",
"wait": "60",
"weight": "10",
"text": "전하를 위해 한 곡조 지어 올려도 되겠사옵니까? 문득 가락이 떠올랐사옵니다.",
"R": {
"c": "어떤 곡조냐?",
"r": "",
"s": {},
"cmd": ">_minstrel_options"
},
"L": {
"c": "오늘은 되었다",
"r": "",
"s": {
"문법": "-2?",
"군사": "-2?",
"민심": "-2?"
},
"cmd": ""
}
},
{
"id": 346,
"name": "_minstrel_options",
"theme": "entertainement",
"char": "minstrel",
"cond": "",
"wait": "10",
"weight": "10",
"text": "하늘을 기리는 노래는 어떠하옵니까…?",
"R": {
"c": "그걸로 하라",
"r": "",
"s": {
"국고": "-10"
},
"cmd": ">>>>>>_hymn_spiritual"
},
"L": {
"c": "다른 건 없느냐?",
"r": "",
"s": {},
"cmd": ">_minstrel_options"
}
},
{
"id": 347,
"name": "_minstrel_options",
"theme": "entertainement",
"char": "minstrel",
"cond": "",
"wait": "10",
"weight": "10",
"text": "군사들의 기운을 북돋는 노래는 어떠하옵니까…?",
"R": {
"c": "그걸로 하라",
"r": "",
"s": {
"국고": "-10"
},
"cmd": ">>>>>>_hymn_military"
},
"L": {
"c": "다른 건 없느냐?",
"r": "",
"s": {},
"cmd": ">_minstrel_options"
}
},
{
"id": 348,
"name": "_minstrel_options",
"theme": "entertainement",
"char": "minstrel",
"cond": "",
"wait": "10",
"weight": "10",
"text": "백성들에게 살아갈 힘을 주는 민요는 어떠하옵니까…?",
"R": {
"c": "그걸로 하라",
"r": "",
"s": {
"국고": "-10"
},
"cmd": ">>>>>>_hymn_demography"
},
"L": {
"c": "다른 건 없느냐?",
"r": "",
"s": {},
"cmd": ">_minstrel_options"
}
},
{
"id": 349,
"name": "_minstrel_options",
"theme": "entertainement",
"char": "minstrel",
"cond": "",
"wait": "10",
"weight": "7",
"text": "흥이 솟는군요… 전하, 마음 가는 대로 지어 봐도 되겠사옵니까?",
"R": {
"c": "그리하라",
"r": "",
"s": {
"국고": "-10"
},
"cmd": ">>>>>>_hymn_opus"
},
"L": {
"c": "다른 건 없느냐?",
"r": "",
"s": {},
"cmd": ">_minstrel_options"
}
},
{
"id": 350,
"name": "_minstrel_options",
"theme": "entertainement",
"char": "minstrel",
"cond": "",
"wait": "10",
"weight": "2",
"text": "…아… 안 돼… 가락의 신령이 날아가 버린 듯하옵니다… 더는 아무것도 떠오르지 않사옵니다…",
"R": {
"c": "그럼 다음에 하자",
"r": "",
"s": {
"민심": "2?",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "신령도 돈을 밝히는구나",
"r": "",
"s": {
"민심": "-7?",
"국고": "-1?"
},
"cmd": ""
}
},
{
"id": 351,
"name": "_hymn_spiritual",
"theme": "entertainement",
"char": "minstrel",
"cond": "",
"wait": "",
"weight": "",
"text": "하늘을 우러르는 마음을 듬뿍 담은 곡조를 지었사옵니다. 전하 마음에 드시면 좋겠사옵니다.",
"R": {
"c": "귀가 즐겁구나!",
"r": "",
"s": {
"문법": "15?",
"군사": "-5"
},
"cmd": ""
},
"L": {
"c": "참을 수가 없구나!",
"r": "",
"s": {
"문법": "-10",
"군사": "5",
"민심": "5"
},
"cmd": ">_minstrel_displeased"
}
},
{
"id": 352,
"name": "_hymn_military",
"theme": "entertainement",
"char": "minstrel",
"cond": "",
"wait": "",
"weight": "",
"text": "분부하신 대로 적의 간담을 서늘하게 할 군가를 지어 왔사옵니다!",
"R": {
"c": "훌륭한 솜씨다!",
"r": "",
"s": {
"문법": "-5",
"군사": "15?",
"민심": "-5"
},
"cmd": ""
},
"L": {
"c": "우리 군 기운까지 꺾이겠다…",
"r": "",
"s": {
"문법": "5",
"군사": "-10",
"민심": "5"
},
"cmd": ">_minstrel_displeased"
}
},
{
"id": 353,
"name": "_hymn_demography",
"theme": "entertainement",
"char": "minstrel",
"cond": "",
"wait": "",
"weight": "",
"text": "이야기를 노래로 엮었사옵니다! 백성들이 좋아해 줄까요?",
"R": {
"c": "두고두고 불리겠구나!",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "15?"
},
"cmd": ""
},
"L": {
"c": "어디서 들은 가락 같구나…",
"r": "",
"s": {
"문법": "5",
"군사": "5",
"민심": "-10"
},
"cmd": ">_minstrel_displeased"
}
},
{
"id": 354,
"name": "_hymn_opus",
"theme": "entertainement",
"char": "minstrel",
"cond": "",
"wait": "",
"weight": "",
"text": "제 가장 뛰어난 곡을 전하께서 들어 주시다니 이보다 큰 기쁨은 없사옵니다! 자, 마음껏 즐기시옵소서!",
"R": {
"c": "참으로 흡족하다…",
"r": "(뛰어난 소리에 값을 매길 순 없지만, 왕은 소리꾼에게 넉넉히 상을 내렸다.)",
"s": {
"문법": "10",
"군사": "10",
"민심": "10",
"국고": "-15?"
},
"cmd": ""
},
"L": {
"c": "노래를 빙자한 역모다!",
"r": "(소리꾼은 망나니에게 끌려갔다. 하지만 소리꾼을 아끼는 이들이 많아 가는 길에 운 좋게 빠져나왔다.)",
"s": {
"문법": "-5?",
"군사": "-5?",
"민심": "-5?"
},
"cmd": "del_minstrel"
}
},
{
"id": 355,
"name": "_minstrel_displeased",
"theme": "entertainement",
"char": "minstrel",
"cond": "",
"wait": "",
"weight": "",
"text": "전하의 기대를 저버려 송구하옵니다. 다시는 전하의 귀를 어지럽히지 않겠사옵니다.",
"R": {
"c": "성가신 자가 떠나는구나",
"r": "(소리꾼이 지은 노래들은 훗날 적을 괴롭히는 데 쓰였다…)",
"s": {
"문법": "-5?",
"군사": "10?",
"민심": "-5?"
},
"cmd": "del_minstrel"
},
"L": {
"c": "떠나지 마라…",
"r": "",
"s": {
"국고": "-6?"
},
"cmd": "del_minstrel"
}
},
{
"id": 356,
"name": "divorce",
"theme": "family and personal",
"char": "diplomat",
"cond": "has_queen and isLover and !queendom",
"wait": "100",
"weight": "25",
"text": "중전마마를 폐하시겠다고요? 그러려면 집현전의 법도부터 바꾸어야 하옵니다.",
"R": {
"c": "법도를 바꿔라",
"r": "",
"s": {
"문법": "-20",
"군사": "5",
"민심": "5"
},
"cmd": "del_queen"
},
"L": {
"c": "없던 일로 하자",
"r": "",
"s": {
"문법": "5"
},
"cmd": ""
}
},
{
"id": 357,
"name": "wedding",
"theme": "family and personal",
"char": "diplomat",
"cond": "!has_queen and age<25 and !queendom",
"wait": "40",
"weight": "18",
"text": "전하, 이웃 나라의 젊은 공주와 혼인하시겠사옵니까?",
"R": {
"c": "혼인하겠다",
"r": "",
"s": {
"문법": "10",
"군사": "10",
"민심": "10",
"국고": "10"
},
"cmd": "add_queen"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "-20?",
"군사": "-10",
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 358,
"name": "betrothed",
"theme": "family and personal",
"char": "diplomat",
"cond": "!has_queen and age<18 and !queendom",
"wait": "20",
"weight": "16",
"text": "남쪽 나라에 젊은 공주가 있는데, 전하와의 혼약을 바라고 있사옵니다. 거절하면 싸움이 날 수도 있사옵니다.",
"R": {
"c": "혼약하겠다",
"r": "",
"s": {
"문법": "10",
"군사": "5",
"민심": "5",
"국고": "10"
},
"cmd": "add_queen"
},
"L": {
"c": "거절한다",
"r": "",
"s": {
"민심": "-10?"
},
"cmd": ">>>>warwithsouth"
}
},
{
"id": 359,
"name": "wedding2",
"theme": "family and personal",
"char": "diplomat",
"cond": "!has_queen and age<30",
"wait": "230",
"weight": "8",
"text": "검은 바위 성에 젊은 공주가 갇혀 있다 하옵니다.",
"R": {
"c": "말을 대령하라!",
"r": "(번쩍이는 갑옷을 입고 왕은 씩씩하게 검은 바위 성으로 향했다.)",
"s": {
"문법": "3",
"군사": "3",
"민심": "3"
},
"cmd": ">"
},
"L": {
"c": "아무리 봐도 덫이다…",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 360,
"name": "_darkrock",
"theme": "family and personal",
"char": "dragon",
"cond": "",
"wait": "",
"weight": "",
"text": "크아아아아! 네가 왕이냐? 갇혀 있는 공주를 구하러 왔느냐?",
"R": {
"c": "그렇다!",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "그냥 지나가는 길이다",
"r": "",
"s": {},
"cmd": ">_darkrockalt"
}
},
{
"id": 361,
"name": "_darkrock2",
"theme": "family and personal",
"char": "dragon",
"cond": "",
"wait": "",
"weight": "",
"text": "그렇군. 그렇다면 어서 공주를 데려가라.",
"R": {
"c": "너부터 처치하겠다!",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "아니, 잠깐…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 362,
"name": "_darkrock3",
"theme": "family and personal",
"char": "dragon",
"cond": "",
"wait": "",
"weight": "",
"text": "서로 죽일 것까진 없지. 공주를 구하러 왔다며? 그럼 어서 데려가. 자. 잘 가라.",
"R": {
"c": "좋다…",
"r": "",
"s": {},
"cmd": ">_darkrockcourt"
},
"L": {
"c": "아니 된다!",
"r": "",
"s": {
"문법": "-100?",
"군사": "-100?",
"민심": "-100?",
"국고": "-100?"
},
"cmd": ">_end_dragon"
}
},
{
"id": 363,
"name": "_darkrockalt",
"theme": "family and personal",
"char": "dragon",
"cond": "",
"wait": "",
"weight": "",
"text": "왜? 고운 공주인데?",
"R": {
"c": "하… 하지만…",
"r": "",
"s": {},
"cmd": ">_darkrock2"
},
"L": {
"c": "하… 하지만…",
"r": "",
"s": {},
"cmd": ">_darkrock2"
}
},
{
"id": 364,
"name": "_darkrockcourt",
"theme": "family and personal",
"char": "courtesan",
"cond": "",
"wait": "",
"weight": "",
"text": "씩씩하신 전하! 정말 멋지시옵니다!",
"R": {
"c": "고맙구나",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "별일 아니었다",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 365,
"name": "_wedding3",
"theme": "family and personal",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "돌아오셨사옵니까, 전하? 저희가 꾸민 놀이는 즐거우셨는지요. 그 이무기는 값이 좀 나갔사옵니다.",
"R": {
"c": "값을 치르마",
"r": "",
"s": {
"국고": "-8"
},
"cmd": ""
},
"L": {
"c": "누가 치르느냐?",
"r": "",
"s": {
"국고": "-8"
},
"cmd": ""
}
},
{
"id": 366,
"name": "afterwedding",
"theme": "family and personal",
"char": "diplomat",
"cond": "has_queen",
"wait": "reign",
"weight": "14",
"text": "<queen>께서는 백성과 군사들에게 큰 사랑을 받고 계시옵니다. 중전마마께 새 권한을 드리시옵소서!",
"R": {
"c": "드리겠다",
"r": "",
"s": {
"군사": "8",
"민심": "8"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"군사": "-6",
"민심": "-6",
"국고": "5"
},
"cmd": ""
}
},
{
"id": 367,
"name": "afterwedding",
"theme": "family and personal",
"char": "queen",
"cond": "age=25",
"wait": "reign",
"weight": "300",
"text": "전하, 대궐 창밖으로 손을 흔들어 주시옵소서. 백성들은 다정한 우리 모습을 보고 싶어 하옵니다.",
"R": {
"c": "흔들겠다",
"r": "",
"s": {
"군사": "5?",
"민심": "10?"
},
"cmd": ""
},
"L": {
"c": "부끄럽다",
"r": "",
"s": {
"군사": "-5?",
"민심": "-5?"
},
"cmd": ""
}
},
{
"id": 368,
"name": "ransom",
"theme": "family and personal",
"char": "queen",
"cond": "has_prince and !queendom",
"wait": "reign",
"weight": "10",
"text": "세자가 납치되었사옵니다! 제발 세자를 찾아 주시옵소서…",
"R": {
"c": "군사를 풀어라",
"r": "",
"s": {
"문법": "5",
"군사": "10",
"민심": "5",
"국고": "-15"
},
"cmd": ""
},
"L": {
"c": "기다려 보라",
"r": "",
"s": {
"문법": "-5",
"군사": "-10?",
"민심": "-5?"
},
"cmd": ">_queen_quit and del_prince"
}
},
{
"id": 369,
"name": "bastard",
"theme": "family and personal",
"char": "diplomat",
"cond": "",
"wait": "100",
"weight": "8",
"text": "전하, 잠시 귀를 빌려 주시지요… 한 젊은 여인이 제 아들이 전하의 숨은 자식이라 우기는데… 원하시면 소인이 '처리'해 드릴까요?",
"R": {
"c": "조용히 처리하라",
"r": "(그 뒤로 그 여인이 왕을 찾아오는 일은 없었다.)",
"s": {
"문법": "-5",
"군사": "5",
"민심": "-5"
},
"cmd": ""
},
"L": {
"c": "대궐에 머물게 하라",
"r": "(여인의 아들은 대궐에 머물게 되었다.)",
"s": {
"민심": "5",
"국고": "-10"
},
"cmd": "add_prince"
}
},
{
"id": 370,
"name": "pregnancy",
"theme": "family and personal",
"char": "queen",
"cond": "!pregnant and !has_prince and has_doctor and !queendom",
"wait": "30",
"weight": "20",
"text": "전하! 아기가 들어섰사옵니다! 꼭 세자를 낳아 중전의 소임을 다하겠사옵니다!",
"R": {
"c": "드디어 자식이!",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"민심": "5?"
},
"cmd": ">_birth"
},
"L": {
"c": "아무래도 좋다…",
"r": "",
"s": {
"문법": "-5",
"군사": "-5"
},
"cmd": ">_birth"
}
},
{
"id": 371,
"name": "_birth",
"theme": "family and personal",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "10",
"text": "경하드리옵니다, 전하! 고운 공주 아기씨이옵니다!",
"R": {
"c": "내 딸아…",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ""
},
"L": {
"c": "세자가 아니구나…",
"r": "",
"s": {
"군사": "5"
},
"cmd": ""
}
},
{
"id": 372,
"name": "_birth",
"theme": "family and personal",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "10",
"text": "중전마마께서 곧 해산하시겠사오나 몹시 위태롭사옵니다. 마마와 아기씨 가운데 한 분만 살릴 수 있사옵니다…",
"R": {
"c": "아기를 살려라",
"r": "",
"s": {
"문법": "10?",
"군사": "-5",
"민심": "-5"
},
"cmd": "del_queen and add_prince"
},
"L": {
"c": "중전을 살려라",
"r": "",
"s": {
"군사": "5?",
"민심": "5?"
},
"cmd": "!pregnant"
}
},
{
"id": 373,
"name": "_birth",
"theme": "family and personal",
"char": "anyone",
"cond": "",
"wait": "",
"weight": "10",
"text": "경하드리옵니다! 튼튼하고 귀여운 왕자 아기씨이옵니다. 스승은 누구로 정하시겠사옵니까?",
"R": {
"c": "대제학",
"r": "",
"s": {
"문법": "20?",
"민심": "5"
},
"cmd": "add_prince"
},
"L": {
"c": "대장군",
"r": "",
"s": {
"군사": "20?",
"민심": "5"
},
"cmd": "add_prince"
}
},
{
"id": 374,
"name": "newprince",
"theme": "family and personal",
"char": "anyone",
"cond": "has_prince",
"wait": "reign",
"weight": "16",
"text": "전하, 세자 저하께서 훌륭하게 자라셨사옵니다!",
"R": {
"c": "들라 하라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "바쁘다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 375,
"name": "_introprince",
"theme": "family and personal",
"char": "prince",
"cond": "",
"wait": "10",
"weight": "",
"text": "나는 다음 왕이다! 사문난적은 하나도 남김없이 벌하라!",
"R": {
"c": "그리하라",
"r": "",
"s": {
"문법": "15",
"군사": "5",
"민심": "-10"
},
"cmd": ""
},
"L": {
"c": "그건 아니 된다",
"r": "",
"s": {
"문법": "-10",
"민심": "10"
},
"cmd": ""
}
},
{
"id": 376,
"name": "bed",
"theme": "family and personal",
"char": "monk",
"cond": "has_queen and has_general and !queendom",
"wait": "140",
"weight": "5",
"text": "전하! <general>이(가) 중전마마와 몰래 역모를 꾸미는 것을 보았사옵니다! 누구를 벌하시겠사옵니까?",
"R": {
"c": "중전",
"r": "",
"s": {
"문법": "-30",
"군사": "5"
},
"cmd": "del_queen and murderer_queen"
},
"L": {
"c": "<general>",
"r": "",
"s": {
"문법": "5",
"군사": "-30"
},
"cmd": "del_general"
}
},
{
"id": 377,
"name": "lady_vengeance",
"theme": "family and personal",
"char": "nobleman",
"cond": "murderer_queen",
"wait": "reign",
"weight": "10",
"text": "감히 우리 중전마마를…! 각오하라!",
"R": {
"c": "위병!",
"r": "",
"s": {},
"cmd": ">_duel_nobleman"
},
"L": {
"c": "겨루어 주마",
"r": "",
"s": {},
"cmd": ">_duel_nobleman"
}
},
{
"id": 380,
"name": "queen_dead",
"theme": "family and personal",
"char": "queen",
"cond": "!queendom",
"wait": "reign",
"weight": "3",
"text": "전하, 소첩이 살날이 얼마 남지 않았사옵니다. 까닭은 모르겠사오나 제가 죽으면 고향의 부모님 곁에 묻어 주시옵소서.",
"R": {
"c": "그리하겠소",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "-5",
"국고": "-5"
},
"cmd": "del_queen"
},
"L": {
"c": "그럴 순 없소",
"r": "",
"s": {
"문법": "-10?",
"군사": "-10?",
"민심": "-10?"
},
"cmd": "del_queen"
}
},
{
"id": 381,
"name": "chaude-pisse",
"theme": "family and personal",
"char": "doctor",
"cond": "isLover",
"wait": "reign",
"weight": "15",
"text": "전하께서 옻독이 오르셨사옵니다! 밤마다 <lover> 댁 뒷산을 넘어 행차하시는 건 삼가시옵소서.",
"R": {
"c": "삼가겠다",
"r": "",
"s": {
"문법": "5",
"군사": "5",
"민심": "-5"
},
"cmd": "!isLover"
},
"L": {
"c": "상관 마라",
"r": "",
"s": {
"문법": "-10?"
},
"cmd": ""
}
},
{
"id": 382,
"name": "lady_intro",
"theme": "family and personal",
"char": "lady",
"cond": "has_queen and !isLover",
"wait": "100",
"weight": "16",
"text": "따뜻이 맞아 주셔서 고맙사옵니다. 잠시 여기 머물러도 괜찮겠지요?",
"R": {
"c": "그대가 있어 기쁘오…",
"r": "",
"s": {
"문법": "-2",
"민심": "5"
},
"cmd": ">>>>lady_1"
},
"L": {
"c": "중전도 그대를 좋아하는 것 같고…",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 383,
"name": "lady_1",
"theme": "family and personal",
"char": "lady",
"cond": "!isLover and has_queen",
"wait": "60",
"weight": "15",
"text": "지금부터 뜰을 거닐까 하옵니다. 전하께서도 함께 가시겠사옵니까?",
"R": {
"c": "기꺼이…",
"r": "(왕을 뜰로 이끈 <lady>은(는) 어딘가 불안한 듯, 내내 속삭이듯 말했다.)",
"s": {
"문법": "-2",
"민심": "5"
},
"cmd": ">"
},
"L": {
"c": "지금은 바쁘오",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 384,
"name": "_lady_2",
"theme": "family and personal",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "저는 중전마마께 미움을 받고 있사옵니다… 마마께서 뒤에서 험담을 하시고 따가운 눈길로 쏘아보시기도 하옵니다.",
"R": {
"c": "짐의 탓일지도 모르겠구려…",
"r": "(왕은 <lady>에게 마음을 털어놓았다. 그대를 깊이 아끼고 있고, 중전도 그것을 알아챈 것이 틀림없다고.)",
"s": {
"문법": "-2",
"민심": "5"
},
"cmd": ">"
},
"L": {
"c": "걱정하지 마시오…",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 385,
"name": "_lady_3",
"theme": "family and personal",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "전하… 제가 무슨 말씀을 드려야 할까요?",
"R": {
"c": "그대도 짐을 아낀다고…",
"r": "",
"s": {
"문법": "-2",
"민심": "5"
},
"cmd": ">"
},
"L": {
"c": "아무것도 아니오",
"r": "(왕을 바라보는 <lady>의 눈빛은 질렸다는 듯했고, 이내 그 자리를 떠났다.)",
"s": {},
"cmd": ""
}
},
{
"id": 386,
"name": "_lady_4",
"theme": "family and personal",
"char": "lady",
"cond": "",
"wait": "",
"weight": "",
"text": "아니요… 호호호. 저를 원하신다면 겨루어서 얻어 보시지요!",
"R": {
"c": "자, 겨뤄 보자!",
"r": "",
"s": {},
"cmd": ">_duel_lady"
},
"L": {
"c": "말 그대로의 뜻이오?",
"r": "",
"s": {},
"cmd": ">_duel_lady"
}
},
{
"id": 389,
"name": "queen_lover",
"theme": "family and personal",
"char": "queen",
"cond": "isLover and !queendom",
"wait": "reign",
"weight": "20",
"text": "전하께서는 큰 잘못을 하셨사옵니다. 소첩도 가만있지 않겠사옵니다. 제가 눈도 귀도 없는 줄 아시옵니까? 업신여기지 마시옵소서.",
"R": {
"c": "오해요",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "무엄하구려",
"r": "",
"s": {},
"cmd": ">_queen_stay"
}
},
{
"id": 390,
"name": "queen_quit",
"theme": "family and personal",
"char": "queen",
"cond": "no_queen>2 and !queendom",
"wait": "100",
"weight": "20",
"text": "전하는 지아비로서도 왕으로서도 최악이옵니다. 더는 참을 수 없사옵니다. 안녕히 계시옵소서.",
"R": {
"c": "떠나지 마시오…",
"r": "(중전은 군사 일부를 데리고 원망의 말을 남긴 채 대궐을 떠났다.)",
"s": {
"군사": "-20?"
},
"cmd": "del_queen"
},
"L": {
"c": "기다리시오…",
"r": "(중전은 군사 일부를 데리고 원망의 말을 남긴 채 대궐을 떠났다.)",
"s": {
"군사": "-20?"
},
"cmd": "del_queen"
}
},
{
"id": 391,
"name": "_queen_stay",
"theme": "family and personal",
"char": "queen",
"cond": "",
"wait": "",
"weight": "",
"text": "<lover> 따위는 아무래도 좋사옵니다. 대신 포도청과 서원의 땅을 소첩에게 맡겨 주시옵소서.",
"R": {
"c": "맡기겠소",
"r": "",
"s": {
"문법": "-10",
"군사": "-15"
},
"cmd": ""
},
"L": {
"c": "그건 아니 되오",
"r": "",
"s": {},
"cmd": ">queen_quit"
}
},
{
"id": 392,
"name": "lady_money",
"theme": "family and personal",
"char": "lady",
"cond": "isLover",
"wait": "reign",
"weight": "13",
"text": "어디 먼 곳으로 달아날까요? 전하와 저, 단둘이서…",
"R": {
"c": "함께 가겠소",
"r": "",
"s": {
"문법": "-10",
"군사": "-5"
},
"cmd": ""
},
"L": {
"c": "나는 왕이오",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 393,
"name": "lady_bid",
"theme": "family and personal",
"char": "lady",
"cond": "isLover",
"wait": "reign",
"weight": "15",
"text": "전하, 백성을 너무 모질게 대하시옵니다! 조금만 더 너그러움을 보여 주시옵소서!",
"R": {
"c": "음, 그러지!",
"r": "",
"s": {
"민심": "20?",
"국고": "-15?"
},
"cmd": ""
},
"L": {
"c": "나라에는 엄함이 필요하오",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 394,
"name": "dog_1",
"theme": "family and personal",
"char": "bird",
"cond": "",
"wait": "100",
"weight": "3",
"text": "깍깍깍!",
"R": {
"c": "고맙구나",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "이 새 주인은 누구냐?",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 395,
"name": "dog_2",
"theme": "family and personal",
"char": "bird",
"cond": "",
"wait": "100",
"weight": "3",
"text": "깍! 깍!",
"R": {
"c": "고맙구나",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "이 새 주인은 누구냐?",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 396,
"name": "dog_3",
"theme": "family and personal",
"char": "bird",
"cond": "",
"wait": "100",
"weight": "3",
"text": "구구구구구구구…",
"R": {
"c": "고맙구나",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "이 새 주인은 누구냐?",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 397,
"name": "",
"theme": "family and personal",
"char": "doctor",
"cond": "age>20",
"wait": "400",
"weight": "10",
"text": "전하께서 통풍을 앓고 계시옵니다. 앞으로 고기를 줄이시고 나물을 많이 드시고, 밤마다 노니시는 일은 그만두시옵소서.",
"R": {
"c": "그리하겠다",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"민심": "-10?"
},
"cmd": ">>>>"
},
"L": {
"c": "고기는 못 끊는다",
"r": "",
"s": {
"문법": "-10?",
"군사": "-10?"
},
"cmd": ">>>>>>"
}
},
{
"id": 398,
"name": "_",
"theme": "family and personal",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "",
"text": "거머리로 빚은 비장의 약이옵니다. 드시면 단번에 통풍이 낫사옵니다.",
"R": {
"c": "마시겠다",
"r": "(약을 마신 왕은 며칠 동안 헛소리를 했다. 나은 뒤에도 통풍은 그대로였고 왕은 단숨에 늙어 버렸다.)",
"s": {
"문법": "-10?",
"군사": "-10?",
"민심": "-10?",
"국고": "-10?"
},
"cmd": "older"
},
"L": {
"c": "마시지 않겠다",
"r": "(현명한 판단이었다.)",
"s": {
"문법": "15?",
"군사": "5?",
"민심": "5?",
"국고": "5?"
},
"cmd": ""
}
},
{
"id": 399,
"name": "",
"theme": "",
"char": "doctor",
"cond": "year>1980",
"wait": "800",
"weight": "20",
"text": "온 세상 사람들을 이어 지식과 지혜를 나누는 방법을 만들었사옵니다. 이름하여 '천리 그물'이옵니다.",
"R": {
"c": "훌륭하구나",
"r": "",
"s": {
"민심": "15?",
"국고": "5?"
},
"cmd": ">"
},
"L": {
"c": "어디에 쓰느냐?",
"r": "",
"s": {
"민심": "-5?"
},
"cmd": ">"
}
},
{
"id": 400,
"name": "_",
"theme": "",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "온 세상 사람들이 갖가지 짐승 그림을 나누기 딱이죠. 특히 고양이요.",
"R": {
"c": "재미있구나",
"r": "",
"s": {
"민심": "5?"
},
"cmd": ""
},
"L": {
"c": "쓸데없다",
"r": "",
"s": {
"민심": "-5?"
},
"cmd": ""
}
},
{
"id": 401,
"name": "",
"theme": "",
"char": "monk",
"cond": "year>1980",
"wait": "500",
"weight": "10",
"text": "수염 난 무뢰배들이 도성 곳곳에 작은 술도가를 차리기 시작했사옵니다. 막걸리는 서원만 빚을 수 있사옵니다!",
"R": {
"c": "막아라",
"r": "",
"s": {
"문법": "10",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "장사는 자유다",
"r": "",
"s": {
"문법": "-15?",
"국고": "10?"
},
"cmd": ""
}
},
{
"id": 402,
"name": "",
"theme": "",
"char": "priest",
"cond": "year>1960",
"wait": "del",
"weight": "20",
"text": "새 갑자가 다가오고 있사옵니다! 백성들이 도깨비에게 넋을 팔고 있사옵니다!",
"R": {
"c": "바로잡아라",
"r": "",
"s": {
"문법": "5?",
"민심": "-5?"
},
"cmd": ""
},
"L": {
"c": "백성 탓은 그만하라",
"r": "",
"s": {
"문법": "-10?"
},
"cmd": ""
}
},
{
"id": 403,
"name": "",
"theme": "",
"char": "merchant",
"cond": "year>700",
"wait": "del",
"weight": "10",
"text": "수레는 길 어느 쪽으로 다니게 할까요?",
"R": {
"c": "왼쪽",
"r": "",
"s": {
"민심": "-3?",
"국고": "5?"
},
"cmd": ""
},
"L": {
"c": "오른쪽",
"r": "",
"s": {
"민심": "5?",
"국고": "-3?"
},
"cmd": ""
}
},
{
"id": 404,
"name": "",
"theme": "family and personal",
"char": "priest",
"cond": "year>990",
"wait": "del",
"weight": "100",
"text": "세상의 끝이 다가오고 있사옵니다. 전하께서는 하늘이 두렵지 않으시옵니까?",
"R": {
"c": "두렵다",
"r": "",
"s": {
"문법": "?15"
},
"cmd": ""
},
"L": {
"c": "별로 그렇지 않다",
"r": "",
"s": {
"문법": "-10?"
},
"cmd": ""
}
},
{
"id": 405,
"name": "",
"theme": "family and personal",
"char": "queen",
"cond": "year>850 and !has_rival and !queendom",
"wait": "200",
"weight": "20",
"text": "고향의 아우를 불렀사옵니다. 이 나라 봄 잔치를 보여 주고 싶어서…",
"R": {
"c": "그거 좋구려",
"r": "",
"s": {},
"cmd": ">_newrival and add_rival"
},
"L": {
"c": "미리 물었어야지",
"r": "(이 일에 왕이 끼어들 틈은 없는 듯하다.)",
"s": {},
"cmd": "no_queen++"
}
},
{
"id": 406,
"name": "",
"theme": "family and personal",
"char": "prophet",
"cond": "has_rival",
"wait": "400",
"weight": "20",
"text": "세상의 끝이 가까워진다! 나와 함께 빌어 주게.",
"R": {
"c": "함께 빌겠다",
"r": "",
"s": {
"문법": "5"
},
"cmd": "> and add_rival"
},
"L": {
"c": "그럴 여유는 없다",
"r": "",
"s": {
"문법": "-15"
},
"cmd": ""
}
},
{
"id": 407,
"name": "_",
"theme": "family and personal",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "전하께서 치성을 드리시는 동안 대궐 대부분을 <rival>에게 빼앗겼사옵니다.",
"R": {
"c": "몰아내라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "어찌 가만히 보고만 있었느냐?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 408,
"name": "_newrival",
"theme": "family and personal",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "끌고 온 군사가 너무 많아 포도청도 손을 쓸 수 없사옵니다.",
"R": {
"c": "그러하냐…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "어떻게든 해 보라",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 409,
"name": "_",
"theme": "family and personal",
"char": "rival",
"cond": "",
"wait": "",
"weight": "",
"text": "신경 쓰지 마시오, 매형! 그냥 몇 해 머물다 갈 거니까. 걱정하실 것 없소.",
"R": {
"c": "좋을 대로 하게",
"r": "",
"s": {
"군사": "?-15",
"민심": "-5?",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "당장 나가게",
"r": "",
"s": {
"문법": "-10?",
"국고": "-15?"
},
"cmd": ""
}
},
{
"id": 410,
"name": "",
"theme": "",
"char": "rival",
"cond": "has_prince",
"wait": "100",
"weight": "50",
"text": "매형, 세자 저하와 제 딸을 혼인시키면 어떻겠소?",
"R": {
"c": "좋다",
"r": "",
"s": {
"문법": "10?",
"군사": "5?",
"국고": "10?"
},
"cmd": ""
},
"L": {
"c": "사촌끼리 아니냐…",
"r": "",
"s": {
"문법": "-5?",
"민심": "5?"
},
"cmd": ">"
}
},
{
"id": 411,
"name": "_",
"theme": "",
"char": "rival",
"cond": "",
"wait": "",
"weight": "",
"text": "그래서, 뭐라고요? 혼수가 마음에 안 드신다면… 자, 더 드리지요.",
"R": {
"c": "받겠네",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"국고": "20"
},
"cmd": "isGreedy"
},
"L": {
"c": "그런 뜻이 아니네",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 412,
"name": "",
"theme": "",
"char": "rival",
"cond": "",
"wait": "100",
"weight": "20",
"text": "매형 대궐은 훌륭하긴 한데… 좀 작지 않소?",
"R": {
"c": "곧 늘려 지을 참이네",
"r": "",
"s": {
"군사": "-10?",
"민심": "5?",
"국고": "-20?"
},
"cmd": ""
},
"L": {
"c": "부족한 건 없네",
"r": "",
"s": {
"군사": "5?"
},
"cmd": ""
}
},
{
"id": 413,
"name": "",
"theme": "",
"char": "nobleman",
"cond": "has_executioner and year>800",
"wait": "100",
"weight": "10",
"text": "흰 수염에 붉은 옷을 입은 뚱보가 도성 아이들에게 선물을 나눠 주고 있사옵니다.",
"R": {
"c": "망나니를 불러라!",
"r": "",
"s": {
"문법": "5?",
"민심": "5?"
},
"cmd": ">"
},
"L": {
"c": "그래서 어쨌다는 거냐",
"r": "",
"s": {
"문법": "-5?",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 414,
"name": "_",
"theme": "",
"char": "executioner",
"cond": "",
"wait": "",
"weight": "",
"text": "소인인 줄 어찌 아셨사옵니까? 소인은 그저 아이들을 안아 주고 맛난 과자와 사랑을 주고 싶었을 뿐이옵니다.",
"R": {
"c": "이상하구나",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "책임을 져라",
"r": "",
"s": {
"국고": "5?"
},
"cmd": ">"
}
},
{
"id": 415,
"name": "_",
"theme": "",
"char": "executioner",
"cond": "",
"wait": "",
"weight": "",
"text": "소인이 소인을 벌할 수는 없지요. 그러니 그만둘 생각은 없사옵니다.",
"R": {
"c": "그럼 계속하라",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "그만두어라",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 416,
"name": "",
"theme": "family and personal",
"char": "queen",
"cond": "",
"wait": "120",
"weight": "8",
"text": "고향 친척들이 이 대궐이 작다며 소첩을 업신여기옵니다. 더 큰 대궐을 지으시옵소서!",
"R": {
"c": "지어 주마",
"r": "",
"s": {
"군사": "10?",
"민심": "10?",
"국고": "-25?"
},
"cmd": ""
},
"L": {
"c": "대궐은 이걸로 족하다",
"r": "",
"s": {
"군사": "-5?",
"민심": "-5?"
},
"cmd": ""
}
},
{
"id": 417,
"name": "",
"theme": "family and personal",
"char": "nobleman",
"cond": "year>800 and !governor",
"wait": "200",
"weight": "6",
"text": "전하께서는 참으로 현명하시옵니다. 저희의 본보기이시지요.",
"R": {
"c": "듣기 좋구나",
"r": "",
"s": {
"문법": "-5?",
"민심": "-5?"
},
"cmd": ">"
},
"L": {
"c": "용건을 말하라",
"r": "",
"s": {
"군사": "5?",
"국고": "5?"
},
"cmd": ">"
}
},
{
"id": 418,
"name": "_",
"theme": "family and personal",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "실은 전하께 청이 있사옵니다. 동쪽 국경 너머 넓은 산골을 저희가 차지했사옵니다. 그곳을 제 땅으로 내려 주시옵소서.",
"R": {
"c": "내려 주마",
"r": "",
"s": {
"군사": "-5?",
"민심": "-10?",
"국고": "5?"
},
"cmd": "governor and >_resultgov"
},
"L": {
"c": "나라 땅이다",
"r": "",
"s": {
"군사": "5?",
"민심": "5?",
"국고": "-6?"
},
"cmd": ""
}
},
{
"id": 419,
"name": "",
"theme": "",
"char": "diplomat",
"cond": "has_nobleman and !governor",
"wait": "300",
"weight": "6",
"text": "동쪽 국경 산골은 무뢰배가 날뛰어 몹시 황폐하옵니다.",
"R": {
"c": "무슨 방도가 있느냐?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "내버려 두어라",
"r": "",
"s": {
"문법": "-5?",
"군사": "-5?",
"민심": "-5?",
"국고": "-5?"
},
"cmd": ""
}
},
{
"id": 420,
"name": "_",
"theme": "",
"char": "merchant",
"cond": "",
"wait": "",
"weight": "",
"text": "<nobleman>을(를) 고을 원님으로 삼아 그 땅을 다스리게 하시겠사옵니까? 물론 그만한 값도 치르겠다 하옵니다.",
"R": {
"c": "그리하라",
"r": "",
"s": {
"국고": "12"
},
"cmd": "> and governor"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "-5?",
"군사": "-5?",
"민심": "-5?",
"국고": "-5?"
},
"cmd": ""
}
},
{
"id": 421,
"name": "_",
"theme": "",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "삼가 받들겠사옵니다. 거친 땅을 전하의 이름으로 다스리게 되어 영광이옵니다.",
"R": {
"c": "엄하게 다스려라",
"r": "",
"s": {
"문법": "5?",
"군사": "15?"
},
"cmd": ">"
},
"L": {
"c": "고르게 다스려라",
"r": "",
"s": {
"민심": "15?",
"국고": "5?"
},
"cmd": ">"
}
},
{
"id": 422,
"name": "_resultgov",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "<nobleman>에게 산골을 맡겼더니 비리가 판치고 더없이 황폐해졌사옵니다.",
"R": {
"c": "순식간이구나…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "불러들여라",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 423,
"name": "_",
"theme": "",
"char": "general",
"cond": "",
"wait": "",
"weight": "",
"text": "지금 <nobleman>은(는) 큰 산적 떼의 두목이 되어 있사옵니다. 군사를 보내시겠사옵니까?",
"R": {
"c": "보내라",
"r": "",
"s": {
"군사": "-10"
},
"cmd": ">"
},
"L": {
"c": "내버려 두어라",
"r": "(왕의 결정으로 동쪽 고을은 다시 혼란에 빠졌다.)",
"s": {
"민심": "-5"
},
"cmd": ">>>barbarian and del_nobleman"
}
},
{
"id": 424,
"name": "_",
"theme": "",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "항복하겠사옵니다, 전하! 목숨만 살려 주시면 산적들의 보물이 있는 곳을 알려 드리지요.",
"R": {
"c": "말해 보라",
"r": "(보물은 보잘것없었다.)",
"s": {
"국고": "5?"
},
"cmd": ""
},
"L": {
"c": "용서는 없다",
"r": "",
"s": {},
"cmd": "del_nobleman"
}
},
{
"id": 425,
"name": "",
"theme": "family",
"char": "queen",
"cond": "no_queen>1 and !queendom",
"wait": "160",
"weight": "18",
"text": "전하께서는 백성을 조금도 돌보지 않으시는군요.",
"R": {
"c": "돌보겠소",
"r": "",
"s": {
"민심": "10?"
},
"cmd": ">"
},
"L": {
"c": "그렇지 않소",
"r": "",
"s": {
"민심": "-10?"
},
"cmd": ">"
}
},
{
"id": 426,
"name": "_",
"theme": "family",
"char": "queen",
"cond": "",
"wait": "",
"weight": "",
"text": "그게 다이옵니까? 따로 하실 말씀은 없으시고?",
"R": {
"c": "미안하오",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "나랏일에 끼어들지 마시오",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 427,
"name": "",
"theme": "family",
"char": "executioner",
"cond": "school_keep",
"wait": "200",
"weight": "8",
"text": "잠시 쉬게 해 주시옵소서. 서당에서 꽃 가꾸기를 배우고 싶사옵니다.",
"R": {
"c": "다녀오라",
"r": "",
"s": {
"군사": "-5?",
"민심": "10?"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"군사": "5"
},
"cmd": ""
}
},
{
"id": 428,
"name": "wolf",
"theme": "land and people",
"char": "farmer",
"cond": "",
"wait": "100",
"weight": "10",
"text": "아이들이 늑대에게 습격당하고 있사옵니다. 저희가 물리쳐도 되겠사옵니까?",
"R": {
"c": "짐이 직접 몰아내겠다!",
"r": "",
"s": {},
"cmd": ">_hunt_outcome and isBrave"
},
"L": {
"c": "허풍 떨지 마라",
"r": "",
"s": {
"문법": "5",
"군사": "10",
"민심": "-10",
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 429,
"name": "river",
"theme": "land and people",
"char": "farmer",
"cond": "",
"wait": "100",
"weight": "15",
"text": "물방울 강이 또 말라 버렸사옵니다. 둑을 쌓아야 하옵니다.",
"R": {
"c": "쌓아라",
"r": "",
"s": {
"민심": "10",
"국고": "-15"
},
"cmd": ">_dam"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"민심": "-15"
},
"cmd": ""
}
},
{
"id": 430,
"name": "_dam",
"theme": "land and people",
"char": "diplomat",
"cond": "!warViking_keep",
"wait": "",
"weight": "15",
"text": "둑을 쌓으면 바다 도적들이 강을 쓰지 못하게 되옵니다. 계속하시겠사옵니까?",
"R": {
"c": "계속하라",
"r": "",
"s": {
"문법": "5",
"군사": "10"
},
"cmd": ">>>>>>battleviking"
},
"L": {
"c": "그만두어라",
"r": "",
"s": {
"민심": "-30",
"국고": "15"
},
"cmd": ""
}
},
{
"id": 431,
"name": "_dam",
"theme": "land and people",
"char": "farmer",
"cond": "dynasty>2",
"wait": "",
"weight": "8",
"text": "강바닥에서 사금을 건졌사옵니다! 전하, 이 돈으로 무엇을 하시겠사옵니까?",
"R": {
"c": "모두에게 나눠라",
"r": "",
"s": {
"문법": "8",
"군사": "8",
"민심": "8"
},
"cmd": ""
},
"L": {
"c": "모두 짐의 것이다!",
"r": "",
"s": {
"국고": "15"
},
"cmd": "isGreedy"
}
},
{
"id": 432,
"name": "technique",
"theme": "land and people",
"char": "farmer",
"cond": "",
"wait": "200",
"weight": "6",
"text": "새 농사법 덕에 올해는 풍년이옵니다! 남는 곡식은 어찌할까요?",
"R": {
"c": "모두에게 나눠라",
"r": "",
"s": {
"문법": "8",
"군사": "8",
"민심": "8"
},
"cmd": ""
},
"L": {
"c": "모두 짐의 것이다!",
"r": "",
"s": {
"국고": "15"
},
"cmd": "isGreedy"
}
},
{
"id": 433,
"name": "goodking",
"theme": "land and people",
"char": "nobleman",
"cond": "demography>60 and treasure<40",
"wait": "40",
"weight": "20",
"text": "전하께서 백성에게 사랑받고 계시옵니다. 세금을 올릴 기회이옵니다.",
"R": {
"c": "올려라",
"r": "",
"s": {
"민심": "-15",
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"민심": "5"
},
"cmd": ""
}
},
{
"id": 434,
"name": "",
"theme": "land and people",
"char": "farmer",
"cond": "",
"wait": "70",
"weight": "10",
"text": "광산 일꾼들이 품삯을 올려 달라며 일손을 놓았사옵니다.",
"R": {
"c": "올려 주어라",
"r": "",
"s": {
"민심": "10",
"국고": "-20"
},
"cmd": ""
},
"L": {
"c": "일터로 돌려보내라",
"r": "",
"s": {
"민심": "-10",
"국고": "5"
},
"cmd": ""
}
},
{
"id": 435,
"name": "",
"theme": "land and people",
"char": "monk",
"cond": "",
"wait": "70",
"weight": "10",
"text": "술 취한 군졸들이 서원을 덮쳐 금눈 보물을 빼앗아 갔사옵니다. 전하, 마땅한 벌을 내려 주시옵소서!",
"R": {
"c": "군졸들을 벌하라",
"r": "",
"s": {
"문법": "5",
"군사": "-10?"
},
"cmd": ""
},
"L": {
"c": "보물은 군에 두어라",
"r": "",
"s": {
"문법": "-20",
"군사": "5?"
},
"cmd": "no_priest+++"
}
},
{
"id": 436,
"name": "",
"theme": "land and people",
"char": "merchant",
"cond": "",
"wait": "70",
"weight": "10",
"text": "도성 금세공 장인들이 장사를 수월히 하려고 서로 약조를 맺었사옵니다. 전하께서 허락만 해 주시면 되옵니다.",
"R": {
"c": "허락한다",
"r": "",
"s": {
"문법": "-5?",
"민심": "-5?",
"국고": "15?"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"민심": "5?",
"국고": "-5?"
},
"cmd": ""
}
},
{
"id": 437,
"name": "",
"theme": "land and people",
"char": "minstrel",
"cond": "",
"wait": "70",
"weight": "10",
"text": "전하, 봄 잔치 비용을 내려 주시겠사옵니까? 올해는 어느 해보다 즐거운 잔치가 될 것이옵니다!",
"R": {
"c": "내려 주마",
"r": "",
"s": {
"민심": "15?",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"민심": "-5?"
},
"cmd": ""
}
},
{
"id": 438,
"name": "",
"theme": "land and people",
"char": "general",
"cond": "has_doctor",
"wait": "160",
"weight": "8",
"text": "성난 백성들이 무리 지어 무녀들을 몰아내고 있사옵니다. 필요하면 엄히 다스려도 되겠사옵니까?",
"R": {
"c": "그리하라",
"r": "",
"s": {
"군사": "5?",
"민심": "-10?"
},
"cmd": ">"
},
"L": {
"c": "함부로 손대지 마라",
"r": "",
"s": {
"군사": "-5?"
},
"cmd": ">"
}
},
{
"id": 439,
"name": "_",
"theme": "land and people",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "",
"text": "백성들이 성난 까닭은 상한 보리 탓이옵니다. 쌓아 둔 곡식을 불태우시겠사옵니까?",
"R": {
"c": "불태워라",
"r": "(쌓아 둔 곡식이 사라졌다. 앞으로 몇 해 동안 백성이 굶주릴 위험이 커졌다.)",
"s": {
"민심": "-5?"
},
"cmd": ">>>>bread1"
},
"L": {
"c": "그냥 두어라",
"r": "(배앓이가 번져 걷잡을 수 없게 되었다.)",
"s": {
"군사": "-5?"
},
"cmd": "> and del_priest and del_general"
}
},
{
"id": 440,
"name": "_",
"theme": "land and people",
"char": "anyone",
"cond": "",
"wait": "",
"weight": "",
"text": "백성들이 이번 소동을 떠넘길 사람을 찾고 있사옵니다. 벌써 학사와 장수가 목숨을 잃었사옵니다!",
"R": {
"c": "군사를 보내라!",
"r": "",
"s": {
"군사": "-15"
},
"cmd": ""
},
"L": {
"c": "성문을 닫아라!",
"r": "",
"s": {
"문법": "-5",
"민심": "-10?",
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 441,
"name": "harvest",
"theme": "land and people",
"char": "farmer",
"cond": "demography<50 and !barn_keep",
"wait": "100",
"weight": "10",
"text": "올해는 큰 흉년이라 백성들이 굶주리고 있사옵니다. 세금을 낮춰 주시옵소서.",
"R": {
"c": "낮춰 주마",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "20?",
"국고": "-20?"
},
"cmd": ""
},
"L": {
"c": "뻔뻔하구나!",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"민심": "-30?"
},
"cmd": ""
}
},
{
"id": 442,
"name": "gold",
"theme": "land and people",
"char": "farmer",
"cond": "",
"wait": "160",
"weight": "10",
"text": "광산에서 금이 나왔사옵니다. 더 깊이 파 볼까요?",
"R": {
"c": "더 파라",
"r": "",
"s": {
"민심": "-15?",
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "그만 파라",
"r": "",
"s": {
"민심": "5?",
"국고": "-5?"
},
"cmd": ""
}
},
{
"id": 443,
"name": "",
"theme": "land and people",
"char": "farmer",
"cond": "!intheDungeon",
"wait": "100",
"weight": "8",
"text": "금맥을 찾다가 수상한 지하 무덤 입구를 찾았사옵니다. 안에서 섬뜩한 소리가 나고 냄새가 고약하고… 보기만 해도 무시무시한 곳이옵니다.",
"R": {
"c": "짐이 가 보겠다!",
"r": "",
"s": {},
"cmd": ">_dungeon1 and intheDungeon and !spice_trade_keep"
},
"L": {
"c": "당장 막아라",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 444,
"name": "",
"theme": "land and people",
"char": "nobleman",
"cond": "has_merchant and !spice_trade_keep",
"wait": "300",
"weight": "10",
"text": "전하… 우리끼리 하는 이야기인데… '장사' 하나에 돈을 대 보시겠사옵니까? 잘되면 큰돈이옵니다.",
"R": {
"c": "무슨 장사냐?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "그런 말은 듣지 않겠다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 445,
"name": "_",
"theme": "land and people",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "사람을 사고파는 밀무역에 돈을 대시지요. 나라 곳간을 가득 채울 수 있을 것이옵니다.",
"R": {
"c": "돈만 대는 거라면…",
"r": "",
"s": {
"문법": "-5?",
"민심": "-20?",
"국고": "-5?"
},
"cmd": "isSlaver and >>>>_slaverdiscovery"
},
"L": {
"c": "당치 않다",
"r": "",
"s": {
"문법": "5?",
"민심": "5?"
},
"cmd": ""
}
},
{
"id": 446,
"name": "_slaverdiscovery",
"theme": "land and people",
"char": "merchant",
"cond": "isSlaver",
"wait": "",
"weight": "",
"text": "밀무역 배를 살피고 왔사옵니다… 그리 잔인한 장사는 할 수 없사옵니다…",
"R": {
"c": "손을 떼겠다",
"r": "",
"s": {
"민심": "10",
"국고": "-40?"
},
"cmd": "!isSlaver"
},
"L": {
"c": "돈벌이니 어쩔 수 없다",
"r": "(<merchant>은(는) 대궐을 떠나 다시 돌아오지 않았다.)",
"s": {
"민심": "-10",
"국고": "5"
},
"cmd": "del_merchant"
}
},
{
"id": 447,
"name": "toomanyexec",
"theme": "land and people",
"char": "executioner",
"cond": "",
"wait": "120",
"weight": "10",
"text": "벌받을 죄인이 너무 많사옵니다! 군졸들도 거들게 해 주시옵소서.",
"R": {
"c": "거들게 하라",
"r": "",
"s": {
"군사": "-5",
"민심": "5"
},
"cmd": ""
},
"L": {
"c": "너 혼자 하라",
"r": "",
"s": {
"민심": "-8"
},
"cmd": ""
}
},
{
"id": 448,
"name": "prisonbreak",
"theme": "land and people",
"char": "executioner",
"cond": "",
"wait": "110",
"weight": "10",
"text": "옥에서 죄인들이 여럿 달아났사옵니다. 쫓을 군사를 보내야만 하옵니다.",
"R": {
"c": "보내라",
"r": "",
"s": {
"군사": "-10"
},
"cmd": ""
},
"L": {
"c": "달아나게 두어라",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "-5",
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 449,
"name": "bread",
"theme": "land and people",
"char": "farmer",
"cond": "treasure<50",
"wait": "50",
"weight": "18",
"text": "곡식 값이 너무 싸옵니다. 떡값을 올려 주시옵소서.",
"R": {
"c": "조금 올려 보겠다",
"r": "",
"s": {
"국고": "5"
},
"cmd": ""
},
"L": {
"c": "두 배로 하라!",
"r": "",
"s": {
"민심": "-15",
"국고": "20"
},
"cmd": ""
}
},
{
"id": 450,
"name": "bread1",
"theme": "land and people",
"char": "farmer",
"cond": "demography<30",
"wait": "50",
"weight": "18",
"text": "전하, 떡값이 너무 비싸 온 백성이 굶주리고 있사옵니다.",
"R": {
"c": "반값으로 하라",
"r": "",
"s": {
"민심": "5",
"국고": "-20"
},
"cmd": ""
},
"L": {
"c": "값은 그대로 둔다",
"r": "",
"s": {
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 451,
"name": "bread2",
"theme": "land and people",
"char": "nobleman",
"cond": "demography>70",
"wait": "50",
"weight": "18",
"text": "백성들이 너무 먹어 배가 불러 드러누워 있사옵니다. 떡값을 올리시지요.",
"R": {
"c": "두 배로 하라!",
"r": "",
"s": {
"민심": "-20?",
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "그냥 두어라",
"r": "",
"s": {
"민심": "5"
},
"cmd": ""
}
},
{
"id": 452,
"name": "beggars",
"theme": "land and people",
"char": "nobleman",
"cond": "",
"wait": "50",
"weight": "4",
"text": "전하! 가난한 이들이 무리 지어 도성을 덮치고 있사옵니다!",
"R": {
"c": "몰아내라!",
"r": "",
"s": {
"문법": "10?",
"군사": "5?",
"민심": "-5?"
},
"cmd": "isStrong"
},
"L": {
"c": "하고 싶은 대로 두어라",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "5?"
},
"cmd": ""
}
},
{
"id": 453,
"name": "abundance",
"theme": "land and people",
"char": "farmer",
"cond": "",
"wait": "60",
"weight": "6",
"text": "전하! 올해는 풍년이옵니다!",
"R": {
"c": "백성에게 나눠라",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"민심": "20?",
"국고": "5?"
},
"cmd": ""
},
"L": {
"c": "군사에게 주어라",
"r": "",
"s": {
"문법": "5?",
"군사": "20?",
"민심": "5?",
"국고": "5?"
},
"cmd": ""
}
},
{
"id": 454,
"name": "mine_explosion",
"theme": "land and people",
"char": "farmer",
"cond": "",
"wait": "50",
"weight": "5",
"text": "전하, 광산에서 엄청난 금맥이 나왔사옵니다!",
"R": {
"c": "이제 나라가 넉넉해졌구나!",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"민심": "5?",
"국고": "5?"
},
"cmd": ""
},
"L": {
"c": "이제 짐도 부자로구나!",
"r": "",
"s": {
"국고": "30?"
},
"cmd": "isGreedy"
}
},
{
"id": 455,
"name": "mine_gold",
"theme": "land and people",
"char": "farmer",
"cond": "",
"wait": "70",
"weight": "5",
"text": "광산이 무너져 적어도 백 명이 목숨을 잃었사옵니다! 그래도 금을 계속 캐시겠사옵니까?",
"R": {
"c": "계속 캐라",
"r": "",
"s": {
"민심": "-15?",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "광산을 닫아라",
"r": "",
"s": {
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 456,
"name": "",
"theme": "land and people",
"char": "farmer",
"cond": "!farmerwolf",
"wait": "400",
"weight": "20",
"text": "아직도 늑대가 덤벼들잖아! 오늘 밤 숲을 몽땅 불태워 버리겠어!",
"R": {
"c": "마음대로 하라",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "-5?",
"국고": "-5"
},
"cmd": ">_farmerworlf"
},
"L": {
"c": "그자를 막아라",
"r": "",
"s": {
"군사": "5"
},
"cmd": ">"
}
},
{
"id": 457,
"name": "_",
"theme": "land and people",
"char": "general",
"cond": "",
"wait": "",
"weight": "",
"text": "달아났사옵니다!",
"R": {
"c": "참으로 쓸모가 없구나",
"r": "",
"s": {
"군사": "-15"
},
"cmd": ">"
},
"L": {
"c": "상관없다",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "-5",
"국고": "-5"
},
"cmd": ">"
}
},
{
"id": 458,
"name": "_farmerworlf",
"theme": "land and people",
"char": "farmer>werewolf",
"cond": "",
"wait": "",
"weight": "",
"text": "(그날 밤…) 전하! 소인이옵니다, <farmer>이옵니다! 끔찍한 일이 일어났사옵니다!",
"R": {
"c": "그런 것 같구나",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "예상대로구나…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 459,
"name": "_",
"theme": "land and people",
"char": "farmer>werewolf",
"cond": "",
"wait": "",
"weight": "",
"text": "하지만… 그리 기분이 나쁘지는 않사옵니다. 힘이 넘치고… 배가 몹시 고프옵니다!",
"R": {
"c": "마음대로 하라",
"r": "(곧 많은 양과 수많은 농부가 사라졌다.)",
"s": {
"민심": "-5",
"국고": "-5?"
},
"cmd": "add_werewolf and >>>>> and del_farmer"
},
"L": {
"c": "참아라",
"r": "(그 뒤 유생 하나와 군졸 여럿이 '까닭 모르게' 사라졌다.)",
"s": {
"문법": "-5?",
"군사": "-5?"
},
"cmd": "add_werewolf and >>>>> and del_farmer"
}
},
{
"id": 460,
"name": "_",
"theme": "land and people",
"char": "werewolf",
"cond": "",
"wait": "",
"weight": "",
"text": "이 대궐에는 저처럼 '짐승 같은 구석'이 있는 분이 계시옵니까? 꼭 소개해 주시겠사옵니까?",
"R": {
"c": "있다",
"r": "",
"s": {},
"cmd": "> and add_farmer"
},
"L": {
"c": "없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 461,
"name": "_",
"theme": "land and people",
"char": "farmer>werewolf",
"cond": "",
"wait": "",
"weight": "",
"text": "부디 살려 주시옵소서…! 저 여우한테 잡아먹히겠사옵니다! 히이익! 이제 못 버티겠어…!",
"R": {
"c": "도와주마",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "정신 차려라",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 462,
"name": "_",
"theme": "land and people",
"char": "werewolf",
"cond": "",
"wait": "",
"weight": "",
"text": "뵙게 되어 영광이옵니다, <farmer> 님. 저는 괜찮은 여인이랍니다. 벗을 찾고 있지요.",
"R": {
"c": "자, 사양 말게, <farmer>",
"r": "",
"s": {},
"cmd": ">>>"
},
"L": {
"c": "둘이 밖에서 만나게",
"r": "",
"s": {},
"cmd": ">>>"
}
},
{
"id": 463,
"name": "_",
"theme": "land and people",
"char": "farmer>werewolf",
"cond": "",
"wait": "",
"weight": "",
"text": "전하, 소인은 운명의 여우를 만났사옵니다. 그녀와 혼인하고 싶사옵니다. 축복해 주시겠사옵니까?",
"R": {
"c": "축복하마",
"r": "",
"s": {
"문법": "-15?",
"군사": "-5?",
"민심": "10?"
},
"cmd": "farmerwolf"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "5?",
"군사": "5?"
},
"cmd": ""
}
},
{
"id": 464,
"name": "",
"theme": "land and people",
"char": "diplomat",
"cond": "",
"wait": "100",
"weight": "8",
"text": "변두리 마을에서 아이들에게 전하를 모시는 자에게 침을 뱉으라고 가르친다 하옵니다. 본보기를 보일까요?",
"R": {
"c": "본보기를 보여라",
"r": "",
"s": {
"문법": "10",
"민심": "-10"
},
"cmd": ""
},
"L": {
"c": "아이들 장난이다",
"r": "",
"s": {
"민심": "?5"
},
"cmd": ""
}
},
{
"id": 465,
"name": "",
"theme": "land and people",
"char": "anyone",
"cond": "",
"wait": "80",
"weight": "10",
"text": "물방울 강 어귀에 위험한 늪이 펼쳐져 있사옵니다. 그 일대를 깨끗이 다스리지요.",
"R": {
"c": "그리하라",
"r": "",
"s": {
"민심": "15?",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "돈이 아깝다",
"r": "",
"s": {
"민심": "-15?"
},
"cmd": ""
}
},
{
"id": 466,
"name": "",
"theme": "land and people",
"char": "anyone",
"cond": "",
"wait": "90",
"weight": "10",
"text": "밤의 도성은 위험하옵니다. 밤 나들이를 막아야 하옵니다.",
"R": {
"c": "통금을 내려라",
"r": "",
"s": {
"군사": "10",
"민심": "5",
"국고": "-15"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"군사": "-5",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 467,
"name": "",
"theme": "land and people",
"char": "executioner",
"cond": "",
"wait": "300",
"weight": "7",
"text": "격물관을 지어 세상 모든 생물을 모으시지요. 소인도 틈나는 대로 돕겠사옵니다.",
"R": {
"c": "지어라",
"r": "",
"s": {
"민심": "10",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "10?"
},
"cmd": ""
}
},
{
"id": 468,
"name": "",
"theme": "land and people",
"char": "farmer",
"cond": "",
"wait": "120",
"weight": "10",
"text": "물방울 강이 넘쳐 나라 곳곳이 물에 잠겼사옵니다! 서원과 군사 모두 구호를 도와 주시옵소서!",
"R": {
"c": "모두 나서라",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "5",
"국고": "-20"
},
"cmd": ""
},
"L": {
"c": "알아서 하라",
"r": "",
"s": {
"민심": "?-30"
},
"cmd": ""
}
},
{
"id": 469,
"name": "older",
"theme": "science",
"char": "anyone",
"cond": "age>37",
"wait": "reign",
"weight": "100000000",
"text": "경하드리옵니다! 오늘은 전하의 쉰 번째 생신이시옵니다!",
"R": {
"c": "고맙구나",
"r": "",
"s": {
"문법": "3",
"군사": "3",
"민심": "3",
"국고": "3"
},
"cmd": "older"
},
"L": {
"c": "별로 기쁘지 않구나…",
"r": "",
"s": {
"문법": "3",
"군사": "3",
"민심": "3",
"국고": "3"
},
"cmd": "older"
}
},
{
"id": 470,
"name": "sciencemagic",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "140",
"weight": "10",
"text": "전하, 저잣거리에 가게를 내도 되겠사옵니까? 제가 쓴 부적을 팔고 싶사옵니다.",
"R": {
"c": "허락한다",
"r": "",
"s": {
"문법": "-15",
"민심": "5"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "5",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 471,
"name": "young",
"theme": "science",
"char": "homunculus",
"cond": "older and hopen_keep",
"wait": "reign",
"weight": "15",
"text": "그대도 꽤 늙었구먼. 하지만 좀 더 함께하고 싶은걸. 열 살 젊어 보이는 약을 주지.",
"R": {
"c": "마시겠다",
"r": "",
"s": {
"문법": "-10",
"군사": "5",
"민심": "5"
},
"cmd": "!older and !dying"
},
"L": {
"c": "됐다",
"r": "",
"s": {
"문법": "5",
"군사": "-5",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 472,
"name": "",
"theme": "science",
"char": "witch",
"cond": "!hospital_keep",
"wait": "200",
"weight": "10",
"text": "소녀는 혜민서를 지어 역병이 도는 것을 막을 수 있사옵니다.",
"R": {
"c": "지어 보라",
"r": "",
"s": {
"문법": "-10",
"국고": "-20"
},
"cmd": "hospital_keep"
},
"L": {
"c": "우리 의원은 안 되느냐?",
"r": "",
"s": {},
"cmd": "> and >>_answerwitch"
}
},
{
"id": 473,
"name": "",
"theme": "science",
"char": "doctor",
"cond": "",
"wait": "40",
"weight": "4",
"text": "전하! 오늘 아침 전하 소피에서 진달래 냄새가 나옵니다. 당분간 말을 타고 행차하시는 건 삼가시옵소서.",
"R": {
"c": "조심하겠다",
"r": "",
"s": {
"군사": "-10"
},
"cmd": ""
},
"L": {
"c": "말은 탈 것이다",
"r": "",
"s": {
"군사": "10"
},
"cmd": ""
}
},
{
"id": 474,
"name": "_answerwitch",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "의원이 혜민서를 꾸릴 수 없는 까닭을 소녀가 꼭 말씀드려야 하옵니까?",
"R": {
"c": "말해 보라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "됐다",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 475,
"name": "_",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "그럴 뜻은 없었사옵니다. 어쨌든 혜민서를 열어도 되겠사옵니까?",
"R": {
"c": "열어라",
"r": "",
"s": {
"문법": "-10",
"국고": "-20"
},
"cmd": "hospital_keep"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "5",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 476,
"name": "mushroom",
"theme": "science",
"char": "anyone",
"cond": "!isStone",
"wait": "200",
"weight": "15",
"text": "숲에서 파란 버섯과 갈색 버섯을 찾았사옵니다. 파란 버섯은 먹어도 되는 것 같사옵니다.",
"R": {
"c": "먹어 보겠다",
"r": "",
"s": {},
"cmd": "isStone"
},
"L": {
"c": "필요 없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 477,
"name": "goblins",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "80",
"weight": "10",
"text": "서쪽 마을 백성들이 도깨비불을 두려워하고 있사옵니다. 이 일은 누가 맡아야 하옵니까?",
"R": {
"c": "네가 맡아라",
"r": "",
"s": {
"문법": "-5",
"민심": "15"
},
"cmd": ""
},
"L": {
"c": "서원에 맡기겠다",
"r": "",
"s": {
"문법": "15",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 478,
"name": "intro_doc",
"theme": "new character",
"char": "anyone",
"cond": "!has_doctor",
"wait": "100",
"weight": "40",
"text": "전하, 솜씨 좋은 의원이 제 조카의 목숨을 구해 주었사옵니다. 술법도 좀 아는 듯하옵니다. 만나 보시겠사옵니까?",
"R": {
"c": "들라 하라",
"r": "",
"s": {
"문법": "-5",
"민심": "5"
},
"cmd": ">_new_doc and add_doctor"
},
"L": {
"c": "그럴 여유는 없다",
"r": "",
"s": {
"문법": "10"
},
"cmd": ""
}
},
{
"id": 479,
"name": "intro_nun",
"theme": "new character",
"char": "nun",
"cond": "",
"wait": "del",
"weight": "300",
"text": "소인은 <nun>이옵니다. 새로 연 서당의 훈장이지요. 아이들 가르치는 일을 도와주시옵소서!",
"R": {
"c": "돕겠다",
"r": "",
"s": {
"문법": "10",
"민심": "5",
"국고": "-15"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "-5",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 480,
"name": "news",
"theme": "new character",
"char": "bird",
"cond": "!has_spy",
"wait": "100",
"weight": "40",
"text": "(쪽지에 이렇게 적혀 있다. \"소인은 솜씨 좋은 밀정이옵니다. 전하를 모시고자 하옵니다. ㅂ 올림.\")",
"R": {
"c": "받아들인다",
"r": "",
"s": {
"군사": "20"
},
"cmd": "add_spy"
},
"L": {
"c": "쪽지를 태운다",
"r": "",
"s": {
"군사": "-15"
},
"cmd": ""
}
},
{
"id": 481,
"name": "_new_doc",
"theme": "new character",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "",
"text": "소인은 의술에 밝고 연단술과 독약도 아옵니다. 목숨을 구할 수도 있고, 필요하시면 죽음을 가져올 수도 있사옵니다.",
"R": {
"c": "반갑다",
"r": "",
"s": {
"문법": "-10",
"군사": "10"
},
"cmd": ""
},
"L": {
"c": "목숨 구하는 데만 힘써라",
"r": "",
"s": {
"문법": "-5",
"민심": "10"
},
"cmd": ""
}
},
{
"id": 482,
"name": "newitch",
"theme": "new character",
"char": "anyone",
"cond": "!has_witch",
"wait": "100",
"weight": "40",
"text": "얼마 전 이상한 여인을 만났사옵니다. 옛 약초와 꿈에 대해 아는 여인이옵니다. 만나 보시겠사옵니까?",
"R": {
"c": "만나 보겠다",
"r": "",
"s": {
"문법": "-5",
"군사": "5",
"민심": "5"
},
"cmd": "isWise and add_witch"
},
"L": {
"c": "필요 없다",
"r": "",
"s": {
"문법": "15",
"군사": "-5",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 483,
"name": "intro_witch",
"theme": "new character",
"char": "witch",
"cond": "",
"wait": "del",
"weight": "100",
"text": "소녀는 <witch>이옵니다. 하늘과 땅의 이치와 사람의 한계에 관심이 있으시다면 알려 드리지요.",
"R": {
"c": "참으로 고맙구나",
"r": "",
"s": {
"문법": "-15",
"군사": "5",
"민심": "5"
},
"cmd": ""
},
"L": {
"c": "우쭐대지 마라",
"r": "",
"s": {
"문법": "10"
},
"cmd": ""
}
},
{
"id": 484,
"name": "hygiene",
"theme": "science",
"char": "doctor",
"cond": "",
"wait": "120",
"weight": "8",
"text": "전하, 군영이 몹시 불결하옵니다. 비용을 내려 손을 써 주시옵소서.",
"R": {
"c": "내려 주마",
"r": "",
"s": {
"군사": "15",
"민심": "5",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "군졸들이 알아서 하라",
"r": "",
"s": {
"군사": "-15",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 485,
"name": "_hidden_room",
"theme": "science",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "",
"text": "소인 방에는 수상한 것이 하나도 없사옵니다. 의술을 익히려면 시험은 꼭 해야 하옵니다!",
"R": {
"c": "앞으로는 몰래 하라",
"r": "",
"s": {
"군사": "5",
"민심": "10"
},
"cmd": ""
},
"L": {
"c": "이제부터 일절 금한다",
"r": "",
"s": {
"문법": "10",
"군사": "-5",
"민심": "-10"
},
"cmd": "!alchemy_keep"
}
},
{
"id": 486,
"name": "other_research",
"theme": "science",
"char": "doctor",
"cond": "",
"wait": "120",
"weight": "8",
"text": "무기와 진법을 새로 시험해 보고 싶사옵니다. 도와주시겠사옵니까?",
"R": {
"c": "도와주마",
"r": "",
"s": {
"군사": "20",
"민심": "-5",
"국고": "-15"
},
"cmd": "isStrong"
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"군사": "-15",
"민심": "5"
},
"cmd": ""
}
},
{
"id": 487,
"name": "alchemy",
"theme": "science",
"char": "doctor",
"cond": "!alchemy_keep",
"wait": "120",
"weight": "10",
"text": "납을 금으로 바꾸는 연단술을 시험해 보고 싶사옵니다. 도와주시겠사옵니까?",
"R": {
"c": "도와주마",
"r": "",
"s": {
"문법": "-10",
"국고": "-15"
},
"cmd": "alchemy_keep"
},
"L": {
"c": "허황된 소리다",
"r": "",
"s": {
"문법": "10"
},
"cmd": ""
}
},
{
"id": 488,
"name": "alchemy_discover",
"theme": "science",
"char": "doctor",
"cond": "alchemy_keep",
"wait": "160",
"weight": "15",
"text": "시험하다가 소주를 빠르게 내리는 법을 찾았사옵니다. 남는 돈의 일부는 전하께도 드리지요.",
"R": {
"c": "좋다",
"r": "",
"s": {
"문법": "-10",
"군사": "-5",
"민심": "-5",
"국고": "30"
},
"cmd": ""
},
"L": {
"c": "아니 된다",
"r": "",
"s": {
"문법": "10"
},
"cmd": ""
}
},
{
"id": 489,
"name": "hiddenroomrumor",
"theme": "science",
"char": "anyone",
"cond": "",
"wait": "120",
"weight": "8",
"text": "지난밤 대궐 안에서 이상한 소리가 났사옵니다. 순라군을 늘려야 하옵니다!",
"R": {
"c": "늘려라",
"r": "",
"s": {
"군사": "-10",
"민심": "5",
"국고": "-5"
},
"cmd": ""
},
"L": {
"c": "바람 소리였겠지",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 490,
"name": "alchemy_fail",
"theme": "science",
"char": "doctor",
"cond": "alchemy_keep",
"wait": "60",
"weight": "10",
"text": "공부가 잘 나아가지 않사오나… 계속해도 되겠사옵니까?",
"R": {
"c": "계속하라",
"r": "",
"s": {
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "그만두어라",
"r": "",
"s": {
"문법": "15"
},
"cmd": "!alchemy_keep"
}
},
{
"id": 491,
"name": "no_doc",
"theme": "science",
"char": "priest",
"cond": "has_doctor and alchemy_keep",
"wait": "60",
"weight": "10",
"text": "<doctor>가 하는 시험은 하늘의 이치에 어긋나옵니다. 그자가 대궐에 있는 것 자체가 하늘을 업신여기는 일이옵니다!",
"R": {
"c": "내쫓겠다",
"r": "",
"s": {
"문법": "15",
"민심": "-5"
},
"cmd": "no_doctor++"
},
"L": {
"c": "그냥 두어라",
"r": "",
"s": {
"문법": "-10"
},
"cmd": "no_priest++"
}
},
{
"id": 492,
"name": "arrest_doctor",
"theme": "science",
"char": "priest",
"cond": "inquisition and has_doctor",
"wait": "60",
"weight": "9",
"text": "<doctor>가 집현전 심문에 넘겨졌사옵니다. 죄를 묻는 문서에 수결하시겠사옵니까?",
"R": {
"c": "수결하겠다",
"r": "",
"s": {
"문법": "15",
"민심": "-5"
},
"cmd": "del_doctor and isPure"
},
"L": {
"c": "아니 된다. 풀어 주어라",
"r": "",
"s": {
"문법": "-40",
"민심": "5"
},
"cmd": ""
}
},
{
"id": 493,
"name": "experiments",
"theme": "science",
"char": "monk",
"cond": "has_doctor and !alchemy_keep",
"wait": "160",
"weight": "8",
"text": "전하께서 아끼시는 그 의원은 숨은 방에서 하늘의 이치에 어긋나는 시험을 하고 있사옵니다. 그만두게 하시옵소서!",
"R": {
"c": "그만두게 하라",
"r": "",
"s": {
"문법": "15",
"민심": "-5"
},
"cmd": ">_hidden_room"
},
"L": {
"c": "다 알고 있었다…",
"r": "",
"s": {
"문법": "-25"
},
"cmd": ""
}
},
{
"id": 494,
"name": "printing",
"theme": "science",
"char": "doctor",
"cond": "year>1439",
"wait": "del",
"weight": "max",
"text": "종이에 글자를 찍어 내는 쇠붙이 활자를 만들었사옵니다!",
"R": {
"c": "훌륭하다!",
"r": "",
"s": {
"문법": "-5",
"군사": "5?",
"민심": "15?",
"국고": "5?"
},
"cmd": "printing_keep"
},
"L": {
"c": "이건 도깨비 장치다",
"r": "",
"s": {
"문법": "15"
},
"cmd": ""
}
},
{
"id": 495,
"name": "",
"theme": "science",
"char": "nobleman",
"cond": "printing_keep and has_executioner",
"wait": "300",
"weight": "20",
"text": "이 훌륭한 활자로 전하의 일대기를 찍어 내시지요!",
"R": {
"c": "좋다",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "누가 쓰느냐?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 496,
"name": "_",
"theme": "science",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "한가한 유생을 불러 쓰게 하지요. 그런 유생은 많으니까요.",
"R": {
"c": "좋은 생각이다",
"r": "(일대기는 불티나게 팔렸지만 <nobleman>은(는) 책값 몫을 좀처럼 내놓지 않았다.)",
"s": {
"국고": "-10?"
},
"cmd": ">>>>"
},
"L": {
"c": "짐이 직접 쓰겠다",
"r": "(왕은 손수 일대기를 썼지만 그다지 팔리지 않았다.)",
"s": {
"국고": "-5?"
},
"cmd": ">>>>"
}
},
{
"id": 497,
"name": "_",
"theme": "science",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "전하, 일대기 책값 몫을 가져왔사옵니다! 판 돈의 스무에 하나이옵니다.",
"R": {
"c": "받겠다",
"r": "",
"s": {
"국고": "5"
},
"cmd": ""
},
"L": {
"c": "이 사기꾼!",
"r": "(<executioner>은(는) <nobleman>을(를) 엄히 문초했다. 그 어느 때보다 즐거운 얼굴이었다.)",
"s": {
"국고": "10"
},
"cmd": "del_nobleman"
}
},
{
"id": 498,
"name": "",
"theme": "science",
"char": "doctor",
"cond": "!has_homunculus",
"wait": "50",
"weight": "15",
"text": "지난주 연단술과 술법을 이것저것 해 보다가 우연히 이런 것이 만들어졌사옵니다.",
"R": {
"c": "훌륭하구나",
"r": "",
"s": {},
"cmd": "> and add_homunculus"
},
"L": {
"c": "관심 없다",
"r": "",
"s": {},
"cmd": "> and add_homunculus"
}
},
{
"id": 499,
"name": "_",
"theme": "science",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "",
"text": "항아리이옵니다.",
"R": {
"c": "훌륭하구나",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "나랏일에 도움이 되느냐…?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 500,
"name": "_",
"theme": "science",
"char": "homunculus>closed",
"cond": "",
"wait": "",
"weight": "",
"text": "(대답이 없다. 그냥 항아리다.)",
"R": {
"c": "훌륭하구나",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(항아리를 두드려 본다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 501,
"name": "_",
"theme": "science",
"char": "homunculus>closed",
"cond": "",
"wait": "",
"weight": "",
"text": "거짓말하기는…",
"R": {
"c": "뭐…!?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "무례한 것!",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 502,
"name": "_",
"theme": "science",
"char": "homunculus>closed",
"cond": "",
"wait": "",
"weight": "",
"text": "아니, 너 말고. 그 의원이 거짓말쟁이라고. 그 녀석은 나를 사막의 성에서 찾아냈어. 만든 게 아니야.",
"R": {
"c": "너는 누구냐?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "너는 무엇이냐?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 503,
"name": "_",
"theme": "science",
"char": "homunculus>closed",
"cond": "",
"wait": "",
"weight": "",
"text": "물음이 너무 막연해서 뜻이 없구나. '얼어붙은 피'를 손에 넣으면 다시 나를 찾아와. 그 물음의 답도 알게 될 거야.",
"R": {
"c": "훌륭하구나",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "얼어붙은 피?",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 504,
"name": "",
"theme": "",
"char": "homunculus",
"cond": "hopen_keep",
"wait": "200",
"weight": "10",
"text": "너는 어떤 넋을 지녔지?",
"R": {
"c": "싸움을 즐기고 거침없다",
"r": "",
"s": {
"문법": "-5?",
"군사": "15?"
},
"cmd": ""
},
"L": {
"c": "생각이 깊고 너그럽다",
"r": "",
"s": {
"군사": "-5?",
"민심": "15?"
},
"cmd": ""
}
},
{
"id": 505,
"name": "",
"theme": "",
"char": "homunculus",
"cond": "hopen_keep",
"wait": "200",
"weight": "10",
"text": "훌륭한 왕의 자질은 무엇이라 생각해?",
"R": {
"c": "바로 짐을 두고 하는 말이다",
"r": "",
"s": {
"군사": "15?",
"민심": "-5?"
},
"cmd": ""
},
"L": {
"c": "너무 꾸며진 말이다",
"r": "",
"s": {
"문법": "-5?",
"민심": "15?"
},
"cmd": ""
}
},
{
"id": 506,
"name": "",
"theme": "",
"char": "homunculus",
"cond": "hopen_keep",
"wait": "200",
"weight": "10",
"text": "백성의 행복은 왕이 좇아야 할 목표인가?",
"R": {
"c": "무엇보다 중요하다",
"r": "",
"s": {
"민심": "15?"
},
"cmd": ""
},
"L": {
"c": "때와 곳에 따라 다르다",
"r": "",
"s": {
"문법": "5?",
"군사": "5?",
"국고": "5?"
},
"cmd": ""
}
},
{
"id": 507,
"name": "",
"theme": "science",
"char": "witch",
"cond": "!queendom",
"wait": "70",
"weight": "12",
"text": "전하께 이로운 술법의 기초를 가르쳐 드리지요.",
"R": {
"c": "배워 보겠다",
"r": "",
"s": {
"문법": "-5?",
"국고": "-5"
},
"cmd": ">_magiclearn"
},
"L": {
"c": "필요 없다",
"r": "",
"s": {
"문법": "15?"
},
"cmd": ""
}
},
{
"id": 508,
"name": "_magiclearn",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "1000",
"weight": "max",
"text": "하지만 그 전에 전하께 자질이 있는지 시험해 보겠사옵니다.",
"R": {
"c": "시험해 보라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "됐다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 509,
"name": "_",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "거룩한 주문 '즈간도'를 동쪽 사투리로 읽어 보시옵소서.",
"R": {
"c": "즐람워",
"r": "(틀렸다.)",
"s": {},
"cmd": ""
},
"L": {
"c": "아보에프",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 510,
"name": "_",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "맞혔사옵니다. 그럼 어떤 술법을 원하시옵니까?",
"R": {
"c": "모르겠다",
"r": "",
"s": {},
"cmd": ">_magiclearn"
},
"L": {
"c": "마음이 바뀌었다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 511,
"name": "_magiclearn",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "",
"weight": "1",
"text": "지금 가르쳐 드릴 수 있는 것은 그것뿐이옵니다.",
"R": {
"c": "알겠다",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "이제 됐다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 512,
"name": "_magiclearn",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "5",
"weight": "10",
"text": "운명을 마음대로 바꾸는 법이요?",
"R": {
"c": "그걸 알려 다오",
"r": "",
"s": {},
"cmd": "dice_keep"
},
"L": {
"c": "또 없느냐?",
"r": "",
"s": {},
"cmd": ">_magiclearn"
}
},
{
"id": 513,
"name": "_tinder",
"theme": "science",
"char": "bird",
"cond": "",
"wait": "10",
"weight": "4",
"text": "(<bird>, 열여덟)",
"R": {
"c": "마음에 든다!",
"r": "",
"s": {
"문법": "-2?",
"군사": "-2",
"민심": "3",
"국고": "2?"
},
"cmd": "isLover and >_match and hatoful"
},
"L": {
"c": "다음",
"r": "",
"s": {},
"cmd": ">_tinder"
}
},
{
"id": 514,
"name": "_magiclearn",
"theme": "science",
"char": "witch",
"cond": "!isLover",
"wait": "5",
"weight": "10",
"text": "운명의 짝을 찾는 법이요?",
"R": {
"c": "그걸 알려 다오",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "또 없느냐?",
"r": "",
"s": {},
"cmd": ">_magiclearn"
}
},
{
"id": 515,
"name": "_",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "인연아 인연아 나와라! 자, 이제 고르시옵소서.",
"R": {
"c": "고르겠다",
"r": "",
"s": {},
"cmd": ">_tinder and add_foreign_princess and add_nun and add_painter and add_lady"
},
"L": {
"c": "고르라니…?",
"r": "",
"s": {},
"cmd": ">_tinder"
}
},
{
"id": 516,
"name": "_tinder",
"theme": "science",
"char": "lady",
"cond": "",
"wait": "10",
"weight": "10",
"text": "(<lady>, 열아홉)",
"R": {
"c": "마음에 든다!",
"r": "",
"s": {
"군사": "-2",
"민심": "3"
},
"cmd": "isLover and >_match"
},
"L": {
"c": "다음",
"r": "",
"s": {},
"cmd": ">_tinder"
}
},
{
"id": 517,
"name": "_tinder",
"theme": "science",
"char": "courtesan",
"cond": "",
"wait": "10",
"weight": "10",
"text": "(<courtesan>, 스물넷)",
"R": {
"c": "마음에 든다!",
"r": "",
"s": {
"문법": "-2",
"국고": "-3"
},
"cmd": "isLover and >_match"
},
"L": {
"c": "다음",
"r": "",
"s": {},
"cmd": ">_tinder"
}
},
{
"id": 518,
"name": "_tinder",
"theme": "science",
"char": "queen",
"cond": "",
"wait": "10",
"weight": "10",
"text": "(<queen>, 서른다섯)",
"R": {
"c": "마음에 든다!",
"r": "",
"s": {
"문법": "3",
"군사": "3",
"민심": "3"
},
"cmd": "isLover and >_match"
},
"L": {
"c": "다음",
"r": "",
"s": {},
"cmd": ">_tinder"
}
},
{
"id": 519,
"name": "_tinder",
"theme": "science",
"char": "painter",
"cond": "",
"wait": "10",
"weight": "10",
"text": "(<painter>, 스물둘)",
"R": {
"c": "마음에 든다!",
"r": "",
"s": {
"문법": "-4",
"군사": "-2",
"국고": "3"
},
"cmd": "isLover and >_match"
},
"L": {
"c": "다음",
"r": "",
"s": {},
"cmd": ">_tinder"
}
},
{
"id": 520,
"name": "_tinder",
"theme": "science",
"char": "foreign_princess",
"cond": "",
"wait": "10",
"weight": "10",
"text": "(<foreign_princess>, 스물하나)",
"R": {
"c": "마음에 든다!",
"r": "",
"s": {
"문법": "-5",
"군사": "4",
"민심": "4",
"국고": "5"
},
"cmd": "isLover and >_match"
},
"L": {
"c": "다음",
"r": "",
"s": {},
"cmd": ">_tinder"
}
},
{
"id": 521,
"name": "_tinder",
"theme": "science",
"char": "nun",
"cond": "",
"wait": "10",
"weight": "10",
"text": "(<nun>, 스물여덟)",
"R": {
"c": "마음에 든다!",
"r": "",
"s": {
"문법": "-10"
},
"cmd": "isLover and >_match"
},
"L": {
"c": "다음",
"r": "",
"s": {},
"cmd": ">_tinder"
}
},
{
"id": 522,
"name": "_tinder",
"theme": "science",
"char": "executioner",
"cond": "",
"wait": "10",
"weight": "10",
"text": "(<executioner>, 마흔둘)",
"R": {
"c": "마음에 든다!",
"r": "",
"s": {
"문법": "-3",
"군사": "3",
"민심": "-3"
},
"cmd": "isLover and >_match"
},
"L": {
"c": "다음",
"r": "",
"s": {},
"cmd": ">_tinder"
}
},
{
"id": 523,
"name": "_tinder",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "5",
"weight": "2",
"text": "어울리는 짝을 찾을 수 없사옵니다.",
"R": {
"c": "다시 찾아오라",
"r": "",
"s": {},
"cmd": ">_magiclearn"
},
"L": {
"c": "짐은 평생 홀로 살겠구나…",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 524,
"name": "_match",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "짝이 맞았사옵니다. <lover>도 전하를 마음에 들어 하옵니다.",
"R": {
"c": "정말이냐?",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "그럴 리가…",
"r": "",
"s": {},
"cmd": "!isLover"
}
},
{
"id": 525,
"name": "_magiclearn",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "5",
"weight": "10",
"text": "행복해지는 법이요?",
"R": {
"c": "그걸 알려 다오",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "또 없느냐?",
"r": "",
"s": {},
"cmd": ">_magiclearn"
}
},
{
"id": 526,
"name": "_",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "행복은 술법으로 불러올 수 있는 것도, 노리개처럼 몸에 지닐 수 있는 것도 아니옵니다.",
"R": {
"c": "그렇구나",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "쓸모없는 소리다",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 527,
"name": "_",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "소녀는 전하께 행복을 드릴 수는 없지만 근심의 씨앗을 없앨 수는 있지요.",
"R": {
"c": "중전이다!",
"r": "",
"s": {},
"cmd": ">_happinessqueen"
},
"L": {
"c": "이 익선관이다!",
"r": "",
"s": {},
"cmd": ">_endcrown"
}
},
{
"id": 528,
"name": "_endcrown",
"theme": "science",
"char": "end>dead_king_classic",
"cond": "",
"wait": "",
"weight": "",
"text": "(그날 뒤로 왕을 본 사람은 없다. 익선관만 남아 있었다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 529,
"name": "_happinessqueen",
"theme": "science",
"char": "witch",
"cond": "!has_queen",
"wait": "",
"weight": "",
"text": "그거 다행이옵니다… 전하께서는 혼인을 하지 않으셨으니까요.",
"R": {
"c": "그렇구나",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "…",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 530,
"name": "_happinessqueen",
"theme": "science",
"char": "witch",
"cond": "has_queen",
"wait": "",
"weight": "",
"text": "정말 괜찮으시겠사옵니까?",
"R": {
"c": "그렇다",
"r": "(중전은 갑자기 대궐을 떠났다. 신하들 대부분도 중전을 따라가 버려 왕은 언짢았다.)",
"s": {
"문법": "-5",
"군사": "-5?",
"민심": "-5?",
"국고": "-5?"
},
"cmd": "del_queen"
},
"L": {
"c": "다시 생각하겠다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 531,
"name": "_magiclearn",
"theme": "science",
"char": "witch",
"cond": "year>666",
"wait": "5",
"weight": "10",
"text": "도깨비 왕을 속이는 법이요?",
"R": {
"c": "그걸 알려 다오",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "또 없느냐?",
"r": "",
"s": {},
"cmd": ">_magiclearn"
}
},
{
"id": 532,
"name": "_",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "(<witch>이(가) 흰 뼈를 허공에 던졌다.) 숫자 여섯 개가 보이옵니다… 1043, 683, 1214, 842, 1432, 1669.",
"R": {
"c": "음…",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "무슨 뜻인지 모르겠다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 533,
"name": "",
"theme": "science",
"char": "witch",
"cond": "!hopen_keep and has_homunculus and age<6",
"wait": "100",
"weight": "100",
"text": "전하께 드릴 선물이 있사옵니다. 하지만 공짜는 아니옵니다. 받을 자격이 있음을 보여 주시옵소서.",
"R": {
"c": "무엇을 하면 되느냐?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "선물은 필요 없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 534,
"name": "_",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "열다섯 해 동안 노환을 이겨 내고 나라를 다스려 주시옵소서. 그러면 선물을 가져오겠사옵니다.",
"R": {
"c": "약속하마",
"r": "",
"s": {},
"cmd": "isDeaf and witch_trial"
},
"L": {
"c": "너무 길다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 535,
"name": "",
"theme": "science",
"char": "witch",
"cond": "witch_trial and age>14",
"wait": "80",
"weight": "max",
"text": "잠시만 기다리시옵소서!",
"R": {
"c": "무엇이냐?",
"r": "(<witch>이(가) 손을 흔들자 갑자기 귀가 잘 들렸다.)",
"s": {},
"cmd": "!isDeaf and >"
},
"L": {
"c": "소리를 지르지 마라",
"r": "(<witch>이(가) 손을 흔들자 갑자기 귀가 잘 들렸다.)",
"s": {},
"cmd": "!isDeaf and >"
}
},
{
"id": 536,
"name": "_",
"theme": "science",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "전하께서는 저주에 시달리면서도 열다섯 해를 훌륭히 다스리셨사옵니다. 약속대로 원하시는 선물을 고르시옵소서.",
"R": {
"c": "(차갑고 붉은 홍옥.)",
"r": "",
"s": {
"국고": "10?"
},
"cmd": "hopen_keep and >"
},
"L": {
"c": "(금빛 익선관.)",
"r": "",
"s": {
"국고": "5?"
},
"cmd": ""
}
},
{
"id": 537,
"name": "_openhomunculus",
"theme": "science",
"char": "homunculus>closed",
"cond": "",
"wait": "",
"weight": "",
"text": "'얼어붙은 피'를 구했구나. 해낼 줄 알았지.",
"R": {
"c": "(홍옥을 넣는다.)",
"r": "(왕은 홍옥을 항아리 안에 넣었다. 보석은 금세 녹아 사라지고 알 수 없는 것이 모습을 드러냈다…)",
"s": {},
"cmd": ">"
},
"L": {
"c": "(아직 넣지 않는다.)",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 538,
"name": "_",
"theme": "science",
"char": "homunculus",
"cond": "",
"wait": "",
"weight": "",
"text": "좋아…",
"R": {
"c": "너는 누구냐?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "너는 무엇이냐?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 539,
"name": "_",
"theme": "",
"char": "homunculus",
"cond": "",
"wait": "",
"weight": "",
"text": "이름 따위는 상관없어. 이름은 그 주인에게 그럴듯한 자기라는 족쇄를 채울 뿐이지. 그것뿐이야.",
"R": {
"c": "그래서 너는 누구냐?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "이제 됐다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 540,
"name": "_",
"theme": "",
"char": "homunculus",
"cond": "",
"wait": "",
"weight": "",
"text": "나는 어느 사람의 맑은 생각에서 태어났어. 기억 저편에 묻힌 시대에, 위대한 학자가 연단술로 빚어낸 기적이지.",
"R": {
"c": "맑다고?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "이제 됐다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 541,
"name": "_",
"theme": "",
"char": "homunculus",
"cond": "",
"wait": "",
"weight": "",
"text": "그래. 세상 모든 것과 견주면 나는 넋에 가장 가까운 존재야. 몸이 아주 여리니 넋은 흠이 없지.",
"R": {
"c": "과연, 일리 있구나",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "무슨 소리냐",
"r": "",
"s": {},
"cmd": ">_whatdoes"
}
},
{
"id": 542,
"name": "_",
"theme": "",
"char": "homunculus",
"cond": "",
"wait": "",
"weight": "",
"text": "그래? 네가 사는 세상의 뿌리를 흔들 수도 있는 존재인데 상관없다고? 불안하지 않아?",
"R": {
"c": "조금은 그렇다",
"r": "",
"s": {
"문법": "-9?",
"군사": "-6",
"민심": "6?",
"국고": "8"
},
"cmd": ""
},
"L": {
"c": "그렇지 않다",
"r": "",
"s": {
"문법": "7",
"군사": "6?",
"민심": "-10",
"국고": "-3?"
},
"cmd": ">_whatdoes"
}
},
{
"id": 543,
"name": "_whatdoes",
"theme": "",
"char": "homunculus",
"cond": "",
"wait": "",
"weight": "",
"text": "너는 무엇이 불안하지? 네 나라? 네 권세? 아니면 네 선택?",
"R": {
"c": "모두 짐의 뜻대로다",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "모르겠다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 544,
"name": "",
"theme": "fortune",
"char": "dog",
"cond": "",
"wait": "140",
"weight": "8",
"text": "컹! 컹컹! 멍!",
"R": {
"c": "그래, 알았다",
"r": "",
"s": {
"문법": "-5?",
"군사": "-5?"
},
"cmd": ""
},
"L": {
"c": "앉아!",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 545,
"name": "",
"theme": "fortune",
"char": "dog",
"cond": "dynasty>1",
"wait": "80",
"weight": "14",
"text": "멍! 멍! (<dog>이(가) 왕에게 따라오라는 것 같다.)",
"R": {
"c": "그래, 그래, 알았다…",
"r": "",
"s": {},
"cmd": ">_dogwalk"
},
"L": {
"c": "앉아!",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 546,
"name": "_dogwalk",
"theme": "fortune",
"char": "dog",
"cond": "",
"wait": "10",
"weight": "10",
"text": "컹… 컹! (<dog>이(가) 숲으로 들어가려 한다.)",
"R": {
"c": "얌전히 굴어라!",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "그쪽은 안 된다!",
"r": "",
"s": {},
"cmd": ">_dogwalk"
}
},
{
"id": 547,
"name": "",
"theme": "fortune",
"char": "dog",
"cond": "!isOblivious",
"wait": "",
"weight": "",
"text": "킁킁… 컹! 컹! (<dog>이(가) 새빨간 버섯 앞에 멈춰 섰다.)",
"R": {
"c": "(버섯을 먹는다.)",
"r": "",
"s": {},
"cmd": "isOblivious"
},
"L": {
"c": "(궁으로 돌아간다.)",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 548,
"name": "_dogwalk",
"theme": "fortune",
"char": "dog",
"cond": "",
"wait": "10",
"weight": "10",
"text": "아우우우우! (<dog>이(가) 놀아 달라는 것 같다.)",
"R": {
"c": "그래, 물어 오너라!",
"r": "",
"s": {},
"cmd": ">_ball and !nb_ball"
},
"L": {
"c": "안 된다!",
"r": "",
"s": {},
"cmd": ">_dogwalk"
}
},
{
"id": 549,
"name": "_dogwalk",
"theme": "fortune",
"char": "dog",
"cond": "!intheDungeon",
"wait": "10",
"weight": "8",
"text": "컹! 으르르릉… (<dog>이(가) 왕을 지하 궁의 잊힌 안쪽으로 이끈다.)",
"R": {
"c": "(안으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1 and intheDungeon and !spice_trade_keep"
},
"L": {
"c": "그쪽은 안 된다!",
"r": "",
"s": {},
"cmd": ">_dogwalk"
}
},
{
"id": 550,
"name": "_dogwalk",
"theme": "fortune",
"char": "dog",
"cond": "",
"wait": "",
"weight": "5",
"text": "컹! 컹! (<dog>이(가) 대궐을 한 바퀴 돌고 편전으로 돌아왔다.)",
"R": {
"c": "앉아!",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "그쪽은 안 된다!",
"r": "",
"s": {},
"cmd": ">_dogwalk"
}
},
{
"id": 551,
"name": "_dogwalk",
"theme": "fortune",
"char": "dog",
"cond": "",
"wait": "10",
"weight": "10",
"text": "컹! 그르르릉… (<dog>이(가) 왕을 장터 구석의 쓸쓸한 굴로 이끌었다.)",
"R": {
"c": "(굴에 들어간다.)",
"r": "",
"s": {},
"cmd": "add_fortune_teller and >introfortune"
},
"L": {
"c": "그쪽은 안 된다!",
"r": "",
"s": {},
"cmd": ">_dogwalk"
}
},
{
"id": 552,
"name": "_ball",
"theme": "fortune",
"char": "dog",
"cond": "",
"wait": "",
"weight": "10",
"text": "멍멍! 컹! (<dog>이(가) 공을 물고 돌아왔다.)",
"R": {
"c": "한 번 더?",
"r": "",
"s": {},
"cmd": ">_ball and nb_ball+"
},
"L": {
"c": "이제 그만!",
"r": "",
"s": {},
"cmd": ">_dogwalk"
}
},
{
"id": 553,
"name": "_ball",
"theme": "fortune",
"char": "dog",
"cond": "nb_ball>30",
"wait": "",
"weight": "max",
"text": "컹컹! (<dog>이(가) 알 수 없는 편지를 물고 왔다.)",
"R": {
"c": "(읽는다.)",
"r": "(편지에는 이렇게 적혀 있다… \"전하께서 무엇을 들으시든 참은 하나이옵니다. 그림자 정승은 전하의 적이 아니옵니다. ㅂ 올림.\")",
"s": {},
"cmd": ""
},
"L": {
"c": "(읽지 않는다.)",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 554,
"name": "",
"theme": "",
"char": "black_bird",
"cond": "",
"wait": "120",
"weight": "8",
"text": "(쪽지에 이렇게 적혀 있다. \"동쪽 작은 마을 사람들이 흙으로 장승 거인을 빚었다.\")",
"R": {
"c": "군사를 보내라!",
"r": "",
"s": {
"군사": "-10",
"민심": "5",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "말도 안 된다…",
"r": "",
"s": {
"문법": "5",
"국고": "5"
},
"cmd": ""
}
},
{
"id": 555,
"name": "",
"theme": "",
"char": "black_bird",
"cond": "",
"wait": "120",
"weight": "8",
"text": "(쪽지에 이렇게 적혀 있다. \"산골 마을에 이무기가 나타나 피해가 늘고 있다.\")",
"R": {
"c": "군사를 보내라!",
"r": "",
"s": {
"군사": "-10",
"민심": "5",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "헛소문이다",
"r": "",
"s": {
"문법": "10?",
"국고": "5?"
},
"cmd": ""
}
},
{
"id": 556,
"name": "",
"theme": "fortune",
"char": "black_bird",
"cond": "",
"wait": "120",
"weight": "8",
"text": "(쪽지에 이렇게 적혀 있다. \"나라 바닷가에 거대한 문어가 나타나 어부들을 위협하고 있다.\")",
"R": {
"c": "군사를 보내라!",
"r": "",
"s": {
"군사": "-10",
"민심": "5?",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "치성을 드리자",
"r": "",
"s": {
"문법": "15",
"민심": "-10?"
},
"cmd": ""
}
},
{
"id": 557,
"name": "",
"theme": "fortune",
"char": "fortune_teller",
"cond": "!skelup_keep and !strawberry_keep",
"wait": "del",
"weight": "30",
"text": "북벌 중에 사로잡힌 현자의 모습이 보이옵니다…",
"R": {
"c": "그러하냐?",
"r": "",
"s": {
"문법": "-5?"
},
"cmd": ""
},
"L": {
"c": "내게는 안 보인다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 558,
"name": "",
"theme": "fortune",
"char": "fortune_teller",
"cond": "has_queen",
"wait": "100",
"weight": "8",
"text": "중전마마께서 다른 분을 연모하고 계시옵니다.",
"R": {
"c": "누구를?",
"r": "",
"s": {
"문법": "-5?"
},
"cmd": "add_general and >>>>>>>>>bed"
},
"L": {
"c": "거짓말 마라!",
"r": "",
"s": {
"문법": "5"
},
"cmd": "add_general and >>>>>>>>>bed"
}
},
{
"id": 559,
"name": "",
"theme": "fortune",
"char": "fortune_teller",
"cond": "!has_black_bird",
"wait": "del",
"weight": "16",
"text": "검은 까마귀를 조심하시옵소서. 궂은 소식만 물어 오는 놈이옵니다.",
"R": {
"c": "명심하겠다",
"r": "",
"s": {
"문법": "-10"
},
"cmd": "add_black_bird"
},
"L": {
"c": "그런 새는 없다",
"r": "",
"s": {
"문법": "5",
"군사": "5"
},
"cmd": "add_black_bird"
}
},
{
"id": 560,
"name": "",
"theme": "fortune",
"char": "fortune_teller",
"cond": "",
"wait": "160",
"weight": "8",
"text": "전하의 결정 하나가 수많은 죄 없는 목숨을 앗아 갈 것이옵니다.",
"R": {
"c": "어떤 결정이냐?",
"r": "",
"s": {
"군사": "5?",
"민심": "-5?"
},
"cmd": ">>>>>plaguestart and blackpredict"
},
"L": {
"c": "겁주지 마라",
"r": "",
"s": {
"군사": "-5?",
"민심": "5?"
},
"cmd": ">>>>>plaguestart and blackpredict"
}
},
{
"id": 561,
"name": "",
"theme": "fortune",
"char": "fortune_teller",
"cond": "!warViking_keep",
"wait": "100",
"weight": "8",
"text": "배 수천 척이 보이옵니다. 모두 덩치 큰 사내들로 가득하옵니다.",
"R": {
"c": "군사를 보내라!",
"r": "",
"s": {
"군사": "-15?",
"국고": "-5?"
},
"cmd": ">>>>battleviking_keep"
},
"L": {
"c": "꿈은 자유지",
"r": "",
"s": {
"문법": "-5",
"민심": "5?"
},
"cmd": ">>>>battleviking"
}
},
{
"id": 562,
"name": "introfortune",
"theme": "fortune",
"char": "fortune_teller",
"cond": "",
"wait": "80",
"weight": "10",
"text": "…아무 말씀도 마시옵소서! 소인에게는 보이옵니다…",
"R": {
"c": "왕이냐?",
"r": "",
"s": {},
"cmd": ">_ftregal"
},
"L": {
"c": "대감이냐?",
"r": "",
"s": {},
"cmd": ">_ftmerch"
}
},
{
"id": 563,
"name": "_ftregal",
"theme": "fortune",
"char": "fortune_teller",
"cond": "",
"wait": "100",
"weight": "10",
"text": "위엄 넘치고 당당한 사내… 그 앞에 보이는 것은…",
"R": {
"c": "개?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "폐허?",
"r": "",
"s": {},
"cmd": ">_ftend"
}
},
{
"id": 564,
"name": "_",
"theme": "fortune",
"char": "fortune_teller",
"cond": "",
"wait": "",
"weight": "",
"text": "붉은 눈과 웃음. 그가 다시 오옵니다… 도깨비 왕이 다시 나타날 것이옵니다!",
"R": {
"c": "계속하라!",
"r": "",
"s": {},
"cmd": ">_ftpay"
},
"L": {
"c": "이제 됐다",
"r": "",
"s": {},
"cmd": ">_ftpay"
}
},
{
"id": 565,
"name": "_ftend",
"theme": "fortune",
"char": "fortune_teller",
"cond": "",
"wait": "",
"weight": "",
"text": "모든 것이 끝날 때 섬사람이 그 몫을 할 것이옵니다.",
"R": {
"c": "계속하라!",
"r": "",
"s": {},
"cmd": ">_ftpay"
},
"L": {
"c": "이제 됐다",
"r": "",
"s": {},
"cmd": ">_ftpay"
}
},
{
"id": 566,
"name": "_ftregal",
"theme": "fortune",
"char": "fortune_teller",
"cond": "",
"wait": "100",
"weight": "10",
"text": "위엄 넘치고 당당한 사내… 그 앞에 보이는 것은…",
"R": {
"c": "칼?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "여인?",
"r": "",
"s": {},
"cmd": ">_ftwoman"
}
},
{
"id": 567,
"name": "_",
"theme": "fortune",
"char": "fortune_teller",
"cond": "",
"wait": "",
"weight": "",
"text": "눈부시게 빛나는 그날. 흙을 불과 물과 독으로 단련한 칼…",
"R": {
"c": "계속하라!",
"r": "",
"s": {},
"cmd": ">_ftpay"
},
"L": {
"c": "이제 됐다",
"r": "",
"s": {},
"cmd": ">_ftpay"
}
},
{
"id": 568,
"name": "_ftwoman",
"theme": "fortune",
"char": "fortune_teller",
"cond": "",
"wait": "",
"weight": "10",
"text": "여인이 품에 안은 것은… 아, 이건 소인이 보아서는 안 되겠사옵니다!",
"R": {
"c": "계속하라!",
"r": "",
"s": {},
"cmd": ">_ftpay"
},
"L": {
"c": "이제 됐다",
"r": "",
"s": {},
"cmd": ">_ftpay"
}
},
{
"id": 569,
"name": "_ftwoman",
"theme": "fortune",
"char": "fortune_teller",
"cond": "has_queen",
"wait": "",
"weight": "150",
"text": "그 여인은 상처를 입었사옵니다… 그 슬픔에서 피 맛이 나옵니다…",
"R": {
"c": "계속하라!",
"r": "",
"s": {},
"cmd": ">_ftpay"
},
"L": {
"c": "이제 됐다",
"r": "",
"s": {},
"cmd": ">_ftpay"
}
},
{
"id": 570,
"name": "_ftmerch",
"theme": "fortune",
"char": "fortune_teller",
"cond": "",
"wait": "800",
"weight": "100",
"text": "숨이 끊어져 누운 사내의 이마에 비밀의 표식이 새겨져 있사옵니다…",
"R": {
"c": "계속하라!",
"r": "",
"s": {},
"cmd": ">_ftpay"
},
"L": {
"c": "이제 됐다",
"r": "",
"s": {},
"cmd": ">_ftpay"
}
},
{
"id": 571,
"name": "_ftmerch",
"theme": "fortune",
"char": "fortune_teller",
"cond": "",
"wait": "",
"weight": "10",
"text": "재물은 많지만 안목은 없는… 그 사내가 말을 주고받는 상대는…",
"R": {
"c": "삿갓 쓴 자?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "새?",
"r": "",
"s": {},
"cmd": ">_ftbird"
}
},
{
"id": 572,
"name": "_",
"theme": "fortune",
"char": "fortune_teller",
"cond": "",
"wait": "",
"weight": "",
"text": "…그림자 정승이옵니다!",
"R": {
"c": "계속하라!",
"r": "",
"s": {},
"cmd": ">_ftpay"
},
"L": {
"c": "이제 됐다",
"r": "",
"s": {},
"cmd": ">_ftpay"
}
},
{
"id": 573,
"name": "_ftbird",
"theme": "fortune",
"char": "fortune_teller",
"cond": "",
"wait": "",
"weight": "",
"text": "검은 까마귀를 조심하시옵소서. 궂은 소식만 물어 오는 놈이옵니다.",
"R": {
"c": "계속하라!",
"r": "",
"s": {},
"cmd": ">_ftpay and add_black_bird"
},
"L": {
"c": "이제 됐다",
"r": "",
"s": {},
"cmd": ">_ftpay and add_black_bird"
}
},
{
"id": 574,
"name": "_ftpay",
"theme": "fortune",
"char": "fortune_teller",
"cond": "",
"wait": "",
"weight": "",
"text": "모두 엽전 육백 냥이옵니다.",
"R": {
"c": "치르마",
"r": "",
"s": {
"국고": "-3"
},
"cmd": ""
},
"L": {
"c": "됐다, 이 사기꾼아",
"r": "",
"s": {
"문법": "5",
"민심": "?-5"
},
"cmd": ""
}
},
{
"id": 575,
"name": "first_card",
"theme": "ghost and tutorial",
"char": "ghost",
"cond": "dynasty=1",
"wait": "del",
"weight": "max",
"text": "네가 이번에 어보를 쥔 젊은 왕이냐?",
"R": {
"c": "그렇소",
"r": "",
"s": {},
"cmd": ">_intro2"
},
"L": {
"c": "누구시오?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 576,
"name": "_no_intro",
"theme": "ghost and tutorial",
"char": "ghost",
"cond": "",
"wait": "",
"weight": "",
"text": "왕이 아니면 볼일이 없다. 네가 왕이 아니라면 나는 다시 잠이나 자러 가겠다.",
"R": {
"c": "그렇게 하시오",
"r": "(혼령은 왕을 물끄러미 바라보다 사라졌다. 왕은 편전으로 들어갔다.)",
"s": {},
"cmd": ">"
},
"L": {
"c": "내가 왕이오",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 577,
"name": "_intro2",
"theme": "ghost and tutorial",
"char": "ghost",
"cond": "",
"wait": "",
"weight": "",
"text": "그러니까 내 자리를 빼앗고, 나를 이 깊은 지하 궁에 가둔 것이 너로구나?",
"R": {
"c": "그렇소…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "아니오…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 578,
"name": "_intro4",
"theme": "ghost and tutorial",
"char": "ghost",
"cond": "",
"wait": "",
"weight": "",
"text": "어쨌든 그 난장판을 물려받은 건 너다. 이 대궐엔 제정신인 자가 하나도 없으니 단단히 마음먹어라.",
"R": {
"c": "누구 이야기요?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "무슨 소리요?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 771,
"name": "_show_data",
"theme": "ghost and tutorial",
"char": "ghost",
"cond": "",
"wait": "",
"weight": "",
"text": "그저 네 세력의 저울을 맞추려 애써 보거라. 그러면 목이 어깨에서 떨어지지는 않을 게다.",
"R": {
"c": "명심하겠소",
"r": "(혼령은 왕을 물끄러미 바라보다 사라졌다. 왕은 편전으로 들어갔다.)",
"s": {},
"cmd": ""
},
"L": {
"c": "그게 어렵소",
"r": "(혼령은 왕을 물끄러미 바라보다 사라졌다. 왕은 편전으로 들어갔다.)",
"s": {},
"cmd": ""
}
},
{
"id": 579,
"name": "second_ghost",
"theme": "ghost and tutorial",
"char": "ghost",
"cond": "dynasty=2",
"wait": "del",
"weight": "max",
"text": "네가 이번에 어보를 쥔 젊은 왕이냐?",
"R": {
"c": "그렇소",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "적당히 하시오…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 580,
"name": "_second1",
"theme": "ghost and tutorial",
"char": "ghost",
"cond": "",
"wait": "",
"weight": "",
"text": "하하, 농이다. 우리는 전에도 이 이야기를 했지. 이것이 우리에게 걸린 저주다.",
"R": {
"c": "잘 모르겠소…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "무슨 말이오…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 581,
"name": "_second2",
"theme": "ghost and tutorial",
"char": "ghost",
"cond": "",
"wait": "",
"weight": "",
"text": "어보를 쥔 왕은 앞선 왕들의 기억을 모두 짊어진다. 어떤 결단을 내렸고 어떻게 죽었는지까지.",
"R": {
"c": "말도 안 되오…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "말도 안 되오…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 582,
"name": "_second3",
"theme": "ghost and tutorial",
"char": "ghost",
"cond": "",
"wait": "",
"weight": "",
"text": "궁에 사는 검은 삽살개를 본 적 있느냐? 늙은 내관들은 그 개가 도깨비 왕이라 수군거린다. 그놈을 속여야만 이 대물림이 끝난다더구나.",
"R": {
"c": "도깨비는 있소",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "그런 건 없소",
"r": "",
"s": {},
"cmd": ">_second5"
}
},
{
"id": 583,
"name": "_second4",
"theme": "ghost and tutorial",
"char": "ghost",
"cond": "",
"wait": "",
"weight": "",
"text": "흐음… 그럴지도 모르지. 언젠가 우리도 도깨비 왕과 맞설 날이 올지 모른다.",
"R": {
"c": "그날을 기다리겠소",
"r": "(혼령은 천천히 멀어져 갔다…)",
"s": {},
"cmd": ""
},
"L": {
"c": "두렵소",
"r": "(혼령은 천천히 멀어져 갔다…)",
"s": {},
"cmd": ""
}
},
{
"id": 584,
"name": "_second5",
"theme": "ghost and tutorial",
"char": "ghost",
"cond": "",
"wait": "",
"weight": "",
"text": "과연, 너는 믿음이 그리 깊지는 않구나. 하지만 나는 언젠가 이 저주에서 풀려나고 싶다.",
"R": {
"c": "나도 그러길 바라오",
"r": "(혼령은 천천히 멀어져 갔다…)",
"s": {},
"cmd": ""
},
"L": {
"c": "나는 그리 생각지 않소",
"r": "(혼령은 천천히 멀어져 갔다…)",
"s": {},
"cmd": ""
}
},
{
"id": 585,
"name": "",
"theme": "ghost and tutorial",
"char": "ghost",
"cond": "age=0 and year>1700",
"wait": "del",
"weight": "max",
"text": "젊은 왕이여, 도깨비 왕의 마지막 방문이 다가온다. 채비는 되었느냐? 우리가 그놈을 속일 수 있겠느냐?",
"R": {
"c": "속여 보겠소",
"r": "(혼령은 천천히 멀어져 갔다…)",
"s": {},
"cmd": ""
},
"L": {
"c": "모르겠소",
"r": "(혼령은 천천히 멀어져 갔다…)",
"s": {},
"cmd": ""
}
},
{
"id": 586,
"name": "",
"theme": "ghost and tutorial",
"char": "ghost",
"cond": "age=0 and year>1900 and year<1990",
"wait": "del",
"weight": "max",
"text": "이번 백 년 안에 도깨비 왕이 다시 한 번 나타날 것이다. 이것이 마지막 기회다!",
"R": {
"c": "알겠소",
"r": "(혼령은 천천히 멀어져 갔다…)",
"s": {},
"cmd": ""
},
"L": {
"c": "또 그 소리요",
"r": "(혼령은 천천히 멀어져 갔다…)",
"s": {},
"cmd": ""
}
},
{
"id": 587,
"name": "",
"theme": "duel",
"char": "general",
"cond": "nb_duelwon_keep<4 and dynasty>3",
"wait": "80",
"weight": "40",
"text": "전하, 검술이라도 함께 겨뤄 보시겠사옵니까? 소신이 가르쳐 드릴 테니 누가 이길지 내기하시지요.",
"R": {
"c": "자, 겨뤄 보자!",
"r": "",
"s": {},
"cmd": ">_duel_general"
},
"L": {
"c": "됐다",
"r": "",
"s": {
"민심": "-4"
},
"cmd": ""
}
},
{
"id": 590,
"name": "_fencinglesson",
"theme": "duel",
"char": "general",
"cond": "",
"wait": "",
"weight": "",
"text": "승부는 전하의 선택에 달려 있사옵니다. 치는 칼은 찰나의 빈틈을 파고드는 시원한 수, 막는 칼은 적의 허를 찌르는 교묘한 수이옵니다.",
"R": {
"c": "계속해 보라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "이제 됐다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 591,
"name": "_",
"theme": "duel",
"char": "general",
"cond": "",
"wait": "",
"weight": "",
"text": "막는 칼을 고르시면 다음 차례에 비장의 수를 쓰실 수 있사옵니다.",
"R": {
"c": "계속해 보라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "이제 됐다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 592,
"name": "_",
"theme": "duel",
"char": "general",
"cond": "",
"wait": "",
"weight": "",
"text": "적의 움직임을 잘 살피시면 새 수를 익히실 수 있사옵니다.",
"R": {
"c": "잘 알았다",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "다시 겨뤄 보자",
"r": "",
"s": {},
"cmd": ">_duel_general"
}
},
{
"id": 607,
"name": "enterthedonjon",
"theme": "dungeon",
"char": "anyone",
"cond": "!intheDungeon",
"wait": "200",
"weight": "5",
"text": "전하, 대궐 지하에서 무덤 입구를 찾았사옵니다!",
"R": {
"c": "짐이 가 보겠다!",
"r": "",
"s": {
"문법": "?20",
"군사": "?20",
"민심": "?20",
"국고": "?20"
},
"cmd": ">_dungeon1 and intheDungeon and !spice_trade_keep"
},
"L": {
"c": "막아 두어라",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 608,
"name": "backtothedungeon",
"theme": "dungeon",
"char": "dungeon>air_arsenic",
"cond": "intheDungeon",
"wait": "",
"weight": "max",
"text": "(어디선가 고약한 냄새가 실린 바람이 불어온다.)",
"R": {
"c": "('바람의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_exit_closed"
},
"L": {
"c": "('비상의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 609,
"name": "_dungeon1",
"theme": "dungeon",
"char": "end>dead_king_dungeon",
"cond": "spiritual=0 and military=0 and demography=0 and treasure=0",
"wait": "",
"weight": "max",
"text": "(왕이 지하 미궁에서 빠져나왔는지… 그건 아무도 모른다. 아무튼 왕은 자리를 잃었고 새 왕이 즉위했다.)",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 610,
"name": "_dungeon1",
"theme": "dungeon",
"char": "dungeon>air_arsenic",
"cond": "",
"wait": "4",
"weight": "12",
"text": "(어디선가 고약한 냄새가 실린 바람이 불어온다.)",
"R": {
"c": "('바람의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_exit_closed"
},
"L": {
"c": "('비상의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 611,
"name": "_dungeon1",
"theme": "dungeon",
"char": "dungeon>neutre_feu",
"cond": "torch",
"wait": "4",
"weight": "12",
"text": "(벽이 검게 그을려 있다.)",
"R": {
"c": "('맑은 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "('불의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_devil1"
}
},
{
"id": 612,
"name": "_excalibur1",
"theme": "dungeon",
"char": "dungeon>neutre_feu",
"cond": "",
"wait": "",
"weight": "",
"text": "(벽이 검게 그을려 있다.)",
"R": {
"c": "('맑은 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "('불의 문'으로 들어간다.)",
"r": "(썩은 냄새가 물씬한 어두운 복도를 지나자 방이 하나 나왔다. 큰 소리가 계속 들린다. 마치 거대한 틀 한가운데 들어온 것 같다.)",
"s": {},
"cmd": ">_excalibur2"
}
},
{
"id": 613,
"name": "_dungeon1",
"theme": "dungeon",
"char": "dungeon>arsenic_salt",
"cond": "",
"wait": "4",
"weight": "12",
"text": "(속이 메슥거리고 입안이 바싹 마른다.)",
"R": {
"c": "('비상의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_trap"
},
"L": {
"c": "('소금의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 614,
"name": "_dungeon1",
"theme": "dungeon",
"char": "dungeon>gold_mercure",
"cond": "",
"wait": "10",
"weight": "16",
"text": "(벽에 연단술의 표식으로 보이는 소박한 무늬가 새겨져 있다.)",
"R": {
"c": "('황금의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_treasure1"
},
"L": {
"c": "('수은의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 615,
"name": "_dungeon1",
"theme": "dungeon",
"char": "dungeon>secret_gold",
"cond": "torch",
"wait": "4",
"weight": "12",
"text": "(복이 웃어 주는 것 같다.)",
"R": {
"c": "(벽을 부순다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "('황금의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_treasure1"
}
},
{
"id": 616,
"name": "_devil3",
"theme": "dungeon",
"char": "dungeon>secret_gold",
"cond": "",
"wait": "",
"weight": "",
"text": "(복이 웃어 주는 것 같다.)",
"R": {
"c": "(벽을 부순다.)",
"r": "",
"s": {},
"cmd": ">_devil4"
},
"L": {
"c": "('황금의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_trap"
}
},
{
"id": 617,
"name": "_dungeon1",
"theme": "dungeon",
"char": "dungeon>secret_wall",
"cond": "torch",
"wait": "4",
"weight": "12",
"text": "(벽이 무너졌고 근처에서 악취가 난다.)",
"R": {
"c": "(벽을 부순다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "(되돌아간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 618,
"name": "_dungeon1",
"theme": "dungeon",
"char": "dungeon>eau_acide",
"cond": "torch",
"wait": "4",
"weight": "12",
"text": "(이 근처는 축축하고 코를 찌르는 냄새가 난다.)",
"R": {
"c": "('물의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "('독의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 619,
"name": "_devil2",
"theme": "dungeon",
"char": "dungeon>eau_acide",
"cond": "",
"wait": "",
"weight": "",
"text": "(이 근처는 축축하고 코를 찌르는 냄새가 난다.)",
"R": {
"c": "('물의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "('독의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_devil3"
}
},
{
"id": 620,
"name": "_excalibur2",
"theme": "dungeon",
"char": "dungeon>eau_acide",
"cond": "",
"wait": "",
"weight": "",
"text": "(이 근처는 축축하고 코를 찌르는 냄새가 난다.)",
"R": {
"c": "('물의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_excalibur3"
},
"L": {
"c": "('독의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 621,
"name": "_excalibur3",
"theme": "dungeon",
"char": "dungeon>eau_acide",
"cond": "",
"wait": "",
"weight": "",
"text": "(무슨 일이 있었던 거지…?)",
"R": {
"c": "('물의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "('독의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_excalibur4"
}
},
{
"id": 622,
"name": "_dungeon1",
"theme": "dungeon",
"char": "dungeon>arsenic_secret",
"cond": "torch",
"wait": "4",
"weight": "12",
"text": "(섬뜩한 웃음소리에 등골이 오싹해진다.)",
"R": {
"c": "('비상의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_trap"
},
"L": {
"c": "(벽을 부순다.)",
"r": "",
"s": {},
"cmd": ">_surprise"
}
},
{
"id": 623,
"name": "_devil1",
"theme": "dungeon",
"char": "dungeon>arsenic_secret",
"cond": "torch",
"wait": "",
"weight": "",
"text": "(섬뜩한 웃음소리에 등골이 오싹해진다.)",
"R": {
"c": "('비상의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_devil2"
},
"L": {
"c": "(벽을 부순다.)",
"r": "",
"s": {},
"cmd": ">_surprise"
}
},
{
"id": 624,
"name": "_dungeon1",
"theme": "dungeon",
"char": "dungeon>neutre_terre",
"cond": "torch",
"wait": "4",
"weight": "12",
"text": "(발밑이 흙으로 질퍽거린다.)",
"R": {
"c": "('맑은 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "('흙의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_excalibur1"
}
},
{
"id": 625,
"name": "_dungeon1",
"theme": "dungeon",
"char": "dungeon>door_door_dark",
"cond": "!torch",
"wait": "4",
"weight": "12",
"text": "(조심스럽게 벽을 더듬었다. 나가는 길이 두 갈래다.)",
"R": {
"c": "(그대로 나아간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "(그대로 나아간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 626,
"name": "_dungeon1",
"theme": "dungeon",
"char": "dungeon>door_wall_dark",
"cond": "!torch",
"wait": "4",
"weight": "12",
"text": "(왼쪽 문은 어두워서 잘 보이지 않는다.)",
"R": {
"c": "(그대로 나아간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "(되돌아간다.)",
"r": "",
"s": {},
"cmd": ">_skelnoend"
}
},
{
"id": 627,
"name": "_dungeon1",
"theme": "dungeon",
"char": "dungeon>wall_door_dark",
"cond": "!torch",
"wait": "4",
"weight": "12",
"text": "(오른쪽에 문이 있는 것 같은데 잘 보이지 않는다.)",
"R": {
"c": "(되돌아간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "(그대로 나아간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 628,
"name": "_dungeon1",
"theme": "dungeon",
"char": "dungeon>wall_wall",
"cond": "",
"wait": "4",
"weight": "12",
"text": "(막다른 길이다. 돌아가야만 한다.)",
"R": {
"c": "(되돌아간다.)",
"r": "",
"s": {},
"cmd": ">_skelnoend"
},
"L": {
"c": "(되돌아간다.)",
"r": "",
"s": {},
"cmd": ">_skelnoend"
}
},
{
"id": 629,
"name": "_dungeon1",
"theme": "dungeon",
"char": "skeleton",
"cond": "!niceskel_keep",
"wait": "8",
"weight": "20",
"text": "(해골은 울음도 웃음도 아닌 섬뜩한 소리를 질렀다. 손에 긴 칼을 쥐고 있다.)",
"R": {
"c": "(맞서 싸운다.)",
"r": "",
"s": {
"문법": "8",
"군사": "8",
"민심": "8",
"국고": "8"
},
"cmd": ">_duel_skeleton"
},
"L": {
"c": "(달아난다.)",
"r": "",
"s": {
"문법": "-4",
"군사": "-4",
"민심": "-4",
"국고": "-4"
},
"cmd": ">_dungeon1"
}
},
{
"id": 630,
"name": "_skelnoend",
"theme": "dungeon",
"char": "dungeon>neutre_feu",
"cond": "",
"wait": "3",
"weight": "20",
"text": "(벽이 검게 그을려 있다.)",
"R": {
"c": "('맑은 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "('불의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_devil1"
}
},
{
"id": 631,
"name": "_skelnoend",
"theme": "dungeon",
"char": "skeleton",
"cond": "!niceskel_keep",
"wait": "",
"weight": "8",
"text": "(해골이 구석에 몰렸다!)",
"R": {
"c": "(맞서 싸운다.)",
"r": "",
"s": {
"문법": "10",
"군사": "10",
"민심": "10",
"국고": "10"
},
"cmd": ">_duel_skeleton"
},
"L": {
"c": "(달아난다.)",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "-5",
"국고": "-5"
},
"cmd": ">_dungeon1"
}
},
{
"id": 632,
"name": "_surprise",
"theme": "dungeon",
"char": "dungeon>wall_wall",
"cond": "",
"wait": "",
"weight": "10",
"text": "(막다른 길이다. 돌아가야만 한다.)",
"R": {
"c": "(되돌아간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "(되돌아간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 633,
"name": "_surprise",
"theme": "dungeon",
"char": "dungeon>treasure_chest",
"cond": "",
"wait": "",
"weight": "10",
"text": "(보물 궤짝이다!)",
"R": {
"c": "(연다.)",
"r": "",
"s": {},
"cmd": ">_treasureexposed"
},
"L": {
"c": "(그대로 나아간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 634,
"name": "_treasure1",
"theme": "dungeon",
"char": "dungeon>treasure_chest",
"cond": "",
"wait": "",
"weight": "",
"text": "(보물 궤짝이다!)",
"R": {
"c": "(연다.)",
"r": "",
"s": {},
"cmd": ">_treasureexposed"
},
"L": {
"c": "(그대로 나아간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 635,
"name": "_treasureexposed",
"theme": "dungeon",
"char": "dungeon>torch",
"cond": "!torch",
"wait": "20",
"weight": "7",
"text": "(횃불을 찾아냈다.)",
"R": {
"c": "(집어 든다.)",
"r": "(손을 뻗은 순간 횃불이 사라졌다. 왕이 \"에잇…\" 하고 중얼거리자 지하 궁의 등잔이 모두 환하게 켜졌다.)",
"s": {
"문법": "5",
"군사": "5",
"민심": "5",
"국고": "5"
},
"cmd": "torch and >_dungeon1 and nb_chest+"
},
"L": {
"c": "(그냥 둔다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 636,
"name": "_treasureexposed",
"theme": "dungeon",
"char": "dungeon>key",
"cond": "!keydungeon",
"wait": "20",
"weight": "20",
"text": "(열쇠를 찾아냈다.)",
"R": {
"c": "(집어 든다.)",
"r": "",
"s": {
"문법": "5",
"군사": "5",
"민심": "5",
"국고": "5"
},
"cmd": "keydungeon and >_dungeon1 and nb_chest+"
},
"L": {
"c": "(그냥 둔다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 637,
"name": "_treasureexposed",
"theme": "",
"char": "dungeon>poison",
"cond": "",
"wait": "",
"weight": "5",
"text": "(약병을 찾아냈다.)",
"R": {
"c": "(마신다.)",
"r": "",
"s": {
"문법": "-20?30",
"군사": "-20?30",
"민심": "-20?30",
"국고": "-20?30"
},
"cmd": ">_dungeon1"
},
"L": {
"c": "(마시지 않는다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 638,
"name": "_exit_closed",
"theme": "dungeon",
"char": "dungeon>close_exit",
"cond": "!keydungeon",
"wait": "",
"weight": "",
"text": "(이 문 너머에서 맑은 바람이 흘러 들어온다. 빛도 조금 보인다. 하지만 문이 굳게 닫혀 있다.)",
"R": {
"c": "(문을 걷어찬다.)",
"r": "(발만 아프다.)",
"s": {},
"cmd": ">_exit_closed"
},
"L": {
"c": "(되돌아간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 639,
"name": "_exit_closed",
"theme": "dungeon",
"char": "dungeon>close_exit",
"cond": "keydungeon",
"wait": "",
"weight": "",
"text": "(이 문 너머에서 맑은 바람이 흘러 들어온다. 빛도 조금 보인다. 하지만 문이 굳게 닫혀 있다.)",
"R": {
"c": "(열쇠로 문을 연다.)",
"r": "",
"s": {},
"cmd": ">_exit_open"
},
"L": {
"c": "(되돌아간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
}
},
{
"id": 640,
"name": "_exit_open",
"theme": "dungeon",
"char": "dungeon>open_exit",
"cond": "",
"wait": "",
"weight": "",
"text": "(지하 궁의 출구를 찾아냈다!)",
"R": {
"c": "(대궐로 돌아간다.)",
"r": "",
"s": {
"문법": "30",
"군사": "30",
"민심": "30",
"국고": "30"
},
"cmd": "!intheDungeon"
},
"L": {
"c": "(문을 닫는다.)",
"r": "(하긴 이 지하 궁도 아늑하지. 여기 혼자 틀어박혀 있으면 아무 신경도 쓸 필요가 없으니.)",
"s": {},
"cmd": ">_exit_closed"
}
},
{
"id": 641,
"name": "_devil4",
"theme": "",
"char": "dungeon>devil_salpetre",
"cond": "",
"wait": "",
"weight": "",
"text": "(무언가에 걸려 넘어질 뻔했다. 돌아보았지만 아무것도 없다…)",
"R": {
"c": "('도깨비의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_trap"
},
"L": {
"c": "('초석의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_devil5"
}
},
{
"id": 642,
"name": "_devil5",
"theme": "",
"char": "dungeon>devil_salpetre",
"cond": "skelup_keep",
"wait": "",
"weight": "10",
"text": "(또 같은 방이다!)",
"R": {
"c": "('도깨비의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": "keydungeon and >_exit_open"
},
"L": {
"c": "('초석의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_trap"
}
},
{
"id": 643,
"name": "_devil5",
"theme": "",
"char": "dungeon>devil_salpetre",
"cond": "!skelup_keep",
"wait": "",
"weight": "10",
"text": "(또 같은 방이다!)",
"R": {
"c": "('도깨비의 문'으로 들어간다.)",
"r": "(그곳에는 아늑한 작은 방이 있었다. 화로에는 숯불이 빨갛게 피어 있고 찻주전자에서 따뜻한 김이 피어올랐다. 그런데 그때…)",
"s": {},
"cmd": ">_devil6"
},
"L": {
"c": "('초석의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_trap"
}
},
{
"id": 644,
"name": "_devil6",
"theme": "",
"char": "skeleton",
"cond": "niceskel_keep and strawberry_keep",
"wait": "",
"weight": "10",
"text": "천도복숭아를 가지고 있구나!",
"R": {
"c": "(복숭아를 내민다.)",
"r": "(해골이 그렇게 외치자마자 왕은 눈 깜짝할 새 대궐로 돌아와 있었다.)",
"s": {
"문법": "50",
"군사": "50",
"민심": "50",
"국고": "50"
},
"cmd": "!intheDungeon and skelup_keep and !strawberry_keep and >"
},
"L": {
"c": "(복숭아를 감춘다.)",
"r": "(해골이 그렇게 외치자마자 왕은 눈 깜짝할 새 대궐로 돌아와 있었다.)",
"s": {
"문법": "50",
"군사": "50",
"민심": "50",
"국고": "50"
},
"cmd": "!intheDungeon and skelup_keep and !strawberry_keep and >"
}
},
{
"id": 645,
"name": "_",
"theme": "",
"char": "skeleton",
"cond": "",
"wait": "",
"weight": "",
"text": "세상에 천도복숭아를 되살리는 것이 나의 사명일세. 걱정 말게. 자네가 원한다면 힘을 빌려주지.",
"R": {
"c": "기다려라!",
"r": "(손대지 않고 물건을 움직이는 해골은 모습을 감추었다.)",
"s": {},
"cmd": ""
},
"L": {
"c": "어떻게…?",
"r": "(손대지 않고 물건을 움직이는 해골은 모습을 감추었다.)",
"s": {},
"cmd": ""
}
},
{
"id": 646,
"name": "_devil6",
"theme": "",
"char": "skeleton",
"cond": "niceskel_keep and !strawberry_keep",
"wait": "",
"weight": "10",
"text": "잘 왔네, 살아 있는 친구! 차를 한 잔 내주지. 천도복숭아는 손에 넣었나?",
"R": {
"c": "가져왔다",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "아직 없다",
"r": "(왕은 해골과 상 앞에 앉아 나랏일과 고양이 이야기를 나누었다. 해골은 왕을 지하 궁의 출구까지 바래다주었다.)",
"s": {},
"cmd": "keydungeon and >_exit_open"
}
},
{
"id": 647,
"name": "_",
"theme": "",
"char": "skeleton",
"cond": "",
"wait": "",
"weight": "",
"text": "거짓말은 좋지 않네.",
"R": {
"c": "미안하다",
"r": "",
"s": {},
"cmd": ">_exit_closed"
},
"L": {
"c": "거짓말이 아니다",
"r": "",
"s": {},
"cmd": ">_exit_closed"
}
},
{
"id": 648,
"name": "_devil6",
"theme": "",
"char": "skeleton",
"cond": "!niceskel_keep",
"wait": "",
"weight": "10",
"text": "드디어 만났군! 자네를 쫓아 여기저기 돌아다녔다네. 발이 참 빠르더군.",
"R": {
"c": "(맞서 싸운다.)",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(달아난다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 649,
"name": "_",
"theme": "",
"char": "skeleton",
"cond": "",
"wait": "",
"weight": "",
"text": "기다리게! 나도 한판 붙고 싶은 마음은 굴뚝같지만 여기서 그만두지.",
"R": {
"c": "왜?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "왜?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 650,
"name": "_",
"theme": "",
"char": "skeleton",
"cond": "",
"wait": "",
"weight": "",
"text": "방이 엉망이 되니까. 여긴 내가 사는 곳이라네. 꽤 괜찮지? 자, 편히 앉게.",
"R": {
"c": "(앉는다.)",
"r": "",
"s": {},
"cmd": "> and niceskel_keep"
},
"L": {
"c": "(선 채로 있는다.)",
"r": "",
"s": {},
"cmd": "> and niceskel_keep"
}
},
{
"id": 651,
"name": "_",
"theme": "",
"char": "skeleton",
"cond": "",
"wait": "",
"weight": "",
"text": "왜 그리 안절부절못하나? 나라 걱정인가? 괜찮다면 내가 도와주지.",
"R": {
"c": "도와 다오",
"r": "",
"s": {
"문법": "?80",
"군사": "?80",
"민심": "?80",
"국고": "?80"
},
"cmd": "> and niceskel_keep"
},
"L": {
"c": "필요 없다",
"r": "",
"s": {},
"cmd": "> and niceskel_keep"
}
},
{
"id": 652,
"name": "_",
"theme": "",
"char": "skeleton",
"cond": "",
"wait": "",
"weight": "",
"text": "차라도 한잔하겠나? 천도복숭아가 있으면 좋으련만… 없어서 아쉽군.",
"R": {
"c": "한 잔 받겠다",
"r": "(<skeleton>은(는) 왕의 잔에 차를 따라 주고 제 이야기를 시작했다. 살아서는 섬의 백성이었는데, 힘센 술사가 술법을 걸어 그 뒤로 줄곧 지하 궁을 지키고 있다고 한다.)",
"s": {},
"cmd": ">"
},
"L": {
"c": "마시지 않겠다",
"r": "(<skeleton>은(는) 제 잔에 차를 따르고 제 이야기를 시작했다. 살아서는 섬의 백성이었는데, 힘센 술사가 술법을 걸어 그 뒤로 줄곧 지하 궁을 지키고 있다고 한다.)",
"s": {},
"cmd": ">"
}
},
{
"id": 653,
"name": "_",
"theme": "",
"char": "skeleton",
"cond": "",
"wait": "",
"weight": "",
"text": "…먼 옛날이야기일세. 나도, 이 지하 궁도, 여기 잠든 비밀도 기억하는 자가 아무도 없지. 그래서 나는 여기서 느긋하게 살기로 했네.",
"R": {
"c": "비밀이라니?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "힘센 술사라니?",
"r": "",
"s": {},
"cmd": ">_skelwho"
}
},
{
"id": 654,
"name": "_",
"theme": "",
"char": "skeleton",
"cond": "",
"wait": "",
"weight": "",
"text": "뭐, 별것 아닐세. 술사가 지하 궁 가장 깊은 곳에 숨겨 둔 별것 아닌 칼이지.",
"R": {
"c": "(고개를 끄덕인다.)",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(어깨를 으쓱한다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 655,
"name": "_skelwho",
"theme": "",
"char": "skeleton",
"cond": "",
"wait": "",
"weight": "",
"text": "그 술사는 아주 고약한 놈이었지. 내가 마음에 안 든다고 온 세상의 천도복숭아를 다 없애 버렸다네.",
"R": {
"c": "정말이냐?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "말도 안 된다…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 656,
"name": "_",
"theme": "",
"char": "skeleton",
"cond": "",
"wait": "",
"weight": "",
"text": "정말이라니까! 내가 천도복숭아를 좋아한다고 없애 버린 걸세.",
"R": {
"c": "참으로 너무하구나",
"r": "(왕과 해골은 혼례와 전쟁에 대해 담소를 나누었다. 해골은 왕을 지하 궁의 출구까지 바래다주었다.)",
"s": {},
"cmd": ">"
},
"L": {
"c": "말도 안 된다…",
"r": "(왕과 해골은 천문과 음식에 대해 담소를 나누었다. 해골은 왕을 지하 궁의 출구까지 바래다주었다.)",
"s": {},
"cmd": ">"
}
},
{
"id": 657,
"name": "_",
"theme": "",
"char": "skeleton",
"cond": "",
"wait": "",
"weight": "",
"text": "잘 가게, 젊은 왕이여. 또 찾아오게나.",
"R": {
"c": "또 오마",
"r": "",
"s": {},
"cmd": "niceskel_keep and keydungeon and >_exit_open"
},
"L": {
"c": "다시는 안 온다",
"r": "",
"s": {},
"cmd": "niceskel_keep and keydungeon and >_exit_open"
}
},
{
"id": 658,
"name": "_excalibur4",
"theme": "",
"char": "dungeon>sulfur_excalibur",
"cond": "",
"wait": "",
"weight": "",
"text": "(이곳에서 강한 기운이 느껴진다.)",
"R": {
"c": "('유황의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_dungeon1"
},
"L": {
"c": "('칼의 문'으로 들어간다.)",
"r": "",
"s": {},
"cmd": ">_excalibur5"
}
},
{
"id": 659,
"name": "_excalibur5",
"theme": "",
"char": "dungeon>treasure_chest",
"cond": "",
"wait": "",
"weight": "",
"text": "(보물 궤짝이 흔들리고 있다.)",
"R": {
"c": "(연다.)",
"r": "",
"s": {},
"cmd": ">_excalibur6"
},
"L": {
"c": "(그대로 나아간다.)",
"r": "",
"s": {},
"cmd": ">_excalibur4"
}
},
{
"id": 660,
"name": "_excalibur6",
"theme": "",
"char": "dungeon>excalibur",
"cond": "",
"wait": "",
"weight": "",
"text": "(빛나는 칼이다!)",
"R": {
"c": "(집어 든다.)",
"r": "",
"s": {},
"cmd": ">_exit_closed and excalibur_keep"
},
"L": {
"c": "(그냥 둔다.)",
"r": "",
"s": {},
"cmd": ">_exit_closed"
}
},
{
"id": 661,
"name": "_trap",
"theme": "",
"char": "dungeon>trap",
"cond": "",
"wait": "",
"weight": "1",
"text": "(발밑에서 덫이 튀어 올랐다!)",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_dungeon"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_dungeon"
}
},
{
"id": 662,
"name": "_surprise",
"theme": "",
"char": "dungeon>trap",
"cond": "",
"wait": "",
"weight": "1",
"text": "(발밑에서 덫이 튀어 올랐다!)",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_dungeon"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_dungeon"
}
},
{
"id": 663,
"name": "_end_dungeon",
"theme": "",
"char": "end>dead_king_rat",
"cond": "",
"wait": "",
"weight": "1",
"text": "(왕은 오랜 고통 끝에 숨을 거두었다. 그 주검에는 쥐 떼가 몰려들었다…)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 678,
"name": "",
"theme": "treason",
"char": "general",
"cond": "no_general>1",
"wait": "100",
"weight": "8",
"text": "이 나라 군사들에게는 뛰어난 장수가 필요하옵니다. 전하께서 소신을 고르셨사옵니다. 부디 소신의 말에 귀를 기울여 주시옵소서!",
"R": {
"c": "그대를 믿겠다",
"r": "",
"s": {
"군사": "15?"
},
"cmd": ""
},
"L": {
"c": "짐이 알아서 하겠다",
"r": "",
"s": {
"군사": "-15"
},
"cmd": ">>"
}
},
{
"id": 679,
"name": "_trahison",
"theme": "treason",
"char": "general",
"cond": "",
"wait": "",
"weight": "",
"text": "군기시에서 새 무기를 만들었사옵니다. 그 위력을 직접 보시옵소서.",
"R": {
"c": "가 보자",
"r": "(시험장에 들어선 순간 군사들이 달려들었다. \"죽어라, 괴물아!\")",
"s": {
"군사": "?100"
},
"cmd": ">_end_prison"
},
"L": {
"c": "나중에 보겠다",
"r": "",
"s": {
"군사": "-15"
},
"cmd": ""
}
},
{
"id": 680,
"name": "bloodcows",
"theme": "stories",
"char": "farmer",
"cond": "has_prince and has_doctor and has_witch",
"wait": "420",
"weight": "20",
"text": "전하, 큰일 났사옵니다! 암소에서 젖이 아니라 피가 나오옵니다!",
"R": {
"c": "의원을 불러라!",
"r": "",
"s": {
"문법": "-10",
"민심": "5"
},
"cmd": "add_doctor and >_doccow and add_prince"
},
"L": {
"c": "대제학을 불러라!",
"r": "",
"s": {
"문법": "10",
"민심": "-5"
},
"cmd": ">_priestcow and add_prince"
}
},
{
"id": 681,
"name": "_priestcow",
"theme": "stories",
"char": "priest",
"cond": "",
"wait": "",
"weight": "",
"text": "우리 안에 도깨비가 섞여 있사옵니다! 무녀를 당장 내쫓아야 하옵니다!",
"R": {
"c": "문초도 없이 내쫓을 수는 없다",
"r": "",
"s": {
"문법": "-5"
},
"cmd": "add_witch and >>>>_witchcow"
},
"L": {
"c": "쓸모없는 소리다",
"r": "",
"s": {
"문법": "-10"
},
"cmd": "add_doctor and >_doccow"
}
},
{
"id": 682,
"name": "_doccow",
"theme": "stories",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "",
"text": "이상하옵니다! 이것은 진짜 피가 아닌 듯하옵니다.",
"R": {
"c": "자세히 알아보라",
"r": "",
"s": {
"국고": "-5"
},
"cmd": ">>>_resultcow"
},
"L": {
"c": "쓸모없는 소리다",
"r": "",
"s": {},
"cmd": ">_priestcow"
}
},
{
"id": 683,
"name": "_witchcow",
"theme": "stories",
"char": "general",
"cond": "",
"wait": "",
"weight": "",
"text": "<witch>의 방에서 피가 발견되었사옵니다!",
"R": {
"c": "직접 말을 들어 보겠다",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "이 일은 덮어 두어라",
"r": "",
"s": {},
"cmd": ">>>_resultcow"
}
},
{
"id": 684,
"name": "_witchcow2",
"theme": "stories",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "피가 엉기는 걸 시험하고 있었을 뿐이옵니다. 소녀는 죄가 없사옵니다!",
"R": {
"c": "그건 두고 볼 일이다",
"r": "(<witch>은(는) 대궐에서 쫓겨났다. 하지만 암소에서 피가 나오는 일은 그치지 않았다.)",
"s": {
"문법": "5",
"민심": "-5"
},
"cmd": "del_witch and >>>_resultcow"
},
"L": {
"c": "풀어 주어라",
"r": "",
"s": {
"문법": "-5",
"민심": "5"
},
"cmd": ">>>_resultcow"
}
},
{
"id": 685,
"name": "_resultcow",
"theme": "stories",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "",
"text": "암소 일은 세자 저하께서 꾸미신 장난이었던 듯하옵니다.",
"R": {
"c": "<prince>!",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "그놈을 잡아라!",
"r": "(<prince>은(는) 대궐 밖 먼 섬으로 귀양을 갔다.)",
"s": {},
"cmd": "del_prince"
}
},
{
"id": 686,
"name": "_resulttraitor",
"theme": "stories",
"char": "prince",
"cond": "",
"wait": "",
"weight": "",
"text": "금군! 금군! 왕은 도깨비의 앞잡이다!",
"R": {
"c": "뭐라?",
"r": "",
"s": {},
"cmd": ">_duel_cowprince"
},
"L": {
"c": "역적이로다! 짐과 겨루자!",
"r": "",
"s": {},
"cmd": ">_duel_cowprince"
}
},
{
"id": 689,
"name": "",
"theme": "stories",
"char": "diplomat",
"cond": "has_nobleman",
"wait": "300",
"weight": "5",
"text": "전하, 서쪽 나라 임금이 도성에 와서 전하를 뵙기를 청하옵니다!",
"R": {
"c": "잘되었구나!",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "귀찮구나…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 690,
"name": "_",
"theme": "stories",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "성대한 잔치를 열어 대접하시지요!",
"R": {
"c": "좋은 생각이다",
"r": "",
"s": {
"군사": "-5",
"민심": "5"
},
"cmd": ">"
},
"L": {
"c": "잔치는 사치다",
"r": "",
"s": {
"군사": "-2?",
"민심": "-2?"
},
"cmd": ">_endnoargue"
}
},
{
"id": 691,
"name": "_loop1",
"theme": "stories",
"char": "general",
"cond": "",
"wait": "",
"weight": "",
"text": "아니옵니다, 전하. 서쪽 나라 임금을 대접하려면 사냥이 단연 환영받을 것이옵니다.",
"R": {
"c": "좋은 생각이다",
"r": "",
"s": {
"군사": "5",
"민심": "-5"
},
"cmd": ">_loop2"
},
"L": {
"c": "사냥은 위험하다",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ">_endnoargue"
}
},
{
"id": 692,
"name": "_loop2",
"theme": "stories",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "아니 되옵니다! 나라 사이의 예법으로 보아 귀한 잔치를 열어야 하옵니다.",
"R": {
"c": "좋다…",
"r": "",
"s": {
"군사": "-5",
"민심": "5"
},
"cmd": ">_loop3"
},
"L": {
"c": "그럼 둘 다 하자",
"r": "",
"s": {
"군사": "-100?"
},
"cmd": ">_endexec"
}
},
{
"id": 693,
"name": "_loop3",
"theme": "stories",
"char": "general",
"cond": "",
"wait": "",
"weight": "",
"text": "<nobleman> 같은 나약한 속물의 말은 듣지 마시옵소서. 반드시 사냥을 해야 하옵니다!",
"R": {
"c": "좋다…",
"r": "",
"s": {
"군사": "5",
"민심": "-5"
},
"cmd": ">_loop2"
},
"L": {
"c": "그럼 둘 다 하자",
"r": "",
"s": {
"군사": "-100?"
},
"cmd": ">_endexec"
}
},
{
"id": 694,
"name": "_endnoargue",
"theme": "stories",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "서쪽 나라 임금이 우리 고을을 치려 했사옵니다! 군사를 보내시겠사옵니까?",
"R": {
"c": "군사를 보내라!",
"r": "",
"s": {
"군사": "-15",
"민심": "5"
},
"cmd": "warWest_keep and nb_war_keep+"
},
"L": {
"c": "싸움은 피하자",
"r": "",
"s": {
"민심": "-10"
},
"cmd": "warWest_keep and nb_war_keep+"
}
},
{
"id": 695,
"name": "_endexec",
"theme": "stories",
"char": "end>dead_king_exil",
"cond": "",
"wait": "",
"weight": "",
"text": "(왕과 신하들이 잔치 준비에 정신이 팔린 사이, 서쪽 나라 임금이 나라 땅으로 쳐들어왔다. 왕은 옥좌에서 쫓겨나 귀양을 갔다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 696,
"name": "",
"theme": "stories",
"char": "executioner",
"cond": "has_doctor",
"wait": "300",
"weight": "6",
"text": "소인은 살인귀나 다름없사옵니다.",
"R": {
"c": "그대는 망나니일 뿐이다",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "그래서 어쨌다는 것이냐?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 697,
"name": "_",
"theme": "stories",
"char": "executioner",
"cond": "",
"wait": "",
"weight": "",
"text": "이제는 못 하겠사옵니다. 전하, 부디 일을 그만두게 해 주시옵소서…",
"R": {
"c": "대신할 자가 없다",
"r": "",
"s": {},
"cmd": ">>>_docexec"
},
"L": {
"c": "안 된다",
"r": "",
"s": {},
"cmd": ">>>_docexec"
}
},
{
"id": 698,
"name": "_docexec",
"theme": "stories",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "",
"text": "망나니 일은 소인이 맡겠사옵니다!",
"R": {
"c": "그대는 의원이 아니냐…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "그대에게 맡기마",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 699,
"name": "_",
"theme": "stories",
"char": "doctor",
"cond": "",
"wait": "",
"weight": "",
"text": "새로 얻은 귀한 독초의 효험을 시험해 보고 싶사옵니다. 물론 사례는 넉넉히 하겠사옵니다.",
"R": {
"c": "음, 그리하라",
"r": "(의원은 사람의 안전에는 전혀 관심이 없었다.)",
"s": {
"민심": "-100?",
"국고": "4"
},
"cmd": ">"
},
"L": {
"c": "당치도 않다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 700,
"name": "_",
"theme": "stories",
"char": "end>dead_king_gangrene",
"cond": "",
"wait": "",
"weight": "",
"text": "(의원이 옥에 갇힌 죄인들에게 독초를 시험한 직후 나라에 괴질이 번졌다. 왕은 가장 먼저 쓰러진 사람 가운데 하나였다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 701,
"name": "",
"theme": "devil",
"char": "dog",
"cond": "year>665",
"wait": "del",
"weight": "max",
"text": "(<dog>이(가) 작은 소리로 낑낑대고 있다. 낌새가 이상하다.)",
"R": {
"c": "(개를 쓰다듬는다.)",
"r": "",
"s": {},
"cmd": "devil_visit and > and add_jester and add_nobleman and add_priest"
},
"L": {
"c": "(개를 걷어찬다.)",
"r": "",
"s": {},
"cmd": "devil_visit and > and add_jester and add_nobleman and add_priest"
}
},
{
"id": 702,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "보잘것없는 왕이여. 꼭두각시여.",
"R": {
"c": "누구냐…?",
"r": "",
"s": {
"문법": "-100"
},
"cmd": ">"
},
"L": {
"c": "(말이 나오지 않는다.)",
"r": "",
"s": {
"문법": "-100"
},
"cmd": ">"
}
},
{
"id": 703,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "말은 아끼고.",
"R": {
"c": "무슨 소리냐…",
"r": "",
"s": {
"민심": "-100"
},
"cmd": ">"
},
"L": {
"c": "(입을 다문다.)",
"r": "",
"s": {
"민심": "-100"
},
"cmd": ">"
}
},
{
"id": 704,
"name": "_",
"theme": "devil",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "생각은 얕고.",
"R": {
"c": "그만하라…",
"r": "",
"s": {
"군사": "-100"
},
"cmd": ">"
},
"L": {
"c": "(고개를 숙인다.)",
"r": "",
"s": {
"군사": "-100"
},
"cmd": ">"
}
},
{
"id": 705,
"name": "_",
"theme": "devil",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "숱한 죽음을 불러온 어리석은 왕이여.",
"R": {
"c": "짐이 무엇을 했단 말이냐?",
"r": "",
"s": {
"국고": "-100"
},
"cmd": ">"
},
"L": {
"c": "(눈을 감는다.)",
"r": "",
"s": {
"국고": "-100"
},
"cmd": ">"
}
},
{
"id": 706,
"name": "_",
"theme": "devil",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "수백 년 전, 너는 영원한 권세를 얻으려고 제 넋을 팔아 버렸지…",
"R": {
"c": "기억나지 않는다",
"r": "",
"s": {
"문법": "20",
"군사": "60",
"민심": "40",
"국고": "80"
},
"cmd": ">"
},
"L": {
"c": "그럴 리 없다",
"r": "",
"s": {
"문법": "20",
"군사": "60",
"민심": "40",
"국고": "80"
},
"cmd": ">"
}
},
{
"id": 707,
"name": "_",
"theme": "devil",
"char": "priest",
"cond": "",
"wait": "",
"weight": "",
"text": "그래도 다행히 영원히 사는 것까지는 바라지 않았다.",
"R": {
"c": "무슨 뜻이냐?",
"r": "",
"s": {
"문법": "60",
"군사": "-20",
"민심": "20",
"국고": "-60"
},
"cmd": ">"
},
"L": {
"c": "(침을 삼킨다.)",
"r": "",
"s": {
"문법": "60",
"군사": "-20",
"민심": "20",
"국고": "-60"
},
"cmd": ">"
}
},
{
"id": 708,
"name": "_",
"theme": "devil",
"char": "priest",
"cond": "",
"wait": "",
"weight": "",
"text": "네가 죽을 때마다 아주 즐겁더구나. 몇 번을 보아도 질리지 않아.",
"R": {
"c": "이 고약한 놈…",
"r": "",
"s": {
"문법": "100",
"군사": "100",
"민심": "100",
"국고": "100"
},
"cmd": ">"
},
"L": {
"c": "(주먹을 쥔다.)",
"r": "",
"s": {
"문법": "100",
"군사": "100",
"민심": "100",
"국고": "100"
},
"cmd": ">"
}
},
{
"id": 709,
"name": "_",
"theme": "devil",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "하지만 지금부터 네가 고를 길 때문에 더 즐거워지겠지.",
"R": {
"c": "두고 보자",
"r": "",
"s": {
"문법": "-99",
"군사": "-99",
"민심": "-99",
"국고": "-99"
},
"cmd": ">"
},
"L": {
"c": "(대답하지 않는다.)",
"r": "",
"s": {
"문법": "-99",
"군사": "-99",
"민심": "-99",
"국고": "-99"
},
"cmd": ">"
}
},
{
"id": 710,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "자, 가 보거라, 꼭두각시. 육백예순여섯 해 뒤에 너와 나는 다시 만날 것이다.",
"R": {
"c": "다시는 만나지 않겠다",
"r": "",
"s": {
"문법": "65",
"군사": "65",
"민심": "65",
"국고": "65"
},
"cmd": "!devil_visit and devil_curse_keep"
},
"L": {
"c": "(멍하니 바라본다.)",
"r": "",
"s": {
"문법": "65",
"군사": "65",
"민심": "65",
"국고": "65"
},
"cmd": "!devil_visit and devil_curse_keep"
}
},
{
"id": 711,
"name": "",
"theme": "devil",
"char": "dog",
"cond": "year>765 and year<800 and devil_curse_keep",
"wait": "del",
"weight": "max",
"text": "(<dog>이(가) 작은 소리로 낑낑대고 있다. 낌새가 이상하다.)",
"R": {
"c": "(개를 쓰다듬는다.)",
"r": "",
"s": {},
"cmd": "!devil_curse_keep and devil_visit and >_nodevilplay"
},
"L": {
"c": "(개를 걷어찬다.)",
"r": "",
"s": {},
"cmd": "!devil_curse_keep and devil_visit and >_nodevilplay"
}
},
{
"id": 712,
"name": "",
"theme": "devil",
"char": "dog",
"cond": "year>1431 and year<1500 and devil_curse_keep",
"wait": "del",
"weight": "max",
"text": "(<dog>이(가) 작은 소리로 낑낑대고 있다. 낌새가 이상하다.)",
"R": {
"c": "(개를 쓰다듬는다.)",
"r": "",
"s": {},
"cmd": "!devil_curse_keep and devil_visit and >_nodevilplay"
},
"L": {
"c": "(개를 걷어찬다.)",
"r": "",
"s": {},
"cmd": "!devil_curse_keep and devil_visit and >_nodevilplay"
}
},
{
"id": 713,
"name": "",
"theme": "devil",
"char": "dog",
"cond": "year>2097 and devil_curse_keep",
"wait": "del",
"weight": "max",
"text": "(<dog>이(가) 작은 소리로 낑낑대고 있다. 낌새가 이상하다.)",
"R": {
"c": "(개를 쓰다듬는다.)",
"r": "",
"s": {},
"cmd": "!devil_curse_keep and devil_visit and >_nodevilplay"
},
"L": {
"c": "(개를 걷어찬다.)",
"r": "",
"s": {},
"cmd": "!devil_curse_keep and devil_visit and >_nodevilplay"
}
},
{
"id": 714,
"name": "_nodevilplay",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "너는 백 년 동안 누구에게도 \"그러하라\"고 대답하지 않았구나!",
"R": {
"c": "그게 어쨌다는 것이냐?",
"r": "",
"s": {
"문법": "100",
"군사": "100",
"민심": "100",
"국고": "100"
},
"cmd": ">"
},
"L": {
"c": "(입을 다문다.)",
"r": "",
"s": {
"문법": "100",
"군사": "100",
"민심": "100",
"국고": "100"
},
"cmd": ">"
}
},
{
"id": 715,
"name": "_truepacifist",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "아무도 죽이지 않고 길을 이어 가는 주인이라니… 쉬운 일이 아니지. 저주를 풀어 주마.",
"R": {
"c": "정말이냐?",
"r": "",
"s": {
"문법": "-50",
"군사": "-50",
"민심": "-50",
"국고": "-50"
},
"cmd": "!devil_visit"
},
"L": {
"c": "믿을 수 없다",
"r": "",
"s": {
"문법": "-50",
"군사": "-50",
"민심": "-50",
"국고": "-50"
},
"cmd": "!devil_visit"
}
},
{
"id": 716,
"name": "",
"theme": "devil",
"char": "dog",
"cond": "year>1331",
"wait": "del",
"weight": "max",
"text": "(<dog>이(가) 작은 소리로 낑낑대고 있다. 낌새가 이상하다.)",
"R": {
"c": "(개를 쓰다듬는다.)",
"r": "",
"s": {},
"cmd": "devil_visit and > and add_foreign_princess and add_monk"
},
"L": {
"c": "(개를 걷어찬다.)",
"r": "",
"s": {},
"cmd": "devil_visit and > and add_foreign_princess and add_monk"
}
},
{
"id": 717,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "보잘것없는 왕이여. 꼭두각시여.",
"R": {
"c": "또 너냐…",
"r": "",
"s": {
"문법": "-11",
"군사": "-11",
"민심": "-11",
"국고": "-11"
},
"cmd": ">"
},
"L": {
"c": "(말이 나오지 않는다.)",
"r": "",
"s": {
"문법": "-11",
"군사": "-11",
"민심": "-11",
"국고": "-11"
},
"cmd": ">"
}
},
{
"id": 718,
"name": "_",
"theme": "devil",
"char": "foreign_princess",
"cond": "",
"wait": "",
"weight": "",
"text": "너는 끝없는 권세를 누리겠지.",
"R": {
"c": "정말이냐?",
"r": "",
"s": {
"문법": "-13",
"군사": "-13",
"민심": "-13",
"국고": "-13"
},
"cmd": ">"
},
"L": {
"c": "필요 없다",
"r": "",
"s": {
"문법": "-13",
"군사": "-13",
"민심": "-13",
"국고": "-13"
},
"cmd": ">"
}
},
{
"id": 719,
"name": "_",
"theme": "devil",
"char": "monk",
"cond": "",
"wait": "",
"weight": "",
"text": "내가 원한다면.",
"R": {
"c": "네 뜻대로는 안 된다",
"r": "",
"s": {
"문법": "-31",
"군사": "-31",
"민심": "-31",
"국고": "-31"
},
"cmd": ">"
},
"L": {
"c": "(침을 삼킨다.)",
"r": "",
"s": {
"문법": "-31",
"군사": "-31",
"민심": "-31",
"국고": "-31"
},
"cmd": ">"
}
},
{
"id": 720,
"name": "_",
"theme": "devil",
"char": "foreign_princess",
"cond": "",
"wait": "",
"weight": "",
"text": "아니면 영원히 절망 속에서 살게 되겠지…",
"R": {
"c": "그만하라!",
"r": "",
"s": {
"문법": "-100",
"군사": "-100",
"민심": "-100",
"국고": "-100"
},
"cmd": ">"
},
"L": {
"c": "(고개를 숙인다.)",
"r": "",
"s": {
"문법": "-100",
"군사": "-100",
"민심": "-100",
"국고": "-100"
},
"cmd": ">"
}
},
{
"id": 721,
"name": "_",
"theme": "devil",
"char": "monk",
"cond": "",
"wait": "",
"weight": "",
"text": "내가 그걸 바란다면.",
"R": {
"c": "무엇을 바라느냐?",
"r": "",
"s": {
"문법": "1",
"군사": "1",
"민심": "1",
"국고": "1"
},
"cmd": ">"
},
"L": {
"c": "(대답하지 않는다.)",
"r": "",
"s": {
"문법": "1",
"군사": "1",
"민심": "1",
"국고": "1"
},
"cmd": ">"
}
},
{
"id": 722,
"name": "_",
"theme": "",
"char": "monk",
"cond": "",
"wait": "",
"weight": "",
"text": "하지만 그러면 내가 너무 지루해. 내가 모습을 드러내는 건 이번이 마지막이 될 것이다.",
"R": {
"c": "가거라",
"r": "",
"s": {
"문법": "3",
"군사": "3",
"민심": "3",
"국고": "3"
},
"cmd": ">"
},
"L": {
"c": "기다려라!",
"r": "",
"s": {
"문법": "3",
"군사": "3",
"민심": "3",
"국고": "3"
},
"cmd": ">"
}
},
{
"id": 723,
"name": "_",
"theme": "devil",
"char": "foreign_princess",
"cond": "",
"wait": "",
"weight": "",
"text": "자, 골라라.",
"R": {
"c": "고르겠다",
"r": "",
"s": {
"문법": "9",
"군사": "9",
"민심": "9",
"국고": "9"
},
"cmd": ">"
},
"L": {
"c": "싫다",
"r": "",
"s": {
"문법": "9",
"군사": "9",
"민심": "9",
"국고": "9"
},
"cmd": ">"
}
},
{
"id": 724,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "네가 이름을 대는 자는 반드시 죽는다. 피할 수는 없어.",
"R": {
"c": "(이름을 댄다.)",
"r": "",
"s": {
"문법": "43",
"군사": "43",
"민심": "43",
"국고": "43"
},
"cmd": "!devil_visit and devil_curse_keep"
},
"L": {
"c": "(아무 이름도 대지 않는다.)",
"r": "",
"s": {
"문법": "43",
"군사": "43",
"민심": "43",
"국고": "43"
},
"cmd": "!devil_visit and devil_curse_keep"
}
},
{
"id": 725,
"name": "",
"theme": "devil",
"char": "dog",
"cond": "year>1997",
"wait": "del",
"weight": "max",
"text": "(<dog>이(가) 작은 소리로 낑낑대고 있다. 낌새가 이상하다.)",
"R": {
"c": "(개를 쓰다듬는다.)",
"r": "",
"s": {},
"cmd": "devil_visit and > and add_merchant and add_queen"
},
"L": {
"c": "(개를 걷어찬다.)",
"r": "",
"s": {},
"cmd": "devil_visit and > and add_merchant and add_queen"
}
},
{
"id": 726,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "보잘것없는 왕이여. 꼭두각시여.",
"R": {
"c": "또 너냐…",
"r": "",
"s": {
"문법": "-7",
"군사": "4",
"민심": "-6",
"국고": "8"
},
"cmd": ">"
},
"L": {
"c": "(말이 나오지 않는다.)",
"r": "",
"s": {
"문법": "-7",
"군사": "4",
"민심": "-6",
"국고": "8"
},
"cmd": ">"
}
},
{
"id": 727,
"name": "_",
"theme": "devil",
"char": "merchant",
"cond": "",
"wait": "",
"weight": "",
"text": "또 새로운 백 년을 맞았는데 너는 아직 포기하지 않았구나.",
"R": {
"c": "짐은 포기하지 않는다",
"r": "",
"s": {
"문법": "-8",
"군사": "1",
"민심": "-4",
"국고": "6"
},
"cmd": ">"
},
"L": {
"c": "(한숨을 쉰다.)",
"r": "",
"s": {
"문법": "-8",
"군사": "1",
"민심": "-4",
"국고": "6"
},
"cmd": ">"
}
},
{
"id": 728,
"name": "_",
"theme": "devil",
"char": "queen",
"cond": "",
"wait": "",
"weight": "",
"text": "그 끈기만은 알아주마.",
"R": {
"c": "고맙지 않다",
"r": "",
"s": {
"문법": "-4",
"군사": "6",
"민심": "-5",
"국고": "6"
},
"cmd": ">"
},
"L": {
"c": "(입을 다문다.)",
"r": "",
"s": {
"문법": "-4",
"군사": "6",
"민심": "-5",
"국고": "6"
},
"cmd": ">"
}
},
{
"id": 729,
"name": "_",
"theme": "devil",
"char": "queen",
"cond": "",
"wait": "",
"weight": "",
"text": "하지만 이제 지루해. 너를 만나는 건 이번이 마지막이 될 것이다.",
"R": {
"c": "가거라",
"r": "",
"s": {
"문법": "-13",
"군사": "8",
"민심": "-9",
"국고": "11"
},
"cmd": ">"
},
"L": {
"c": "기다려라!",
"r": "",
"s": {
"문법": "-13",
"군사": "8",
"민심": "-9",
"국고": "11"
},
"cmd": ">"
}
},
{
"id": 730,
"name": "_",
"theme": "devil",
"char": "merchant",
"cond": "",
"wait": "",
"weight": "",
"text": "너는 내버려 두고 다른 넋을 저주하러 가겠다.",
"R": {
"c": "잘 가라",
"r": "",
"s": {
"문법": "-1",
"군사": "3",
"민심": "-2",
"국고": "5"
},
"cmd": ">"
},
"L": {
"c": "(대답하지 않는다.)",
"r": "",
"s": {
"문법": "-1",
"군사": "3",
"민심": "-2",
"국고": "5"
},
"cmd": ">"
}
},
{
"id": 731,
"name": "_",
"theme": "devil",
"char": "merchant",
"cond": "",
"wait": "",
"weight": "",
"text": "마지막으로 딱 한 사람만 네가 원하는 자를 죽여 주지. 잘 생각해서 골라라.",
"R": {
"c": "(이름을 댄다.)",
"r": "",
"s": {
"문법": "-100",
"군사": "100",
"민심": "-100",
"국고": "100"
},
"cmd": ">"
},
"L": {
"c": "(아무 이름도 대지 않는다.)",
"r": "",
"s": {
"문법": "-100",
"군사": "100",
"민심": "-100",
"국고": "100"
},
"cmd": ">"
}
},
{
"id": 732,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "네가 이름을 대는 자는 반드시 죽는다. 피할 수는 없어.",
"R": {
"c": "(이름을 댄다.)",
"r": "",
"s": {
"문법": "66",
"군사": "-34",
"민심": "66",
"국고": "-34"
},
"cmd": "!devil_visit and devil_curse_keep and add_ghost"
},
"L": {
"c": "(아무 이름도 대지 않는다.)",
"r": "",
"s": {
"문법": "66",
"군사": "-34",
"민심": "66",
"국고": "-34"
},
"cmd": "!devil_visit and devil_curse_keep and add_ghost"
}
},
{
"id": 733,
"name": "",
"theme": "devil",
"char": "skeleton",
"cond": "skelup_keep and spiritual<50",
"wait": "120",
"weight": "12",
"text": "서원을 도와줄까?",
"R": {
"c": "도와 다오",
"r": "",
"s": {
"문법": "15"
},
"cmd": ">_devilfail"
},
"L": {
"c": "필요 없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 734,
"name": "",
"theme": "devil",
"char": "skeleton",
"cond": "skelup_keep and military<50",
"wait": "120",
"weight": "12",
"text": "군사들에게 힘을 빌려줄까?",
"R": {
"c": "빌려 다오",
"r": "",
"s": {
"군사": "15"
},
"cmd": ">_devilfail"
},
"L": {
"c": "필요 없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 735,
"name": "",
"theme": "devil",
"char": "skeleton",
"cond": "skelup_keep and demography<50",
"wait": "120",
"weight": "12",
"text": "네 나라 백성들을 도와줄까?",
"R": {
"c": "도와 다오",
"r": "",
"s": {
"민심": "15"
},
"cmd": ">_devilfail"
},
"L": {
"c": "필요 없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 736,
"name": "",
"theme": "devil",
"char": "skeleton",
"cond": "skelup_keep and treasure<50",
"wait": "120",
"weight": "12",
"text": "나라 곳간에 금을 채워 줄까?",
"R": {
"c": "채워 다오",
"r": "",
"s": {
"국고": "15"
},
"cmd": ">_devilfail"
},
"L": {
"c": "필요 없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 737,
"name": "_devilfail",
"theme": "devil",
"char": "skeleton",
"cond": "devil_curse_keep and skelup_keep",
"wait": "del",
"weight": "40",
"text": "응…? 누가 날 간지럽히나? 하하… 하하하하하!",
"R": {
"c": "도깨비다!",
"r": "",
"s": {},
"cmd": "devil_visit and > and add_dog and !devil_curse_keep"
},
"L": {
"c": "도깨비다!",
"r": "",
"s": {},
"cmd": "devil_visit and > and add_dog and !devil_curse_keep"
}
},
{
"id": 738,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "네놈… 무슨 짓을 한 게냐…?",
"R": {
"c": "(웃는다.)",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(아무 말도 하지 않는다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 739,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "죽일 수가 없어…",
"R": {
"c": "(지켜본다.)",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(지켜본다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 740,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "해골을 죽일 수는 없지!",
"R": {
"c": "(고개를 끄덕인다.)",
"r": "",
"s": {},
"cmd": "!devil_visit and >"
},
"L": {
"c": "(고개를 끄덕인다.)",
"r": "",
"s": {},
"cmd": "!devil_visit and >"
}
},
{
"id": 741,
"name": "_",
"theme": "devil",
"char": "skeleton",
"cond": "",
"wait": "",
"weight": "",
"text": "나는 이미 죽었으니까.",
"R": {
"c": "(웃는다.)",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(웃는다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 742,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "안 돼!!!!! …왕! 왕! 헉… 헉…",
"R": {
"c": "(지켜본다.)",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(돌아선다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 743,
"name": "_",
"theme": "devil",
"char": "end>final_free",
"cond": "",
"wait": "",
"weight": "",
"text": "(저주가 풀렸다!)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 744,
"name": "",
"theme": "devil",
"char": "ghost",
"cond": "year>2000 and !devil_curse_keep and age=0",
"wait": "200",
"weight": "max",
"text": "도깨비 왕은 떠났다. 저주를 풀 기회도 영원히 사라졌지. 너도 이제 지겹지 않으냐?",
"R": {
"c": "지겹소",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "아직 아니오",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 745,
"name": "_",
"theme": "devil",
"char": "end>final_loop",
"cond": "",
"wait": "",
"weight": "",
"text": "(저주를 풀지 못했다… 처음부터 다시 도전하자!)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 746,
"name": "",
"theme": "devil",
"char": "ghost",
"cond": "year>2000 and devil_curse_keep and age=0",
"wait": "del",
"weight": "max",
"text": "아직도 도깨비 왕을 속이지 못했느냐?",
"R": {
"c": "아직이오",
"r": "",
"s": {},
"cmd": "devil_visit and !devil_curse_keep and >_devilghost and add_dog"
},
"L": {
"c": "방법을 모르겠소",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 747,
"name": "_",
"theme": "devil",
"char": "ghost",
"cond": "",
"wait": "",
"weight": "",
"text": "이 어두운 지하 궁을 잘 찾아보거라.",
"R": {
"c": "그러겠소",
"r": "",
"s": {},
"cmd": "devil_visit and !devil_curse_keep and >_devilghost and add_dog"
},
"L": {
"c": "무엇을 말이오?",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 748,
"name": "_devilghost",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "하하하하하…! 얕은꾀를 쓰는구나! '혼령'을 고르면 나를 속일 수 있을 줄 알았느냐?",
"R": {
"c": "그렇다",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "무슨 소리냐",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 749,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "너는 아무것도 모르는구나.",
"R": {
"c": "무엇을 말이냐?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(입을 다문다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 750,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "그 혼령은 바로 너다. 너의 생각, 너의 기억…",
"R": {
"c": "말도 안 된다",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(얼어붙는다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 751,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "너는 이제 스스로 죽음을 고른 것이다.",
"R": {
"c": "안 돼…!",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(눈을 감는다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 752,
"name": "_",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "저승에서 영원히 너 자신을 죽이거라! 하하하하하!",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": "!devil_visit and >"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": "!devil_visit and >"
}
},
{
"id": 753,
"name": "_",
"theme": "devil",
"char": "end>final_hell",
"cond": "",
"wait": "",
"weight": "",
"text": "(왕은 끝없는 저승으로 떨어졌다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 754,
"name": "_end_dragon",
"theme": "deaths",
"char": "end>dead_king_grand",
"cond": "excalibur_keep",
"wait": "",
"weight": "max",
"text": "(왕은 사인검으로 이무기를 쓰러뜨렸지만 싸움 중에 큰 상처를 입고 숨졌다. 백성들은 왕을 참된 영웅으로 우러렀다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 755,
"name": "_end_dragon",
"theme": "deaths",
"char": "end>dead_king_burned_burn",
"cond": "",
"wait": "",
"weight": "10",
"text": "(이무기는 역시 위험한 괴물이었다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 756,
"name": "",
"theme": "",
"char": "foreign_princess",
"cond": "crusade_keep",
"wait": "100",
"weight": "10",
"text": "전하께 한판 겨루기를 청하옵니다. 몸소 일으킨 싸움은 몸소 치르는 것이 도리이겠지요. 하지만 제가 이기면 곧바로 사막의 성에서 물러나 주시옵소서.",
"R": {
"c": "자, 겨뤄 보자!",
"r": "",
"s": {
"문법": "5?",
"군사": "10?",
"민심": "5?",
"국고": "5?"
},
"cmd": ">_duel_foreign"
},
"L": {
"c": "겨룰 생각 없다",
"r": "",
"s": {
"문법": "-5?",
"군사": "-10?",
"민심": "-5?",
"국고": "-5?"
},
"cmd": ""
}
},
{
"id": 760,
"name": "",
"theme": "",
"char": "viking",
"cond": "",
"wait": "100",
"weight": "12",
"text": "도깨비의 자식아, 나를 보아라! (사내가 금군의 칼을 빼앗아 왕에게 덤벼든다.)",
"R": {
"c": "자, 겨뤄 보자!",
"r": "",
"s": {},
"cmd": ">_duel_viking"
},
"L": {
"c": "(달아난다.)",
"r": "(왕이 달아난 틈에 금군이 <viking>을(를) 붙잡아 끌고 갔다.)",
"s": {},
"cmd": "del_viking and isCoward"
}
},
{
"id": 764,
"name": "",
"theme": "",
"char": "executioner",
"cond": "year>900 and school_keep",
"wait": "del",
"weight": "20",
"text": "온 세상 어디를 찾아보아도 천도복숭아 기르는 법이 사라진 듯하옵니다. 대체 어찌 된 일일까요. 자세히 알아보겠사옵니다.",
"R": {
"c": "알아보라",
"r": "",
"s": {
"문법": "-5?",
"민심": "5?",
"국고": "-10?"
},
"cmd": ""
},
"L": {
"c": "형 집행에나 힘써라",
"r": "",
"s": {
"군사": "10?",
"민심": "-5?"
},
"cmd": ""
}
},
{
"id": 765,
"name": "",
"theme": "",
"char": "priest",
"cond": "",
"wait": "300",
"weight": "6",
"text": "집현전 탑이 무너져 가고 있사옵니다. 고치는 일을 도와주시옵소서!",
"R": {
"c": "고쳐 주마",
"r": "",
"s": {
"문법": "15?",
"국고": "-15?"
},
"cmd": ""
},
"L": {
"c": "그럴 돈 없다",
"r": "",
"s": {
"문법": "-20?"
},
"cmd": ""
}
},
{
"id": 766,
"name": "",
"theme": "",
"char": "doctor",
"cond": "",
"wait": "300",
"weight": "6",
"text": "서쪽 나라 학자들을 이 대궐에 불러 모아 서로 배우는 자리를 열고 싶사옵니다.",
"R": {
"c": "열어 보라",
"r": "",
"s": {
"문법": "-5?",
"민심": "10",
"국고": "-5?"
},
"cmd": ""
},
"L": {
"c": "서원이 싫어한다",
"r": "",
"s": {
"문법": "15?",
"민심": "-5?"
},
"cmd": ""
}
},
{
"id": 767,
"name": "",
"theme": "",
"char": "nobleman",
"cond": "",
"wait": "300",
"weight": "6",
"text": "봄부터 여름까지 도성의 악취가 심해지옵니다. 도랑을 손보시지요.",
"R": {
"c": "도랑을 손보라",
"r": "",
"s": {
"민심": "15?",
"국고": "-15?"
},
"cmd": ""
},
"L": {
"c": "참고 살라",
"r": "",
"s": {
"민심": "-10?"
},
"cmd": ""
}
},
{
"id": 768,
"name": "_starmand",
"theme": "",
"char": "priest",
"cond": "",
"wait": "300",
"weight": "6",
"text": "큰 스승의 묘에 참배하려고 수천 명이 도성을 찾아오옵니다. 서원은 이 행사로 재물을 얻고자 하옵니다.",
"R": {
"c": "그리하라",
"r": "",
"s": {
"문법": "10?",
"국고": "10?"
},
"cmd": ""
},
"L": {
"c": "장사는 안 된다",
"r": "",
"s": {
"문법": "-5?"
},
"cmd": ""
}
},
{
"id": 769,
"name": "",
"theme": "",
"char": "foreign_princess",
"cond": "spice_trade_keep",
"wait": "300",
"weight": "16",
"text": "이 나라 상인들이 향신료 거래를 모두 틀어쥐고 있사옵니다. 거래를 풀어 주시면 저희 나라에서 열 배를 팔아 드리지요.",
"R": {
"c": "거래를 풀어라",
"r": "",
"s": {
"문법": "-5",
"민심": "5",
"국고": "15?"
},
"cmd": ""
},
"L": {
"c": "우리 상인을 지킨다",
"r": "",
"s": {
"문법": "5",
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 770,
"name": "",
"theme": "",
"char": "bird",
"cond": "",
"wait": "300",
"weight": "6",
"text": "(쪽지에 이렇게 적혀 있다… \"남쪽 마을에서 사내 하나가 아내를 여럿 두는 풍습이 퍼지고 있다.\")",
"R": {
"c": "(군사를 보낸다.)",
"r": "",
"s": {
"군사": "-10?"
},
"cmd": ""
},
"L": {
"c": "(유생을 보낸다.)",
"r": "",
"s": {
"문법": "10?"
},
"cmd": ""
}
},
{
"id": 772,
"name": "",
"theme": "",
"char": "jester",
"cond": "dynasty>4",
"wait": "del",
"weight": "150",
"text": "형님한테 복이 들어오는 게 보여! 새 패가 보이는걸! 형님 인생이 색다르게 바뀔 거야.",
"R": {
"c": "정말이냐?",
"r": "",
"s": {},
"cmd": "add_witch and >"
},
"L": {
"c": "값은 안 치른다",
"r": "",
"s": {},
"cmd": "add_witch and >"
}
},
{
"id": 773,
"name": "_",
"theme": "",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "<jester>의 말이 맞사옵니다. 강한 술법의 힘이 전하를 위한 새 앞날을 빚어낼 것이옵니다.",
"R": {
"c": "그러하냐?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "어떤 방법으로 말이냐?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 774,
"name": "_",
"theme": "",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "이 새 세상에는 비밀 세 가지가 숨어 있어.",
"R": {
"c": "계속해 보라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "관심 없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 775,
"name": "_",
"theme": "",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "거짓된 행운이 전하께서 지하 궁에서 뜻밖의 벗을 만나도록 도울 것이옵니다.",
"R": {
"c": "계속해 보라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "알쏭달쏭하구나",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 776,
"name": "_",
"theme": "",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "큰 뜻을 품은 도마뱀이 한 세대에 평화를 가져올 수 있어.",
"R": {
"c": "계속해 보라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "알쏭달쏭하구나",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 777,
"name": "_",
"theme": "",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "죽음을 부르는 잔치는 결코 쉽게 끝나지 않을 것이옵니다. 전하께서는 화려하게 승하하실 것이옵니다.",
"R": {
"c": "뭐라…?",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "무슨 소리냐…",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 778,
"name": "_end_dungeon",
"theme": "",
"char": "jester",
"cond": "dice_keep",
"wait": "",
"weight": "max",
"text": "형님, 여기야, 어서! 내 손 잡아!",
"R": {
"c": "(뛴다.)",
"r": "(덫에 걸리기 직전, 왕은 광대의 손을 잡았다.)",
"s": {
"문법": "-99",
"군사": "-99",
"민심": "-99",
"국고": "-99"
},
"cmd": ">"
},
"L": {
"c": "뭐라고…?",
"r": "",
"s": {},
"cmd": ">_end_dungeon"
}
},
{
"id": 779,
"name": "_",
"theme": "",
"char": "jester",
"cond": "",
"wait": "",
"weight": "",
"text": "형님 뒤를 따라왔지. 형님은 늘 운이 없잖아. 그냥 보고만 있을 수가 없더라고.",
"R": {
"c": "고맙다",
"r": "",
"s": {
"문법": "50",
"군사": "50",
"민심": "50",
"국고": "50"
},
"cmd": ""
},
"L": {
"c": "쓸데없는 짓을",
"r": "",
"s": {
"문법": "50",
"군사": "50",
"민심": "50",
"국고": "50"
},
"cmd": ""
}
},
{
"id": 780,
"name": "_dungeon1",
"theme": "",
"char": "dragon",
"cond": "",
"wait": "",
"weight": "",
"text": "나는 신경 쓰지 말고 그냥 지나가게.",
"R": {
"c": "(지나간다.)",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "(멈춰 선다.)",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 781,
"name": "",
"theme": "",
"char": "farmer",
"cond": "age>5",
"wait": "300",
"weight": "12",
"text": "전하께서 이런 일을 하셨다니 믿을 수가 없사옵니다!",
"R": {
"c": "담판을 짓자",
"r": "",
"s": {
"군사": "10",
"민심": "-6?"
},
"cmd": ""
},
"L": {
"c": "농담이었다",
"r": "",
"s": {
"군사": "-5",
"민심": "5"
},
"cmd": ""
}
},
{
"id": 782,
"name": "",
"theme": "",
"char": "executioner",
"cond": "age>5",
"wait": "300",
"weight": "12",
"text": "한번 안아 드릴까요?",
"R": {
"c": "그래, 안아라",
"r": "",
"s": {
"문법": "-2",
"군사": "-2",
"민심": "10"
},
"cmd": ""
},
"L": {
"c": "물러서라",
"r": "",
"s": {
"군사": "10"
},
"cmd": ""
}
},
{
"id": 783,
"name": "",
"theme": "",
"char": "homunculus",
"cond": "age>5",
"wait": "300",
"weight": "12",
"text": "누가 그 답을 알려 주었지? 왕? 아니면 다른 누군가?",
"R": {
"c": "왕",
"r": "",
"s": {
"군사": "10"
},
"cmd": ""
},
"L": {
"c": "다른 누군가",
"r": "",
"s": {
"민심": "10"
},
"cmd": ""
}
},
{
"id": 784,
"name": "",
"theme": "",
"char": "homunculus",
"cond": "",
"wait": "300",
"weight": "10",
"text": "만약 전에 했던 선택을 바꿀 수 있다면, 바꾸겠나?",
"R": {
"c": "바꾸겠다",
"r": "\"흥미롭군.\" (그것은 대답을 남기고 사라졌다.)",
"s": {},
"cmd": ""
},
"L": {
"c": "바꾸지 않겠다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 785,
"name": "",
"theme": "",
"char": "merchant",
"cond": "treasure>60",
"wait": "300",
"weight": "16",
"text": "양반들이 광산에서 더 많이 챙기려고 쇳돌 값을 마음대로 올리고 있사옵니다.",
"R": {
"c": "광산을 살펴보라",
"r": "",
"s": {
"민심": "10",
"국고": "-6"
},
"cmd": ">>>>"
},
"L": {
"c": "양반들 세금을 올려라",
"r": "",
"s": {
"민심": "-5",
"국고": "15"
},
"cmd": ""
}
},
{
"id": 786,
"name": "",
"theme": "",
"char": "general",
"cond": "",
"wait": "300",
"weight": "8",
"text": "무기를 만들려면 우리 광산의 쇳돌만으로는 모자라옵니다. 다른 나라에서 들여와야 하옵니다!",
"R": {
"c": "들여오라",
"r": "",
"s": {
"군사": "5",
"국고": "-15"
},
"cmd": ""
},
"L": {
"c": "있는 것으로 버텨라",
"r": "",
"s": {
"군사": "-15"
},
"cmd": ""
}
},
{
"id": 787,
"name": "",
"theme": "",
"char": "merchant",
"cond": "spicetrade_keep",
"wait": "60",
"weight": "18",
"text": "비단길에서 우리 상단이 무사하려면 뒷돈을 조금 쥐여 주어야 하옵니다.",
"R": {
"c": "쥐여 주라",
"r": "",
"s": {
"국고": "-25"
},
"cmd": ""
},
"L": {
"c": "뒷돈은 안 된다",
"r": "",
"s": {
"국고": "-5"
},
"cmd": "!spicetrade_keep"
}
},
{
"id": 788,
"name": "",
"theme": "",
"char": "general",
"cond": "!nb_war_keep",
"wait": "300",
"weight": "16",
"text": "올해는 아무 일도 없었사옵니다. 군사들이 따분해 죽을 지경이옵니다.",
"R": {
"c": "막걸리를 내려라",
"r": "",
"s": {
"군사": "-10",
"민심": "15",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "훈련이나 하라",
"r": "",
"s": {
"문법": "5",
"군사": "5"
},
"cmd": ""
}
},
{
"id": 789,
"name": "",
"theme": "",
"char": "farmer",
"cond": "demography<40 and military>50",
"wait": "300",
"weight": "20",
"text": "전하, 전하께서는 강한 임금이시옵니다. 전하의 위엄에 머리 숙이옵니다.",
"R": {
"c": "고맙구나",
"r": "",
"s": {
"민심": "5"
},
"cmd": ""
},
"L": {
"c": "천한 것이 감히!",
"r": "",
"s": {
"군사": "8",
"민심": "-15"
},
"cmd": ""
}
},
{
"id": 790,
"name": "",
"theme": "",
"char": "nobleman",
"cond": "demography<38 and military>50",
"wait": "300",
"weight": "20",
"text": "전하, 저희 양반들은 매주 모여 전하의 영광을 기리는 노래를 부르옵니다.",
"R": {
"c": "훌륭하구나!",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ">"
},
"L": {
"c": "왜 그러는 것이냐?",
"r": "",
"s": {
"민심": "4"
},
"cmd": ">"
}
},
{
"id": 791,
"name": "_",
"theme": "",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "그들은 전하와 전하의 군사를 두려워하고 있사옵니다.",
"R": {
"c": "암, 그래야지",
"r": "",
"s": {
"군사": "3",
"민심": "-10"
},
"cmd": ""
},
"L": {
"c": "짐은 두려운 사람이 아닌데…",
"r": "",
"s": {
"군사": "-10",
"민심": "3"
},
"cmd": ""
}
},
{
"id": 792,
"name": "",
"theme": "",
"char": "nobleman",
"cond": "treasure>60",
"wait": "300",
"weight": "18",
"text": "전하께서는 좀 더 베푸셔야 하옵니다. 가난한 이들이 제 집도 없다 하니 그들을 위해 집을 지어 주시지요!",
"R": {
"c": "지어 주어라",
"r": "",
"s": {
"민심": "15",
"국고": "-25"
},
"cmd": ">>>>"
},
"L": {
"c": "그럴 돈 없다",
"r": "",
"s": {
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 793,
"name": "_",
"theme": "",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "전하, 가난한 이들을 위해 지은 집의 셋돈을 올리면 돈을 벌 수 있사옵니다.",
"R": {
"c": "올려라",
"r": "",
"s": {
"민심": "-20",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "그건 너무하다",
"r": "",
"s": {
"민심": "5",
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 794,
"name": "",
"theme": "",
"char": "prince",
"cond": "",
"wait": "300",
"weight": "20",
"text": "아바마마, 장수의 아들이 소자가 아바마마를 이어 왕이 되는 걸 바라지 않는 것 같사옵니다.",
"R": {
"c": "너는 다음 왕이 될 것이다",
"r": "",
"s": {
"군사": "-10"
},
"cmd": ""
},
"L": {
"c": "네 일은 네가 이겨 내거라",
"r": "",
"s": {
"문법": "5",
"군사": "10",
"민심": "5"
},
"cmd": ""
}
},
{
"id": 795,
"name": "",
"theme": "",
"char": "merchant",
"cond": "treasure<50",
"wait": "300",
"weight": "18",
"text": "뒷골목 장터가 들끓고 있사옵니다. 거리에 군사를 보내 그놈들을 막아 주시옵소서!",
"R": {
"c": "군사를 보내라",
"r": "",
"s": {
"군사": "-5",
"민심": "-20",
"국고": "8"
},
"cmd": ""
},
"L": {
"c": "내버려 두라",
"r": "",
"s": {
"민심": "10",
"국고": "-3"
},
"cmd": ""
}
},
{
"id": 796,
"name": "",
"theme": "",
"char": "general",
"cond": "",
"wait": "300",
"weight": "16",
"text": "군사들 녹봉이 너무 적사옵니다. 알맞게 올려 주시옵소서.",
"R": {
"c": "올려 주어라",
"r": "",
"s": {
"군사": "15",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "지금도 충분하다",
"r": "",
"s": {
"군사": "-10"
},
"cmd": ""
}
},
{
"id": 797,
"name": "",
"theme": "",
"char": "diplomat",
"cond": "warEast_keep",
"wait": "300",
"weight": "22",
"text": "동쪽 성주의 사신이 왔사옵니다. 그놈 목을 베어 돌려보낼까요?",
"R": {
"c": "뭐라고?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "농담이겠지?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 798,
"name": "",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "아이고, 말이 헛나왔사옵니다. 거래를 하시겠느냐는 말이었사옵니다.",
"R": {
"c": "거래하자",
"r": "",
"s": {
"군사": "6",
"민심": "8",
"국고": "-5"
},
"cmd": "!warEast_keep and nb_war_keep- and >>>>>startbarbare"
},
"L": {
"c": "그대는 참 무서운 자로구나",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 799,
"name": "",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "하시겠다는 말씀이시옵니까?",
"R": {
"c": "그렇다",
"r": "",
"s": {
"군사": "6",
"민심": "8",
"국고": "-5"
},
"cmd": "!warEast_keep and nb_war_keep- and >>>>>startbarbare"
},
"L": {
"c": "아니다",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 800,
"name": "",
"theme": "",
"char": "dog",
"cond": "!hopen_keep and year>900 and has_homunculus",
"wait": "200",
"weight": "12",
"text": "(<dog>이(가) 왕을 빤히 바라본다. 입속에서 붉은 무언가가 반짝인다.)",
"R": {
"c": "왜 그러느냐?",
"r": "(<dog>이(가) 반짝이는 붉은 옥을 내밀었다.)",
"s": {},
"cmd": ">_openhomunculus"
},
"L": {
"c": "(저리 가!)",
"r": "(<dog>이(가) 왕을 쫓아왔다. 왕은 달아나다 넘어졌고 <dog>은(는) 왕을 반갑게 핥아 댔다. 많은 사람들이 그 모습을 보았다.)",
"s": {
"군사": "-5",
"민심": "5"
},
"cmd": ""
}
},
{
"id": 801,
"name": "_end_toorich",
"theme": "",
"char": "diplomat",
"cond": "crusade_keep",
"wait": "reign",
"weight": "max",
"text": "이곳 사막의 성 사람들은 고통에 시달리는 듯하옵니다. 잔치를 거두고 가난한 이들을 도와야 하옵니다.",
"R": {
"c": "잔치를 거두어라",
"r": "",
"s": {
"문법": "-6",
"군사": "-6",
"민심": "10",
"국고": "-30"
},
"cmd": ""
},
"L": {
"c": "알 게 뭐냐, 예정대로 잔치를 열어라!",
"r": "",
"s": {},
"cmd": ">_end_toorich"
}
},
{
"id": 802,
"name": "",
"theme": "",
"char": "merchant",
"cond": "",
"wait": "300",
"weight": "14",
"text": "닭값이 치솟아 온갖 헛소문이 돌고 있사옵니다! 나라에서 값을 다스리겠다고 알려야 하옵니다!",
"R": {
"c": "그리 알려라",
"r": "(값을 다스리겠다는 말만으로도 장터는 크게 안정되었다. 물론 실제로 다스린 것은 아무것도 없었다.)",
"s": {
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "그냥 소고기를 먹으라 하라",
"r": "",
"s": {
"민심": "-15"
},
"cmd": ""
}
},
{
"id": 803,
"name": "startbarbare",
"theme": "",
"char": "diplomat",
"cond": "eastPower_keep and !has_barbare",
"wait": "160",
"weight": "50",
"text": "동쪽 나라 대장군이 전하를 뵙고자 하옵니다. 마음만 먹으면 당장 우리 군을 짓밟을 수 있는 자이옵니다. 임금을 맞듯 반겨 주시는 게 좋겠사옵니다.",
"R": {
"c": "크게 반겨라",
"r": "",
"s": {},
"cmd": "> and add_barbare and !nb_barba"
},
"L": {
"c": "평범하게 맞으라",
"r": "",
"s": {
"군사": "-30",
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 804,
"name": "_",
"theme": "",
"char": "barbare",
"cond": "",
"wait": "",
"weight": "",
"text": "블라고우 히림 자보. 그리그로 다돌로오 장! (왕을 을러대듯 커다란 몸을 부풀린다.)",
"R": {
"c": "그러니까…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "무슨 소리냐…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 805,
"name": "_",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "소신이 풀어 보겠사옵니다. 전하의 나라가 아름답고, 전하와 얼싸안고 싶다고 하옵니다.",
"R": {
"c": "그렇구나…",
"r": "",
"s": {},
"cmd": ">_barbatalk"
},
"L": {
"c": "확실하냐…?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 806,
"name": "_leavediplomat",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "소신을 못 믿으시겠다면 그냥 물러나겠사옵니다. 그래도 괜찮으시겠사옵니까?",
"R": {
"c": "물러가라",
"r": "(왕은 <barbare>와(과) 알아들을 수 없는 이야기를 이어 가다 웃으며 헤어졌다. 다음 날 동쪽 나라 성주들이 다시 쳐들어오기 시작했다.)",
"s": {
"군사": "-15",
"민심": "-5",
"국고": "-10"
},
"cmd": "del_barbare and warEast_keep and nb_war_keep+"
},
"L": {
"c": "아니다, 계속 풀어 보라",
"r": "",
"s": {},
"cmd": ">_barbatalk"
}
},
{
"id": 807,
"name": "_barbatalk",
"theme": "",
"char": "barbare",
"cond": "",
"wait": "4",
"weight": "1",
"text": "즈간도 아가마네 히림 가보! (부드럽게 웃고 있다.)",
"R": {
"c": "(웃는다.)",
"r": "(까닭은 알 수 없지만 그 반응에 오랑캐 장수가 기뻐했다.)",
"s": {},
"cmd": "nb_barba+ and >_barbatalk"
},
"L": {
"c": "(<diplomat>에게 무슨 말인지 묻는다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 808,
"name": "_",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "적을 죽여 그 뼈에서 피를 마시고 싶은 기분이라 하옵니다.",
"R": {
"c": "막걸리를 내주어라",
"r": "",
"s": {},
"cmd": "!nb_barba and >_barbatalk"
},
"L": {
"c": "그런 말 같지는 않은데…",
"r": "",
"s": {},
"cmd": ">_leavediplomat"
}
},
{
"id": 809,
"name": "_barbatalk",
"theme": "",
"char": "barbare",
"cond": "",
"wait": "4",
"weight": "1",
"text": "라가 돌로. 라가 돌로… (시무룩해 보인다.) 가보 로.",
"R": {
"c": "(달래 준다.)",
"r": "",
"s": {},
"cmd": "!nb_barba and >_barbatalk"
},
"L": {
"c": "(<diplomat>에게 무슨 말인지 묻는다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 810,
"name": "_",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "전하께서 의욕을 잃으신 데 위로를 전한다고… 아니, 말을 잃으셨다던가? 아아, 그게 아니라…",
"R": {
"c": "(화를 내며 상을 내리친다.)",
"r": "(까닭은 알 수 없지만 그 반응에 오랑캐 장수가 기뻐했다.)",
"s": {},
"cmd": "nb_barba+ and >_barbatalk"
},
"L": {
"c": "그대는 형편없는 역관이구나",
"r": "",
"s": {},
"cmd": ">_leavediplomat"
}
},
{
"id": 811,
"name": "_barbatalk",
"theme": "",
"char": "barbare",
"cond": "",
"wait": "4",
"weight": "1",
"text": "그로로 다? (외투에서 커다란 고깃덩이를 꺼내 왕에게 내민다.)",
"R": {
"c": "(고기를 먹는다.)",
"r": "",
"s": {},
"cmd": "!nb_barba and >_barbatalk"
},
"L": {
"c": "(<diplomat>에게 무슨 말인지 묻는다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 812,
"name": "_",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "먹다 흘린 저녁을 버릴 거름통을 찾는 듯하옵니다.",
"R": {
"c": "짐의 대궐은 거름통이 아니라 전하라",
"r": "(까닭은 알 수 없지만 그 반응에 오랑캐 장수가 기뻐했다.)",
"s": {},
"cmd": "nb_barba+ and >_barbatalk"
},
"L": {
"c": "(고기를 거름통에 던진다.)",
"r": "",
"s": {},
"cmd": ">_barbatalk"
}
},
{
"id": 813,
"name": "_barbatalk",
"theme": "",
"char": "barbare",
"cond": "",
"wait": "4",
"weight": "1",
"text": "하가담 돌로. 이 돌로 프라곤. (말 타는 흉내를 낸다.)",
"R": {
"c": "(말을 선물한다.)",
"r": "",
"s": {},
"cmd": ">_barbatalk"
},
"L": {
"c": "(<diplomat>에게 무슨 말인지 묻는다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 814,
"name": "_",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "말을 오래 타서 다리가 아프다고 하옵니다.",
"R": {
"c": "안됐다고 전하라",
"r": "",
"s": {},
"cmd": "!nb_barba and >_barbatalk"
},
"L": {
"c": "(대답하지 않는다.)",
"r": "",
"s": {},
"cmd": ">_leavediplomat"
}
},
{
"id": 815,
"name": "_barbatalk",
"theme": "",
"char": "barbare",
"cond": "",
"wait": "4",
"weight": "1",
"text": "프로고두 툐 담노. (알 수 없는 눈빛을 보낸다.)",
"R": {
"c": "(아무 말이나 둘러댄다.)",
"r": "(그건 모욕하는 말이었던 모양이다. 이야기가 잘 풀리지 않았다.)",
"s": {
"군사": "-40",
"민심": "-5",
"국고": "-10"
},
"cmd": "del_barbare and warEast_keep and nb_war_keep+"
},
"L": {
"c": "(<diplomat>에게 무슨 말인지 묻는다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 816,
"name": "_",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "\"세월은 영웅의 방패다\"라고 하옵니다.",
"R": {
"c": "\"하늘은 바보의 칼\"이라 전하라",
"r": "(까닭은 알 수 없지만 그 반응에 오랑캐 장수가 기뻐했다.)",
"s": {},
"cmd": ">_barbatalk and nb_barba+"
},
"L": {
"c": "\"짐은 빈틈투성이\"라 전하라",
"r": "(<barbare>이(가) 웃었지만 억지웃음 같았다.)",
"s": {},
"cmd": ">_barbatalk"
}
},
{
"id": 817,
"name": "_barbatalk",
"theme": "",
"char": "barbare",
"cond": "",
"wait": "4",
"weight": "1",
"text": "이골로 달 브레조우. 샤발레. (제 얼굴을 가리킨다.) 샤발레, 샤발레.",
"R": {
"c": "(얼굴을 찡그린다.)",
"r": "",
"s": {},
"cmd": ">_leavediplomat"
},
"L": {
"c": "(<diplomat>에게 무슨 말인지 묻는다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 818,
"name": "_",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "\"쥐는 귤이다\"라고 하옵니다.",
"R": {
"c": "(한숨을 쉰다.)",
"r": "(까닭은 알 수 없지만 그 반응에 오랑캐 장수가 기뻐했다.)",
"s": {},
"cmd": ">_barbatalk and nb_barba+"
},
"L": {
"c": "(<diplomat>을(를) 노려본다.)",
"r": "",
"s": {},
"cmd": ">_leavediplomat"
}
},
{
"id": 819,
"name": "_barbatalk",
"theme": "",
"char": "barbare",
"cond": "nb_barba>5",
"wait": "3",
"weight": "max",
"text": "지가다.",
"R": {
"c": "그러니까…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(<diplomat>에게 무슨 말인지 묻는다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 820,
"name": "_barbawon",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "전하가 마음에 들고, 언제든 돕겠다고 하옵니다.",
"R": {
"c": "그렇구나…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "정말 그렇게 말했느냐?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 821,
"name": "_",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "전하, 아직 남았사옵니다. 새 전쟁이 일어날 때마다 <barbare>이(가) 와서 돕겠다고 하옵니다. 받아들이시겠사옵니까?",
"R": {
"c": "받아들이마",
"r": "(<diplomat>이(가) <barbare>의 어깨를 치며 시원하게 웃었다. 왕은 오랑캐 장수가 떠날 때까지 막걸리를 기울였다.)",
"s": {},
"cmd": ">"
},
"L": {
"c": "사양하겠다",
"r": "",
"s": {},
"cmd": "del_barbare"
}
},
{
"id": 822,
"name": "_",
"theme": "",
"char": "barbare",
"cond": "nb_war_keep",
"wait": "150",
"weight": "25",
"text": "블로우고움 아도미.",
"R": {
"c": "그러자꾸나",
"r": "",
"s": {
"민심": "15",
"국고": "-9"
},
"cmd": "!nb_war_keep and !warSouth_keep and !warWest_keep and !warEast_keep and !warIslander_keep and !warViking_keep"
},
"L": {
"c": "(<diplomat>을(를) 부른다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 823,
"name": "_",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "말 서른 마리를 주면… 전쟁을 멈추겠다 하옵니다. 나쁘지 않사옵니다.",
"R": {
"c": "말을 주어라",
"r": "",
"s": {
"민심": "15",
"국고": "-9"
},
"cmd": "!nb_war_keep and !warSouth_keep and !warWest_keep and !warEast_keep and !warIslander_keep and !warViking_keep"
},
"L": {
"c": "한 마리도 못 준다",
"r": "",
"s": {
"군사": "-10",
"민심": "-5",
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 824,
"name": "",
"theme": "",
"char": "barbare",
"cond": "!nb_war_keep",
"wait": "150",
"weight": "25",
"text": "다모 아도미.",
"R": {
"c": "그러자꾸나",
"r": "",
"s": {
"문법": "-10",
"군사": "5",
"민심": "20",
"국고": "30"
},
"cmd": ""
},
"L": {
"c": "(<diplomat>을(를) 부른다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 825,
"name": "_",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "대륙의 큰 나라들끼리 맺는 큰 약조에 함께하자고 하옵니다.",
"R": {
"c": "함께하마",
"r": "",
"s": {
"문법": "-10",
"군사": "5",
"민심": "20",
"국고": "30"
},
"cmd": ""
},
"L": {
"c": "사양하겠다",
"r": "",
"s": {
"문법": "-5",
"민심": "-5",
"국고": "-15"
},
"cmd": ""
}
},
{
"id": 826,
"name": "",
"theme": "",
"char": "foreign_princess",
"cond": "age>5 and !crusade_keep",
"wait": "400",
"weight": "20",
"text": "저희 나라와 화친을 맺어 주시면 열 해 동안 평화롭고 따분한 번영을 약속하지요.",
"R": {
"c": "화친을 맺자",
"r": "",
"s": {},
"cmd": ">>"
},
"L": {
"c": "필요 없다",
"r": "",
"s": {
"군사": "10",
"민심": "-10",
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 827,
"name": "_",
"theme": "",
"char": "monk",
"cond": "",
"wait": "",
"weight": "",
"text": "오오… 아무 일도 없었던 것 같사옵니다! 하늘 덕분이옵니다! 하늘에 감사하시지요!",
"R": {
"c": "감사하자",
"r": "",
"s": {},
"cmd": ">>"
},
"L": {
"c": "운이 좋았을 뿐이다",
"r": "",
"s": {},
"cmd": ">>"
}
},
{
"id": 828,
"name": "_",
"theme": "",
"char": "monk",
"cond": "",
"wait": "",
"weight": "",
"text": "올해는 좋은 소식뿐이옵니다. 전하의 나라는 신선 세계이옵니다!",
"R": {
"c": "그러하냐?",
"r": "",
"s": {},
"cmd": ">>"
},
"L": {
"c": "과장하지 마라",
"r": "",
"s": {},
"cmd": ">>"
}
},
{
"id": 829,
"name": "_",
"theme": "",
"char": "monk",
"cond": "",
"wait": "",
"weight": "",
"text": "전하… 동쪽 나라와 아슬아슬한 다툼이 있었으나 다행히 전쟁까지는 가지 않았사옵니다.",
"R": {
"c": "다행이구나",
"r": "",
"s": {},
"cmd": ">>_loopprosper"
},
"L": {
"c": "방심은 금물이다",
"r": "",
"s": {},
"cmd": ">>_loopprosper"
}
},
{
"id": 830,
"name": "_loopprosper",
"theme": "",
"char": "anyone",
"cond": "",
"wait": "",
"weight": "10",
"text": "아무것도 아니옵니다. 정말 아무 일도 없었사옵니다.",
"R": {
"c": "(놀이를 계속한다.)",
"r": "",
"s": {},
"cmd": ">>_loopprosper and nb_prosper+"
},
"L": {
"c": "(빠져나간다.)",
"r": "",
"s": {},
"cmd": ">_end_selfexile"
}
},
{
"id": 831,
"name": "_loopprosper",
"theme": "",
"char": "foreign_princess",
"cond": "nb_prosper>6",
"wait": "",
"weight": "max",
"text": "괴로우셨지요? 하지만 걱정 마시옵소서. 이제 끝나니까요.",
"R": {
"c": "뭐라…?",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "뭐라…?",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 832,
"name": "_end_selfexile",
"theme": "",
"char": "end>dead_king_unknow",
"cond": "",
"wait": "",
"weight": "10",
"text": "(왕은 한밤중에 대궐 밖으로 몰래 빠져나가기로 마음먹었다. 숱한 모험이 왕을 기다리고 있다…)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 833,
"name": "",
"theme": "",
"char": "werewolf",
"cond": "",
"wait": "300",
"weight": "14",
"text": "전하, 나루 근처에 멋들어진 주막을 열었사옵니다. 송구하오나 밑천을 조금 빌려주실 수 있겠사옵니까?",
"R": {
"c": "빌려주마",
"r": "",
"s": {
"문법": "-5",
"민심": "5",
"국고": "-10"
},
"cmd": ">>>>>>>>>>"
},
"L": {
"c": "안 된다",
"r": "",
"s": {
"문법": "10"
},
"cmd": ""
}
},
{
"id": 834,
"name": "",
"theme": "",
"char": "priest",
"cond": "has_parker and has_werewolf",
"wait": "300",
"weight": "3",
"text": "나루 아래에 수상한 주막이 생겼다는 소문을 들었사옵니다. 그곳을 손봐야 하옵니다.",
"R": {
"c": "당장 가 보자",
"r": "(<priest>이(가) 왕을 시끄러운 소리와 야릇한 냄새가 가득한 주막으로 이끌었다.)",
"s": {
"민심": "-10",
"국고": "-10"
},
"cmd": ">_party"
},
"L": {
"c": "서두르지 마라",
"r": "(<priest>이(가) 왕을 시끄러운 소리와 야릇한 냄새가 가득한 주막으로 이끌었다.)",
"s": {},
"cmd": ">_party"
}
},
{
"id": 835,
"name": "_party",
"theme": "",
"char": "werewolf",
"cond": "",
"wait": "10",
"weight": "100",
"text": "이런 곳에 어인 일이시옵니까?",
"R": {
"c": "지나가던 길이다…",
"r": "",
"s": {},
"cmd": ">_party"
},
"L": {
"c": "그게…",
"r": "",
"s": {},
"cmd": ">_party"
}
},
{
"id": 836,
"name": "_party",
"theme": "",
"char": "parker",
"cond": "",
"wait": "10",
"weight": "100",
"text": "이곳이 마음에 드시옵니까? 소인이 밑천을 댄 곳이옵니다. 탈을 쓴 수상한 무리가 잔뜩 모여들지요.",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_party"
},
"L": {
"c": "네 이놈…",
"r": "",
"s": {},
"cmd": ">_party"
}
},
{
"id": 837,
"name": "_party",
"theme": "",
"char": "general",
"cond": "",
"wait": "10",
"weight": "100",
"text": "얼씨구 좋다~ 지화자 좋다아아~ (신나게 춤을 추고 있다…)",
"R": {
"c": "흠…",
"r": "",
"s": {},
"cmd": ">_party"
},
"L": {
"c": "호오…",
"r": "",
"s": {},
"cmd": ">_party"
}
},
{
"id": 838,
"name": "_party",
"theme": "",
"char": "nun",
"cond": "",
"wait": "10",
"weight": "100",
"text": "어… 소녀가 아니옵니다. 소녀는 여기 없는 것이옵니다.",
"R": {
"c": "짐과 춤을 추자!",
"r": "",
"s": {},
"cmd": ">_party"
},
"L": {
"c": "무슨 말도 안 되는 소리냐…",
"r": "",
"s": {},
"cmd": ">_party"
}
},
{
"id": 839,
"name": "_party",
"theme": "",
"char": "priest",
"cond": "",
"wait": "",
"weight": "1",
"text": "이제 됐사옵니다, 전하! 어서 이 더러운 곳을 닫아야 하옵니다!",
"R": {
"c": "닫아라",
"r": "",
"s": {
"민심": "-10",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "그냥 두어라",
"r": "",
"s": {
"문법": "-20",
"군사": "8",
"민심": "5",
"국고": "8"
},
"cmd": ""
}
},
{
"id": 840,
"name": "",
"theme": "",
"char": "nobleman",
"cond": "",
"wait": "300",
"weight": "12",
"text": "도둑이 들었사옵니다! 간 큰 도적 떼가 보물을 훔쳐 갔사옵니다!",
"R": {
"c": "어쩔 수 없다",
"r": "",
"s": {
"국고": "-30"
},
"cmd": ""
},
"L": {
"c": "혹시 그대의 벗이냐?",
"r": "(<nobleman>은(는) 열심히 제 편을 들었다. 하지만 끝내 한패의 정체를 털어놓았고, 보물의 절반을 되찾을 수 있었다.)",
"s": {
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 841,
"name": "",
"theme": "",
"char": "explorator",
"cond": "dynasty>8",
"wait": "300",
"weight": "12",
"text": "길을 떠돌다 코끼리를 찾아냈사옵니다!",
"R": {
"c": "보여 다오!",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "거짓말 마라",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 842,
"name": "_",
"theme": "",
"char": "dragon",
"cond": "",
"wait": "",
"weight": "",
"text": "쉬이이이… (불을 내뿜는다.)",
"R": {
"c": "하아아!",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "이건 코끼리가 아니다만",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 843,
"name": "_unmaskelephant",
"theme": "",
"char": "explorator",
"cond": "",
"wait": "",
"weight": "",
"text": "이무기요? 하하, 농담이시지요? 이무기는 옛이야기 속 짐승이옵니다.",
"R": {
"c": "그렇긴 하다만…",
"r": "(모두 그것을 코끼리라 여겼다. 왕은 끝내 '코끼리'를 떠돌이 놀이패에 팔아넘길 수 있었다.)",
"s": {
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "이무기라니까",
"r": "(묶인 데서 풀려난 '코끼리'가 달아나기 전에 날뛰어 대궐에 큰 피해를 입혔다.)",
"s": {
"군사": "-15",
"민심": "-5",
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 844,
"name": "",
"theme": "",
"char": "prophet",
"cond": "",
"wait": "300",
"weight": "15",
"text": "그대는 하늘의 얼굴에 침을 뱉는 죄인이오! 그대의 학사들은 가엾은 사문난적 무리요! (눈을 빠르게 깜빡이고 있다.)",
"R": {
"c": "칼을 들라!",
"r": "",
"s": {
"문법": "10"
},
"cmd": ">_duel_prophet"
},
"L": {
"c": "썩 꺼져라, 당장!",
"r": "",
"s": {
"문법": "5"
},
"cmd": ""
}
},
{
"id": 847,
"name": "_",
"theme": "",
"char": "prophet>saint",
"cond": "",
"wait": "",
"weight": "",
"text": "고맙소. 이제 나는 거룩한 사람으로 거듭났소! 새 서원을 세우겠소!",
"R": {
"c": "잘해 보라",
"r": "",
"s": {
"문법": "15"
},
"cmd": ">"
},
"L": {
"c": "그리는 안 될 것이다!",
"r": "",
"s": {
"문법": "-15"
},
"cmd": ">_badanswersaint"
}
},
{
"id": 848,
"name": "_",
"theme": "",
"char": "prophet>saint",
"cond": "",
"wait": "",
"weight": "",
"text": "그럴 것이오! 보시오, 나를 따르는 무리가 벌써 이렇게 많지 않소!",
"R": {
"c": "(고개를 끄덕인다.)",
"r": "",
"s": {
"문법": "5"
},
"cmd": ">_reacpriest"
},
"L": {
"c": "(한숨을 쉰다.)",
"r": "",
"s": {
"문법": "-5"
},
"cmd": ">_reacpriest"
}
},
{
"id": 849,
"name": "_badanswersaint",
"theme": "",
"char": "prophet>saint",
"cond": "",
"wait": "",
"weight": "",
"text": "과연 그럴까? 보시오, 나를 따르는 무리가 벌써 이렇게 많지 않소!",
"R": {
"c": "(고개를 끄덕인다.)",
"r": "",
"s": {
"문법": "5"
},
"cmd": ">_reacpriest"
},
"L": {
"c": "(한숨을 쉰다.)",
"r": "",
"s": {
"문법": "-5"
},
"cmd": ">_reacpriest"
}
},
{
"id": 850,
"name": "_reacpriest",
"theme": "",
"char": "priest",
"cond": "",
"wait": "",
"weight": "",
"text": "분명 좋게 끝나지는 않을 것이옵니다…",
"R": {
"c": "짐이 할 수 있는 건 없다!",
"r": "",
"s": {
"문법": "-10"
},
"cmd": ">"
},
"L": {
"c": "그래서?",
"r": "",
"s": {
"문법": "-5"
},
"cmd": ">"
}
},
{
"id": 851,
"name": "_schizm",
"theme": "",
"char": "nobleman",
"cond": "",
"wait": "",
"weight": "",
"text": "서원이 두 갈래로 갈라지고 있사옵니다! 서원에 더 큰 힘을 주지 않으면 무서운 반발이 일어날 것이옵니다.",
"R": {
"c": "힘을 더 주어라",
"r": "",
"s": {
"문법": "20"
},
"cmd": "inquisition and theocracy"
},
"L": {
"c": "알아서 하게 두라",
"r": "(서원 두 갈래의 다툼은 오래 이어졌고 끝내 개운치 않게 마무리되었다.)",
"s": {
"문법": "5",
"민심": "10"
},
"cmd": ""
}
},
{
"id": 852,
"name": "",
"theme": "",
"char": "black_bird",
"cond": "",
"wait": "300",
"weight": "12",
"text": "(쪽지에 이렇게 적혀 있다. \"날개 달린 범이 남쪽 수비대를 덮치고 있다.\")",
"R": {
"c": "(돈을 보낸다.)",
"r": "",
"s": {
"국고": "-20"
},
"cmd": ">>>>>>>revealbird"
},
"L": {
"c": "(못 본 척한다.)",
"r": "",
"s": {
"군사": "-10",
"민심": "-10"
},
"cmd": ">>>>>>>revealbird"
}
},
{
"id": 853,
"name": "",
"theme": "",
"char": "black_bird",
"cond": "",
"wait": "300",
"weight": "12",
"text": "(쪽지에 이렇게 적혀 있다. \"이무기가 나라 곳간을 털 꾀를 꾸미고 있다.\")",
"R": {
"c": "지킴이를 늘려라",
"r": "",
"s": {
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "도마뱀이겠지",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 854,
"name": "_",
"theme": "",
"char": "dragon",
"cond": "",
"wait": "",
"weight": "",
"text": "괜히 피를 볼 까닭은 없지 않나?",
"R": {
"c": "여기 보물이 있다",
"r": "\"고맙네.\" (이무기가 고마워했다.)",
"s": {
"국고": "-20"
},
"cmd": ""
},
"L": {
"c": "칼을 받아라!",
"r": "",
"s": {},
"cmd": ">_end_dragon"
}
},
{
"id": 855,
"name": "revealbird",
"theme": "",
"char": "bird",
"cond": "",
"wait": "del",
"weight": "12",
"text": "(쪽지에 이렇게 적혀 있다. \"검은 까마귀를 믿지 마시옵소서. 거짓 소식만 물어 오옵니다.\")",
"R": {
"c": "아…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "무슨 말이냐…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 856,
"name": "_",
"theme": "",
"char": "black_bird",
"cond": "",
"wait": "",
"weight": "",
"text": "(쪽지에 이렇게 적혀 있다. \"<bird>은(는) 나쁜 자의 꼭두각시다. 안타깝게도.\")",
"R": {
"c": "아…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "무슨 말이냐…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 857,
"name": "_",
"theme": "",
"char": "bird",
"cond": "",
"wait": "",
"weight": "",
"text": "이 비열한 놈, 네 깃털을 한 번에 다 뽑아 주마.",
"R": {
"c": "아…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "무슨 말이냐…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 858,
"name": "_",
"theme": "",
"char": "black_bird",
"cond": "",
"wait": "",
"weight": "",
"text": "그래, 어디 한번 해 보시지. 귀여운 까치야. 어서 해 봐!",
"R": {
"c": "무슨 짓이냐!",
"r": "(두 새가 왕을 돌아보았다. 이제야 왕이 있다는 걸 알아챈 모양이다.)",
"s": {},
"cmd": ">"
},
"L": {
"c": "호오!",
"r": "(두 새가 왕을 돌아보았다. 이제야 왕이 있다는 걸 알아챈 모양이다.)",
"s": {},
"cmd": ">"
}
},
{
"id": 859,
"name": "_",
"theme": "",
"char": "bird",
"cond": "",
"wait": "",
"weight": "",
"text": "하, 잘도 피하는구나, 도깨비 새끼. 아주 잘해 주었다. 덕분에 이분이 네 속셈을 알아차렸을 게다. (왕을 바라보고 있다.)",
"R": {
"c": "무슨 소리냐?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(두 새를 번갈아 본다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 860,
"name": "_",
"theme": "",
"char": "bird",
"cond": "",
"wait": "",
"weight": "",
"text": "날마다 뜻깊은 조언을 적어 드렸건만. 모두 헛수고였지…",
"R": {
"c": "그 쪽지가 너였느냐?",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(아무 말도 하지 않는다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 861,
"name": "_",
"theme": "",
"char": "bird",
"cond": "",
"wait": "",
"weight": "",
"text": "그렇다, 내가 쪽지를 쓴 자다. 그런데 너는 정말 까치를 믿었느냐?",
"R": {
"c": "믿었다",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "믿지 않았다",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 862,
"name": "_",
"theme": "",
"char": "black_bird",
"cond": "",
"wait": "",
"weight": "",
"text": "저놈 말을 듣지 마시오. 나는 저놈이 대궐 숲에서 나지 않았다는 증거도 가지고 있소.",
"R": {
"c": "증거를 대라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "둘 다 조용히 하라",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 863,
"name": "_birdchoice",
"theme": "",
"char": "bird",
"cond": "",
"wait": "",
"weight": "",
"text": "저놈 말은 모두 거짓이고 다툼만 일으킬 뿐이오. 고르시오, 나의 왕이여. 한 마리만 남을 수 있다면 누구를 고르겠소?",
"R": {
"c": "너",
"r": "",
"s": {},
"cmd": "del_black_bird"
},
"L": {
"c": "다른 녀석",
"r": "",
"s": {},
"cmd": ">>>>>>deathblack and del_bird"
}
},
{
"id": 864,
"name": "deathblack",
"theme": "",
"char": "black_bird",
"cond": "",
"wait": "200",
"weight": "8",
"text": "(쪽지에 이렇게 적혀 있다. \"섬사람들이 나라를 칠 반란을 꾸미고 있다.\")",
"R": {
"c": "군사를 보내라!",
"r": "(군사를 모았지만 적은 끝내 나타나지 않았다.)",
"s": {
"군사": "-30"
},
"cmd": ""
},
"L": {
"c": "이건 사실이 아니다",
"r": "",
"s": {
"문법": "5",
"군사": "10",
"민심": "5",
"국고": "5"
},
"cmd": ""
}
},
{
"id": 865,
"name": "_end_toorich",
"theme": "death and accidents",
"char": "end>dead_king_arrow",
"cond": "",
"wait": "",
"weight": "100",
"text": "(잔치 도중 누군가 활쏘기 놀이를 시작했다. 왕에게는 좋지 않게 끝났다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 866,
"name": "_end_toorich",
"theme": "death and accidents",
"char": "end>dead_king_acid",
"cond": "",
"wait": "",
"weight": "100",
"text": "(독한 막걸리 한 독이 대궐에 들어왔다. 왕은 잔뜩 취해 잔치 도중 쓰러지고 말았다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 867,
"name": "",
"theme": "",
"char": "foreign_princess",
"cond": "hopen_keep and !strawberry_keep and niceskel_keep",
"wait": "del",
"weight": "24",
"text": "사막의 성에서 무언가를 찾고 계시지요? 도와드리겠사옵니다. 하지만 한 가지만 약속해 주시옵소서.",
"R": {
"c": "무엇이냐?",
"r": "",
"s": {
"문법": "-5",
"군사": "-5"
},
"cmd": ">"
},
"L": {
"c": "도움은 필요 없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 868,
"name": "_",
"theme": "",
"char": "foreign_princess",
"cond": "",
"wait": "",
"weight": "",
"text": "어떤 압박을 받으시더라도 전하나 전하의 후손이 다시는 저희 나라를 치지 않겠다고요.",
"R": {
"c": "약속하마",
"r": "",
"s": {
"문법": "-5"
},
"cmd": ">"
},
"L": {
"c": "약속할 수 없다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 869,
"name": "_",
"theme": "",
"char": "foreign_princess",
"cond": "",
"wait": "",
"weight": "",
"text": "저를 따라오시옵소서.",
"R": {
"c": "(따라간다.)",
"r": "(왕은 <foreign_princess>을(를) 따라 나루에 닻을 내린 이름 없는 배에 올랐다. 뱃길은 사막의 성에 닿을 때까지 몇 주 동안 이어졌다. 왕은 숨겨진 문으로 성에 들어갔다.)",
"s": {},
"cmd": "> and pledge_keep"
},
"L": {
"c": "(따라가지 않는다.)",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 870,
"name": "_",
"theme": "",
"char": "homunculus",
"cond": "",
"wait": "",
"weight": "",
"text": "여기일세! 가까이 오게, 벗이여…",
"R": {
"c": "왜…",
"r": "",
"s": {},
"cmd": ">_trackpledge"
},
"L": {
"c": "무엇이…",
"r": "",
"s": {},
"cmd": ">_trackpledge"
}
},
{
"id": 871,
"name": "",
"theme": "",
"char": "foreign_princess",
"cond": "pledge_keep and crusade_keep",
"wait": "300",
"weight": "200",
"text": "저희 백성들이 전하와의 약조를 잊었으리라 생각하셨사옵니까?",
"R": {
"c": "뭐라…!",
"r": "",
"s": {
"문법": "-100",
"군사": "-100",
"민심": "-100",
"국고": "-100"
},
"cmd": "!crusade_keep and >_end_ants"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {
"문법": "-100",
"군사": "-100",
"민심": "-100",
"국고": "-100"
},
"cmd": "!crusade_keep and >_end_ants"
}
},
{
"id": 872,
"name": "_end_ants",
"theme": "",
"char": "end>dead_king_ants",
"cond": "",
"wait": "",
"weight": "",
"text": "(왕은 며칠 뒤 뙤약볕 아래에서 깨어났다. 몸은 굳어 움직이지 않았고 커다란 붉은 개미 떼가 왕을 천천히 갉아 먹고 있었다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 873,
"name": "",
"theme": "",
"char": "black_bird",
"cond": "",
"wait": "300",
"weight": "12",
"text": "(쪽지에 이렇게 적혀 있다. \"거인이 어느 고을 땅을 뒤흔들고 있다. 학사를 보내 도우라!\")",
"R": {
"c": "(학사를 보낸다.)",
"r": "",
"s": {
"문법": "-5",
"민심": "-30",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "(군사를 보낸다.)",
"r": "",
"s": {
"군사": "-10",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 874,
"name": "",
"theme": "",
"char": "foreign_princess",
"cond": "",
"wait": "300",
"weight": "14",
"text": "전하의 군사가 하늘의 이름을 내걸고 저희 백성을 괴롭히고 있사옵니다. 그들을 꾸짖어 주시옵소서. 이건 죄이옵니다.",
"R": {
"c": "꾸짖겠다",
"r": "",
"s": {
"문법": "-5",
"군사": "-5",
"민심": "20",
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "짐이 알 바 아니다",
"r": "",
"s": {
"민심": "-10",
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 875,
"name": "",
"theme": "",
"char": "priest",
"cond": "",
"wait": "300",
"weight": "12",
"text": "전하의 군사들이 지켜 준다는 핑계로 학사와 유생들에게 돈을 뜯고 있사옵니다. 부디 막아 주시옵소서!",
"R": {
"c": "당장 막아라",
"r": "",
"s": {
"문법": "10",
"군사": "-10",
"민심": "10",
"국고": "-5"
},
"cmd": ">"
},
"L": {
"c": "짐이 알 바 아니다",
"r": "",
"s": {
"문법": "-20",
"민심": "-20"
},
"cmd": ""
}
},
{
"id": 876,
"name": "_",
"theme": "",
"char": "general",
"cond": "",
"wait": "",
"weight": "",
"text": "거짓이옵니다! 저희는 마땅히 내야 할 세금만 거두었사옵니다. 저들 말에 넘어가지 마시옵소서!",
"R": {
"c": "그렇구나",
"r": "",
"s": {
"문법": "-30",
"군사": "5",
"민심": "-30",
"국고": "-5"
},
"cmd": ""
},
"L": {
"c": "세금을 낮추어라",
"r": "",
"s": {
"문법": "5",
"군사": "5",
"민심": "5"
},
"cmd": ""
}
},
{
"id": 877,
"name": "",
"theme": "",
"char": "executioner",
"cond": "",
"wait": "300",
"weight": "12",
"text": "<farmer>이(가) 마음에 들지 않사옵니다. 이간질하는 거짓말쟁이옵니다.",
"R": {
"c": "그대 말이 맞다",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ">>>>>>>"
},
"L": {
"c": "하지만 쓸모 있는 자다",
"r": "",
"s": {},
"cmd": ">>>>>>>"
}
},
{
"id": 878,
"name": "_",
"theme": "",
"char": "farmer",
"cond": "",
"wait": "",
"weight": "",
"text": "소들이 돌림병으로 날마다 죽어 가옵니다. 농사꾼들이 먹고살 수 있게 부디 도와주시옵소서!",
"R": {
"c": "도와주마",
"r": "",
"s": {
"민심": "5",
"국고": "-10"
},
"cmd": ">"
},
"L": {
"c": "스스로 이겨 내라",
"r": "",
"s": {
"민심": "10",
"국고": "5"
},
"cmd": ">"
}
},
{
"id": 879,
"name": "_",
"theme": "",
"char": "executioner",
"cond": "",
"wait": "",
"weight": "",
"text": "전하, 그건 거짓말이었사옵니다. 속으신 것이옵니다.",
"R": {
"c": "정말이냐?",
"r": "",
"s": {},
"cmd": ">>>>>>>>>>>>>>>>>"
},
"L": {
"c": "그대 말도 못 믿겠다",
"r": "",
"s": {},
"cmd": ">>>>>>>>>>>>>>"
}
},
{
"id": 880,
"name": "",
"theme": "",
"char": "farmer",
"cond": "",
"wait": "300",
"weight": "6",
"text": "<executioner>이(가) 마음에 들지 않사옵니다. 게으른 사기꾼이옵니다.",
"R": {
"c": "그대 말이 맞다",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ""
},
"L": {
"c": "둘 다 그만하라",
"r": "",
"s": {
"군사": "5",
"민심": "5"
},
"cmd": ""
}
},
{
"id": 881,
"name": "",
"theme": "",
"char": "priest",
"cond": "",
"wait": "300",
"weight": "14",
"text": "남쪽 나라에서 기이한 일이 일어났사옵니다. 선현의 석상이 피눈물을 흘렸다 하옵니다. 사실인지 알아봐야 하옵니다.",
"R": {
"c": "알아보라",
"r": "",
"s": {
"문법": "15",
"민심": "-5",
"국고": "-5"
},
"cmd": ""
},
"L": {
"c": "헛소문이다",
"r": "",
"s": {
"문법": "-10",
"민심": "10"
},
"cmd": ""
}
},
{
"id": 882,
"name": "",
"theme": "",
"char": "jester",
"cond": "spin_keep",
"wait": "300",
"weight": "14",
"text": "어젯밤 하늘에서 이상한 빛을 봤어. 내가 이 나라를 다스릴 운명이라는 표시 아닐까?",
"R": {
"c": "꿈 깨라",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "그럴지도 모르지",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 883,
"name": "_",
"theme": "",
"char": "monk",
"cond": "",
"wait": "",
"weight": "",
"text": "선비들은 그것이 하늘의 뜻이라 굳게 믿고 있사옵니다. 인정하시겠사옵니까?",
"R": {
"c": "인정한다",
"r": "(이것은 금세 역효과를 냈다. 광대, 아니 이제 거룩한 사람이 된 그는 오싹한 '기적 그림'을 팔며 서원을 놀려 댔다.)",
"s": {
"문법": "-30",
"군사": "-10",
"민심": "-10"
},
"cmd": ""
},
"L": {
"c": "인정하지 않는다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 884,
"name": "",
"theme": "",
"char": "foreign_princess",
"cond": "",
"wait": "300",
"weight": "14",
"text": "전하 나라의 한 상인과 거래하다 시비가 붙었사옵니다. 전하의 나라는 송사 처리가 너무 느리옵니다.",
"R": {
"c": "공정한 법을 세우겠다",
"r": "",
"s": {
"군사": "5",
"민심": "5",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "알아서 잘해 보라",
"r": "",
"s": {
"문법": "5",
"국고": "-15"
},
"cmd": ""
}
},
{
"id": 885,
"name": "",
"theme": "",
"char": "witch",
"cond": "",
"wait": "300",
"weight": "14",
"text": "어느 성주가 혼례를 올리는 집마다 무거운 세를 매기던 옛 악습을 되살리려 하옵니다.",
"R": {
"c": "원하는 대로 두어라",
"r": "",
"s": {
"문법": "-5",
"군사": "5",
"민심": "-20"
},
"cmd": ""
},
"L": {
"c": "용납할 수 없다",
"r": "",
"s": {
"군사": "-4",
"민심": "10"
},
"cmd": ""
}
},
{
"id": 886,
"name": "",
"theme": "",
"char": "general",
"cond": "!warSouth_keep and !warWest_keep",
"wait": "300",
"weight": "14",
"text": "남쪽 나라가 서쪽 나라와 싸우는 데 도움을 청했사옵니다. 군사를 보내시겠사옵니까? 남쪽 나라에서 보답을 하겠다 하옵니다.",
"R": {
"c": "군사를 보내라",
"r": "",
"s": {
"군사": "-10",
"국고": "30"
},
"cmd": ">>>>"
},
"L": {
"c": "끼어들지 않는다",
"r": "",
"s": {
"민심": "-4",
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 887,
"name": "_",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "",
"weight": "",
"text": "우리 군사들이 신이 났사옵니다. 이제 나라가 남쪽 나라, 서쪽 나라와 한꺼번에 싸우고 있사옵니다.",
"R": {
"c": "훌륭하구나",
"r": "",
"s": {
"군사": "-10"
},
"cmd": "warSouth_keep and warWest_keep and nb_war_keep++"
},
"L": {
"c": "군사를 거두어라",
"r": "",
"s": {
"군사": "10",
"민심": "-20",
"국고": "-10"
},
"cmd": "warSouth_keep and warWest_keep and nb_war_keep++"
}
},
{
"id": 888,
"name": "",
"theme": "",
"char": "witch",
"cond": "!vision_equality and !vision_alien and !vision_hunt and age>0 and dynasty>8 and !equalitysolved_keep",
"wait": "150",
"weight": "500",
"text": "새 치세에 새 조짐이 보이옵니다. 좋사옵니다… 보이옵니다… 전하 곁의 배필이…",
"R": {
"c": "그거 좋구나",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "못 기다리겠다…",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 889,
"name": "_",
"theme": "",
"char": "witch",
"cond": "",
"wait": "10",
"weight": "10",
"text": "중전을 맞으시면 열 해 뒤에 돌아와 더 또렷이 알려 드리지요! 이런 예언은 원래 그쯤 걸리옵니다.",
"R": {
"c": "좋다",
"r": "",
"s": {},
"cmd": "vision_equality and >>>>>_queenshortcut"
},
"L": {
"c": "너무 길다",
"r": "",
"s": {},
"cmd": "vision_equality and >>>>>_queenshortcut"
}
},
{
"id": 890,
"name": "_queenshortcut",
"theme": "",
"char": "diplomat",
"cond": "!has_queen and !queendom",
"wait": "10",
"weight": "10",
"text": "전하, 이웃 나라의 어린 공주와 혼인하시겠사옵니까?",
"R": {
"c": "혼인하겠다",
"r": "",
"s": {
"문법": "10",
"군사": "10",
"민심": "10",
"국고": "10"
},
"cmd": "add_queen"
},
"L": {
"c": "싫다",
"r": "",
"s": {
"문법": "-20?",
"군사": "-10",
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 891,
"name": "_queenshortcut",
"theme": "",
"char": "diplomat",
"cond": "!has_queen and !queendom",
"wait": "10",
"weight": "10",
"text": "남쪽 나라에 젊은 공주가 있는데, 그쪽에서 전하와 공주가 정혼한 사이라 우기고 있사옵니다. 거절하시면 전쟁이 날 수도 있사옵니다.",
"R": {
"c": "받아들이겠다",
"r": "",
"s": {
"문법": "10",
"군사": "5",
"민심": "5",
"국고": "10"
},
"cmd": "add_queen"
},
"L": {
"c": "그런 적 없다",
"r": "",
"s": {
"민심": "-10?"
},
"cmd": ">>>>warwithsouth"
}
},
{
"id": 892,
"name": "",
"theme": "",
"char": "witch",
"cond": "vision_equality and age>9 and has_queen and !queendom and !equalitysolved_keep",
"wait": "300",
"weight": "max",
"text": "열 해의 빛나는 치세가 벌써 지났사옵니다! 다가올 앞날의 빛이 환하게 비치옵니다…",
"R": {
"c": "말해 보라…",
"r": "(<witch>이(가) 손가락을 튕기고 목을 가다듬더니 묘하게 \"우오오오오오\" 하고 소리를 냈다.)",
"s": {},
"cmd": ">_visionequality"
},
"L": {
"c": "듣고 싶지 않다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 893,
"name": "_visionequality",
"theme": "",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "보이옵니다… 고루 나누는 시대가! 중전과 함께 다스리시옵소서. 안살림에 힘쓰시고 중전께 더 큰 권한을 주시옵소서.",
"R": {
"c": "그리하겠다",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "이건 별로다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 894,
"name": "_",
"theme": "",
"char": "queen",
"cond": "",
"wait": "",
"weight": "",
"text": "나누어 다스린다고요? 재미있군요. 제 권한만 건드리지 않으시면 목은 붙여 두지요, 전하.",
"R": {
"c": "좋다",
"r": "",
"s": {
"민심": "5"
},
"cmd": "queendom and add_cat and >>>>>>>>>>>_queendom_complete"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {
"민심": "-5"
},
"cmd": "queendom and add_cat and >>>>>>>>>>>_queendom_complete"
}
},
{
"id": 895,
"name": "",
"theme": "queendom",
"char": "queen",
"cond": "spiritual=0 and queendom",
"wait": "",
"weight": "max",
"text": "사나운 백성들이 제물을 바라고 있어요. 이해해 주시리라 믿어요, 전하.",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
}
},
{
"id": 896,
"name": "",
"theme": "queendom",
"char": "queen",
"cond": "spiritual=100 and queendom",
"wait": "",
"weight": "max",
"text": "드높은 서원이 순교자를 원해요. 전하께서 제격이에요.",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
}
},
{
"id": 897,
"name": "",
"theme": "queendom",
"char": "queen",
"cond": "military=0 and queendom",
"wait": "",
"weight": "max",
"text": "우리 군사가 우리를 저버렸어요. 체면을 지키려면 목 하나가 필요해요.",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
}
},
{
"id": 898,
"name": "",
"theme": "queendom",
"char": "queen",
"cond": "military=100 and queendom",
"wait": "",
"weight": "max",
"text": "군사들이 저를 너무 사랑해서 전하의 머리를 가져다 달라더군요. 고개 좀 숙여 주시겠어요, 전하?",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
}
},
{
"id": 899,
"name": "",
"theme": "queendom",
"char": "queen",
"cond": "demography=0 and queendom",
"wait": "",
"weight": "max",
"text": "우리는 너무 인기가 없어요, 전하. 더 나은 희생양과 혼인했으면 좋았을 텐데…",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
}
},
{
"id": 900,
"name": "",
"theme": "queendom",
"char": "queen",
"cond": "demography=100 and queendom",
"wait": "",
"weight": "max",
"text": "백성들의 기쁨이 미친 듯한 흥청망청으로 바뀌었어요! 왕권을 지키려면 따끔한 본보기가 필요해요.",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
}
},
{
"id": 901,
"name": "",
"theme": "queendom",
"char": "queen",
"cond": "treasure=0 and queendom",
"wait": "",
"weight": "max",
"text": "뒤에서 곳간을 축내셨더군요! 대궐에서 책임질 사람의 머리를 내놓으라 해요.",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_queendom and del_cat"
}
},
{
"id": 902,
"name": "",
"theme": "queendom",
"char": "queen",
"cond": "treasure=100 and queendom",
"wait": "",
"weight": "max",
"text": "재물과 음식이 이렇게나 쌓였다니… 독이 들었을지도 모르니 대신 두 그릇 드셔 주시겠어요?",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_toorich and del_cat"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_toorich and del_cat"
}
},
{
"id": 903,
"name": "_end_queendom",
"theme": "queendom",
"char": "end>dead_king_queendom",
"cond": "",
"wait": "",
"weight": "",
"text": "(사랑하는 중전이 제 권세를 위해 왕을 죽였다니. 참으로 달콤하구나.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 904,
"name": "",
"theme": "queendom",
"char": "general",
"cond": "queendom",
"wait": "50",
"weight": "1000",
"text": "중전마마께서는 늘 싸움 전에 군사들의 기운을 북돋아 주셨사옵니다. 군사들에게 한 말씀 해 주시겠사옵니까?",
"R": {
"c": "피를 보자!",
"r": "",
"s": {
"문법": "-10",
"군사": "15"
},
"cmd": ""
},
"L": {
"c": "(어설프게 씰룩씰룩 춤춘다.)",
"r": "",
"s": {
"군사": "10",
"국고": "20"
},
"cmd": ""
}
},
{
"id": 905,
"name": "",
"theme": "queendom",
"char": "priest",
"cond": "queendom",
"wait": "50",
"weight": "1000",
"text": "요즘 백성들이 춤추는 꼴이 참으로 망측하옵니다! 점잖게 추는 법을 보여 주시옵소서.",
"R": {
"c": "(점잖게 발을 구른다.)",
"r": "",
"s": {
"문법": "10",
"민심": "-10"
},
"cmd": ""
},
"L": {
"c": "(덩실덩실 신나게 춘다.)",
"r": "",
"s": {
"문법": "-15",
"민심": "10"
},
"cmd": ""
}
},
{
"id": 906,
"name": "",
"theme": "queendom",
"char": "priest",
"cond": "queendom",
"wait": "50",
"weight": "1000",
"text": "안살림을 맡으셨으니 의례에 나오셔야 하옵니다. 부디 복을 비는 치성을 올려 주시옵소서. 무엇을 빌지는 마음대로 하셔도 되옵니다.",
"R": {
"c": "풍년을 빌겠다",
"r": "",
"s": {
"문법": "10",
"군사": "10",
"국고": "-10"
},
"cmd": ""
},
"L": {
"c": "풍악을 더 울려라!",
"r": "",
"s": {
"문법": "-15"
},
"cmd": ""
}
},
{
"id": 907,
"name": "",
"theme": "queendom",
"char": "jester",
"cond": "queendom",
"wait": "50",
"weight": "1000",
"text": "이제 안살림에 시간을 더 쓰니, 나랑 같이 노래나 지을까?",
"R": {
"c": "소박한 민요",
"r": "",
"s": {
"문법": "15",
"민심": "10"
},
"cmd": ""
},
"L": {
"c": "우렁찬 군가",
"r": "",
"s": {
"군사": "15",
"민심": "10"
},
"cmd": ""
}
},
{
"id": 908,
"name": "",
"theme": "queendom",
"char": "diplomat",
"cond": "queendom",
"wait": "50",
"weight": "1000",
"text": "새로 맡으신 일에는 섬세함이 필요하옵니다. 남서쪽 나라와 화친을 맺으시면 어떻겠사옵니까?",
"R": {
"c": "화친을 맺겠다",
"r": "",
"s": {
"군사": "10",
"민심": "10",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "그건 짐의 일이 아니다",
"r": "",
"s": {
"군사": "-15",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 909,
"name": "",
"theme": "queendom",
"char": "doctor",
"cond": "queendom",
"wait": "50",
"weight": "1000",
"text": "입덧에 바르는 고약을 거의 다 만들었사옵니다.",
"R": {
"c": "잘했다",
"r": "",
"s": {
"문법": "-5",
"민심": "15",
"국고": "5"
},
"cmd": ""
},
"L": {
"c": "그런 데 쓸 돈 없다",
"r": "",
"s": {
"문법": "10",
"민심": "-15"
},
"cmd": ""
}
},
{
"id": 910,
"name": "",
"theme": "queendom",
"char": "merchant",
"cond": "queendom",
"wait": "50",
"weight": "1000",
"text": "안살림이 따분하지는 않으시옵니까, 전하? 물건을 알리는 일이라도 해 보시면 어떻겠사옵니까?",
"R": {
"c": "얼굴에 바르는 분",
"r": "(백성들의 얼굴이 고와졌지만 제대로 알아보지 않은 탓에 얼굴에 뾰루지가 돋았다.)",
"s": {
"민심": "-20",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "엿",
"r": "(누각에서 공짜 엿을 던졌다. 세상에, 재주가 있는 것 같다.)",
"s": {
"문법": "10",
"군사": "10",
"민심": "10",
"국고": "10"
},
"cmd": ""
}
},
{
"id": 911,
"name": "",
"theme": "queendom",
"char": "courtesan",
"cond": "queendom",
"wait": "50",
"weight": "1000",
"text": "중요한 문제이옵니다, 전하. 올해 잔치 떡을 무엇으로 빚을지 정하셔야 하옵니다.",
"R": {
"c": "보리떡",
"r": "(<courtesan>이(가) 진지하게 고개를 끄덕였다…)",
"s": {},
"cmd": "queendom_oat and >queendom_oat"
},
"L": {
"c": "생강떡",
"r": "(<courtesan>이(가) 진지하게 고개를 끄덕였다…)",
"s": {},
"cmd": "queendom_ginger and >queendom_ginger"
}
},
{
"id": 912,
"name": "queendom_ginger",
"theme": "queendom",
"char": "farmer",
"cond": "queendom_ginger",
"wait": "50",
"weight": "1000",
"text": "전하께서 생강떡을 고르신 건 좋은데… 너무 비싸옵니다…",
"R": {
"c": "(떡값을 낮춘다.)",
"r": "",
"s": {
"민심": "10",
"국고": "-20"
},
"cmd": ""
},
"L": {
"c": "보리떡을 돌팔매로 날려라!",
"r": "(보릿가루 부스러기를 나눠 먹던 백성들 사이에 생강떡 맛만 퍼져 모두 더 배를 곯게 되었다.)",
"s": {
"민심": "-25"
},
"cmd": ""
}
},
{
"id": 913,
"name": "queendom_oat",
"theme": "queendom",
"char": "farmer",
"cond": "queendom_oat",
"wait": "50",
"weight": "1000",
"text": "전하께서 고르신 보리떡은 물론 맛있지만… 저희는 평소에도 보리를 너무 많이 먹사옵니다요.",
"R": {
"c": "머리가 맑아진다!",
"r": "",
"s": {
"문법": "10",
"민심": "-10"
},
"cmd": ""
},
"L": {
"c": "생강떡으로 바꿔 주마",
"r": "",
"s": {
"군사": "10",
"민심": "10"
},
"cmd": ""
}
},
{
"id": 914,
"name": "",
"theme": "queendom",
"char": "courtesan",
"cond": "queendom",
"wait": "50",
"weight": "1000",
"text": "대궐 옷차림을 정해 주시옵소서, 전하. 올해 유행을 이끌어 주시지요.",
"R": {
"c": "꽉 끼고 쓸모 있게",
"r": "",
"s": {
"문법": "10",
"군사": "10"
},
"cmd": ""
},
"L": {
"c": "넉넉하고 펑퍼짐하게",
"r": "",
"s": {
"문법": "-10",
"민심": "10",
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 915,
"name": "",
"theme": "queendom",
"char": "general",
"cond": "queendom",
"wait": "50",
"weight": "1000",
"text": "전하, 안살림을 맡고 계시니… 그와 관련해 여쭙고 싶은 것이 있사옵니다…",
"R": {
"c": "듣고 있다…",
"r": "",
"s": {
"군사": "5"
},
"cmd": ">_queendom_therapy"
},
"L": {
"c": "본분에나 힘써라",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ""
}
},
{
"id": 916,
"name": "_queendom_therapy",
"theme": "",
"char": "general",
"cond": "",
"wait": "",
"weight": "",
"text": "소신의 아내는 소신을 아끼지만… 소신이 비단옷 좋아하는 걸 마땅찮아하옵니다. 빛나는 갑옷 입은 장수를 좋아하거든요…",
"R": {
"c": "마음 가는 대로 하라",
"r": "(장수가 비단옷 차림으로 싸움터에 나서는 바람에 앞줄이 어지러워졌다.)",
"s": {
"군사": "-20"
},
"cmd": ""
},
"L": {
"c": "(머리를 빡빡 밀어 준다.)",
"r": "",
"s": {
"군사": "-5",
"민심": "5"
},
"cmd": ""
}
},
{
"id": 917,
"name": "",
"theme": "queendom",
"char": "courtesan",
"cond": "queendom",
"wait": "50",
"weight": "1000",
"text": "머리 땋는 법을 아시옵니까, 전하?",
"R": {
"c": "(한번 해 본다.)",
"r": "",
"s": {
"민심": "10"
},
"cmd": ""
},
"L": {
"c": "그런 건 모른다",
"r": "",
"s": {
"문법": "-10",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 918,
"name": "",
"theme": "queendom",
"char": "farmer",
"cond": "queendom",
"wait": "50",
"weight": "1000",
"text": "전하! 전하의 안해이신 우리 중정마마께서 가끔 꽃닙 목욕을 시켜 주심다. 저도 꽃닙 목욕 시켜 주시믄 안 될까예?",
"R": {
"c": "시켜 주마",
"r": "",
"s": {
"문법": "-10",
"민심": "10"
},
"cmd": ""
},
"L": {
"c": "호조 일을 도우러 가야겠다",
"r": "",
"s": {
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 919,
"name": "",
"theme": "queendom",
"char": "prince",
"cond": "queendom",
"wait": "50",
"weight": "1000",
"text": "여기서 뵐 줄은 몰랐사옵니다, 아바마마. 서당 숙제 좀 도와주실 수 있사옵니까?",
"R": {
"c": "한문이냐? 시간 낭비다",
"r": "",
"s": {
"문법": "-15",
"민심": "-5"
},
"cmd": ""
},
"L": {
"c": "안색이 안 좋구나?",
"r": "",
"s": {
"민심": "10",
"국고": "10"
},
"cmd": ""
}
},
{
"id": 920,
"name": "",
"theme": "queendom",
"char": "cat",
"cond": "queendom and !cat_met",
"wait": "50",
"weight": "2500",
"text": "냐옹. 골골. 어쩌고저쩌고.",
"R": {
"c": "야옹?",
"r": "",
"s": {},
"cmd": ">_queendom_meowcat"
},
"L": {
"c": "원하는 게 무엇이냐?",
"r": "",
"s": {},
"cmd": ">_queendom_uglycat"
}
},
{
"id": 921,
"name": "_queendom_uglycat",
"theme": "queendom",
"char": "cat",
"cond": "",
"wait": "50",
"weight": "10",
"text": "원래 이쯤 되면 저희는 다 이래요.",
"R": {
"c": "알겠다",
"r": "",
"s": {},
"cmd": ">_queendom_meowcat"
},
"L": {
"c": "모르겠다",
"r": "",
"s": {},
"cmd": ">_queendom_meowcat"
}
},
{
"id": 922,
"name": "_queendom_meowcat",
"theme": "queendom",
"char": "cat",
"cond": "",
"wait": "50",
"weight": "10",
"text": "난 전하 부인의 고양이랍니다. 이제 내 말 들으세요. 내 턱 좀 긁어 주세요.",
"R": {
"c": "(턱을 긁어 준다.)",
"r": "",
"s": {
"민심": "5"
},
"cmd": "cat_met"
},
"L": {
"c": "(못 들은 척한다.)",
"r": "(그날 저녁, 왕이 다른 나라 사신과 막걸리 맛보기 잔치를 열던 중 <cat>이(가) 술독에 쥐를 물어다 토해 놓았다.)",
"s": {
"민심": "-15",
"국고": "-15"
},
"cmd": "cat_met"
}
},
{
"id": 923,
"name": "",
"theme": "queendom",
"char": "cat",
"cond": "queendom and cat_met",
"wait": "50",
"weight": "1500",
"text": "하루만 서로 자리를 바꿔 보는 건 어때요? 중전 노릇은 내가 할 테니 전하는 쥐들을 맡아 주세요.",
"R": {
"c": "좋다",
"r": "(<cat>에게는 가체가 아주 잘 어울렸고, 놀라운 솜씨로 나랏일을 꾸려 나갔다.)",
"s": {
"민심": "10",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "싫다",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 924,
"name": "",
"theme": "queendom",
"char": "cat",
"cond": "queendom and cat_met",
"wait": "50",
"weight": "1000",
"text": "보세요! 사람처럼 자세를 잡았어요! 어서 이 모습을 그려 주세요!",
"R": {
"c": "(그려 준다.)",
"r": "",
"s": {
"문법": "10",
"민심": "5"
},
"cmd": ""
},
"L": {
"c": "(노려본다.)",
"r": "",
"s": {
"문법": "-10",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 925,
"name": "_queendom_complete",
"theme": "",
"char": "witch",
"cond": "queendom",
"wait": "50",
"weight": "max",
"text": "예언대로 권한을 고루 나누셨군요. 그럼 이번엔 소녀가 한번 다스려 봐도 되겠사옵니까? 물론 농이옵니다.",
"R": {
"c": "재미있었다",
"r": "",
"s": {},
"cmd": "> and equalitysolved_keep and !queendom"
},
"L": {
"c": "도움이 되었다…",
"r": "",
"s": {},
"cmd": "> and equalitysolved_keep and !queendom"
}
},
{
"id": 926,
"name": "_",
"theme": "",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "예언을 따라 주셔서 마음을 모을 수 있었사옵니다… 빛나는 열 해가 다가올 것이옵니다… 정확히 언제인지는 모르겠지만요.",
"R": {
"c": "흥미롭구나",
"r": "",
"s": {
"민심": "5"
},
"cmd": ">"
},
"L": {
"c": "더 말해 보라",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ">"
}
},
{
"id": 927,
"name": "_",
"theme": "",
"char": "alien",
"cond": "aliensolved_keep",
"wait": "",
"weight": "",
"text": "빛나는 열 해 말씀이시옵니까? 저희 쪽 사람들도 그 이야기를 하더군요. 먼 훗날의 어느 열 해. 역사상 가장 빛나는 열 해이지요.",
"R": {
"c": "듣기 좋구나",
"r": "",
"s": {},
"cmd": ">_decade_solved"
},
"L": {
"c": "무슨 소리냐",
"r": "",
"s": {},
"cmd": ">_decade_solved"
}
},
{
"id": 928,
"name": "_decade_solved",
"theme": "",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "그렇사옵니다! 먼 훗날의 그 열 해… 가장 빛나는 시절이 될 것이옵니다. 역사책에 얼마나 빛날지 지켜보시지요…",
"R": {
"c": "기대하겠다",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "말도 안 된다",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 929,
"name": "",
"theme": "",
"char": "witch",
"cond": "!vision_equality and !vision_alien and !vision_hunt and age>0 and dynasty>15 and !aliensolved_keep and has_priest and has_general and has_farmer and has_merchant",
"wait": "150",
"weight": "500",
"text": "새로운 시작이 될 것이옵니다. 아득한 앞날이 눈앞에 보이옵니다. 보기 위해 살아남으시고, 살아남기 위해 보시옵소서.",
"R": {
"c": "말이 되는구나",
"r": "",
"s": {},
"cmd": "vision_alien"
},
"L": {
"c": "그만하라",
"r": "",
"s": {},
"cmd": "vision_alien"
}
},
{
"id": 930,
"name": "",
"theme": "",
"char": "witch",
"cond": "age>9 and vision_alien and has_priest and has_general and has_farmer and has_merchant",
"wait": "300",
"weight": "max",
"text": "또다시 열 해의 치세가 있을 것이요… 그와 함께 또다시 예언의 해가 오리니…",
"R": {
"c": "계속하라…",
"r": "",
"s": {},
"cmd": ">_visiondeception"
},
"L": {
"c": "또 시작이구나…",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 931,
"name": "_visiondeception",
"theme": "",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "별들 속에 보이옵니다… 속임의 해가 다가오고 있사옵니다! 곧 닿을 것이옵니다… 멀고 먼 곳에서 오고 있사옵니다…",
"R": {
"c": "흥미롭구나",
"r": "",
"s": {},
"cmd": ">_alien_intro"
},
"L": {
"c": "말도 안 된다",
"r": "",
"s": {},
"cmd": ">_alien_intro"
}
},
{
"id": 932,
"name": "_alien_intro",
"theme": "alienimpostor",
"char": "farmer",
"cond": "!alienpriest_keep",
"wait": "10",
"weight": "10",
"text": "떨어지는 거 보셨사옵니까, 전하? 하늘에서 커다란 돌이 떨어졌사옵니다! 거기서 사람이 기어 나오는 걸 본 것 같사옵니다.",
"R": {
"c": "(손님을 반긴다.)",
"r": "",
"s": {},
"cmd": ">_aliengeneral_keep and alienpriest_keep and !aliengeneral_keep and !alienfarmer_keep and !alienmerchant_keep and add_alien"
},
"L": {
"c": "말도 안 된다",
"r": "",
"s": {},
"cmd": ">_aliengeneral_keep and alienpriest_keep and !aliengeneral_keep and !alienfarmer_keep and !alienmerchant_keep and add_alien"
}
},
{
"id": 933,
"name": "_alien_intro",
"theme": "alienimpostor",
"char": "farmer",
"cond": "!aliengeneral_keep",
"wait": "10",
"weight": "10",
"text": "떨어지는 거 보셨사옵니까, 전하? 하늘에서 커다란 돌이 떨어졌사옵니다! 거기서 사람이 기어 나오는 걸 본 것 같사옵니다.",
"R": {
"c": "(손님을 반긴다.)",
"r": "",
"s": {},
"cmd": ">_aliengeneral_keep and !alienpriest_keep and aliengeneral_keep and !alienfarmer_keep and !alienmerchant_keep and add_alien"
},
"L": {
"c": "말도 안 된다",
"r": "",
"s": {},
"cmd": ">_aliengeneral_keep and !alienpriest_keep and aliengeneral_keep and !alienfarmer_keep and !alienmerchant_keep and add_alien"
}
},
{
"id": 934,
"name": "_alien_intro",
"theme": "alienimpostor",
"char": "farmer",
"cond": "!alienfarmer_keep",
"wait": "10",
"weight": "10",
"text": "떨어지는 거 보셨사옵니까, 전하? 하늘에서 커다란 돌이 떨어졌사옵니다! 거기서 사람이 기어 나오는 걸 본 것 같사옵니다.",
"R": {
"c": "(손님을 반긴다.)",
"r": "",
"s": {},
"cmd": ">_aliengeneral_keep and !alienpriest_keep and !aliengeneral_keep and alienfarmer_keep and !alienmerchant_keep and add_alien"
},
"L": {
"c": "말도 안 된다",
"r": "",
"s": {},
"cmd": ">_aliengeneral_keep and !alienpriest_keep and !aliengeneral_keep and alienfarmer_keep and !alienmerchant_keep and add_alien"
}
},
{
"id": 935,
"name": "_alien_intro",
"theme": "alienimpostor",
"char": "farmer",
"cond": "!alienmerchant_keep",
"wait": "10",
"weight": "10",
"text": "떨어지는 거 보셨사옵니까, 전하? 하늘에서 커다란 돌이 떨어졌사옵니다! 거기서 사람이 기어 나오는 걸 본 것 같사옵니다.",
"R": {
"c": "(손님을 반긴다.)",
"r": "",
"s": {},
"cmd": ">_aliengeneral_keep and !alienpriest_keep and !aliengeneral_keep and !alienfarmer_keep and alienmerchant_keep and add_alien"
},
"L": {
"c": "아!",
"r": "",
"s": {},
"cmd": ">_aliengeneral_keep and !alienpriest_keep and !aliengeneral_keep and !alienfarmer_keep and alienmerchant_keep and add_alien"
}
},
{
"id": 936,
"name": "_aliengeneral_keep",
"theme": "alienimpostor",
"char": "general",
"cond": "",
"wait": "10",
"weight": "10",
"text": "반갑습니다, 땅에 사는 벗이여.",
"R": {
"c": "반갑구나",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "고약한 농담이로구나…",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 937,
"name": "_",
"theme": "alienimpostor",
"char": "general",
"cond": "",
"wait": "10",
"weight": "10",
"text": "하하, 농이었사옵니다. 하늘 사람 같은 건 없겠지요? 그냥 상인이거나 학사거나 농사꾼이지요…",
"R": {
"c": "우리 가운데 있다…",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "눈이 몇 개냐?",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 938,
"name": "_",
"theme": "alienimpostor",
"char": "merchant",
"cond": "",
"wait": "10",
"weight": "10",
"text": "우선 소인은 아니옵니다. 무엇이든 물어보시옵소서. 소인은 사람이니까요.",
"R": {
"c": "가장 좋아하는 빛깔은?",
"r": "",
"s": {},
"cmd": ">_merchant1"
},
"L": {
"c": "흐음…",
"r": "",
"s": {},
"cmd": ">_merchant2"
}
},
{
"id": 939,
"name": "_merchant1",
"theme": "alienimpostor",
"char": "merchant",
"cond": "!alienmerchant_keep",
"wait": "10",
"weight": "10",
"text": "소인이 좋아하는 빛깔은 수천 사람 손을 거친 낡은 엽전의 누렇게 바랜 빛이옵니다.",
"R": {
"c": "사람인 것 같구나",
"r": "",
"s": {
"국고": "5"
},
"cmd": ">_priestquestion"
},
"L": {
"c": "흐음…",
"r": "",
"s": {
"국고": "-5"
},
"cmd": ">_priestquestion"
}
},
{
"id": 940,
"name": "_merchant1",
"theme": "alienimpostor",
"char": "merchant",
"cond": "alienmerchant_keep",
"wait": "10",
"weight": "10",
"text": "소인이 좋아하는 빛깔은 달빛 하나가 또 다른 달빛과 마주할 때 무지갯빛으로 반짝이는 바다 물결이옵니다.",
"R": {
"c": "사람인 것 같구나",
"r": "",
"s": {
"국고": "-5"
},
"cmd": ">_priestquestion"
},
"L": {
"c": "흐음…",
"r": "",
"s": {
"국고": "5"
},
"cmd": ">_priestquestion"
}
},
{
"id": 941,
"name": "_merchant2",
"theme": "alienimpostor",
"char": "merchant",
"cond": "!alienmerchant_keep",
"wait": "10",
"weight": "10",
"text": "눈은 왜 물으시옵니까…? 안 그래도 눈이 작아서 늘 마음에 걸리는데…",
"R": {
"c": "사람인 것 같구나",
"r": "",
"s": {
"국고": "5"
},
"cmd": ">_priestquestion"
},
"L": {
"c": "흐음…",
"r": "",
"s": {
"국고": "-5"
},
"cmd": ">_priestquestion"
}
},
{
"id": 942,
"name": "_merchant2",
"theme": "alienimpostor",
"char": "merchant",
"cond": "alienmerchant_keep",
"wait": "10",
"weight": "10",
"text": "다른 사람들처럼 눈이 두 개 있사옵니다. 커다랗고 동그랗고 촉촉한 눈 두 개 말이옵니다.",
"R": {
"c": "사람인 것 같구나",
"r": "",
"s": {
"국고": "-5"
},
"cmd": ">_priestquestion"
},
"L": {
"c": "노래해 보라",
"r": "",
"s": {
"국고": "5"
},
"cmd": ">_priestquestion"
}
},
{
"id": 943,
"name": "_priestquestion",
"theme": "alienimpostor",
"char": "priest",
"cond": "",
"wait": "10",
"weight": "10",
"text": "하늘에서 내려온 사람 모습의 손님을 문초하신다고요? 불경하옵니다! 우리는 복 받은 것이옵니다!",
"R": {
"c": "올해가 몇 년이냐?",
"r": "",
"s": {},
"cmd": ">_priest1"
},
"L": {
"c": "흥미롭구나…",
"r": "",
"s": {},
"cmd": ">_priest2"
}
},
{
"id": 944,
"name": "_priest1",
"theme": "alienimpostor",
"char": "priest",
"cond": "!alienpriest_keep",
"wait": "10",
"weight": "10",
"text": "하늘의 뜻 아래 <dynasty>년을 살고 있사옵니다.",
"R": {
"c": "맞는 것 같구나",
"r": "",
"s": {
"문법": "5"
},
"cmd": ">_generalquestion"
},
"L": {
"c": "흥미롭구나…",
"r": "",
"s": {
"문법": "-5"
},
"cmd": ">_generalquestion"
}
},
{
"id": 945,
"name": "_priest1",
"theme": "alienimpostor",
"char": "priest",
"cond": "alienpriest_keep",
"wait": "10",
"weight": "10",
"text": "큰 물난리 이전 천오백 해쯤이옵니다.",
"R": {
"c": "맞는 것 같구나",
"r": "",
"s": {
"문법": "-5"
},
"cmd": ">_generalquestion"
},
"L": {
"c": "흥미롭구나…",
"r": "",
"s": {
"문법": "5"
},
"cmd": ">_generalquestion"
}
},
{
"id": 946,
"name": "_priest2",
"theme": "alienimpostor",
"char": "priest",
"cond": "!alienpriest_keep",
"wait": "10",
"weight": "10",
"text": "(하늘 천, 따 지, 검을 현, 누를 황! 집 우, 집 주! 하늘 천!)",
"R": {
"c": "맞는 것 같구나",
"r": "",
"s": {
"문법": "5"
},
"cmd": ">_generalquestion"
},
"L": {
"c": "흥미롭구나…",
"r": "",
"s": {
"문법": "-5"
},
"cmd": ">_generalquestion"
}
},
{
"id": 947,
"name": "_priest2",
"theme": "alienimpostor",
"char": "priest",
"cond": "alienpriest_keep",
"wait": "10",
"weight": "10",
"text": "(우으으그극…!) 송구하옵니다. 소신의 별빛 주머니가 부어서요.",
"R": {
"c": "맞는 것 같구나",
"r": "",
"s": {
"문법": "-5"
},
"cmd": ">_generalquestion"
},
"L": {
"c": "짐은 몇 살이냐?",
"r": "",
"s": {
"문법": "5"
},
"cmd": ">_generalquestion"
}
},
{
"id": 948,
"name": "_generalquestion",
"theme": "alienimpostor",
"char": "general",
"cond": "",
"wait": "10",
"weight": "10",
"text": "소신을 의심하시옵니까, 전하? 충직한 장수를요? 명하신다면 어쩔 수 없지요. 물어보시옵소서.",
"R": {
"c": "그대가 꼽는 가장 좋은 쉬는 날은?",
"r": "",
"s": {},
"cmd": ">_general1"
},
"L": {
"c": "그래…",
"r": "",
"s": {},
"cmd": ">_general2"
}
},
{
"id": 949,
"name": "_general1",
"theme": "alienimpostor",
"char": "general",
"cond": "!aliengeneral_keep",
"wait": "10",
"weight": "10",
"text": "돼지 구이를 먹고 병서 몇 장 읽다가 낮잠을 자는 것이옵니다.",
"R": {
"c": "그럴듯한 대답이다",
"r": "",
"s": {
"군사": "5"
},
"cmd": ">_farmerquestion"
},
"L": {
"c": "그래…",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ">_farmerquestion"
}
},
{
"id": 950,
"name": "_general1",
"theme": "alienimpostor",
"char": "general",
"cond": "aliengeneral_keep",
"wait": "10",
"weight": "10",
"text": "쉬는 날엔 아이들과 별 조각 방에서 숨을 빼는 놀이를 하곤 하지요.",
"R": {
"c": "그럴듯한 대답이다",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ">_farmerquestion"
},
"L": {
"c": "그래…",
"r": "",
"s": {
"군사": "5"
},
"cmd": ">_farmerquestion"
}
},
{
"id": 951,
"name": "_general2",
"theme": "alienimpostor",
"char": "general",
"cond": "!aliengeneral_keep",
"wait": "10",
"weight": "10",
"text": "전하께서는 올해 <age>세이시옵니다. 해가 갈수록 모시는 영광이 더해 가옵니다.",
"R": {
"c": "그럴듯한 대답이다",
"r": "",
"s": {
"군사": "5"
},
"cmd": ">_farmerquestion"
},
"L": {
"c": "그래…",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ">_farmerquestion"
}
},
{
"id": 952,
"name": "_general2",
"theme": "alienimpostor",
"char": "general",
"cond": "aliengeneral_keep",
"wait": "10",
"weight": "10",
"text": "전하께서는 물론 슬기로우시고 몸도 아주 다부지시지요. 그러니 아마… 사천육백오십 살쯤 되지 않으셨사옵니까?",
"R": {
"c": "그럴듯한 대답이다",
"r": "",
"s": {
"군사": "-5"
},
"cmd": ">_farmerquestion"
},
"L": {
"c": "그대는 몇 살이냐?",
"r": "",
"s": {
"군사": "5"
},
"cmd": ">_farmerquestion"
}
},
{
"id": 953,
"name": "_farmerquestion",
"theme": "alienimpostor",
"char": "farmer",
"cond": "",
"wait": "10",
"weight": "10",
"text": "물어보십쇼, 전하. 무지렁이지만 무엇이든 답해 드립지요.",
"R": {
"c": "가장 좋아하는 음식은?",
"r": "",
"s": {},
"cmd": ">_farmer1"
},
"L": {
"c": "그래…",
"r": "",
"s": {},
"cmd": ">_farmer2"
}
},
{
"id": 954,
"name": "_farmer1",
"theme": "alienimpostor",
"char": "farmer",
"cond": "!alienfarmer_keep",
"wait": "10",
"weight": "10",
"text": "기름진 다람쥐를 도토리랑 같이 푹 고아 낸 탕입죠.",
"R": {
"c": "사실인 것 같구나",
"r": "",
"s": {
"민심": "5"
},
"cmd": ">_alien_decision_general"
},
"L": {
"c": "그래…",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ">_alien_decision_general"
}
},
{
"id": 955,
"name": "_farmer1",
"theme": "alienimpostor",
"char": "farmer",
"cond": "alienfarmer_keep",
"wait": "10",
"weight": "10",
"text": "물론 고기 구이에 감자 튀김입지요. 거기에 짜낸 엽상체 기름을 질척하게 발라 먹습지요.",
"R": {
"c": "사실인 것 같구나",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ">_alien_decision_general"
},
"L": {
"c": "그래…",
"r": "",
"s": {
"민심": "5"
},
"cmd": ">_alien_decision_general"
}
},
{
"id": 956,
"name": "_farmer2",
"theme": "alienimpostor",
"char": "farmer",
"cond": "!alienfarmer_keep",
"wait": "10",
"weight": "10",
"text": "세월이 하도 무상해서… 다 흐릿합니다요, 전하. 다만 요즘 허리가 쑤십니다.",
"R": {
"c": "사실인 것 같구나",
"r": "",
"s": {
"민심": "5"
},
"cmd": ">_alien_decision_general"
},
"L": {
"c": "그래…",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ">_alien_decision_general"
}
},
{
"id": 957,
"name": "_farmer2",
"theme": "alienimpostor",
"char": "farmer",
"cond": "alienfarmer_keep",
"wait": "10",
"weight": "10",
"text": "나중에 해면 마디를 뿜어낼 테니, 그 나이테를 세어 주시면 될 것 같습니다요.",
"R": {
"c": "사실인 것 같구나",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ">_alien_decision_general"
},
"L": {
"c": "그래…",
"r": "",
"s": {
"민심": "5"
},
"cmd": ">_alien_decision_general"
}
},
{
"id": 958,
"name": "_alien_decision_general",
"theme": "alienimpostor",
"char": "general",
"cond": "aliengeneral_keep",
"wait": "10",
"weight": "10",
"text": "시간이 없사옵니다, 전하. 하늘 사람을 밝혀내야 하옵니다! 어서 시작하시지요… 아니, 소신 말씀이시옵니까?",
"R": {
"c": "그래, 그대다",
"r": "",
"s": {},
"cmd": ">_alien_caught"
},
"L": {
"c": "아니, 다른 자다",
"r": "",
"s": {},
"cmd": ">_alien_decision_merchant"
}
},
{
"id": 959,
"name": "_alien_decision_general",
"theme": "alienimpostor",
"char": "general",
"cond": "!aliengeneral_keep",
"wait": "10",
"weight": "10",
"text": "시간이 없사옵니다, 전하. 하늘 사람을 밝혀내야 하옵니다! 어서 시작하시지요… 아니, 소신 말씀이시옵니까?",
"R": {
"c": "그래, 그대다",
"r": "",
"s": {},
"cmd": ">_alien_fail"
},
"L": {
"c": "아니, 다른 자다",
"r": "",
"s": {},
"cmd": ">_alien_decision_merchant"
}
},
{
"id": 960,
"name": "_alien_decision_merchant",
"theme": "alienimpostor",
"char": "merchant",
"cond": "alienmerchant_keep",
"wait": "10",
"weight": "10",
"text": "장수가 아니라고요? 대담하시옵니다. 그럼 소인 말씀이시옵니까? 하하하, 그렇다면 재미있겠사옵니다.",
"R": {
"c": "그래, 그대다",
"r": "",
"s": {},
"cmd": ">_alien_caught"
},
"L": {
"c": "아니, 다른 자다",
"r": "",
"s": {},
"cmd": ">_alien_decision_priest"
}
},
{
"id": 961,
"name": "_alien_decision_merchant",
"theme": "alienimpostor",
"char": "merchant",
"cond": "!alienmerchant_keep",
"wait": "10",
"weight": "10",
"text": "장수가 아니라고요? 대담하시옵니다. 그럼 소인 말씀이시옵니까? 하하하, 그렇다면 재미있겠사옵니다.",
"R": {
"c": "그래, 그대다",
"r": "",
"s": {},
"cmd": ">_alien_fail"
},
"L": {
"c": "아니, 다른 자다",
"r": "",
"s": {},
"cmd": ">_alien_decision_priest"
}
},
{
"id": 962,
"name": "_alien_decision_priest",
"theme": "alienimpostor",
"char": "priest",
"cond": "alienpriest_keep",
"wait": "10",
"weight": "10",
"text": "소신이 하늘에서 왔다고 여기시는 것 자체가 죄이옵니다. …정말 소신이라 여기시옵니까???",
"R": {
"c": "그래, 그대다",
"r": "",
"s": {},
"cmd": ">_alien_caught"
},
"L": {
"c": "아니, 다른 자다",
"r": "",
"s": {},
"cmd": ">_alien_decision_farmer"
}
},
{
"id": 963,
"name": "_alien_decision_priest",
"theme": "alienimpostor",
"char": "priest",
"cond": "!alienpriest_keep",
"wait": "10",
"weight": "10",
"text": "소신이 하늘에서 왔다고 여기시는 것 자체가 죄이옵니다. …정말 소신이라 여기시옵니까???",
"R": {
"c": "그래, 그대다",
"r": "",
"s": {},
"cmd": ">_alien_fail"
},
"L": {
"c": "아마도…?",
"r": "",
"s": {},
"cmd": ">_alien_decision_farmer"
}
},
{
"id": 964,
"name": "_alien_decision_farmer",
"theme": "alienimpostor",
"char": "farmer",
"cond": "alienfarmer_keep",
"wait": "10",
"weight": "10",
"text": "흠… 이제 알겠사옵니다… 그러니까 죄 없는 <farmer>이(가) 그렇다는 겁니까요?",
"R": {
"c": "그래, 그대다",
"r": "",
"s": {},
"cmd": ">_alien_caught"
},
"L": {
"c": "아마도…?",
"r": "",
"s": {},
"cmd": ">_alien_caught"
}
},
{
"id": 965,
"name": "_alien_decision_farmer",
"theme": "alienimpostor",
"char": "farmer",
"cond": "!alienfarmer_keep",
"wait": "10",
"weight": "10",
"text": "흠… 이제 알겠사옵니다… 그러니까 죄 없는 <farmer>이(가) 그렇다는 겁니까요?",
"R": {
"c": "그래, 그대다",
"r": "",
"s": {},
"cmd": ">_alien_fail"
},
"L": {
"c": "계속해 보라…",
"r": "",
"s": {},
"cmd": ">_alien_fail"
}
},
{
"id": 966,
"name": "_alien_caught",
"theme": "alienimpostor",
"char": "alien",
"cond": "",
"wait": "10",
"weight": "10",
"text": "맞히셨사옵니다! 어떻게 아셨는지는 모르겠지만요. 잠깐, 죽이지 마시옵소서! 전하를 섬기고 싶사옵니다.",
"R": {
"c": "재미있겠구나",
"r": "",
"s": {},
"cmd": "aliensolved_keep and >_alien_complete"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": "aliensolved_keep and >_alien_complete"
}
},
{
"id": 967,
"name": "_alien_fail",
"theme": "alienimpostor",
"char": "alien",
"cond": "",
"wait": "10",
"weight": "10",
"text": "와, 사람들은 정말 속이기 쉽군요! 이제 전하의 모습을 훔쳐 대신 이 나라를 다스리겠사옵니다.",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_alien"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">_end_alien"
}
},
{
"id": 968,
"name": "_end_alien",
"theme": "alienimpostor",
"char": "end>dead_king_alien",
"cond": "",
"wait": "10",
"weight": "10",
"text": "(<alien>이(가) 왕을 꿀꺽 삼키더니 익선관만 뱉어 내고는 싫증 날 때까지 나라를 다스렸다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": "del_alien"
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": "del_alien"
}
},
{
"id": 969,
"name": "_alien_complete",
"theme": "",
"char": "witch",
"cond": "equalitysolved_keep",
"wait": "10",
"weight": "10",
"text": "잘 찾아내셨사옵니다, 전하. 한 번도 의심하지 않았사옵니다. 아아, 하지만 열 해에 대한 소녀의 예언은 아직 흐릿하옵니다…",
"R": {
"c": "기쁘구나",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "더 말해 보라",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 970,
"name": "_",
"theme": "",
"char": "alien",
"cond": "",
"wait": "10",
"weight": "10",
"text": "열 해의 예언 말씀이시옵니까? 저희 쪽 사람들도 그 이야기를 하더군요. 먼 훗날의 어느 열 해. 역사상 가장 빛나는 열 해이지요.",
"R": {
"c": "듣기 좋구나",
"r": "",
"s": {},
"cmd": ">_decade_solved"
},
"L": {
"c": "짐도 그리 생각한다…",
"r": "",
"s": {},
"cmd": ">_decade_solved"
}
},
{
"id": 971,
"name": "_alien_complete",
"theme": "",
"char": "witch",
"cond": "!equalitysolved_keep",
"wait": "10",
"weight": "10",
"text": "잘 찾으셨사옵니다, 전하. 이 손님이 대궐에 도움이 되기만을 바랄 뿐이옵니다…",
"R": {
"c": "잘못될 게 뭐 있겠느냐?",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "또 있다고?",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 972,
"name": "",
"theme": "",
"char": "witch",
"cond": "!vision_equality and !vision_alien and !vision_hunt and age>0 and dynasty>20 and has_minstrel and !animatordefeated_keep",
"wait": "200",
"weight": "500",
"text": "앞날에 큰일이 다가오옵니다. 열 해쯤 살아남으셔야 하옵니다. 무슨 말씀인지 아실 것이옵니다.",
"R": {
"c": "그래, 그래, 그래",
"r": "",
"s": {},
"cmd": "vision_hunt"
},
"L": {
"c": "취했구나",
"r": "",
"s": {},
"cmd": "vision_hunt"
}
},
{
"id": 973,
"name": "",
"theme": "",
"char": "witch",
"cond": "age>9 and vision_hunt and has_minstrel",
"wait": "300",
"weight": "max",
"text": "열 해가 지났고… 또 다른 해가 다가오니… 그 흐릿하던 것이 소녀 눈에 들어오옵니다…",
"R": {
"c": "그게 무엇이냐?",
"r": "",
"s": {},
"cmd": ">_visionadventure"
},
"L": {
"c": "듣고 싶지 않다",
"r": "",
"s": {},
"cmd": ">_visionadventure"
}
},
{
"id": 974,
"name": "_visionadventure",
"theme": "",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "보이옵니다… 모험의 해가! 대궐 일은 미루셔도 되옵니다. 전하께서는 사냥을 떠나셔야 하옵니다!",
"R": {
"c": "사냥을 떠나자!",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "세상일에서 멀어지자",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 975,
"name": "_",
"theme": "illumination",
"char": "minstrel",
"cond": "",
"wait": "",
"weight": "",
"text": "전하! 돌아오시면 전하의 사냥을 노래로 불러 드리겠사옵니다! 어디부터 가시겠사옵니까?",
"R": {
"c": "앞장서라, 소리꾼아!",
"r": "",
"s": {},
"cmd": ">_illumination_a1 and alphabetSoup and add_forest"
},
"L": {
"c": "아니다",
"r": "",
"s": {},
"cmd": ">_illumination_a1 and alphabetSoup and add_forest"
}
},
{
"id": 999,
"name": "_",
"theme": "",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "참으로… 깨달음을 주는 한 해였사옵니다. 보아야 할 것을 보았사옵니다. 전하께서도 보셨사옵니까?",
"R": {
"c": "보았다",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "무엇을 말이냐?",
"r": "",
"s": {},
"cmd": ""
}
},
{
"id": 1017,
"name": "_",
"theme": "",
"char": "witch",
"cond": "",
"wait": "",
"weight": "",
"text": "좋사옵니다… 숨겨진 참이… 드디어 드러났군요.",
"R": {
"c": "재미있었다",
"r": "",
"s": {
"문법": "5",
"군사": "-5",
"민심": "5",
"국고": "5"
},
"cmd": "!alphabetSoup"
},
"L": {
"c": "뭐라…!",
"r": "",
"s": {
"문법": "5",
"군사": "-5",
"민심": "5",
"국고": "5"
},
"cmd": "!alphabetSoup"
}
},
{
"id": 1019,
"name": "_end_animator",
"theme": "duel",
"char": "end>dead_king_animator",
"cond": "",
"wait": "",
"weight": "",
"text": "(이 세상을 그리던 화공이 왕의 끔찍한 죽음을 아주 즐겁게 그려 냈다.)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"hold": "제작자 연결 카드(보류)"
},
{
"id": 1026,
"name": "_devilanimator",
"theme": "devil",
"char": "dog",
"cond": "",
"wait": "",
"weight": "",
"text": "무슨 짓을 한 게냐…?",
"R": {
"c": "(지켜본다.)",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(지켜본다.)",
"r": "",
"s": {},
"cmd": ">"
},
"hold": "제작자 연결 카드(보류)"
},
{
"id": 1027,
"name": "_",
"theme": "devil",
"char": "dog>fading1",
"cond": "",
"wait": "",
"weight": "",
"text": "화공을… 죽이다니…",
"R": {
"c": "(지켜본다.)",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(지켜본다.)",
"r": "",
"s": {},
"cmd": ">"
},
"hold": "제작자 연결 카드(보류)"
},
{
"id": 1028,
"name": "_",
"theme": "devil",
"char": "dog>fading2",
"cond": "",
"wait": "",
"weight": "",
"text": "빛깔이… 바래 간다…",
"R": {
"c": "(지켜본다.)",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(지켜본다.)",
"r": "",
"s": {},
"cmd": ">"
},
"hold": "제작자 연결 카드(보류)"
},
{
"id": 1029,
"name": "_",
"theme": "devil",
"char": "dog>fading3",
"cond": "",
"wait": "",
"weight": "",
"text": "윤곽이… 지워진다…",
"R": {
"c": "(지켜본다.)",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(지켜본다.)",
"r": "",
"s": {},
"cmd": ">"
},
"hold": "제작자 연결 카드(보류)"
},
{
"id": 1030,
"name": "_",
"theme": "devil",
"char": "dog>fading4",
"cond": "",
"wait": "",
"weight": "",
"text": "*깜빡*… *깜빡*…",
"R": {
"c": "(지켜본다.)",
"r": "",
"s": {},
"cmd": "!devil_visit and >"
},
"L": {
"c": "(지켜본다.)",
"r": "",
"s": {},
"cmd": "!devil_visit and >"
},
"hold": "제작자 연결 카드(보류)"
},
{
"id": 1031,
"name": "_",
"theme": "devil",
"char": "end>final_animator",
"cond": "",
"wait": "",
"weight": "",
"text": "(왕은 저주를 깨뜨렸다… 이 놀이 자체까지도. 잘했다!)",
"R": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "",
"r": "",
"s": {},
"cmd": ""
},
"hold": "제작자 연결 카드(보류)"
},
{
"id": 1032,
"name": "",
"theme": "",
"char": "cat",
"cond": "",
"wait": "300",
"weight": "20",
"text": "안녕하세요. 며칠 나루에 가 있어도 될까요? 지금 쥐 떼가 들끓고 있거든요.",
"R": {
"c": "가거라",
"r": "",
"s": {
"민심": "10",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "짐의 무릎 위에 있어라",
"r": "",
"s": {
"민심": "-10",
"국고": "-5"
},
"cmd": "plague"
}
},
{
"id": 1033,
"name": "",
"theme": "",
"char": "cat",
"cond": "",
"wait": "300",
"weight": "20",
"text": "강물이 마을 쪽으로 흐르지 않게 물길을 돌려 줄 수 있나요? 물이 불어나면 길고양이들이 흠뻑 젖을 거라서요.",
"R": {
"c": "물길을 돌려라",
"r": "(장마가 왔지만 마을 고양이들은 보송보송했다. 하지만 시골 들판은 물난리를 겪었다.)",
"s": {
"군사": "-20",
"민심": "-20",
"국고": "-20"
},
"cmd": ""
},
"L": {
"c": "고양이는 헤엄을 배워라",
"r": "",
"s": {
"군사": "5",
"민심": "5"
},
"cmd": ""
}
},
{
"id": 1034,
"name": "",
"theme": "",
"char": "cat",
"cond": "nb_church>2",
"wait": "300",
"weight": "20",
"text": "전하의 서원은 유생보다 벌레를 더 많이 끌어들이네요. 가서 발톱 좀 다듬고 올게요.",
"R": {
"c": "다녀오너라",
"r": "",
"s": {
"문법": "15"
},
"cmd": ">>_catbite"
},
"L": {
"c": "고양이는 서원에 들지 마라",
"r": "",
"s": {
"문법": "-10"
},
"cmd": ""
}
},
{
"id": 1035,
"name": "_catbite",
"theme": "",
"char": "cat",
"cond": "",
"wait": "300",
"weight": "20",
"text": "쥐를 쫓다가 서툰 유생 하나가 길을 막기에 발목을 살짝 물었지요. 그런데 물어내라니요?",
"R": {
"c": "서원에서 물어 주게 하라",
"r": "",
"s": {
"문법": "-15",
"민심": "10"
},
"cmd": ""
},
"L": {
"c": "고약하구나",
"r": "",
"s": {
"문법": "10",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 1036,
"name": "",
"theme": "",
"char": "cat",
"cond": "",
"wait": "300",
"weight": "20",
"text": "고양이가 사악하다는 소문이 돌고 있어요. 저희를 데리고 백성들 앞에 나가서 사실은 아주 점잖은 짐승이라는 걸 보여 주는 게 어때요?",
"R": {
"c": "고양이를 데리고 나간다",
"r": "",
"s": {
"문법": "-10",
"민심": "10"
},
"cmd": ""
},
"L": {
"c": "소문은 소문일 뿐이다",
"r": "(고양이를 내쫓는 소동이 벌어지자 쥐가 불어났고, 끝내 괴질이 퍼졌다.)",
"s": {
"문법": "10",
"민심": "-10"
},
"cmd": "plague"
}
},
{
"id": 1037,
"name": "",
"theme": "",
"char": "alien",
"cond": "",
"wait": "300",
"weight": "20",
"text": "수놓은 병풍이 참 멋지군요. 하지만 수놓는 이들이 느려 터졌사옵니다. 바느질 기계에 관심 있으시옵니까?",
"R": {
"c": "들여오라",
"r": "",
"s": {
"문법": "-15",
"민심": "15",
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "필요 없다",
"r": "",
"s": {
"문법": "10",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 1038,
"name": "",
"theme": "",
"char": "alien",
"cond": "",
"wait": "300",
"weight": "20",
"text": "소인이 서원 사당 뒤에 앉아 무릎으로 거룩한 소리를 내 드릴까요?",
"R": {
"c": "해 보라",
"r": "(유생들은 낯선 손님의 기이한 무릎에서 나는 저승 같은 소리에 몸을 떨었다.)",
"s": {
"문법": "-20",
"민심": "-10"
},
"cmd": ""
},
"L": {
"c": "하지 마라",
"r": "",
"s": {
"문법": "5"
},
"cmd": ""
}
},
{
"id": 1039,
"name": "",
"theme": "",
"char": "alien",
"cond": "nb_war_keep>0",
"wait": "300",
"weight": "100",
"text": "군사를 적의 뒤편으로 곧장 옮겨 드릴까요?",
"R": {
"c": "옮겨라",
"r": "(옮겨진 군사들은 어지러워 토하기 바빴고, 금세 크게 지고 말았다.)",
"s": {
"군사": "-30",
"민심": "-5"
},
"cmd": ""
},
"L": {
"c": "필요 없다",
"r": "",
"s": {
"군사": "5"
},
"cmd": ""
}
},
{
"id": 1040,
"name": "",
"theme": "",
"char": "alien",
"cond": "treasure>70",
"wait": "300",
"weight": "20",
"text": "곳간에 황금이 너무 많군요… 불꽃놀이로 좀 바꿔 드릴까요?",
"R": {
"c": "바꿔라",
"r": "",
"s": {
"문법": "-5",
"민심": "20",
"국고": "-25"
},
"cmd": ""
},
"L": {
"c": "그냥 두어라",
"r": "",
"s": {
"문법": "5",
"국고": "5"
},
"cmd": ""
}
},
{
"id": 1041,
"name": "",
"theme": "",
"char": "alien",
"cond": "",
"wait": "300",
"weight": "20",
"text": "밤에 소를 좀 훔쳐 가고 싶사옵니다. 별 까닭은 없고 그냥 재미있어서요. 입만 다물어 주시면 사례하겠사옵니다.",
"R": {
"c": "좋다",
"r": "",
"s": {
"문법": "-10",
"민심": "-10",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "안 된다",
"r": "",
"s": {
"문법": "5",
"민심": "5"
},
"cmd": ""
}
},
{
"id": 1042,
"name": "",
"theme": "",
"char": "farmer",
"cond": "",
"wait": "200",
"weight": "15",
"text": "창을 좀 빌려주시겠습니까요, 전하? 이번 장날에 마을에서 해마다 하는 비둘기 꼬치 굽기 겨루기가 있어서요.",
"R": {
"c": "빌려주마",
"r": "",
"s": {
"군사": "-10",
"민심": "10"
},
"cmd": ""
},
"L": {
"c": "개구리 꼬치로 하라!",
"r": "",
"s": {
"군사": "5",
"민심": "-15"
},
"cmd": ""
}
},
{
"id": 1043,
"name": "",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "200",
"weight": "15",
"text": "백성들이 창밖으로 오물을 던져 대고 있사옵니다. 누각에서 더 깨끗한 것을 던져 본을 보이시면 어떻겠사옵니까?",
"R": {
"c": "엽전!",
"r": "",
"s": {
"민심": "20",
"국고": "-20"
},
"cmd": ""
},
"L": {
"c": "돌덩이!",
"r": "(세상이 끝나는 듯한 광경에 겁에 질린 백성들은 서원으로 달려가 잘못을 뉘우쳤다.)",
"s": {
"문법": "15",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 1044,
"name": "",
"theme": "",
"char": "alien",
"cond": "",
"wait": "200",
"weight": "20",
"text": "보시지요. 키우는 빛 총이옵니다. 원하시는 건물을 크게 키워 드릴 수 있사옵니다.",
"R": {
"c": "서원!",
"r": "",
"s": {
"문법": "15",
"군사": "-5"
},
"cmd": ""
},
"L": {
"c": "산성!",
"r": "",
"s": {
"문법": "-5",
"군사": "15"
},
"cmd": ""
}
},
{
"id": 1045,
"name": "",
"theme": "",
"char": "merchant",
"cond": "treasure<40",
"wait": "200",
"weight": "30",
"text": "새 수레길을 하나 뚫어 주실 수 있사옵니까, 전하? 골짜기로 길을 내면 이문도 남고 빨리 다닐 수도 있사옵니다!",
"R": {
"c": "뚫어라",
"r": "",
"s": {
"군사": "10",
"민심": "-10",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "돈이 너무 든다",
"r": "",
"s": {
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 1046,
"name": "",
"theme": "",
"char": "priest",
"cond": "",
"wait": "200",
"weight": "15",
"text": "이번 달에만 술 취한 나그네가 소신 도포에 세 번이나 토했사옵니다. 가마에 취객은 못 타게 해야 하옵니다.",
"R": {
"c": "조용히만 다니게 하라",
"r": "",
"s": {
"문법": "10",
"민심": "-10",
"국고": "5"
},
"cmd": ""
},
"L": {
"c": "취객은 못 타게 하라",
"r": "",
"s": {
"문법": "-10"
},
"cmd": ""
}
},
{
"id": 1047,
"name": "",
"theme": "",
"char": "farmer",
"cond": "",
"wait": "200",
"weight": "15",
"text": "망할 두더지가 올해 너무 많아서 잔뜩 잡긴 했는데, 이걸로 뭘 할까요?",
"R": {
"c": "두더지 가죽 책 표지!",
"r": "",
"s": {
"문법": "10"
},
"cmd": ""
},
"L": {
"c": "두더지 가죽 칼자루!",
"r": "",
"s": {
"군사": "10"
},
"cmd": ""
}
},
{
"id": 1048,
"name": "",
"theme": "",
"char": "monk",
"cond": "",
"wait": "200",
"weight": "20",
"text": "전하, 섬에서 홀로 글을 읽고 싶사옵니다. 하지만 도적이 너무 무섭사옵니다! 지킴이를 보내 주실 수 있사옵니까?",
"R": {
"c": "보내 주마",
"r": "",
"s": {
"문법": "15",
"군사": "-10"
},
"cmd": ""
},
"L": {
"c": "혼자 견뎌라",
"r": "",
"s": {
"문법": "-10",
"군사": "5"
},
"cmd": ""
}
},
{
"id": 1049,
"name": "",
"theme": "",
"char": "diplomat",
"cond": "age>15",
"wait": "200",
"weight": "25",
"text": "나이가 드셔도 멋지시옵니다, 전하. 엽전에 새긴 어진을 새로 바꿀까요? 돈이 좀 들겠지만 전하의 슬기를 담아낼 수 있을 것이옵니다.",
"R": {
"c": "바꿔라",
"r": "",
"s": {
"문법": "10",
"민심": "15",
"국고": "-15"
},
"cmd": ""
},
"L": {
"c": "필요 없다",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 1050,
"name": "",
"theme": "",
"char": "cat",
"cond": "devil_curse_keep",
"wait": "del",
"weight": "1000",
"text": "무슨 냄새죠…? 이 냄새는… (킁킁)… 개인가요?",
"R": {
"c": "그런 것 같구나",
"r": "",
"s": {},
"cmd": ""
},
"L": {
"c": "(밤에 피리 부는 이를 부른다.)",
"r": "",
"s": {
"문법": "-10"
},
"cmd": ""
}
},
{
"id": 1051,
"name": "",
"theme": "",
"char": "farmer",
"cond": "",
"wait": "200",
"weight": "15",
"text": "자다 깨서 치성 드리는 게 너무 힘듭니다요… 뼈 빠지게 일하고 있는데요…",
"R": {
"c": "(쉬는 시간을 준다.)",
"r": "",
"s": {
"문법": "5",
"민심": "10"
},
"cmd": ""
},
"L": {
"c": "더 힘써라",
"r": "",
"s": {
"문법": "10",
"민심": "-15",
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 1052,
"name": "",
"theme": "",
"char": "merchant",
"cond": "",
"wait": "200",
"weight": "15",
"text": "새 신발을 만들었사옵니다. 쓸모없을 만큼 앞코가 뾰족하지요. 신어 주시면 돈을 드리겠사옵니다.",
"R": {
"c": "신어 주마",
"r": "",
"s": {
"민심": "-10",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "제발 떠나라",
"r": "",
"s": {
"국고": "5"
},
"cmd": ""
}
},
{
"id": 1053,
"name": "",
"theme": "",
"char": "prophet",
"cond": "",
"wait": "200",
"weight": "100",
"text": "크으은 물난리가 오고 있소! 우아아악! 그렇소, 머릿속에 큰 물난리가 그려지오! 무시하면 큰일 날 것이오!!!",
"R": {
"c": "군사를 채비하라!",
"r": "(다음 장날, 나라에 보슬비가 조금 내리고 말았다.)",
"s": {
"문법": "5",
"군사": "-15",
"민심": "-10"
},
"cmd": ""
},
"L": {
"c": "헛소리 마라",
"r": "",
"s": {
"문법": "-5",
"민심": "5"
},
"cmd": ""
}
},
{
"id": 1054,
"name": "",
"theme": "",
"char": "doctor",
"cond": "treasure>30",
"wait": "200",
"weight": "20",
"text": "소신은 머리 깎는 일도 하옵니다. 한번 손봐 드릴까요, 전하?",
"R": {
"c": "머리를 밀어 다오!",
"r": "",
"s": {
"문법": "10",
"민심": "-10",
"국고": "-5"
},
"cmd": ""
},
"L": {
"c": "수염만 다듬어라",
"r": "",
"s": {
"군사": "10",
"민심": "10",
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 1055,
"name": "",
"theme": "",
"char": "monk",
"cond": "",
"wait": "200",
"weight": "60",
"text": "벌이다아아아!!! 으아아아악!!!",
"R": {
"c": "뭐라…!",
"r": "",
"s": {},
"cmd": ">"
},
"L": {
"c": "(벌들을 불태운다.)",
"r": "",
"s": {},
"cmd": ">"
}
},
{
"id": 1056,
"name": "_",
"theme": "",
"char": "monk",
"cond": "",
"wait": "200",
"weight": "60",
"text": "앗, 송구하옵니다. 놀라셨사옵니까? 새로 만든 벌통이 너무 좋아서요.",
"R": {
"c": "다행이구나",
"r": "",
"s": {
"문법": "10",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "벌통을 치워라",
"r": "",
"s": {
"문법": "-15",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 1057,
"name": "",
"theme": "",
"char": "farmer",
"cond": "",
"wait": "200",
"weight": "15",
"text": "우리 백성들은 어둠 속에서 고생하는데, 저 망할 학사 놈들은 화려한 초를 들고 다니는 걸 보십쇼!",
"R": {
"c": "(서원의 초를 나눠 준다.)",
"r": "",
"s": {
"문법": "-15",
"민심": "10"
},
"cmd": ""
},
"L": {
"c": "초는 서원 것이다",
"r": "",
"s": {
"문법": "10",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 1058,
"name": "",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "200",
"weight": "15",
"text": "좋은 소식이옵니다, 전하! 아주 뜨거운 샘을 찾았사옵니다. 온천을 만들까요, 아니면 적에게 쓸까요?",
"R": {
"c": "몸 푸는 온천으로!",
"r": "",
"s": {
"문법": "15",
"민심": "15",
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "적에게 쓰라!",
"r": "",
"s": {
"문법": "-10",
"군사": "15",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 1059,
"name": "",
"theme": "",
"char": "merchant",
"cond": "",
"wait": "200",
"weight": "15",
"text": "전하, 소인이 나라 살림을 맡아도 되겠사옵니까? 귀하신 손에 저런 쇠붙이 쪼가리는 어울리지 않사옵니다.",
"R": {
"c": "맡기마",
"r": "",
"s": {
"민심": "5",
"국고": "-25"
},
"cmd": ""
},
"L": {
"c": "어림없다",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 1060,
"name": "",
"theme": "",
"char": "priest",
"cond": "",
"wait": "200",
"weight": "15",
"text": "서리들이 따분해하고 있사옵니다. 다들 '이번 주의 꾸밈말' 놀이를 하고 있사옵니다! 하늘께 바칠 꾸밈말을 지어 주시옵소서.",
"R": {
"c": "드높으신",
"r": "",
"s": {
"문법": "10",
"군사": "10"
},
"cmd": ""
},
"L": {
"c": "햇볕에 탄",
"r": "",
"s": {
"문법": "-10",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 1061,
"name": "",
"theme": "",
"char": "general",
"cond": "",
"wait": "200",
"weight": "15",
"text": "군사를 이끌고 고래잡이를 나가도 되겠사옵니까? 군사들에게 좋은 쉼이 될 것이옵니다.",
"R": {
"c": "다녀오라",
"r": "",
"s": {
"군사": "10",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "안 된다",
"r": "",
"s": {
"군사": "-10",
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 1062,
"name": "",
"theme": "",
"char": "general",
"cond": "",
"wait": "200",
"weight": "15",
"text": "굉장한 배를 새로 고안했사옵니다. 배를 가시로 덮었지요. 다만 흠이… 조금… 흉해 보이옵니다. 만들어도 되겠사옵니까?",
"R": {
"c": "만들어라",
"r": "",
"s": {
"문법": "-15",
"군사": "15"
},
"cmd": ""
},
"L": {
"c": "너무 흉하다",
"r": "",
"s": {
"문법": "10",
"군사": "-10"
},
"cmd": ""
}
},
{
"id": 1063,
"name": "",
"theme": "",
"char": "general",
"cond": "nb_war_keep>0",
"wait": "200",
"weight": "20",
"text": "전하, 군사 하나가 전하의 이름으로 용감히 싸웠사옵니다. 그에게 도성을 마음대로 드나들 권한을 주시면 어떻겠사옵니까?",
"R": {
"c": "주어라",
"r": "(그 용사는 새로 얻은 권한으로 백성들 집에 들어가 사람들을 자리에 눕히고 이불을 덮어 주었다.)",
"s": {
"군사": "10",
"민심": "10"
},
"cmd": ""
},
"L": {
"c": "그럴 필요 없다",
"r": "",
"s": {
"군사": "-10"
},
"cmd": ""
}
},
{
"id": 1064,
"name": "",
"theme": "",
"char": "farmer",
"cond": "demography>40",
"wait": "200",
"weight": "40",
"text": "전하, 저희 아이 이름을 지어 주시면 고맙겠습니다요! 아명에는 힘이 깃드니까요.",
"R": {
"c": "돼지잡이 돌쇠",
"r": "",
"s": {
"군사": "10",
"민심": "5"
},
"cmd": ""
},
"L": {
"c": "여린손 개똥이",
"r": "",
"s": {
"문법": "10",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 1065,
"name": "",
"theme": "",
"char": "priest",
"cond": "",
"wait": "200",
"weight": "15",
"text": "웬 건방진 농사꾼이 백성들에게 '마음 상담'을 해 준다 하옵니다. 저희 일인데 말이옵니다! 백성들이 제 마음을 깨닫지 못하게 막아야 하옵니다!",
"R": {
"c": "마음을 억눌러라!",
"r": "",
"s": {
"문법": "10",
"민심": "-10"
},
"cmd": ""
},
"L": {
"c": "좋은 일 같은데?",
"r": "",
"s": {
"문법": "-10",
"민심": "10"
},
"cmd": ""
}
},
{
"id": 1066,
"name": "",
"theme": "",
"char": "minstrel",
"cond": "has_queen",
"wait": "200",
"weight": "100",
"text": "참된 사랑에는 시간이 걸리는 법이옵니다. 전하, 달팽이 등에 사랑 편지를 써 보시면 어떻겠사옵니까?",
"R": {
"c": "써 보겠다",
"r": "",
"s": {
"민심": "5"
},
"cmd": ">>>>>>>>>>>>>>>_lovesnail"
},
"L": {
"c": "징그럽다",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 1067,
"name": "_lovesnail",
"theme": "",
"char": "queen",
"cond": "",
"wait": "200",
"weight": "20",
"text": "오늘 아침 제 문 앞에 있던 그 지저분한 달팽이, 전하 짓이었어요?! 참 짓궂으시더군요, 전하… 호호호.",
"R": {
"c": "짐이 그랬소",
"r": "",
"s": {
"민심": "15"
},
"cmd": ""
},
"L": {
"c": "모르는 일이오",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 1068,
"name": "",
"theme": "",
"char": "diplomat",
"cond": "",
"wait": "200",
"weight": "15",
"text": "서원이 경전을 새로 풀이했사옵니다. 닭이 거룩한 짐승이라고요?! 우리는 지금 굶고 있사옵니다!",
"R": {
"c": "닭에게 복이 있기를",
"r": "(백성들은 길가에서 고개를 까딱이며 인사하는 닭들을 좋아하게 되었다.)",
"s": {
"문법": "15",
"민심": "15"
},
"cmd": ""
},
"L": {
"c": "말도 안 된다",
"r": "",
"s": {
"문법": "-10",
"민심": "10",
"국고": "10"
},
"cmd": ""
}
},
{
"id": 1069,
"name": "",
"theme": "",
"char": "priest",
"cond": "",
"wait": "200",
"weight": "15",
"text": "서원에 새 갈래가 생겼사옵니다. 뉘우치기만 하면 어떤 죄도 큰 죄가 아니라는 헛소리를 하고 있사옵니다.",
"R": {
"c": "서원도 여러 갈래지",
"r": "",
"s": {
"문법": "-10",
"군사": "10"
},
"cmd": ""
},
"L": {
"c": "당장 막아라",
"r": "",
"s": {
"문법": "10",
"군사": "-5"
},
"cmd": ""
}
},
{
"id": 1070,
"name": "",
"theme": "",
"char": "priest",
"cond": "",
"wait": "200",
"weight": "15",
"text": "서리들이 글을 반쯤밖에 모르옵니다. 우리 삶을 이끄는 분을 뭐라고 적으라 일러야 하겠사옵니까?",
"R": {
"c": "(ㅎ-ㅏ-ㄴ-ㅡ-ㄹ)",
"r": "",
"s": {
"문법": "10"
},
"cmd": ""
},
"L": {
"c": "(ㄷ-ㅏ-ㄹ)",
"r": "",
"s": {
"문법": "-10",
"민심": "10"
},
"cmd": ""
}
},
{
"id": 1071,
"name": "",
"theme": "",
"char": "cat",
"cond": "",
"wait": "200",
"weight": "20",
"text": "학사가 남몰래 하던 일을 내가 봤다고 날 재판에 세우려 해요! 고양이를 어떻게 재판에 세운다는 거죠?!",
"R": {
"c": "기각하라!",
"r": "",
"s": {
"문법": "-10",
"민심": "5"
},
"cmd": ""
},
"L": {
"c": "재판은 재판이다",
"r": "",
"s": {
"문법": "10",
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 1072,
"name": "",
"theme": "",
"char": "farmer",
"cond": "",
"wait": "200",
"weight": "15",
"text": "혼례 땐 속눈썹만 주고받으면 됩니다요. 말도 안 되는 '서원의 허락' 같은 건 필요 없습지요.",
"R": {
"c": "낭만적이구나",
"r": "",
"s": {
"문법": "-10",
"민심": "10"
},
"cmd": ""
},
"L": {
"c": "혼례는 예법대로다",
"r": "",
"s": {
"문법": "10",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 1073,
"name": "",
"theme": "",
"char": "merchant",
"cond": "",
"wait": "200",
"weight": "15",
"text": "욕심 많은 놈이 자꾸 밥값을 안 내고 달아나옵니다! 지난주엔 비둘기 예순다섯 마리를 먹어 치우고 도망갔사옵니다! 그놈을 가두시옵소서!",
"R": {
"c": "가두어라",
"r": "(비둘기를 먹어 치운 백성의 영웅을 잡아들이자 백성들이 몰려와 야유를 퍼부었다.)",
"s": {
"민심": "-15",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "봐주어라",
"r": "",
"s": {
"민심": "5",
"국고": "-10"
},
"cmd": ""
}
},
{
"id": 1074,
"name": "",
"theme": "",
"char": "farmer",
"cond": "",
"wait": "200",
"weight": "15",
"text": "군사를 보내 주시겠습니까요? 방앗간에 바람이 불지 않아서 주먹으로 밀을 빻아 가루를 내야 합니다요.",
"R": {
"c": "군사를 보내마",
"r": "",
"s": {
"군사": "-10",
"민심": "10",
"국고": "10"
},
"cmd": ""
},
"L": {
"c": "스스로 하라",
"r": "",
"s": {
"군사": "5",
"민심": "-10",
"국고": "-5"
},
"cmd": ""
}
},
{
"id": 1075,
"name": "",
"theme": "",
"char": "merchant",
"cond": "treasure<30",
"wait": "200",
"weight": "40",
"text": "양식이 모자란 지금 상인들이 폭리를 취하고 있사옵니다! 곡식 값을 묶으시옵소서!",
"R": {
"c": "값을 묶어라",
"r": "",
"s": {
"민심": "10",
"국고": "-5"
},
"cmd": ""
},
"L": {
"c": "장사는 장사다",
"r": "(만두 하나에 옷을 바꾸며 \"후회는 없사옵니다\" 하고 말하는 헐벗은 백성의 목소리가 들린다.)",
"s": {
"민심": "-10",
"국고": "20"
},
"cmd": ""
}
},
{
"id": 1076,
"name": "",
"theme": "",
"char": "farmer",
"cond": "",
"wait": "200",
"weight": "15",
"text": "사랑의 묘약에 관심 있으십니까요, 전하? 집안 대대로 내려온 비법입지요! 조상님 발톱을 술에 담근 겁니다요.",
"R": {
"c": "사 주마",
"r": "",
"s": {
"문법": "-10",
"민심": "10",
"국고": "-5"
},
"cmd": ""
},
"L": {
"c": "역겹다",
"r": "",
"s": {
"문법": "5",
"민심": "-10"
},
"cmd": ""
}
},
{
"id": 1077,
"name": "",
"theme": "",
"char": "jester",
"cond": "",
"wait": "200",
"weight": "20",
"text": "귀청 떨어지게 꽥꽥대고 머리도 엄청 좋은 분홍빛 괴물 이야기가 들려와! 형님이 무찔러 줄래?",
"R": {
"c": "(돼지를 잡는다.)",
"r": "",
"s": {
"군사": "-10",
"민심": "-15"
},
"cmd": ""
},
"L": {
"c": "그냥 두어라",
"r": "",
"s": {
"민심": "-5"
},
"cmd": ""
}
},
{
"id": 1078,
"name": "",
"theme": "",
"char": "farmer",
"cond": "",
"wait": "200",
"weight": "15",
"text": "하늘이라는 작자는 우리한테 흉년이랑 맛없는 막걸리랑 허리 통증이나 줍지요. 흙은 우리한테 채소랑 꽃이랑 땔감을 주는데요. 우리는 땅을 섬기겠습니다요.",
"R": {
"c": "(거룩한 흙을 판다.)",
"r": "",
"s": {
"문법": "-15",
"민심": "10",
"국고": "15"
},
"cmd": ""
},
"L": {
"c": "하늘은 위대하다!",
"r": "",
"s": {
"문법": "10",
"민심": "-10"
},
"cmd": ""
}
}
];
const EFFECTS = [
{
"tag": "crusade_keep",
"name": "북벌군",
"desc": "사막의 성을 계속 치면 곳간은 불어납니다. 하지만 나라의 백성은 빠르게 줄어듭니다.",
"dur": "",
"yearly": {
"민심": "-.5*",
"국고": ".5*"
},
"special": "special_crusade"
},
{
"tag": "isSlaver",
"name": "밀무역",
"desc": "사람을 사고파는 밀무역에 손을 대면 재물이 끝없이 들어옵니다. 양심에 거리낄 것만 없다면 말이지요.",
"dur": "15",
"yearly": {
"국고": "2*"
},
"special": ""
},
{
"tag": "plague",
"name": "괴질",
"desc": "돌림병으로 백성들이 목숨을 잃어 갑니다. 나라에 어두운 시절이 찾아왔습니다.",
"dur": "",
"yearly": {
"민심": "-3*"
},
"special": ""
},
{
"tag": "isOblivious",
"name": "천리안",
"desc": "앞으로 내리는 결단이 나라에 어떤 영향을 미칠지 훤히 내다볼 수 있습니다. 이것은 복일까요… 아니면 저주일까요?",
"dur": "",
"yearly": {},
"special": "special_clarity"
},
{
"tag": "isDeaf",
"name": "노환",
"desc": "사람 목소리가 잘 들리지 않아 말을 정확히 알아들을 수 없습니다. 왕은 이를 들킬까 두려워 아무에게도 알리지 않습니다.",
"dur": "",
"yearly": {},
"special": "special_deaf"
},
{
"tag": "isLover",
"name": "상사병",
"desc": "왕은 정인의 말에 조금도 맞서지 못합니다. 서원은 눈살을 찌푸리지만 백성들은 궁중 소문에 들썩입니다.",
"dur": "",
"yearly": {
"문법": "-1*",
"민심": "lock"
},
"special": "special_lover"
},
{
"tag": "intheDungeon",
"name": "지하 미궁에 갇힘",
"desc": "한번 지하 미궁에 발을 들이면 되돌아갈 수 없습니다. 왕이 없는 나라는 무법천지가 되어 금세 무너질 것입니다.",
"dur": "",
"yearly": {
"문법": "-1*",
"군사": "-1*",
"민심": "-1*",
"국고": "-1*"
},
"special": "special_dungeon"
},
{
"tag": "fortification_keep",
"name": "높은 산성",
"desc": "산성을 쌓으면 적의 침입을 막을 수 있습니다. 군사가 약해졌을 때 그 고마움을 알게 될 것입니다.",
"dur": "",
"yearly": {},
"special": ""
},
{
"tag": "strawberry_keep",
"name": "마지막 천도복숭아",
"desc": "세상에 남은 마지막 천도복숭아입니다. 왕은 이것을 단단히 지킵니다.",
"dur": "",
"yearly": {},
"special": ""
},
{
"tag": "centralbank_keep",
"name": "상평창의 뒷배",
"desc": "나라 살림이 어려울 때 상평창이 지켜 줍니다. 돈이 모자라면 엽전을 더 찍으면 됩니다!",
"dur": "",
"yearly": {},
"special": ""
},
{
"tag": "cathedral_keep",
"name": "하늘의 보살핌",
"desc": "집현전은 대대로 사랑받는 건물입니다. 서원이 약해지는 것을 막고 백성의 힘이 너무 세지지 않게 붙잡아 줍니다.",
"dur": "",
"yearly": {},
"special": ""
},
{
"tag": "hospital_keep",
"name": "혜민서",
"desc": "혜민서가 있으면 돌림병이나 재난의 피해를 줄일 수 있습니다.",
"dur": "",
"yearly": {},
"special": ""
},
{
"tag": "barn_keep",
"name": "의창의 곡식",
"desc": "의창을 짓는 데는 큰돈이 듭니다. 하지만 흉년에 대비하면 백성들이 들고일어나는 것을 막을 수 있습니다.",
"dur": "",
"yearly": {},
"special": ""
},
{
"tag": "excalibur_keep",
"name": "사인검",
"desc": "지하 미궁 깊은 곳에 잠든 전설의 칼을 손에 넣었습니다. 이무기와도 맞설 수 있을 것입니다.",
"dur": "",
"yearly": {},
"special": ""
},
{
"tag": "dice_keep",
"name": "속임 주사위",
"desc": "광대와의 주사위 홀짝 내기에서 절대 지지 않습니다.",
"dur": "",
"yearly": {},
"special": ""
},
{
"tag": "isStone",
"name": "푸른 단약",
"desc": "갑자기 기분이 좋아집니다. 그 뒤로 이상한 일을 숱하게 겪게 됩니다.",
"dur": "8",
"yearly": {},
"special": "special_stone"
},
{
"tag": "devil_visit",
"name": "도깨비와의 만남",
"desc": "시간은 사라지고 공간은 일그러지며 도깨비 왕이 다시 나타납니다. 입도 열리지 않습니다. 처음부터 입이 없었던 것처럼.",
"dur": "",
"yearly": {},
"special": "special_devilvisit"
},
{
"tag": "devil_curse_keep",
"name": "도깨비의 표식",
"desc": "다음에 왕이 \"그리하라\"고 답하는 사람은 죽습니다.",
"dur": "",
"yearly": {},
"special": "special_devilcurse"
},
{
"tag": "theocracy",
"name": "학사 정치",
"desc": "왕은 서원의 뜻에 조금도 맞서지 못합니다. 곳간 살림도 서원에 맡겨집니다.",
"dur": "30",
"yearly": {
"국고": "lock"
},
"special": "special_nochurch"
},
{
"tag": "spice_trade_keep",
"name": "비단길 교역",
"desc": "향신료 교역으로 해마다 이문을 얻습니다. 하지만 이웃 나라의 미움도 사기 쉽습니다.",
"dur": "30",
"yearly": {
"국고": ".5*"
},
"special": ""
},
{
"tag": "colonies_keep",
"name": "먼바다 섬 개척",
"desc": "먼바다에서 새 섬을 찾았습니다! 곳간이 해마다 불어나고 군사도 늘어납니다. 빠르게 강해지는 나라를 잘 다스릴 수 있을까요…?",
"dur": "",
"yearly": {
"군사": ".5*",
"국고": ".5*"
},
"special": "special_colonies"
},
{
"tag": "queendom",
"name": "중전의 치세",
"desc": "중전마마 만세! 군사들은 미덥지 않아 하지만 백성들은 중전을 사랑합니다.",
"dur": "",
"yearly": {
"군사": "-0.5*",
"민심": "0.5*"
},
"special": ""
},
{
"tag": "alphabetSoup",
"name": "뒤엉킨 글자",
"desc": "이 숲에는 무언가 문제가 있다…",
"dur": "",
"yearly": {
"문법": "-0.5*",
"군사": "0.5*",
"민심": "-0.5*",
"국고": "-0.5*"
},
"special": "",
"hold": "숲(forest) 줄거리 카드 제외에 따라 보류"
}
];
const GOALS = [
{
"key": "young",
"pre": "",
"title": "젊은 왕",
"desc": "5년 넘게 다스린다",
"cond": "age>5"
},
{
"key": "sword",
"pre": "",
"title": "결투의 왕",
"desc": "결투에서 이긴다",
"cond": "nb_duelwon_keep>0",
"hold": "1판에 결투 없음"
},
{
"key": "stone",
"pre": "",
"title": "환각의 왕",
"desc": "푸른 단약을 먹어 본다",
"cond": "isStone"
},
{
"key": "spy",
"pre": "",
"title": "음흉한 왕",
"desc": "밀정을 부린다",
"cond": "has_spy"
},
{
"key": "patron",
"pre": "",
"title": "풍류의 왕",
"desc": "소리꾼을 들인다",
"cond": "has_minstrel"
},
{
"key": "blessed",
"pre": "",
"title": "계시의 왕",
"desc": "얼치기 도사를 만나 준다",
"cond": "has_prophet"
},
{
"key": "lover",
"pre": "",
"title": "정인의 왕",
"desc": "사랑을 시작한다",
"cond": "isLover"
},
{
"key": "conspiracy",
"pre": "",
"title": "표적의 왕",
"desc": "암살 음모를 알아낸다",
"cond": "conspiracy_keep"
},
{
"key": "farmerwolf",
"pre": "",
"title": "주례의 왕",
"desc": "구미호의 혼례를 허락한다",
"cond": "farmerwolf"
},
{
"key": "senator",
"pre": "",
"title": "파멸의 왕",
"desc": "그림자 정승의 정체를 밝힌다",
"cond": "isSenator"
},
{
"key": "millenium",
"pre": "",
"title": "천년의 왕",
"desc": "왕조가 천 년을 맞는다",
"cond": "year>999"
},
{
"key": "survivor",
"pre": "",
"title": "생환의 왕",
"desc": "도깨비 왕을 속인다",
"cond": ">_devilfail"
},
{
"key": "wise",
"pre": "young",
"title": "현명한 왕",
"desc": "의원을 들인다",
"cond": "has_doctor"
},
{
"key": "sorcerer",
"pre": "",
"title": "술법의 왕",
"desc": "무녀를 만나 준다",
"cond": "has_witch"
},
{
"key": "dungeon",
"pre": "",
"title": "광기의 왕",
"desc": "지하 미궁에서 정신을 잃는다",
"cond": "intheDungeon"
},
{
"key": "spin",
"pre": "",
"title": "승리의 왕",
"desc": "백성에게 사랑받는 정치를 한다",
"cond": "spin_keep"
},
{
"key": "frozen",
"pre": "",
"title": "연단의 왕",
"desc": "\"얼어붙은 피\"를 찾아낸다",
"cond": "hopen_keep"
},
{
"key": "america",
"pre": "",
"title": "개척의 왕",
"desc": "먼바다의 새 섬을 찾는다",
"cond": "colonies_keep"
},
{
"key": "hatoful",
"pre": "",
"title": "까치왕",
"desc": "까치와 나들이를 한다",
"cond": "hatoful"
},
{
"key": "cathedral",
"pre": "",
"title": "학문의 왕",
"desc": "집현전을 짓는다",
"cond": "cathedral_keep"
},
{
"key": "hat",
"pre": "",
"title": "갓의 왕",
"desc": "맨머리 동포단의 정체를 밝힌다",
"cond": ">_headgear"
},
{
"key": "printer",
"pre": "",
"title": "저술의 왕",
"desc": "쇠붙이 활자를 만든다",
"cond": "printing_keep"
},
{
"key": "greedy",
"pre": "",
"title": "탐욕의 왕",
"desc": "제 주머니를 채운다",
"cond": "isGreedy"
},
{
"key": "paganist",
"pre": "",
"title": "편애의 왕",
"desc": "서원을 다섯 곳 세운다",
"cond": "nb_church_keep=5"
},
{
"key": "shrewd",
"pre": "",
"title": "술수의 왕",
"desc": "새 정치를 세운다",
"cond": "isShrewd"
},
{
"key": "devil",
"pre": "young",
"title": "도깨비의 왕",
"desc": "도깨비 왕을 만난다",
"cond": "devil_curse_keep"
},
{
"key": "father",
"pre": "",
"title": "국부의 왕",
"desc": "세자를 얻는다",
"cond": "has_prince"
},
{
"key": "homunculus",
"pre": "",
"title": "신선의 왕",
"desc": "항아리에 말을 건다",
"cond": "has_homunculus"
},
{
"key": "crusader",
"pre": "",
"title": "선동의 왕",
"desc": "북벌을 시작한다",
"cond": "crusade_keep"
},
{
"key": "peacemaker",
"pre": "",
"title": "평화의 왕",
"desc": "북벌을 끝낸다",
"cond": "isPeaceful"
},
{
"key": "fortune",
"pre": "",
"title": "점술의 왕",
"desc": "앞날을 내다본다",
"cond": ">_ftregal"
},
{
"key": "musician",
"pre": "",
"title": "풍악의 왕",
"desc": "군가를 짓는다",
"cond": ">_hymn_military"
},
{
"key": "killer",
"pre": "",
"title": "소심한 왕",
"desc": "보고도 못 본 척한다",
"cond": "isCoward"
},
{
"key": "onehand",
"pre": "",
"title": "외팔이 왕",
"desc": "한쪽 팔을 잃는다",
"cond": "isOnearm"
},
{
"key": "old",
"pre": "",
"title": "오래된 왕",
"desc": "20년 넘게 다스린다",
"cond": "age>20"
},
{
"key": "ancient",
"pre": "",
"title": "장수의 왕",
"desc": "40년 넘게 다스린다",
"cond": "age>40"
},
{
"key": "grizzled",
"pre": "",
"title": "백발의 왕",
"desc": "60년 넘게 다스린다",
"cond": "age>60"
},
{
"key": "senile",
"pre": "",
"title": "노쇠한 왕",
"desc": "80년 넘게 다스린다",
"cond": "age>80"
},
{
"key": "fossil",
"pre": "",
"title": "화석의 왕",
"desc": "100년 넘게 다스린다",
"cond": "age>100"
},
{
"key": "eternal",
"pre": "",
"title": "불사의 왕",
"desc": "200년 넘게 다스린다",
"cond": "age>200"
},
{
"key": "polyglot",
"pre": "",
"title": "말길의 왕",
"desc": "오랑캐를 설득해 돕게 한다",
"cond": ">_barbawon"
},
{
"key": "elephant",
"pre": "",
"title": "코끼리 왕",
"desc": "코끼리의 탈을 벗긴다",
"cond": ">_unmaskelephant"
},
{
"key": "partygoer",
"pre": "",
"title": "잔치의 왕",
"desc": "잔치를 망친다",
"cond": ">_party"
},
{
"key": "schizm",
"pre": "",
"title": "대립의 왕",
"desc": "서원을 두 갈래로 가른다",
"cond": ">_schizm"
},
{
"key": "birdy",
"pre": "",
"title": "결단의 왕",
"desc": "까치와 까마귀 가운데 하나를 고른다",
"cond": ">_birdchoice"
},
{
"key": "visionequality",
"pre": "",
"title": "고루 나눈 왕",
"desc": "중전과 나랏일을 나눈다",
"cond": ">_visionequality"
},
{
"key": "visiondeception",
"pre": "",
"title": "손님을 맞은 왕",
"desc": "하늘 손님을 만난다",
"cond": ">_visiondeception"
},
{
"key": "visionadventure",
"pre": "",
"title": "길 잃은 왕",
"desc": "책 속에서 길을 잃는다",
"cond": ">_visionadventure"
},
{
"key": "scribbled",
"pre": "",
"title": "낙서왕",
"desc": "이 세상을 그린 화공을 만난다",
"cond": ">_illumination_found",
"hold": "제작자 요소 제외"
}
];
if (typeof module !== 'undefined') module.exports = { DIALOGUE, EFFECTS, GOALS };
