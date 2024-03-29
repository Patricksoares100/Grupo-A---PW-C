

// from: https://dados.gov.pt/pt/datasets/concelhos-de-portugal/

var CONCELHOS = [
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0101",
      "designacao": "Águeda",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/AGD1.png/100px-AGD1.png",
      "codigo": "AGD",
      "wikipedia": "https://pt.wikipedia.org/wiki/%C3%81gueda",
      "brasao": "https://dados.gov.pt/s/brasoes/0101.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0102",
      "designacao": "Albergaria-a-Velha",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/ABV.png/100px-ABV.png",
      "codigo": "ALB",
      "wikipedia": "https://pt.wikipedia.org/wiki/Albergaria-a-Velha",
      "brasao": "https://dados.gov.pt/s/brasoes/0102.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0103",
      "designacao": "Anadia",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Coat_of_arms_of_Anadia.png/100px-Coat_of_arms_of_Anadia.png",
      "wikipedia": "https://pt.wikipedia.org/wiki/Anadia_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0103.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0104",
      "designacao": "Arouca",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/ARC.png/100px-ARC.png",
      "codigo": "ARC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Arouca",
      "brasao": "https://dados.gov.pt/s/brasoes/0104.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0105",
      "designacao": "Aveiro",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AVR.png/100px-AVR.png",
      "codigo": "AVR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Aveiro",
      "brasao": "https://dados.gov.pt/s/brasoes/0105.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0106",
      "designacao": "Castelo de Paiva",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/CPV.png/100px-CPV.png",
      "codigo": "CPV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Castelo_de_Paiva",
      "brasao": "https://dados.gov.pt/s/brasoes/0106.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0107",
      "designacao": "Espinho",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/ESP1.png/100px-ESP1.png",
      "codigo": "ESP",
      "wikipedia": "https://pt.wikipedia.org/wiki/Espinho_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0107.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0108",
      "designacao": "Estarreja",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/ETR.png/100px-ETR.png",
      "codigo": "ETR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Estarreja",
      "brasao": "https://dados.gov.pt/s/brasoes/0108.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0109",
      "designacao": "Santa Maria da Feira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/VFR1.png/100px-VFR1.png",
      "codigo": "VFR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Santa_Maria_da_Feira",
      "brasao": "https://dados.gov.pt/s/brasoes/0109.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0110",
      "designacao": "Ílhavo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/ILH1.png/100px-ILH1.png",
      "codigo": "ILH",
      "wikipedia": "https://pt.wikipedia.org/wiki/%C3%8Dlhavo",
      "brasao": "https://dados.gov.pt/s/brasoes/0110.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0111",
      "designacao": "Mealhada",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/MLD.png/100px-MLD.png",
      "codigo": "MLD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Mealhada",
      "brasao": "https://dados.gov.pt/s/brasoes/0111.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0112",
      "designacao": "Murtosa",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/MRS.png/100px-MRS.png",
      "codigo": "MRS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Murtosa",
      "brasao": "https://dados.gov.pt/s/brasoes/0112.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0113",
      "designacao": "Oliveira de Azeméis",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/OAZ.png/100px-OAZ.png",
      "codigo": "OAZ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Oliveira_de_Azem%C3%A9is",
      "brasao": "https://dados.gov.pt/s/brasoes/0113.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0114",
      "designacao": "Oliveira do Bairro",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/OBR1.png/100px-OBR1.png",
      "codigo": "OBR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Oliveira_do_Bairro",
      "brasao": "https://dados.gov.pt/s/brasoes/0114.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0115",
      "designacao": "Ovar",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/OVR.png/100px-OVR.png",
      "codigo": "OVR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ovar",
      "brasao": "https://dados.gov.pt/s/brasoes/0115.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0116",
      "designacao": "São João da Madeira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/SJM.png/100px-SJM.png",
      "codigo": "SJM",
      "wikipedia": "https://pt.wikipedia.org/wiki/S%C3%A3o_Jo%C3%A3o_da_Madeira",
      "brasao": "https://dados.gov.pt/s/brasoes/0116.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0117",
      "designacao": "Sever do Vouga",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SVV.png/100px-SVV.png",
      "codigo": "SVV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Sever_do_Vouga",
      "brasao": "https://dados.gov.pt/s/brasoes/0117.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0118",
      "designacao": "Vagos",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/VGS.png/100px-VGS.png",
      "codigo": "VGS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vagos",
      "brasao": "https://dados.gov.pt/s/brasoes/0118.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0119",
      "designacao": "Vale de Cambra",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/VAC1.png/100px-VAC1.png",
      "codigo": "VLC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vale_de_Cambra",
      "brasao": "https://dados.gov.pt/s/brasoes/0119.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0201",
      "designacao": "Aljustrel",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/AJT.png/100px-AJT.png",
      "codigo": "AJT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Aljustrel",
      "brasao": "https://dados.gov.pt/s/brasoes/0201.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0202",
      "designacao": "Almodôvar",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/ADV.png/100px-ADV.png",
      "codigo": "ADV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Almod%C3%B4var",
      "brasao": "https://dados.gov.pt/s/brasoes/0202.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0203",
      "designacao": "Alvito",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/AVT.png/100px-AVT.png",
      "codigo": "AVT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Alvito",
      "brasao": "https://dados.gov.pt/s/brasoes/0203.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0204",
      "designacao": "Barrancos",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/BRC.png/100px-BRC.png",
      "codigo": "BRC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Barrancos",
      "brasao": "https://dados.gov.pt/s/brasoes/0204.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0205",
      "designacao": "Beja",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/BJA.png/100px-BJA.png",
      "codigo": "BJA",
      "wikipedia": "https://pt.wikipedia.org/wiki/Beja",
      "brasao": "https://dados.gov.pt/s/brasoes/0205.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0206",
      "designacao": "Castro Verde",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/CVR.png/100px-CVR.png",
      "codigo": "CVR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Castro_Verde",
      "brasao": "https://dados.gov.pt/s/brasoes/0206.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0207",
      "designacao": "Cuba",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/CBA.png/100px-CBA.png",
      "codigo": "CBA",
      "wikipedia": "https://pt.wikipedia.org/wiki/Cuba_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0207.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0208",
      "designacao": "Ferreira do Alentejo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/FAL.png/100px-FAL.png",
      "codigo": "FAL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ferreira_do_Alentejo",
      "brasao": "https://dados.gov.pt/s/brasoes/0208.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0209",
      "designacao": "Mértola",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/MTL.png/100px-MTL.png",
      "codigo": "MTL",
      "wikipedia": "https://pt.wikipedia.org/wiki/M%C3%A9rtola",
      "brasao": "https://dados.gov.pt/s/brasoes/0209.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0210",
      "designacao": "Moura",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/MRA1.png/100px-MRA1.png",
      "codigo": "MRA",
      "wikipedia": "https://pt.wikipedia.org/wiki/Moura",
      "brasao": "https://dados.gov.pt/s/brasoes/0210.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0211",
      "designacao": "Odemira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/ODM.png/100px-ODM.png",
      "codigo": "ODM",
      "wikipedia": "https://pt.wikipedia.org/wiki/Odemira",
      "brasao": "https://dados.gov.pt/s/brasoes/0211.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0212",
      "designacao": "Ourique",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/ORQ.png/100px-ORQ.png",
      "codigo": "ORQ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ourique",
      "brasao": "https://dados.gov.pt/s/brasoes/0212.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0213",
      "designacao": "Serpa",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/SRP.png/100px-SRP.png",
      "codigo": "SRP",
      "wikipedia": "https://pt.wikipedia.org/wiki/Serpa",
      "brasao": "https://dados.gov.pt/s/brasoes/0213.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0214",
      "designacao": "Vidigueira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/VDG.png/100px-VDG.png",
      "codigo": "VDG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vidigueira",
      "brasao": "https://dados.gov.pt/s/brasoes/0214.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0301",
      "designacao": "Amares",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/AMR.png/100px-AMR.png",
      "codigo": "AMR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Amares",
      "brasao": "https://dados.gov.pt/s/brasoes/0301.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0302",
      "designacao": "Barcelos",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/BCL.png/100px-BCL.png",
      "codigo": "BCL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Barcelos",
      "brasao": "https://dados.gov.pt/s/brasoes/0302.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0303",
      "designacao": "Braga",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/BRG.png/100px-BRG.png",
      "codigo": "BRG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Braga",
      "brasao": "https://dados.gov.pt/s/brasoes/0303.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0304",
      "designacao": "Cabeceiras de Basto",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/CBC.png/100px-CBC.png",
      "codigo": "CBC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Cabeceiras_de_Basto",
      "brasao": "https://dados.gov.pt/s/brasoes/0304.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0305",
      "designacao": "Celorico de Basto",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/CBT.png/100px-CBT.png",
      "codigo": "CBT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Celorico_de_Basto",
      "brasao": "https://dados.gov.pt/s/brasoes/0305.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0306",
      "designacao": "Esposende",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/EPS1.png/100px-EPS1.png",
      "codigo": "EPS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Esposende",
      "brasao": "https://dados.gov.pt/s/brasoes/0306.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0307",
      "designacao": "Fafe",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/FAF1.png/100px-FAF1.png",
      "codigo": "FAF",
      "wikipedia": "https://pt.wikipedia.org/wiki/Fafe",
      "brasao": "https://dados.gov.pt/s/brasoes/0307.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0308",
      "designacao": "Guimarães",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/GMR.png/100px-GMR.png",
      "codigo": "GMR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Guimar%C3%A3es",
      "brasao": "https://dados.gov.pt/s/brasoes/0308.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0309",
      "designacao": "Póvoa de Lanhoso",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/PVL.png/100px-PVL.png",
      "codigo": "PVL",
      "wikipedia": "https://pt.wikipedia.org/wiki/P%C3%B3voa_de_Lanhoso",
      "brasao": "https://dados.gov.pt/s/brasoes/0309.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0310",
      "designacao": "Terras de Bouro",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/TBR.png/100px-TBR.png",
      "codigo": "TBR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Terras_de_Bouro",
      "brasao": "https://dados.gov.pt/s/brasoes/0310.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0311",
      "designacao": "Vieira do Minho",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Crest_of_Vieira_do_Minho_municipality_%28Portugal%29.png/100px-Crest_of_Vieira_do_Minho_municipality_%28Portugal%29.png",
      "codigo": "VRM",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vieira_do_Minho",
      "brasao": "https://dados.gov.pt/s/brasoes/0311.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0312",
      "designacao": "Vila Nova de Famalicão",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/VNF1.png/100px-VNF1.png",
      "codigo": "VNF",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Nova_de_Famalic%C3%A3o",
      "brasao": "https://dados.gov.pt/s/brasoes/0312.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0313",
      "designacao": "Vila Verde",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Crest_of_Vila_Verde_municipality_%28Portugal%29.png/100px-Crest_of_Vila_Verde_municipality_%28Portugal%29.png",
      "codigo": "VVD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Verde",
      "brasao": "https://dados.gov.pt/s/brasoes/0313.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0314",
      "designacao": "Vizela",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/VIZ.png/100px-VIZ.png",
      "codigo": "VIZ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vizela",
      "brasao": "https://dados.gov.pt/s/brasoes/0314.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0401",
      "designacao": "Alfândega da Fé",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/AFE.png/100px-AFE.png",
      "codigo": "AFE",
      "wikipedia": "https://pt.wikipedia.org/wiki/Alf%C3%A2ndega_da_F%C3%A9",
      "brasao": "https://dados.gov.pt/s/brasoes/0401.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0402",
      "designacao": "Bragança",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bras%C3%A3o_de_Bragan%C3%A7a.png/100px-Bras%C3%A3o_de_Bragan%C3%A7a.png",
      "codigo": "BGC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Bragan%C3%A7a_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0402.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0403",
      "designacao": "Carrazeda de Ansiães",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CRZ.png/100px-CRZ.png",
      "codigo": "CRZ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Carrazeda_de_Ansi%C3%A3es",
      "brasao": "https://dados.gov.pt/s/brasoes/0403.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0404",
      "designacao": "Freixo de Espada à Cinta",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/FEC.png/100px-FEC.png",
      "codigo": "FEC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Freixo_de_Espada_%C3%A0_Cinta",
      "brasao": "https://dados.gov.pt/s/brasoes/0404.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0405",
      "designacao": "Macedo de Cavaleiros",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/MCD1.png/100px-MCD1.png",
      "codigo": "MCD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Macedo_de_Cavaleiros",
      "brasao": "https://dados.gov.pt/s/brasoes/0405.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0406",
      "designacao": "Miranda do Douro",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/MDR.png/100px-MDR.png",
      "codigo": "MDR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Miranda_do_Douro",
      "brasao": "https://dados.gov.pt/s/brasoes/0406.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0407",
      "designacao": "Mirandela",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/MDL1.png/100px-MDL1.png",
      "codigo": "MDL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Mirandela",
      "brasao": "https://dados.gov.pt/s/brasoes/0407.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0408",
      "designacao": "Mogadouro",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/MGD.png/100px-MGD.png",
      "codigo": "MGD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Mogadouro",
      "brasao": "https://dados.gov.pt/s/brasoes/0408.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0409",
      "designacao": "Torre de Moncorvo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/TMC.png/100px-TMC.png",
      "codigo": "TMC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Torre_de_Moncorvo",
      "brasao": "https://dados.gov.pt/s/brasoes/0409.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0410",
      "designacao": "Vila Flor",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/VFL.png/100px-VFL.png",
      "codigo": "VFL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Flor",
      "brasao": "https://dados.gov.pt/s/brasoes/0410.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0411",
      "designacao": "Vimioso",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/VMS.png/100px-VMS.png",
      "codigo": "VMS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vimioso",
      "brasao": "https://dados.gov.pt/s/brasoes/0411.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0412",
      "designacao": "Vinhais",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/VNH.png/100px-VNH.png",
      "codigo": "VNH",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vinhais_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0412.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0501",
      "designacao": "Belmonte",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/BMT.png/100px-BMT.png",
      "codigo": "BMT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Belmonte_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0501.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0502",
      "designacao": "Castelo Branco",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Coat_of_Arms_of_Castelo_Branco.png/100px-Coat_of_Arms_of_Castelo_Branco.png",
      "codigo": "CTB",
      "wikipedia": "https://pt.wikipedia.org/wiki/Castelo_Branco",
      "brasao": "https://dados.gov.pt/s/brasoes/0502.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0503",
      "designacao": "Covilhã",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/CVL.png/100px-CVL.png",
      "codigo": "CVL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Covilh%C3%A3",
      "brasao": "https://dados.gov.pt/s/brasoes/0503.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0504",
      "designacao": "Fundão",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/FND1.png/100px-FND1.png",
      "codigo": "FND",
      "wikipedia": "https://pt.wikipedia.org/wiki/Fund%C3%A3o_(Castelo_Branco)",
      "brasao": "https://dados.gov.pt/s/brasoes/0504.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0505",
      "designacao": "Idanha-a-Nova",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/IDN.png/100px-IDN.png",
      "codigo": "IDN",
      "wikipedia": "https://pt.wikipedia.org/wiki/Idanha-a-Nova",
      "brasao": "https://dados.gov.pt/s/brasoes/0505.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0506",
      "designacao": "Oleiros",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/OLR.png/100px-OLR.png",
      "codigo": "OLR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Oleiros",
      "brasao": "https://dados.gov.pt/s/brasoes/0506.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0507",
      "designacao": "Penamacor",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/PNC1.png/100px-PNC1.png",
      "codigo": "PNC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Penamacor",
      "brasao": "https://dados.gov.pt/s/brasoes/0507.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0508",
      "designacao": "Proença-a-Nova",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/PNV.png/100px-PNV.png",
      "codigo": "PNV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Proen%C3%A7a-a-Nova",
      "brasao": "https://dados.gov.pt/s/brasoes/0508.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0509",
      "designacao": "Sertã",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/SRT.png/100px-SRT.png",
      "codigo": "SRT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Sert%C3%A3",
      "brasao": "https://dados.gov.pt/s/brasoes/0509.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0510",
      "designacao": "Vila de Rei",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/VLR.png/100px-VLR.png",
      "codigo": "VLR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_de_Rei",
      "brasao": "https://dados.gov.pt/s/brasoes/0510.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0511",
      "designacao": "Vila Velha de Ródão",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/VVR.png/100px-VVR.png",
      "codigo": "VVR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Velha_de_R%C3%B3d%C3%A3o",
      "brasao": "https://dados.gov.pt/s/brasoes/0511.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0601",
      "designacao": "Arganil",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/AGN.png/100px-AGN.png",
      "codigo": "AGN",
      "wikipedia": "https://pt.wikipedia.org/wiki/Arganil",
      "brasao": "https://dados.gov.pt/s/brasoes/0601.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0602",
      "designacao": "Cantanhede",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/CNT1.png/100px-CNT1.png",
      "codigo": "CNT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Cantanhede_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0602.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0603",
      "designacao": "Coimbra",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/CBR.png/100px-CBR.png",
      "codigo": "CBR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Coimbra",
      "brasao": "https://dados.gov.pt/s/brasoes/0603.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0604",
      "designacao": "Condeixa-a-Nova",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/CDN.png/100px-CDN.png",
      "codigo": "CDN",
      "wikipedia": "https://pt.wikipedia.org/wiki/Condeixa-a-Nova",
      "brasao": "https://dados.gov.pt/s/brasoes/0604.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0605",
      "designacao": "Figueira da Foz",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FIG.png/100px-FIG.png",
      "codigo": "FIG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Figueira_da_Foz",
      "brasao": "https://dados.gov.pt/s/brasoes/0605.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0606",
      "designacao": "Góis",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/GOI.png/100px-GOI.png",
      "codigo": "GOI",
      "wikipedia": "https://pt.wikipedia.org/wiki/G%C3%B3is",
      "brasao": "https://dados.gov.pt/s/brasoes/0606.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0607",
      "designacao": "Lousã",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/LSA.png/100px-LSA.png",
      "codigo": "LSA",
      "wikipedia": "https://pt.wikipedia.org/wiki/Lous%C3%A3",
      "brasao": "https://dados.gov.pt/s/brasoes/0607.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0608",
      "designacao": "Mira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/MIR.png/100px-MIR.png",
      "codigo": "MIR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Mira_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0608.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0609",
      "designacao": "Miranda do Corvo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/MCV.png/100px-MCV.png",
      "codigo": "MCV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Miranda_do_Corvo",
      "brasao": "https://dados.gov.pt/s/brasoes/0609.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0610",
      "designacao": "Montemor-o-Velho",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/MMV.png/100px-MMV.png",
      "codigo": "MMV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Montemor-o-Velho",
      "brasao": "https://dados.gov.pt/s/brasoes/0610.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0611",
      "designacao": "Oliveira do Hospital",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/OHP1.png/100px-OHP1.png",
      "codigo": "OHP",
      "wikipedia": "https://pt.wikipedia.org/wiki/Oliveira_do_Hospital",
      "brasao": "https://dados.gov.pt/s/brasoes/0611.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0612",
      "designacao": "Pampilhosa da Serra",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/PPS.png/100px-PPS.png",
      "codigo": "PPS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Pampilhosa_da_Serra",
      "brasao": "https://dados.gov.pt/s/brasoes/0612.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0613",
      "designacao": "Penacova",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/PCV.png/100px-PCV.png",
      "codigo": "PCV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Penacova",
      "brasao": "https://dados.gov.pt/s/brasoes/0613.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0614",
      "designacao": "Penela",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/PNL.png/100px-PNL.png",
      "codigo": "PNL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Penela",
      "brasao": "https://dados.gov.pt/s/brasoes/0614.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0615",
      "designacao": "Soure",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/SRE.png/100px-SRE.png",
      "codigo": "SRE",
      "wikipedia": "https://pt.wikipedia.org/wiki/Soure_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0615.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0616",
      "designacao": "Tábua",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/TBU.png/100px-TBU.png",
      "codigo": "TBU",
      "wikipedia": "https://pt.wikipedia.org/wiki/T%C3%A1bua",
      "brasao": "https://dados.gov.pt/s/brasoes/0616.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0617",
      "designacao": "Vila Nova de Poiares",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/PRS.png/100px-PRS.png",
      "codigo": "PRS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Nova_de_Poiares",
      "brasao": "https://dados.gov.pt/s/brasoes/0617.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0701",
      "designacao": "Alandroal",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/ADL.png/100px-ADL.png",
      "codigo": "ADL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Alandroal",
      "brasao": "https://dados.gov.pt/s/brasoes/0701.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0702",
      "designacao": "Arraiolos",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/ARL.png/100px-ARL.png",
      "codigo": "ARL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Arraiolos",
      "brasao": "https://dados.gov.pt/s/brasoes/0702.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0703",
      "designacao": "Borba",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/BRB.png/100px-BRB.png",
      "codigo": "BRB",
      "wikipedia": "https://pt.wikipedia.org/wiki/Borba_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0703.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0704",
      "designacao": "Estremoz",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/ETZ.png/100px-ETZ.png",
      "codigo": "ETZ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Estremoz",
      "brasao": "https://dados.gov.pt/s/brasoes/0704.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0705",
      "designacao": "Évora",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/COA_of_%C3%89vora_municipality_%28Portugal%29.png/100px-COA_of_%C3%89vora_municipality_%28Portugal%29.png",
      "codigo": "EVR",
      "wikipedia": "https://pt.wikipedia.org/wiki/%C3%89vora",
      "brasao": "https://dados.gov.pt/s/brasoes/0705.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0706",
      "designacao": "Montemor-o-Novo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/MMN1.png/100px-MMN1.png",
      "codigo": "MMN",
      "wikipedia": "https://pt.wikipedia.org/wiki/Montemor-o-Novo",
      "brasao": "https://dados.gov.pt/s/brasoes/0706.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0707",
      "designacao": "Mora",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/MOR.png/100px-MOR.png",
      "codigo": "MOR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Mora_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0707.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0708",
      "designacao": "Mourão",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/MOU.png/100px-MOU.png",
      "codigo": "MOU",
      "wikipedia": "https://pt.wikipedia.org/wiki/Mour%C3%A3o",
      "brasao": "https://dados.gov.pt/s/brasoes/0708.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0709",
      "designacao": "Portel",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/PRL.png/100px-PRL.png",
      "codigo": "PRL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Portel_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0709.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0710",
      "designacao": "Redondo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/RDD.png/100px-RDD.png",
      "codigo": "RDD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Redondo",
      "brasao": "https://dados.gov.pt/s/brasoes/0710.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0711",
      "designacao": "Reguengos de Monsaraz",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/RMZ.png/100px-RMZ.png",
      "codigo": "RMZ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Reguengos_de_Monsaraz",
      "brasao": "https://dados.gov.pt/s/brasoes/0711.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0712",
      "designacao": "Vendas Novas",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/VND1.png/100px-VND1.png",
      "codigo": "VND",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vendas_Novas",
      "brasao": "https://dados.gov.pt/s/brasoes/0712.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0713",
      "designacao": "Viana do Alentejo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/VNT.png/100px-VNT.png",
      "codigo": "VNT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Viana_do_Alentejo",
      "brasao": "https://dados.gov.pt/s/brasoes/0713.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0714",
      "designacao": "Vila Viçosa",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/VVC.png/100px-VVC.png",
      "codigo": "VVC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Vi%C3%A7osa",
      "brasao": "https://dados.gov.pt/s/brasoes/0714.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0801",
      "designacao": "Albufeira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/COA_of_Albufeira_municipality_%28Portugal%29.png/100px-COA_of_Albufeira_municipality_%28Portugal%29.png",
      "codigo": "ABF",
      "wikipedia": "https://pt.wikipedia.org/wiki/Albufeira",
      "brasao": "https://dados.gov.pt/s/brasoes/0801.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0802",
      "designacao": "Alcoutim",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Alcoutim_municipality_coat_of_arms.png/100px-Alcoutim_municipality_coat_of_arms.png",
      "codigo": "ACT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Alcoutim",
      "brasao": "https://dados.gov.pt/s/brasoes/0802.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0803",
      "designacao": "Aljezur",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/COA_of_Aljezur_municipality_%28Portugal%29.png/100px-COA_of_Aljezur_municipality_%28Portugal%29.png",
      "codigo": "AJZ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Aljezur",
      "brasao": "https://dados.gov.pt/s/brasoes/0803.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0804",
      "designacao": "Castro Marim",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/COA_of_Castro_Marim_municipality_%28Portugal%29.png/100px-COA_of_Castro_Marim_municipality_%28Portugal%29.png",
      "codigo": "CTM",
      "wikipedia": "https://pt.wikipedia.org/wiki/Castro_Marim",
      "brasao": "https://dados.gov.pt/s/brasoes/0804.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0805",
      "designacao": "Faro",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/FAR.png/100px-FAR.png",
      "codigo": "FAR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Faro",
      "brasao": "https://dados.gov.pt/s/brasoes/0805.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0806",
      "designacao": "Lagoa",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Lagoa%2C_A%C3%A7ores_%28bras%C3%A3o%29.png/100px-Lagoa%2C_A%C3%A7ores_%28bras%C3%A3o%29.png",
      "codigo": "LAG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Lagoa_(A%C3%A7ores)",
      "brasao": "https://dados.gov.pt/s/brasoes/0806.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0807",
      "designacao": "Lagos",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/LGS.png/100px-LGS.png",
      "codigo": "LGS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Lagos_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0807.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0808",
      "designacao": "Loulé",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/COA_of_Loul%C3%A9_municipality_%28Portugal%29.png/100px-COA_of_Loul%C3%A9_municipality_%28Portugal%29.png",
      "codigo": "LLE",
      "wikipedia": "https://pt.wikipedia.org/wiki/Loul%C3%A9",
      "brasao": "https://dados.gov.pt/s/brasoes/0808.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0809",
      "designacao": "Monchique",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Crest_of_Monchique%2C_Portugal.png/100px-Crest_of_Monchique%2C_Portugal.png",
      "codigo": "MCQ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Monchique",
      "brasao": "https://dados.gov.pt/s/brasoes/0809.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0810",
      "designacao": "Olhão",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/OLH2.png/100px-OLH2.png",
      "codigo": "OLH",
      "wikipedia": "https://pt.wikipedia.org/wiki/Olh%C3%A3o_da_Restaura%C3%A7%C3%A3o",
      "brasao": "https://dados.gov.pt/s/brasoes/0810.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0811",
      "designacao": "Portimão",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/COA_of_Portim%C3%A3o_municipality_%28Portugal%29.png/100px-COA_of_Portim%C3%A3o_municipality_%28Portugal%29.png",
      "codigo": "PTM",
      "wikipedia": "https://pt.wikipedia.org/wiki/Portim%C3%A3o",
      "brasao": "https://dados.gov.pt/s/brasoes/0811.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0812",
      "designacao": "São Brás de Alportel",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/COA_of_S%C3%A3o_Br%C3%A1s_de_Alportel_municipality_%28Portugal%29.png/100px-COA_of_S%C3%A3o_Br%C3%A1s_de_Alportel_municipality_%28Portugal%29.png",
      "codigo": "SBA",
      "wikipedia": "https://pt.wikipedia.org/wiki/S%C3%A3o_Br%C3%A1s_de_Alportel",
      "brasao": "https://dados.gov.pt/s/brasoes/0812.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0813",
      "designacao": "Silves",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/COA_of_Silves_municipality_%28Portugal%29.png/100px-COA_of_Silves_municipality_%28Portugal%29.png",
      "codigo": "SLV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Silves_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0813.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0814",
      "designacao": "Tavira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/COA_of_Tavira_municipality_%28Portugal%29.png/100px-COA_of_Tavira_municipality_%28Portugal%29.png",
      "codigo": "TVR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Tavira",
      "brasao": "https://dados.gov.pt/s/brasoes/0814.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0815",
      "designacao": "Vila do Bispo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/COA_of_Vila_do_Bispo_municipality_%28Portugal%29.png/100px-COA_of_Vila_do_Bispo_municipality_%28Portugal%29.png",
      "codigo": "VBP",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_do_Bispo",
      "brasao": "https://dados.gov.pt/s/brasoes/0815.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0816",
      "designacao": "Vila Real de Santo António",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/COA_of_Vila_Real_de_Santo_Ant%C3%B3nio_municipality_%28Portugal%29.png/100px-COA_of_Vila_Real_de_Santo_Ant%C3%B3nio_municipality_%28Portugal%29.png",
      "codigo": "VRS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Real_de_Santo_Ant%C3%B3nio",
      "brasao": "https://dados.gov.pt/s/brasoes/0816.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0901",
      "designacao": "Aguiar da Beira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/AGB.png/100px-AGB.png",
      "codigo": "AGB",
      "wikipedia": "https://pt.wikipedia.org/wiki/Aguiar_da_Beira",
      "brasao": "https://dados.gov.pt/s/brasoes/0901.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0902",
      "designacao": "Almeida",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/ALD.png/100px-ALD.png",
      "codigo": "ALD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Almeida",
      "brasao": "https://dados.gov.pt/s/brasoes/0902.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0903",
      "designacao": "Celorico da Beira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/CLB.png/100px-CLB.png",
      "codigo": "CLB",
      "wikipedia": "https://pt.wikipedia.org/wiki/Celorico_da_Beira",
      "brasao": "https://dados.gov.pt/s/brasoes/0903.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0904",
      "designacao": "Figueira de Castelo Rodrigo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/FCR.png/100px-FCR.png",
      "codigo": "FCR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Figueira_de_Castelo_Rodrigo",
      "brasao": "https://dados.gov.pt/s/brasoes/0904.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0905",
      "designacao": "Fornos de Algodres",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/FAG.png/100px-FAG.png",
      "codigo": "FAG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Fornos_de_Algodres",
      "brasao": "https://dados.gov.pt/s/brasoes/0905.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0906",
      "designacao": "Gouveia",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/GVA1.png/100px-GVA1.png",
      "codigo": "GVA",
      "wikipedia": "https://pt.wikipedia.org/wiki/Gouveia_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/0906.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0907",
      "designacao": "Guarda",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/GRD.png/100px-GRD.png",
      "codigo": "GRD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Guarda",
      "brasao": "https://dados.gov.pt/s/brasoes/0907.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0908",
      "designacao": "Manteigas",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/MTG.png/100px-MTG.png",
      "codigo": "MTG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Manteigas",
      "brasao": "https://dados.gov.pt/s/brasoes/0908.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0909",
      "designacao": "Mêda",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/MDA-m%C3%AAda.JPG/100px-MDA-m%C3%AAda.JPG",
      "codigo": "MED",
      "wikipedia": "https://pt.wikipedia.org/wiki/M%C3%AAda",
      "brasao": "https://dados.gov.pt/s/brasoes/0909.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0910",
      "designacao": "Pinhel",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/PNH.png/100px-PNH.png",
      "codigo": "PNH",
      "wikipedia": "https://pt.wikipedia.org/wiki/Pinhel",
      "brasao": "https://dados.gov.pt/s/brasoes/0910.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0911",
      "designacao": "Sabugal",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/SBG.png/100px-SBG.png",
      "codigo": "SBG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Sabugal",
      "brasao": "https://dados.gov.pt/s/brasoes/0911.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0912",
      "designacao": "Seia",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/SEI1.png/100px-SEI1.png",
      "codigo": "SEI",
      "wikipedia": "https://pt.wikipedia.org/wiki/Seia",
      "brasao": "https://dados.gov.pt/s/brasoes/0912.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0913",
      "designacao": "Trancoso",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/TCS.png/100px-TCS.png",
      "codigo": "TCS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Trancoso",
      "brasao": "https://dados.gov.pt/s/brasoes/0913.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "0914",
      "designacao": "Vila Nova de Foz Côa",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/VLF1.png/100px-VLF1.png",
      "codigo": "VLF",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Nova_de_Foz_C%C3%B4a",
      "brasao": "https://dados.gov.pt/s/brasoes/0914.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1001",
      "designacao": "Alcobaça",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/ACB1.png/100px-ACB1.png",
      "codigo": "ACB",
      "wikipedia": "https://pt.wikipedia.org/wiki/Alcoba%C3%A7a_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1001.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1002",
      "designacao": "Alvaiázere",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/AVZ.png/100px-AVZ.png",
      "codigo": "AVZ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Alvai%C3%A1zere",
      "brasao": "https://dados.gov.pt/s/brasoes/1002.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1003",
      "designacao": "Ansião",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Crest_of_Ansi%C3%A3o_%28Portugal%29.png/100px-Crest_of_Ansi%C3%A3o_%28Portugal%29.png",
      "codigo": "ANS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ansi%C3%A3o",
      "brasao": "https://dados.gov.pt/s/brasoes/1003.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1004",
      "designacao": "Batalha",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/BTL.png/100px-BTL.png",
      "codigo": "BTL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Batalha_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1004.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1005",
      "designacao": "Bombarral",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/BBR.png/100px-BBR.png",
      "codigo": "BBR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Bombarral",
      "brasao": "https://dados.gov.pt/s/brasoes/1005.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1006",
      "designacao": "Caldas da Rainha",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/CLD.png/100px-CLD.png",
      "codigo": "CLD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Caldas_da_Rainha",
      "brasao": "https://dados.gov.pt/s/brasoes/1006.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1007",
      "designacao": "Castanheira de Pêra",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/CPR.png/100px-CPR.png",
      "codigo": "CPR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Castanheira_de_Pera",
      "brasao": "https://dados.gov.pt/s/brasoes/1007.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1008",
      "designacao": "Figueiró dos Vinhos",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/FVN.png/100px-FVN.png",
      "codigo": "FVN",
      "wikipedia": "https://pt.wikipedia.org/wiki/Figueir%C3%B3_dos_Vinhos",
      "brasao": "https://dados.gov.pt/s/brasoes/1008.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1009",
      "designacao": "Leiria",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/LRA.png/100px-LRA.png",
      "codigo": "LRA",
      "wikipedia": "https://pt.wikipedia.org/wiki/Leiria",
      "brasao": "https://dados.gov.pt/s/brasoes/1009.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1010",
      "designacao": "Marinha Grande",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/MGR1.png/100px-MGR1.png",
      "codigo": "MGR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Marinha_Grande",
      "brasao": "https://dados.gov.pt/s/brasoes/1010.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1011",
      "designacao": "Nazaré",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/NZR.png/100px-NZR.png",
      "codigo": "NZR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Nazar%C3%A9_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1011.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1012",
      "designacao": "Óbidos",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/OBD.png/100px-OBD.png",
      "codigo": "OBD",
      "wikipedia": "https://pt.wikipedia.org/wiki/%C3%93bidos_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1012.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1013",
      "designacao": "Pedrógão Grande",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/PGR.png/100px-PGR.png",
      "codigo": "PGR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Pedr%C3%B3g%C3%A3o_Grande",
      "brasao": "https://dados.gov.pt/s/brasoes/1013.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1014",
      "designacao": "Peniche",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bras%C3%A3o_de_Peniche.jpg/100px-Bras%C3%A3o_de_Peniche.jpg",
      "wikipedia": "https://pt.wikipedia.org/wiki/Peniche",
      "brasao": "https://dados.gov.pt/s/brasoes/1014.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1015",
      "designacao": "Pombal",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PBL1.png/100px-PBL1.png",
      "codigo": "PBL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Pombal_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1015.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1016",
      "designacao": "Porto de Mós",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/PMS.png/100px-PMS.png",
      "codigo": "PMS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Porto_de_M%C3%B3s",
      "brasao": "https://dados.gov.pt/s/brasoes/1016.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1101",
      "designacao": "Alenquer",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/ALQ.png/100px-ALQ.png",
      "codigo": "ALQ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Alenquer_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1101.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1102",
      "designacao": "Arruda dos Vinhos",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/ARV.png/100px-ARV.png",
      "codigo": "ARV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Arruda_dos_Vinhos",
      "brasao": "https://dados.gov.pt/s/brasoes/1102.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1103",
      "designacao": "Azambuja",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/AZB.png/100px-AZB.png",
      "codigo": "AZB",
      "wikipedia": "https://pt.wikipedia.org/wiki/Azambuja",
      "brasao": "https://dados.gov.pt/s/brasoes/1103.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1104",
      "designacao": "Cadaval",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CDV.png/100px-CDV.png",
      "codigo": "CDV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Cadaval",
      "brasao": "https://dados.gov.pt/s/brasoes/1104.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1105",
      "designacao": "Cascais",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/CSC.png/100px-CSC.png",
      "codigo": "CSC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Cascais",
      "brasao": "https://dados.gov.pt/s/brasoes/1105.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1106",
      "designacao": "Lisboa",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/LSB.png/100px-LSB.png",
      "codigo": "LSB",
      "wikipedia": "https://pt.wikipedia.org/wiki/Lisboa",
      "brasao": "https://dados.gov.pt/s/brasoes/1106.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1107",
      "designacao": "Loures",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/LRS.png/100px-LRS.png",
      "codigo": "LRS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Loures",
      "brasao": "https://dados.gov.pt/s/brasoes/1107.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1108",
      "designacao": "Lourinhã",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/LNH.png/100px-LNH.png",
      "codigo": "LNH",
      "wikipedia": "https://pt.wikipedia.org/wiki/Lourinh%C3%A3",
      "brasao": "https://dados.gov.pt/s/brasoes/1108.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1109",
      "designacao": "Mafra",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/MFR.png/100px-MFR.png",
      "codigo": "MFR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Mafra_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1109.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1110",
      "designacao": "Oeiras",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/OER.png/100px-OER.png",
      "codigo": "OER",
      "wikipedia": "https://pt.wikipedia.org/wiki/Oeiras_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1110.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1111",
      "designacao": "Sintra",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SNT.png/100px-SNT.png",
      "codigo": "SNT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Sintra",
      "brasao": "https://dados.gov.pt/s/brasoes/1111.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1112",
      "designacao": "Sobral de Monte Agraço",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SMA.png/100px-SMA.png",
      "codigo": "SMA",
      "wikipedia": "https://pt.wikipedia.org/wiki/Sobral_de_Monte_Agra%C3%A7o",
      "brasao": "https://dados.gov.pt/s/brasoes/1112.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1113",
      "designacao": "Torres Vedras",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/TVD1.png/100px-TVD1.png",
      "codigo": "TVD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Torres_Vedras",
      "brasao": "https://dados.gov.pt/s/brasoes/1113.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1114",
      "designacao": "Vila Franca de Xira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/VFX1.png/100px-VFX1.png",
      "codigo": "VFX",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Franca_de_Xira",
      "brasao": "https://dados.gov.pt/s/brasoes/1114.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1115",
      "designacao": "Amadora",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cidade_da_Amadora.png/100px-Cidade_da_Amadora.png",
      "codigo": "AMD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Amadora",
      "brasao": "https://dados.gov.pt/s/brasoes/1115.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1116",
      "designacao": "Odivelas",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Odivelas_bras%C3%A3o-1.jpg/100px-Odivelas_bras%C3%A3o-1.jpg",
      "codigo": "ODV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Odivelas",
      "brasao": "https://dados.gov.pt/s/brasoes/1116.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1201",
      "designacao": "Alter do Chão",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/ALT.png/100px-ALT.png",
      "codigo": "ALT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Alter_do_Ch%C3%A3o",
      "brasao": "https://dados.gov.pt/s/brasoes/1201.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1202",
      "designacao": "Arronches",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/ARR.png/100px-ARR.png",
      "codigo": "ARR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Arronches",
      "brasao": "https://dados.gov.pt/s/brasoes/1202.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1203",
      "designacao": "Avis",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AVS.png/100px-AVS.png",
      "codigo": "AVS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Avis",
      "brasao": "https://dados.gov.pt/s/brasoes/1203.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1204",
      "designacao": "Campo Maior",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/CMR.png/100px-CMR.png",
      "codigo": "CMR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Campo_Maior_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1204.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1205",
      "designacao": "Castelo de Vide",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/CVD.png/100px-CVD.png",
      "codigo": "CVD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Castelo_de_Vide",
      "brasao": "https://dados.gov.pt/s/brasoes/1205.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1206",
      "designacao": "Crato",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Crest_of_Crato_municipality_%28Portugal%29.png/100px-Crest_of_Crato_municipality_%28Portugal%29.png",
      "codigo": "CRT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Crato_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1206.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1207",
      "designacao": "Elvas",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ELV.png/100px-ELV.png",
      "codigo": "ELV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Elvas",
      "brasao": "https://dados.gov.pt/s/brasoes/1207.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1208",
      "designacao": "Fronteira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FTR.png/100px-FTR.png",
      "codigo": "FTR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Fronteira_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1208.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1209",
      "designacao": "Gavião",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/GAV.png/100px-GAV.png",
      "codigo": "GAV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Gavi%C3%A3o_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1209.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1210",
      "designacao": "Marvão",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/MRV.png/100px-MRV.png",
      "codigo": "MRV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Marv%C3%A3o",
      "brasao": "https://dados.gov.pt/s/brasoes/1210.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1211",
      "designacao": "Monforte",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/MFT.png/100px-MFT.png",
      "codigo": "MFT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Monforte",
      "brasao": "https://dados.gov.pt/s/brasoes/1211.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1212",
      "designacao": "Nisa",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NIS.png/100px-NIS.png",
      "codigo": "NIS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Nisa",
      "brasao": "https://dados.gov.pt/s/brasoes/1212.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1213",
      "designacao": "Ponte de Sor",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/PSR.png/100px-PSR.png",
      "codigo": "PSR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ponte_de_Sor",
      "brasao": "https://dados.gov.pt/s/brasoes/1213.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1214",
      "designacao": "Portalegre",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/PTG.png/100px-PTG.png",
      "codigo": "PTG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Portalegre_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1214.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1215",
      "designacao": "Sousel",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Crest_of_Sousel_municipality_%28Portugal%29.png/100px-Crest_of_Sousel_municipality_%28Portugal%29.png",
      "codigo": "SSL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Sousel",
      "brasao": "https://dados.gov.pt/s/brasoes/1215.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1301",
      "designacao": "Amarante",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/AMT1.png/100px-AMT1.png",
      "codigo": "AMT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Amarante_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1301.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1302",
      "designacao": "Baião",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/BAO1.png/100px-BAO1.png",
      "codigo": "BAO",
      "wikipedia": "https://pt.wikipedia.org/wiki/Bai%C3%A3o_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1302.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1303",
      "designacao": "Felgueiras",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FLG1.png/100px-FLG1.png",
      "codigo": "FLG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Felgueiras",
      "brasao": "https://dados.gov.pt/s/brasoes/1303.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1304",
      "designacao": "Gondomar",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/GDM1.png/100px-GDM1.png",
      "codigo": "GDM",
      "wikipedia": "https://pt.wikipedia.org/wiki/Gondomar",
      "brasao": "https://dados.gov.pt/s/brasoes/1304.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1305",
      "designacao": "Lousada",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/LOU.png/100px-LOU.png",
      "codigo": "LOU",
      "wikipedia": "https://pt.wikipedia.org/wiki/Lousada",
      "brasao": "https://dados.gov.pt/s/brasoes/1305.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1306",
      "designacao": "Maia",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/MAI1.png/100px-MAI1.png",
      "codigo": "MAI",
      "wikipedia": "https://pt.wikipedia.org/wiki/Maia",
      "brasao": "https://dados.gov.pt/s/brasoes/1306.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1307",
      "designacao": "Marco de Canaveses",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/MCN2.png/100px-MCN2.png",
      "codigo": "MCN",
      "wikipedia": "https://pt.wikipedia.org/wiki/Marco_de_Canaveses",
      "brasao": "https://dados.gov.pt/s/brasoes/1307.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1308",
      "designacao": "Matosinhos",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/MTS1.png/100px-MTS1.png",
      "codigo": "MTS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Matosinhos",
      "brasao": "https://dados.gov.pt/s/brasoes/1308.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1309",
      "designacao": "Paços de Ferreira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/PFR1.png/100px-PFR1.png",
      "codigo": "PFR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Pa%C3%A7os_de_Ferreira",
      "brasao": "https://dados.gov.pt/s/brasoes/1309.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1310",
      "designacao": "Paredes",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/PRD1.png/100px-PRD1.png",
      "codigo": "PRD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Paredes",
      "brasao": "https://dados.gov.pt/s/brasoes/1310.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1311",
      "designacao": "Penafiel",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/PNF.png/100px-PNF.png",
      "codigo": "PNF",
      "wikipedia": "https://pt.wikipedia.org/wiki/Penafiel",
      "brasao": "https://dados.gov.pt/s/brasoes/1311.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1312",
      "designacao": "Porto",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/PRT.png/100px-PRT.png",
      "codigo": "PRT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Porto",
      "brasao": "https://dados.gov.pt/s/brasoes/1312.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1313",
      "designacao": "Póvoa de Varzim",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/PVZ2.png/100px-PVZ2.png",
      "codigo": "PVZ",
      "wikipedia": "https://pt.wikipedia.org/wiki/P%C3%B3voa_de_Varzim",
      "brasao": "https://dados.gov.pt/s/brasoes/1313.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1314",
      "designacao": "Santo Tirso",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/STS1.png/100px-STS1.png",
      "codigo": "STS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Santo_Tirso",
      "brasao": "https://dados.gov.pt/s/brasoes/1314.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1315",
      "designacao": "Valongo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/VLG1.png/100px-VLG1.png",
      "codigo": "VLG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Valongo",
      "brasao": "https://dados.gov.pt/s/brasoes/1315.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1316",
      "designacao": "Vila do Conde",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/VCD1.png/100px-VCD1.png",
      "codigo": "VCD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_do_Conde",
      "brasao": "https://dados.gov.pt/s/brasoes/1316.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1317",
      "designacao": "Vila Nova de Gaia",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/VNG1.png/100px-VNG1.png",
      "codigo": "VNG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Nova_de_Gaia",
      "brasao": "https://dados.gov.pt/s/brasoes/1317.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1318",
      "designacao": "Trofa",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/TRF.png/100px-TRF.png",
      "codigo": "TRF",
      "wikipedia": "https://pt.wikipedia.org/wiki/Trofa",
      "brasao": "https://dados.gov.pt/s/brasoes/1318.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1401",
      "designacao": "Abrantes",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/ABT.png/100px-ABT.png",
      "codigo": "ABT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Abrantes",
      "brasao": "https://dados.gov.pt/s/brasoes/1401.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1402",
      "designacao": "Alcanena",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/ACN.png/100px-ACN.png",
      "codigo": "ACN",
      "wikipedia": "https://pt.wikipedia.org/wiki/Alcanena",
      "brasao": "https://dados.gov.pt/s/brasoes/1402.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1403",
      "designacao": "Almeirim",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/ALR1.png/100px-ALR1.png",
      "codigo": "ALR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Almeirim_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1403.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1404",
      "designacao": "Alpiarça",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/APC.png/100px-APC.png",
      "codigo": "APC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Alpiar%C3%A7a",
      "brasao": "https://dados.gov.pt/s/brasoes/1404.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1405",
      "designacao": "Benavente",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BNV.png/100px-BNV.png",
      "codigo": "BNV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Benavente_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1405.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1406",
      "designacao": "Cartaxo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/CTX1.png/100px-CTX1.png",
      "codigo": "CTX",
      "wikipedia": "https://pt.wikipedia.org/wiki/Cartaxo",
      "brasao": "https://dados.gov.pt/s/brasoes/1406.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1407",
      "designacao": "Chamusca",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/CHM.png/100px-CHM.png",
      "codigo": "CHM",
      "wikipedia": "https://pt.wikipedia.org/wiki/Chamusca",
      "brasao": "https://dados.gov.pt/s/brasoes/1407.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1408",
      "designacao": "Constância",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/CNS.png/100px-CNS.png",
      "codigo": "CNS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Const%C3%A2ncia_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1408.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1409",
      "designacao": "Coruche",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/CCH.png/100px-CCH.png",
      "codigo": "CCH",
      "wikipedia": "https://pt.wikipedia.org/wiki/Coruche",
      "brasao": "https://dados.gov.pt/s/brasoes/1409.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1410",
      "designacao": "Entroncamento",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ENT1.png/100px-ENT1.png",
      "codigo": "ENT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Entroncamento",
      "brasao": "https://dados.gov.pt/s/brasoes/1410.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1411",
      "designacao": "Ferreira do Zêzere",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/FZZ.png/100px-FZZ.png",
      "codigo": "FZZ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ferreira_do_Z%C3%AAzere",
      "brasao": "https://dados.gov.pt/s/brasoes/1411.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1412",
      "designacao": "Golegã",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/GLG.png/100px-GLG.png",
      "codigo": "GLG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Goleg%C3%A3",
      "brasao": "https://dados.gov.pt/s/brasoes/1412.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1413",
      "designacao": "Mação",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/MAC.png/100px-MAC.png",
      "codigo": "MAC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ma%C3%A7%C3%A3o",
      "brasao": "https://dados.gov.pt/s/brasoes/1413.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1414",
      "designacao": "Rio Maior",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/RMR1.png/100px-RMR1.png",
      "codigo": "RMR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Rio_Maior",
      "brasao": "https://dados.gov.pt/s/brasoes/1414.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1415",
      "designacao": "Salvaterra de Magos",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/SMG.png/100px-SMG.png",
      "codigo": "SMG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Salvaterra_de_Magos",
      "brasao": "https://dados.gov.pt/s/brasoes/1415.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1416",
      "designacao": "Santarém",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/STR.png/100px-STR.png",
      "codigo": "STR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Santar%C3%A9m_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1416.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1417",
      "designacao": "Sardoal",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/SRD.png/100px-SRD.png",
      "codigo": "SRD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Sardoal",
      "brasao": "https://dados.gov.pt/s/brasoes/1417.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1418",
      "designacao": "Tomar",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/TMR.png/100px-TMR.png",
      "codigo": "TMR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Tomar",
      "brasao": "https://dados.gov.pt/s/brasoes/1418.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1419",
      "designacao": "Torres Novas",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/TNV1.png/100px-TNV1.png",
      "codigo": "TNV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Torres_Novas",
      "brasao": "https://dados.gov.pt/s/brasoes/1419.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1420",
      "designacao": "Vila Nova da Barquinha",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/VNB.png/100px-VNB.png",
      "codigo": "VNB",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Nova_da_Barquinha",
      "brasao": "https://dados.gov.pt/s/brasoes/1420.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1421",
      "designacao": "Ourém",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VNO1.png/100px-VNO1.png",
      "codigo": "ORM",
      "wikipedia": "https://pt.wikipedia.org/wiki/Our%C3%A9m_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1421.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1501",
      "designacao": "Alcácer do Sal",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/ASL1.png/100px-ASL1.png",
      "codigo": "ASL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Alc%C3%A1cer_do_Sal",
      "brasao": "https://dados.gov.pt/s/brasoes/1501.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1502",
      "designacao": "Alcochete",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Vila_de_Alcochete_%28bras%C3%A3o%29.png/100px-Vila_de_Alcochete_%28bras%C3%A3o%29.png",
      "codigo": "ACH",
      "wikipedia": "https://pt.wikipedia.org/wiki/Alcochete",
      "brasao": "https://dados.gov.pt/s/brasoes/1502.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1503",
      "designacao": "Almada",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/ALM1.png/100px-ALM1.png",
      "codigo": "ALM",
      "wikipedia": "https://pt.wikipedia.org/wiki/Almada",
      "brasao": "https://dados.gov.pt/s/brasoes/1503.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1504",
      "designacao": "Barreiro",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/BRR1.png/100px-BRR1.png",
      "codigo": "BRR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Barreiro",
      "brasao": "https://dados.gov.pt/s/brasoes/1504.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1505",
      "designacao": "Grândola",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/GDL.png/100px-GDL.png",
      "codigo": "GDL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Gr%C3%A2ndola",
      "brasao": "https://dados.gov.pt/s/brasoes/1505.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1506",
      "designacao": "Moita",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/MTA.png/100px-MTA.png",
      "codigo": "MTA",
      "wikipedia": "https://pt.wikipedia.org/wiki/Moita",
      "brasao": "https://dados.gov.pt/s/brasoes/1506.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1507",
      "designacao": "Montijo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/MTJ.png/100px-MTJ.png",
      "codigo": "MTJ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Montijo",
      "brasao": "https://dados.gov.pt/s/brasoes/1507.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1508",
      "designacao": "Palmela",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/PLM.png/100px-PLM.png",
      "codigo": "PLM",
      "wikipedia": "https://pt.wikipedia.org/wiki/Palmela",
      "brasao": "https://dados.gov.pt/s/brasoes/1508.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1509",
      "designacao": "Santiago do Cacém",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/STC1.png/100px-STC1.png",
      "codigo": "STC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Santiago_do_Cac%C3%A9m",
      "brasao": "https://dados.gov.pt/s/brasoes/1509.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1510",
      "designacao": "Seixal",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/SXL1.png/100px-SXL1.png",
      "codigo": "SXL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Seixal",
      "brasao": "https://dados.gov.pt/s/brasoes/1510.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1511",
      "designacao": "Sesimbra",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/SSB.png/100px-SSB.png",
      "codigo": "SSB",
      "wikipedia": "https://pt.wikipedia.org/wiki/Sesimbra",
      "brasao": "https://dados.gov.pt/s/brasoes/1511.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1512",
      "designacao": "Setúbal",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/STB.png/100px-STB.png",
      "codigo": "STB",
      "wikipedia": "https://pt.wikipedia.org/wiki/Set%C3%BAbal",
      "brasao": "https://dados.gov.pt/s/brasoes/1512.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1513",
      "designacao": "Sines",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/SNS1.png/100px-SNS1.png",
      "codigo": "SNS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Sines",
      "brasao": "https://dados.gov.pt/s/brasoes/1513.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1601",
      "designacao": "Arcos de Valdevez",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/AVV_-_Arcos_de_Valdevez.png/100px-AVV_-_Arcos_de_Valdevez.png",
      "codigo": "AVV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Arcos_de_Valdevez",
      "brasao": "https://dados.gov.pt/s/brasoes/1601.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1602",
      "designacao": "Caminha",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/CMN.png/100px-CMN.png",
      "codigo": "CMN",
      "wikipedia": "https://pt.wikipedia.org/wiki/Caminha",
      "brasao": "https://dados.gov.pt/s/brasoes/1602.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1603",
      "designacao": "Melgaço",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/MLG.png/100px-MLG.png",
      "codigo": "MLG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Melga%C3%A7o_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1603.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1604",
      "designacao": "Monção",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/MNC.png/100px-MNC.png",
      "codigo": "MNC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Mon%C3%A7%C3%A3o_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1604.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1605",
      "designacao": "Paredes de Coura",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/PCR.png/100px-PCR.png",
      "codigo": "PCR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Paredes_de_Coura",
      "brasao": "https://dados.gov.pt/s/brasoes/1605.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1606",
      "designacao": "Ponte da Barca",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PTB.png/100px-PTB.png",
      "codigo": "PTB",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ponte_da_Barca",
      "brasao": "https://dados.gov.pt/s/brasoes/1606.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1607",
      "designacao": "Ponte de Lima",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/PTL.png/100px-PTL.png",
      "codigo": "PTL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ponte_de_Lima",
      "brasao": "https://dados.gov.pt/s/brasoes/1607.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1608",
      "designacao": "Valença",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/VLC.png/100px-VLC.png",
      "codigo": "VLN",
      "wikipedia": "https://pt.wikipedia.org/wiki/Valen%C3%A7a_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1608.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1609",
      "designacao": "Viana do Castelo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/VCT.png/100px-VCT.png",
      "codigo": "VCT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Viana_do_Castelo",
      "brasao": "https://dados.gov.pt/s/brasoes/1609.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1610",
      "designacao": "Vila Nova de Cerveira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/VNC.png/100px-VNC.png",
      "codigo": "VNC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Nova_de_Cerveira",
      "brasao": "https://dados.gov.pt/s/brasoes/1610.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1701",
      "designacao": "Alijó",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Bras%C3%A3o_de_armas_-_Alij%C3%B3%2C_Portugal.png/100px-Bras%C3%A3o_de_armas_-_Alij%C3%B3%2C_Portugal.png",
      "codigo": "ALJ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Alij%C3%B3",
      "brasao": "https://dados.gov.pt/s/brasoes/1701.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1702",
      "designacao": "Boticas",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/BTC.png/100px-BTC.png",
      "codigo": "BTC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Boticas",
      "brasao": "https://dados.gov.pt/s/brasoes/1702.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1703",
      "designacao": "Chaves",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bras%C3%A3o_de_Chaves.png/100px-Bras%C3%A3o_de_Chaves.png",
      "codigo": "CHV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Chaves_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1703.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1704",
      "designacao": "Mesão Frio",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/MSF.png/100px-MSF.png",
      "codigo": "MSF",
      "wikipedia": "https://pt.wikipedia.org/wiki/Mes%C3%A3o_Frio",
      "brasao": "https://dados.gov.pt/s/brasoes/1704.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1705",
      "designacao": "Mondim de Basto",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/MDB.png/100px-MDB.png",
      "codigo": "MDB",
      "wikipedia": "https://pt.wikipedia.org/wiki/Mondim_de_Basto",
      "brasao": "https://dados.gov.pt/s/brasoes/1705.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1706",
      "designacao": "Montalegre",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/MTR.png/100px-MTR.png",
      "codigo": "MTR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Montalegre",
      "brasao": "https://dados.gov.pt/s/brasoes/1706.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1707",
      "designacao": "Murça",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Crest_of_Mur%C3%A7a_municipality_%28Portugal%29.png/100px-Crest_of_Mur%C3%A7a_municipality_%28Portugal%29.png",
      "codigo": "MUR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Mur%C3%A7a",
      "brasao": "https://dados.gov.pt/s/brasoes/1707.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1708",
      "designacao": "Peso da Régua",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/PRG.png/100px-PRG.png",
      "codigo": "PRG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Peso_da_R%C3%A9gua",
      "brasao": "https://dados.gov.pt/s/brasoes/1708.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1709",
      "designacao": "Ribeira de Pena",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/RPN.png/100px-RPN.png",
      "codigo": "RPN",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ribeira_de_Pena",
      "brasao": "https://dados.gov.pt/s/brasoes/1709.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1710",
      "designacao": "Sabrosa",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/SBS.png/100px-SBS.png",
      "codigo": "SBS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Sabrosa",
      "brasao": "https://dados.gov.pt/s/brasoes/1710.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1711",
      "designacao": "Santa Marta de Penaguião",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/SMP.png/100px-SMP.png",
      "codigo": "SMP",
      "wikipedia": "https://pt.wikipedia.org/wiki/Santa_Marta_de_Penagui%C3%A3o",
      "brasao": "https://dados.gov.pt/s/brasoes/1711.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1712",
      "designacao": "Valpaços",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bras%C3%A3o_de_Valpa%C3%A7os.png/100px-Bras%C3%A3o_de_Valpa%C3%A7os.png",
      "codigo": "VLP",
      "wikipedia": "https://pt.wikipedia.org/wiki/Valpa%C3%A7os",
      "brasao": "https://dados.gov.pt/s/brasoes/1712.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1713",
      "designacao": "Vila Pouca de Aguiar",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/VPA.png/100px-VPA.png",
      "codigo": "VPA",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Pouca_de_Aguiar",
      "brasao": "https://dados.gov.pt/s/brasoes/1713.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1714",
      "designacao": "Vila Real",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Vila_Real_bras%C3%A3o.gif/100px-Vila_Real_bras%C3%A3o.gif",
      "codigo": "VRL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Real",
      "brasao": "https://dados.gov.pt/s/brasoes/1714.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1801",
      "designacao": "Armamar",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/AMM.png/100px-AMM.png",
      "codigo": "AMM",
      "wikipedia": "https://pt.wikipedia.org/wiki/Armamar",
      "brasao": "https://dados.gov.pt/s/brasoes/1801.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1802",
      "designacao": "Carregal do Sal",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/CRS.png/100px-CRS.png",
      "codigo": "CRS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Carregal_do_Sal",
      "brasao": "https://dados.gov.pt/s/brasoes/1802.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1803",
      "designacao": "Castro Daire",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/CDR.png/100px-CDR.png",
      "codigo": "CDR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Castro_Daire",
      "brasao": "https://dados.gov.pt/s/brasoes/1803.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1804",
      "designacao": "Cinfães",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/CNF.png/100px-CNF.png",
      "codigo": "CNF",
      "wikipedia": "https://pt.wikipedia.org/wiki/Cinf%C3%A3es",
      "brasao": "https://dados.gov.pt/s/brasoes/1804.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1805",
      "designacao": "Lamego",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/LMG.png/100px-LMG.png",
      "codigo": "LMG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Lamego",
      "brasao": "https://dados.gov.pt/s/brasoes/1805.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1806",
      "designacao": "Mangualde",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/MGL1.png/100px-MGL1.png",
      "codigo": "MGL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Mangualde",
      "brasao": "https://dados.gov.pt/s/brasoes/1806.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1807",
      "designacao": "Moimenta da Beira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/MBR.png/100px-MBR.png",
      "codigo": "MBR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Moimenta_da_Beira",
      "brasao": "https://dados.gov.pt/s/brasoes/1807.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1808",
      "designacao": "Mortágua",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/MRT.png/100px-MRT.png",
      "codigo": "MRT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Mort%C3%A1gua",
      "brasao": "https://dados.gov.pt/s/brasoes/1808.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1809",
      "designacao": "Nelas",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/NLS.png/100px-NLS.png",
      "codigo": "NLS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Nelas",
      "brasao": "https://dados.gov.pt/s/brasoes/1809.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1810",
      "designacao": "Oliveira de Frades",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/OFR.png/100px-OFR.png",
      "codigo": "OFR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Oliveira_de_Frades",
      "brasao": "https://dados.gov.pt/s/brasoes/1810.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1811",
      "designacao": "Penalva do Castelo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/PCT1.png/100px-PCT1.png",
      "codigo": "PCT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Penalva_do_Castelo",
      "brasao": "https://dados.gov.pt/s/brasoes/1811.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1812",
      "designacao": "Penedono",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/PND.png/100px-PND.png",
      "codigo": "PND",
      "wikipedia": "https://pt.wikipedia.org/wiki/Penedono",
      "brasao": "https://dados.gov.pt/s/brasoes/1812.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1813",
      "designacao": "Resende",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/RSD.png/100px-RSD.png",
      "codigo": "RSD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Resende_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1813.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1814",
      "designacao": "Santa Comba Dão",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/SCD1.png/100px-SCD1.png",
      "codigo": "SCD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Santa_Comba_D%C3%A3o",
      "brasao": "https://dados.gov.pt/s/brasoes/1814.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1815",
      "designacao": "São João da Pesqueira",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/SJP.png/100px-SJP.png",
      "codigo": "SJP",
      "wikipedia": "https://pt.wikipedia.org/wiki/S%C3%A3o_Jo%C3%A3o_da_Pesqueira",
      "brasao": "https://dados.gov.pt/s/brasoes/1815.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1816",
      "designacao": "São Pedro do Sul",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/SPS.png/100px-SPS.png",
      "codigo": "SPS",
      "wikipedia": "https://pt.wikipedia.org/wiki/S%C3%A3o_Pedro_do_Sul_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1816.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1817",
      "designacao": "Sátão",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/SAT.png/100px-SAT.png",
      "codigo": "SAT",
      "wikipedia": "https://pt.wikipedia.org/wiki/S%C3%A1t%C3%A3o",
      "brasao": "https://dados.gov.pt/s/brasoes/1817.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1818",
      "designacao": "Sernancelhe",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/SRN.png/100px-SRN.png",
      "codigo": "SRN",
      "wikipedia": "https://pt.wikipedia.org/wiki/Sernancelhe",
      "brasao": "https://dados.gov.pt/s/brasoes/1818.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1819",
      "designacao": "Tabuaço",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/TBC.png/100px-TBC.png",
      "codigo": "TBC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Tabua%C3%A7o",
      "brasao": "https://dados.gov.pt/s/brasoes/1819.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1820",
      "designacao": "Tarouca",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/TRC.png/100px-TRC.png",
      "codigo": "TRC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Tarouca",
      "brasao": "https://dados.gov.pt/s/brasoes/1820.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1821",
      "designacao": "Tondela",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/TND1.png/100px-TND1.png",
      "codigo": "TND",
      "wikipedia": "https://pt.wikipedia.org/wiki/Tondela",
      "brasao": "https://dados.gov.pt/s/brasoes/1821.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1822",
      "designacao": "Vila Nova de Paiva",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/VNP.png/100px-VNP.png",
      "codigo": "VNP",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Nova_de_Paiva",
      "brasao": "https://dados.gov.pt/s/brasoes/1822.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1823",
      "designacao": "Viseu",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bras%C3%A3o_de_Cidade_Viseu.png/100px-Bras%C3%A3o_de_Cidade_Viseu.png",
      "codigo": "VIS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Viseu_(Portugal)",
      "brasao": "https://dados.gov.pt/s/brasoes/1823.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "1824",
      "designacao": "Vouzela",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/VZL.png/100px-VZL.png",
      "codigo": "VZL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vouzela",
      "brasao": "https://dados.gov.pt/s/brasoes/1824.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "3101",
      "designacao": "Calheta",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/CHT.png/100px-CHT.png",
      "codigo": "CHT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Calheta_(A%C3%A7ores)",
      "brasao": "https://dados.gov.pt/s/brasoes/3101.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "3102",
      "designacao": "Câmara de Lobos",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/CMT1.png/100px-CMT1.png",
      "codigo": "CML",
      "wikipedia": "https://pt.wikipedia.org/wiki/C%C3%A2mara_de_Lobos",
      "brasao": "https://dados.gov.pt/s/brasoes/3102.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "3103",
      "designacao": "Funchal",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/FNC.png/100px-FNC.png",
      "codigo": "FNC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Funchal",
      "brasao": "https://dados.gov.pt/s/brasoes/3103.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "3104",
      "designacao": "Machico",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/MCH1.png/100px-MCH1.png",
      "codigo": "MCH",
      "wikipedia": "https://pt.wikipedia.org/wiki/Machico",
      "brasao": "https://dados.gov.pt/s/brasoes/3104.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "3105",
      "designacao": "Ponta do Sol",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/PTS.png/100px-PTS.png",
      "codigo": "PTS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ponta_do_Sol_(Madeira)",
      "brasao": "https://dados.gov.pt/s/brasoes/3105.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "3106",
      "designacao": "Porto Moniz",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/PMZ.png/100px-PMZ.png",
      "codigo": "PMZ",
      "wikipedia": "https://pt.wikipedia.org/wiki/Porto_Moniz",
      "brasao": "https://dados.gov.pt/s/brasoes/3106.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "3107",
      "designacao": "Ribeira Brava",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/RBR.png/100px-RBR.png",
      "codigo": "RBR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ribeira_Brava_(Madeira)",
      "brasao": "https://dados.gov.pt/s/brasoes/3107.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "3108",
      "designacao": "Santa Cruz",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/SCR1.png/100px-SCR1.png",
      "codigo": "SCR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Santa_Cruz_(Madeira)",
      "brasao": "https://dados.gov.pt/s/brasoes/3108.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "3109",
      "designacao": "Santana",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/STN1.png/100px-STN1.png",
      "codigo": "STN",
      "wikipedia": "https://pt.wikipedia.org/wiki/Santana_(Madeira)",
      "brasao": "https://dados.gov.pt/s/brasoes/3109.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "3110",
      "designacao": "São Vicente",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/SVC.png/100px-SVC.png",
      "codigo": "SVC",
      "wikipedia": "https://pt.wikipedia.org/wiki/S%C3%A3o_Vicente_(Madeira)",
      "brasao": "https://dados.gov.pt/s/brasoes/3110.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "3201",
      "designacao": "Porto Santo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/PST1.png/100px-PST1.png",
      "codigo": "PST",
      "wikipedia": "https://pt.wikipedia.org/wiki/Porto_Santo",
      "brasao": "https://dados.gov.pt/s/brasoes/3201.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4101",
      "designacao": "Vila do Porto",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/VPT1.png/100px-VPT1.png",
      "codigo": "VPT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_do_Porto",
      "brasao": "https://dados.gov.pt/s/brasoes/4101.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4201",
      "designacao": "Lagoa",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Lagoa%2C_A%C3%A7ores_%28bras%C3%A3o%29.png/100px-Lagoa%2C_A%C3%A7ores_%28bras%C3%A3o%29.png",
      "wikipedia": "https://pt.wikipedia.org/wiki/Lagoa_(A%C3%A7ores)",
      "brasao": "https://dados.gov.pt/s/brasoes/4201.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4202",
      "designacao": "Nordeste",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/NRD.png/100px-NRD.png",
      "codigo": "NRD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Nordeste_(A%C3%A7ores)",
      "brasao": "https://dados.gov.pt/s/brasoes/4202.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4203",
      "designacao": "Ponta Delgada",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/PDL.png/100px-PDL.png",
      "codigo": "PDL",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ponta_Delgada",
      "brasao": "https://dados.gov.pt/s/brasoes/4203.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4204",
      "designacao": "Povoação",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/PVC.png/100px-PVC.png",
      "codigo": "PVC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Povoa%C3%A7%C3%A3o_(A%C3%A7ores)",
      "brasao": "https://dados.gov.pt/s/brasoes/4204.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4205",
      "designacao": "Ribeira Grande",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/RGR1.png/100px-RGR1.png",
      "codigo": "RGR",
      "wikipedia": "https://pt.wikipedia.org/wiki/Ribeira_Grande_(A%C3%A7ores)",
      "brasao": "https://dados.gov.pt/s/brasoes/4205.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4206",
      "designacao": "Vila Franca do Campo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/VFC.png/100px-VFC.png",
      "codigo": "VFC",
      "wikipedia": "https://pt.wikipedia.org/wiki/Vila_Franca_do_Campo",
      "brasao": "https://dados.gov.pt/s/brasoes/4206.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4301",
      "designacao": "Angra do Heroísmo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Angra_do_Hero%C3%ADsmo%2C_Azores%2C_Portugal_%28bras%C3%B5es%29.png/100px-Angra_do_Hero%C3%ADsmo%2C_Azores%2C_Portugal_%28bras%C3%B5es%29.png",
      "codigo": "AGH",
      "wikipedia": "https://pt.wikipedia.org/wiki/Angra_do_Hero%C3%ADsmo",
      "brasao": "https://dados.gov.pt/s/brasoes/4301.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4302",
      "designacao": "Vila da Praia da Vitória",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/VPV1.png/100px-VPV1.png",
      "wikipedia": "https://pt.wikipedia.org/wiki/Praia_da_Vit%C3%B3ria",
      "brasao": "https://dados.gov.pt/s/brasoes/4302.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4401",
      "designacao": "Santa Cruz da Graciosa",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/SCG.png/100px-SCG.png",
      "codigo": "SCG",
      "wikipedia": "https://pt.wikipedia.org/wiki/Santa_Cruz_da_Graciosa",
      "brasao": "https://dados.gov.pt/s/brasoes/4401.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4501",
      "designacao": "Calheta",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/CHT.png/100px-CHT.png",
      "wikipedia": "https://pt.wikipedia.org/wiki/Calheta_(A%C3%A7ores)",
      "brasao": "https://dados.gov.pt/s/brasoes/4501.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4502",
      "designacao": "Velas",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/VLS.png/100px-VLS.png",
      "codigo": "VLS",
      "wikipedia": "https://pt.wikipedia.org/wiki/Velas",
      "brasao": "https://dados.gov.pt/s/brasoes/4502.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4601",
      "designacao": "Lajes do Pico",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Crest_of_Lajes_do_Pico_municipality_%28Azores%2C_Portugal%29.png/100px-Crest_of_Lajes_do_Pico_municipality_%28Azores%2C_Portugal%29.png",
      "codigo": "LGP",
      "wikipedia": "https://pt.wikipedia.org/wiki/Lajes_do_Pico",
      "brasao": "https://dados.gov.pt/s/brasoes/4601.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4602",
      "designacao": "Madalena",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/MAD.png/100px-MAD.png",
      "codigo": "MAD",
      "wikipedia": "https://pt.wikipedia.org/wiki/Madalena_(A%C3%A7ores)",
      "brasao": "https://dados.gov.pt/s/brasoes/4602.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4603",
      "designacao": "São Roque do Pico",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/SRQ.png/100px-SRQ.png",
      "codigo": "SRQ",
      "wikipedia": "https://pt.wikipedia.org/wiki/S%C3%A3o_Roque_do_Pico",
      "brasao": "https://dados.gov.pt/s/brasoes/4603.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4701",
      "designacao": "Horta",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/HRT.png/70px-HRT.png",
      "codigo": "HRT",
      "wikipedia": "https://pt.wikipedia.org/wiki/Horta",
      "brasao": "https://dados.gov.pt/s/brasoes/4701.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4801",
      "designacao": "Lajes das Flores",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LGF.png/100px-LGF.png",
      "codigo": "LGF",
      "wikipedia": "https://pt.wikipedia.org/wiki/Lajes_das_Flores",
      "brasao": "https://dados.gov.pt/s/brasoes/4801.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4802",
      "designacao": "Santa Cruz das Flores",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/SCF.png/100px-SCF.png",
      "codigo": "SCF",
      "wikipedia": "https://pt.wikipedia.org/wiki/Santa_Cruz_das_Flores",
      "brasao": "https://dados.gov.pt/s/brasoes/4802.png"
    },
    {
      "PartitionKey": "Sheet2",
      "nivel": "2",
      "dicofre": "4901",
      "designacao": "Corvo",
      "wiki_image_large": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/CRV.png/100px-CRV.png",
      "codigo": "CRV",
      "wikipedia": "https://pt.wikipedia.org/wiki/Corvo_(A%C3%A7ores)",
      "brasao": "https://dados.gov.pt/s/brasoes/4901.png"
    }
  ]

