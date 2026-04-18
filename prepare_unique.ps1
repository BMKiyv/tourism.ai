
Add-Type -AssemblyName System.Web

# 1. Дані з БД (повний список)
$dbJson = @"
[
{"id":1,"filename":"6759b56ad4b2a6b67daacc6b_64d53ee2f21eba751d016538_logo_word.svg"},
{"id":2,"filename":"617bf70476da2f78aff2a257_%D0%BC%D0%B5%D1%81%D0%BE%D0%BF%D0%BE%D1%82%D0%B0%D0%BC%D1%96%D1%8F.png"},
{"id":3,"filename":"60475776f00765de15e16e26_maxresdefault_live.jpg"},
{"id":4,"filename":"618cda41202b1d02f542571c_%D1%81%D0%B0%D0%B9%D1%82.jpg"},
{"id":5,"filename":"60e580a47c93b5043222e818_%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202021-07-07%20%D0%BE%2013.23.22.png"},
{"id":6,"filename":"609bb9e52dbe007c94e93057_%D0%B3%D0%BE%D1%82%D0%B5%D0%BB%D1%96-1205.jpg"},
{"id":7,"filename":"611a2b3f8430e80434bfea33_%D0%BC%D0%B5%D0%BC%D0%BE%D1%80%D0%B0%D0%BD%D0%B4%D1%83%D0%BC-%D1%81%D0%B0%D0%B8%CC%86%D1%82.jpg"},
{"id":8,"filename":"6050de3b9bb3493bc21e662c_conf-site.jpg"},
{"id":9,"filename":"61966467c953e3193aebc11e_%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE-%D0%BF%D0%BE%D1%81%D1%82.jpg"},
{"id":10,"filename":"66cc4bc11f168ab1ded5b495_%D0%94%D0%B5%D0%BD%D1%8C%20%D0%BF%D1%80%D0%B0%D0%BF%D0%BE%D1%80%D0%B0.png"},
{"id":11,"filename":"60ab3c067be1842babde4eb8_%D1%81%D0%B0%D0%B8%CC%86%D1%8202.jpg"},
{"id":12,"filename":"6061df873ae2ffc210064629_%D0%B3%D0%BE%D1%82%D0%B5%D0%BB%D1%96-%D1%81%D0%B0%D0%B8%CC%86%D1%82-30.jpg"},
{"id":13,"filename":"61e94c0c85070fa0db79d0d3_%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0-%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0.jpg"},
{"id":14,"filename":"661647faa7a45c77c474138f_70%20Albania2.png"},
{"id":15,"filename":"60e71ce39dbf759e53c9db58_%D1%81%D0%B0%D1%83%D0%B4%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0-%D0%B0%D1%80%D0%B0%D0%B2%D1%96%D1%8F-%D1%81%D0%B0%D0%B8%CC%86%D1%82.jpg"},
{"id":16,"filename":"649c236c21df4bff433f4671_%D0%BA%D1%96%D0%BD%D0%B1%D1%83%D1%80%D0%BD%20(1).png"},
{"id":17,"filename":"624ec9c063e891061eb593a9_277747599_291470329837165_5683063153423218557_n%20(1).jpeg"},
{"id":18,"filename":"64ef02aaf6d7ea0c547de4b8_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97%203.png"},
{"id":19,"filename":"69958a79919da6cdebb5dbb0_633908500_1229114649406057_3630594206883661416_n.jpg"},
{"id":20,"filename":"651ab7cf39165a93ef27358a_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97%206.png"},
{"id":21,"filename":"6572f89c58a37ebfda000017_%D1%81%D0%B0%D0%B9%D1%82_%D0%B1%D1%81%D0%B0%D0%BC%D1%96%D1%82.png"},
{"id":22,"filename":"661649108c1ec020de482b4e_%D1%81%D1%83%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%20%D1%80%D1%96%D1%88%D0%B5%D0%BD%D1%8C.jpg"},
{"id":23,"filename":"664f35861c19e60b2144b60d_%D1%81%D0%B0%D0%BC%D1%96%D1%82%20%D0%B0%D1%84%D1%96%D1%88%D0%B0%202.png"},
{"id":24,"filename":"64808a800a66ebd5f68415a6_%D0%B0%D0%BD%D0%BE%D0%BD%D1%81%20%D0%B7%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%82%D1%8F-100%20(3).jpg"},
{"id":25,"filename":"649ade967cc4f4d7ea7dfb38_%D0%B0%D0%BD%D0%BE%D0%BD%D1%81%20%D0%BB%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20(4).png"},
{"id":26,"filename":"64afcca54129bdae13faa055_%D0%B0%D0%BD%D0%BE%D0%BD%D1%81%20%D0%BF%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.png"},
{"id":27,"filename":"64ef0b4a16280c950ff1cf39_%D0%B0%D0%BD%D0%BE%D0%BD%D1%81%20%D0%B2%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.png"},
{"id":28,"filename":"6501ac8d322a87f2a65412d0_%D0%B0%D0%BD%D0%BE%D0%BD%D1%81%20%D0%BA%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.png"},
{"id":29,"filename":"65576f192c8e5ae5dc762ac1_%D0%B0%D0%BD%D0%BE%D0%BD%D1%81%20%D1%96%D0%B2-%D1%84%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.png"},
{"id":30,"filename":"645b56a5fe6221734996d5f3_3%20%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%B7%20%D0%BA%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D1%96%D1%97-100.jpg"},
{"id":31,"filename":"659d0be388b95718784d8cd5_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97%2013.png"},
{"id":32,"filename":"65ce2197ba4a84bf871130fd_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97_2.png"},
{"id":33,"filename":"65e711acada21c5d99cc2ea8_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97_1.png"},
{"id":34,"filename":"65e7138f7a1b5b2a343ff9a4_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97_3.png"},
{"id":35,"filename":"65f0561ffc5939271930a486_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97_4.png"},
{"id":36,"filename":"6618efe7f3b96de080b4f07f_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97_5.png"},
{"id":37,"filename":"663020204cd22f50b0bea411_zasydannya.png"},
{"id":38,"filename":"6690e55f6e14607d632693b0_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97_8.png"},
{"id":39,"filename":"6690e788241758074014f773_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97_7.png"},
{"id":40,"filename":"66be00a8c5732fe0df9069ad_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97_7.png"},
{"id":41,"filename":"64ddf402f2aab132e196b6f4_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97%202.png"},
{"id":42,"filename":"66c6f480977e20e95cad7fbc_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97_8.png"},
{"id":43,"filename":"66fbdc7bc8124ed9a8437236_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97_9.png"},
{"id":44,"filename":"671fa3adb591a757de82d9da_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97_10.png"},
{"id":45,"filename":"672a20ff69dad8f655fa97bc_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97_11.png"},
{"id":46,"filename":"67ed16e7eb242dd117354578_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97%2018.png"},
{"id":47,"filename":"6501abe0dc752e4a6ec895bb_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97%204.png"},
{"id":48,"filename":"651541c637adbf160e92f610_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97%205.png"},
{"id":49,"filename":"653629f0d15428e11c427755_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97%207.png"},
{"id":50,"filename":"6544c785636a5e075cef958c_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97%208.png"},
{"id":51,"filename":"65538a3ae799340e0509a7c3_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97%209.png"},
{"id":52,"filename":"65606211b959808d6ef62bf3_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97%2010.png"},
{"id":53,"filename":"659d0b0cfa3e9cf1c13fefbe_%D1%81%D0%B0%D0%B9%D1%82_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D1%96%D1%81%D1%96%D1%97%2012.png"},
{"id":54,"filename":"645b58a9a4862234de5f88c4_%D1%80%D0%BE%D0%B1%D0%BE%D1%87%D0%B0%20%D0%B7%D1%83%D1%81%D1%82%D1%80%D1%96%D1%87%209%20%D1%82%D1%80%D0%B0%D0%B2%D0%BD%D1%8F-100.jpg"},
{"id":55,"filename":"5fe46b748beffc5b0fa1b9b2_132280779_221223826171152_6500894438774688396_o.jpg"},
{"id":56,"filename":"5fe46c4e192db256b79de06e_132418128_220088876284647_4680141795598216315_o.jpg"},
{"id":57,"filename":"5feb0eb3f7f4184d1282cc41_132780205_222103149416553_3436388694343927592_n.jpg"},
{"id":58,"filename":"5feb01a9361e25a3b70a0a4f_134126027_224865969140271_3656966401070691901_o.png"},
{"id":59,"filename":"653bb053d869010a6bdbffd1_%D1%82%D1%80%D0%B5%D0%BD%D0%B4.png"},
{"id":60,"filename":"698b0e367b232c2e8984bad0_631092952_1224113736572815_8783784291628357713_n.jpg"},
{"id":61,"filename":"698affcf9ef05131df0115db_%D0%B1%D1%821.jpg"},
{"id":62,"filename":"64672d1d3fdf977abaf4d15b_%D0%91%D1%96%D1%94%D0%BD%D0%B0%D0%BB%D0%B5%202-100.jpg"},
{"id":63,"filename":"624ec5c11165844405320284_IMG_2967.PNG"},
{"id":64,"filename":"5feb0f9a74e5a8bf504e8e63_133413483_223109855982549_5260673426712235224_n.jpg"},
{"id":65,"filename":"684af1606eb36cf479332981_%D0%97%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F%20WhatsApp%2C%20%D0%B4%D0%B0%D1%82%D0%B0_%202025-06-11%20%D0%BE%2014.40.36_00dbfa01.jpg"},
{"id":66,"filename":"602aceba74d52b1438fdb8c3__116966301_1.jpg"},
{"id":67,"filename":"6311cad1e34d8b157fbad7ea_site_taxes_RGB.png"},
{"id":68,"filename":"63a5b045f797d5144c93c069_site_taxes_RGB.png"},
{"id":69,"filename":"62a9be2313fdaf1700181c90_IMG_3671.PNG"},
{"id":70,"filename":"603e75fe1253637a4ebd4bdb_o_1emekbgr96p51i4j14gpjeb1inf2a%20(1).jpg"},
{"id":71,"filename":"6121eb4110699279a1176fa7_%D0%9A%D0%BE%D0%BF%D0%B8%D1%8F%20AWB4-Gastroli-1920x750.png"},
{"id":72,"filename":"649adf7a45d1393ea13cf229_%D0%9C%D0%9E2.png"},
{"id":73,"filename":"65f051723a60f6a6c22e7e5e_%D1%86%D0%B8%D0%BA%D0%BB%20%D0%BB%D0%B5%D0%BA%D1%86%D1%96%D0%B9_2.png"},
{"id":74,"filename":"60f84268c58c1f9f446b6b10_%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202021-07-21%20%D0%BE%2018.50.51.png"},
{"id":75,"filename":"68486c153ca694bfc20790ee_1.jpg"},
{"id":76,"filename":"63fc7346bd129d630694cc96_15.02.22.png"},
{"id":77,"filename":"6038c7f11987e44d5f92f980_%D0%B0%D0%BD%D1%83%D0%BB%D1%8E%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F-%D1%81%D0%B0%D0%B8%CC%86%D1%82.jpg"},
{"id":78,"filename":"663020fabff74630930f4a69_camino.jpg"},
{"id":79,"filename":"624ecd61f263b5294bc102ff_IMG_2971.PNG"},
{"id":80,"filename":"6424303835b9c89494896926_%D0%B4%D0%B0%D1%80%D1%82%20%D1%96%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D1%83%D1%94%20%D1%80%D0%BE%D0%B1%D0%BE%D1%87%D1%83%20%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D1%83.png"},
{"id":81,"filename":"60bf6105165cd97f62edcec5_Dnipro-river-Kyiv-Ukraine.jpeg"},
{"id":82,"filename":"61f838c9016cf1b24acb67d1_%D0%BF%D1%80%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%80%D0%B5%D0%BD%D1%86%D1%96%D1%8F-%D1%81%D0%B0%D0%B8%CC%86%D1%82.jpg"},
{"id":83,"filename":"61fad1b11335bf68c4b3053c_%D0%BF%D0%B0%D1%80%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%80%D0%B5%D0%BD%D1%86%D1%96%D1%8F.jpg"},
{"id":84,"filename":"607e90160c8ff5adc27bd0f6_%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202021-04-16%20%D0%BE%2011.12.29.png"},
{"id":85,"filename":"60d2f19b8ddf054041a782cd_20210618144629-9634.jpeg"},
{"id":86,"filename":"649ae173182ef77e2b0abfc0_%D0%91%D0%B0%D0%BA%D0%BE%D1%82%D0%B0.jpg"},
{"id":87,"filename":"6321e63810386dcb6e455511_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%202-100.jpg"},
{"id":88,"filename":"652914199b0889da971cf688_%D0%A2%D0%86%D0%A6.png"},
{"id":89,"filename":"620a1cad50b1933658ab1b2b_%D0%B4%D0%BE%D1%81%D0%BB%D1%8B%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-%D1%81%D0%B0%D0%B9%D1%82.jpg"},
{"id":90,"filename":"63e0f89b2bca7bc8d724922a_%D1%84%D0%BE%D1%82%D0%BE%D0%B0%D1%80%D1%85%D1%96%D0%B2.png"},
{"id":91,"filename":"609e66079e8abf669a173435_photo-1584744982491-665216d95f8b.jpeg"},
{"id":92,"filename":"6359409a99eabe5d2f202b2b_1-100.png"},
{"id":93,"filename":"6409eddcf9c52415801af3b9_ITB_Berlin2.png"},
{"id":94,"filename":"659d0d78fe6b311c0dd06c9e_photo_2024-01-09_11-09-42.jpg"},
{"id":95,"filename":"6389cef70184d4accec80418_%D1%81%D0%B0%D0%B9%D1%82%2027.11.jpg"},
{"id":96,"filename":"665ed5fcb3e60144b91d48ec_%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D1%96%20%D1%81%D0%B5%D0%BB%D0%B0.png"},
{"id":97,"filename":"60f68066575dcb92f0021d34_photo_2021-07-20%2010.36.01.jpeg"},
{"id":98,"filename":"651ad5073eb455bb1086c882_site_cannes.png"},
{"id":99,"filename":"66865b4200723cb01d05093f_IMG_4429-1.jpg"},
{"id":100,"filename":"6409e7cab5811219c56c5e85_DSC00222_%D0%9B%D1%96%D1%81%D0%B0%D0%B1%D0%BE%D0%BD.jpg"},
{"id":114,"filename":"6037d8911142115e61c0d068_BRS_5217%20(1).JPG"},
{"id":341,"filename":"64ddf1d93fefc65fa8960f42_%D1%82%D1%83%D1%80%D0%B8%D0%B7%D0%BC.png"}
]
"@

# 2. Список файлів на диску
$diskFiles = Get-Content "files_list.txt"

$diskMap = @{}
foreach ($df in $diskFiles) {
    $norm = $df.ToLower().Replace(" ", "_").Replace("-", "_")
    $diskMap[$norm] = $df
}

$dbList = $dbJson | ConvertFrom-Json
$updates = @()

foreach ($item in $dbList) {
    $dbId = $item.id
    $dbFile = $item.filename
    $dbNorm = $dbFile.ToLower().Replace(" ", "_").Replace("-", "_")
    
    $bestMatch = $null
    foreach ($diskNorm in $diskMap.Keys) {
        if ($dbNorm.EndsWith($diskNorm)) {
            if ($null -eq $bestMatch -or $diskNorm.Length -gt $bestMatch.Norm.Length) {
                $bestMatch = @{ Norm = $diskNorm; Original = $diskMap[$diskNorm] }
            }
        }
    }
    
    if ($bestMatch) {
        $diskOriginal = $bestMatch.Original
        $extension = [System.IO.Path]::GetExtension($diskOriginal)
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($diskOriginal)
        
        # New Unique Name: {ID}_{BaseName}{Extension}
        $newFileName = "$($dbId)_$($baseName)$($extension)"
        
        $updates += @{ 
            id = $dbId; 
            oldDisk = $diskOriginal; 
            newUnique = $newFileName 
        }
    }
}

# Генеруємо команди копіювання файлів
$copyCommands = ""
foreach ($up in $updates) {
    $src = "public\media\$($up.oldDisk)"
    $dest = "public\media\$($up.newUnique)"
    $copyCommands += "if (Test-Path '$src') { Copy-Item '$src' '$dest' -Force }`n"
}
$copyCommands | Out-File -FilePath "rename_assets.ps1" -Encoding utf8

# Генеруємо SQL
$sql = ""
foreach ($up in $updates) {
    $safeNew = $up.newUnique.Replace("'", "''")
    $sql += "UPDATE public.media SET filename = '$safeNew' WHERE id = $($up.id);`n"
}
$sql | Out-File -FilePath "update_media_unique.sql" -Encoding utf8

Write-Host "Prepared $($updates.Count) unique matches."
