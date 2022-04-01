import PANEL from './imgObjects/ImgPanels'
import { PRODUCTS } from './ProductNavBarData'
import { ProductsDataInfo, ProductsImages } from 'store/SiteNavigation/d'
// @ts-ignore
import veka70Video from './video/VEKA70.mp4'
// @ts-ignore
import veka82Video from './video/VEKA82.mp4'
// @ts-ignore
import PvcUlaznaVrata from './video/PvcUlaznaVrata.mp4'
// @ts-ignore
import PvcPregradnaVrata from './video/PvcPregradnaVrata.mp4'
// @ts-ignore
import VrataSkrivenioKrilo from './video/VrataSkrivenioKrilo.mp4'
import SigurnosnaVrataSlika from './video/SigurnosnaVrata.jpg'

export const ProductData = [
  {
    name: ProductsDataInfo.veka70,
    nameHeader: 'VEKA 70 EFFECTLINE',
    imgCover: ProductsImages.pvcWindow1CoverImg,
    video: veka70Video,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/iglo_light/video/iglo_light.mp4',
    optionHeaders: {
      first: 'OPIS',
      second: 'PREDNOSTI',
      third: 'DEKORI'
    },
    options: {
      firstOption: [
        'Petokomorni profil obezbeđuje optimalnu termičku izolaciju,što omogućava značajnu uštedu energije pri grejanju i hlađenju.',
        ' Sistem specijalizovan za upotrebu u stambenim i poslovnim objektima.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi dvoslojni paket termopan stakla ispunjen argonom.'
      ],
      secondOption: [
        ' Moderan dizajn i odlični parametri u pogledu energetske efikasnosti,    vodootpornosti, otpornosti na vetar i propustljivosti vazduha!',
        'Visok nivo bezbednosti obezbeđen je visokokvalitetnim petokomornim profilima A klase, napravljenim isključivo od prvoklasnog materijala.',
        'Mnogo dnevne svetlosti, kao rezultat najužih profila i veće površine zastakljenja u poređenju sa standardnim sistemima.'
      ],
      thirdOption: {
        opis: 'Veka 70 profil može biti u jednostranom i dvostranom dekoru. Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Štok je izradjen od  čeličnih kutija 60x40/2.0mm. Krilo izradjeno od ramovske konstrukcije (kutija 50x30), spolja je ugradjen čelični lim 1,5mm sa vertikalnim ojačanjima  od L profila.Ukupna debljina krila je 72mm.',
      second:
                'Završna obrada – krilo obostrano obloženo MDFom po 8mm u dekoru po izboru (u ponudi 7 dezena). Štok,prag i svi vidni metalni delovi plastificirani u boju po izboru (boja u prahu nanosi se na metal elektrostatičkim putem, a zatim se vrši pečenje na temperature polimerizacije).',
      third:
                'Brava – Doro, sigurnosna sa Italijanskim cilindrom ISEO. Uz cilindar isporučuju se pet ključeva. Cilindar pokreće bravu koja zaključava u 4 tačke bočno, 2 tačke (gore/dole) + 3 šipa koja se nalaze na strani šarki i koja su fiksna. Okov – Hoppe (Nemačka); kvaka/kugla, nikl, špijunka širokougaona 180º.'
    }
  },
  {
    name: ProductsDataInfo.veka82,
    nameHeader: 'VEKA 82 SOFTLINE',
    imgCover: ProductsImages.pvcWindow2overImg,
    video: veka82Video,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/IGLO_ENERGY/video/iglo_energy.mp4',
    optionHeaders: {
      first: 'OPIS ',
      second: 'PREDNOSTI',
      third: 'DEKORI'
    },
    options: {
      firstOption: [
        'Sedmokomorni profil sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.woodAluminiumWindows1,
    imgCover: ProductsImages.woodAluminiumWindow1CoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/DUOLINE/video/duoline.mp4',
    options: {
      firstOption: [
        'Sedmokomorni profil obezbeđuje optimalnu termičku izolaciju,što omogućava značajnu uštedu energije pri grejanju i hlađenju.',
        ' Sistem specijalizovan za upotrebu u stambenim i poslovnim objektima.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi dvoslojni paket termopan stakla ispunjen argonom.'
      ],
      secondOption: [
        ' Moderan dizajn i odlični parametri u pogledu energetske efikasnosti,    vodootpornosti, otpornosti na vetar i propustljivosti vazduha!',
        'Visok nivo bezbednosti obezbeđen je visokokvalitetnim petokomornim profilima A klase, napravljenim isključivo od prvoklasnog materijala.',
        'Mnogo dnevne svetlosti, kao rezultat najužih profila i veće površine zastakljenja u poređenju sa standardnim sistemima.'
      ],
      thirdOption: {
        opis: 'Veka 70 profil može biti u jednostranom i dvostranom dekoru. Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first: 'Possibility to choose between profiles with three installation depths: 68mm, 78mm, 88 mm in two types of wood: three- or four-layer solid square timber: meranti 450+, pine, with aluminum clad on the outside.',
      second: 'Glass – Two-glass package with 24 mm thickness in standard, with thermal transmittance coefficient Ug = 1,0 W/(m2K) according to the PN-EN674 norm; the possibility to apply two- or three-glass packages For Duoline 68 mm – max. glass package thickness is 46 mm with thermal transmittance coefficient - Ug = 0,6 W/(m2K). For Duoline 78 mm – max. glass package thickness is 50 mm with thermal transmittance coefficient - Ug = 0,5 W/(m2K) For Duoline 88 mm – max. glass package thickness is 50 mm with thermal transmittance coefficient - Ug = 0,5 W/(m2K) The possibility to apply glass with enhanced sound insulation, tempered, safety, anti-burglary, ornament or solar protective..',
      third: 'Maco Multi Matic KS; Two anti-burglary bolts in standard; window is equipped with sash lifting and handle missplacement blockage*; micro-ventilation in a slot **; optionally hidden hinges.'
    }
  },
  {
    name: ProductsDataInfo.aluminiumWindows1,
    imgCover: ProductsImages.aluminiumWindow1CoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/mb-45/video-okno/okno_mb_45.mp4',
    options: {
      firstOption: [
        'Petokomorni profil, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.aluminiumWindows2,
    imgCover: ProductsImages.aluminiumWindow2CoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/mb-70/video-okno/okno_mb_70.mp4',
    options: {
      firstOption: [
        'Sedmokomorni profil, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.entrancePvcDoor,
    nameHeader: 'VEKA SOFTLINE 70 AD',
    imgCover: ProductsImages.entrancePvcDoorCoverImg,
    video: PvcUlaznaVrata,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/drzwi-iglo5/video/drzwi_iglo_5.mp4',
    optionHeaders: {
      first: 'OPIS',
      second: 'PREDNOSTI',
      third: 'DEKORI'
    },
    options: {
      firstOption: [
        'Klasičan dizajn sa elegantno zaobljenim ivicama.',
        'Sistem ulaznih vrata sa ugradnom dubinom od 70 mm.',
        'Profil VEKA SOFTLINE 70 AD specijalno namenjen za izradu vrata, sa ojačanim čelicima u krilu, sa specijalnim ugaonim spojnicama koje omogućavaju jedinstvenost vara i daju dodatnu čvrstinu vratima.',
        'Dublja površina zastakljivanja omogućava upotrebu velikog izbora ispuna za vrata i time pruža brojne mogućnosti izbora.',
        'Termički odvojen prag garantuje perfektnu izolaciju čak i u donjem predelu vrata.'
      ],
      secondOption: [
        'Ulazna vrata su najbitniji stilski element svake fasade i moraju zadovoljiti sve Vaše visoke zahteve. Oni moraju da apsolutno pouzdano funkcionišu, da Vas štite od vremenskih nepogoda i da pružaju najviši nivo sigurnosti. VEKA sistemi ulaznih vrata Vam ne samo zbog vrhunskog kvaliteta profila mogu pružiti sve to.',
        'Pomoću dodatnog ojačanja, specijalnih okova i stakla se dodatno može povećati nivo sigurnosti i zaštita od provale. Neiscrpan asortiman oblika i kombinacija vrata – individualna i po Vašoj meri – ispuniće i Vaše najviše zahteve. ',
        'Jednokrilna, dvokrilna ili vrata sa više elemenata za velike kuće, klasičnog ili modernog stila, sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane, modernih neobičnih linija ili jednostavno elegantne - VEKA sistemi ulaznih vrata su idealno rešenje za najrazličitije situacije ugradnje kako pri novogradnji tako i za renoviranje.'
      ],
      thirdOption: {
        opis: 'Profil VEKA SOFTLINE 70 AD profil može biti u jednostranom i dvostranom dekoru. Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Sistem ulaznih vrata sa ugradnom dubinom od 70 mm opciono 82mm. U standarnoj varijanti usklađeno za dvostruko termo-staklo ili ispuna ukrasnim panelima. Debljina zida profila 3mm, u skladu sa najvišim RAL standardom kvaliteta (prema DIN EN 12608, klasa A). Profil specijalno namenjen za izradu vrata, sa ojačanim čelicima u krilu, sa specijalnim ugaonim spojnicama koje omogućavaju jedinstvenost vara i daju izuzetnu čvrstinu vratima.',
      second:
                'Neiscrpan asortiman oblika i kombinacija vrata – individualna i po meri – ispuniće i najviše zahteve. Jednokrilna, dvokrilna ili vrata sa više elemenata za velike kuće, klasičnog ili modernog stila, sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.partitionPvcDoor,
    nameHeader: 'VEKA SOFTLINE 70 AD',
    imgCover: ProductsImages.partitionPvcDoorCoverImg,
    video: PvcPregradnaVrata,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/drzwi-iglo-energy/video/drzwi_iglo_energy.mp4',
    optionHeaders: {
      first: 'OPIS',
      second: 'PREDNOSTI',
      third: 'DEKORI'
    },
    options: {
      firstOption: [
        'Klasičan dizajn sa elegantno zaobljenim ivicama.',
        'Sistem pegradnih vrata sa ugradnom dubinom od 70 mm.',
        'Profil VEKA SOFTLINE 70 AD specijalno namenjen za izradu vrata, sa ojačanim čelicima u krilu, sa specijalnim ugaonim spojnicama koje omogućavaju jedinstvenost vara i daju dodatnu čvrstinu vratima.'
      ],
      secondOption: [
        'Ulazna vrata su najbitniji stilski element svake fasade i moraju zadovoljiti sve Vaše visoke zahteve. Oni moraju da apsolutno pouzdano funkcionišu, da Vas štite od vremenskih nepogoda i da pružaju najviši nivo sigurnosti. VEKA sistemi ulaznih vrata Vam ne samo zbog vrhunskog kvaliteta profila mogu pružiti sve to.',
        'Pomoću dodatnog ojačanja, specijalnih okova i stakla se dodatno može povećati nivo sigurnosti i zaštita od provale. Neiscrpan asortiman oblika i kombinacija vrata – individualna i po Vašoj meri – ispuniće i Vaše najviše zahteve.',
        'Jednokrilna, dvokrilna ili vrata sa više elemenata za velike kuće, klasičnog ili modernog stila, sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane, modernih neobičnih linija ili jednostavno elegantne - VEKA sistemi ulaznih vrata su idealno rešenje za najrazličitije situacije ugradnje kako pri novogradnji tako i za renoviranje.'
      ],
      thirdOption: {
        opis: 'Profil VEKA SOFTLINE 70 AD profil može biti u jednostranom i dvostranom dekoru. Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Sistem pregradnih vrata sa ugradnom dubinom od 70 mm. U standarnoj varijanti usklađeno za dvostruko termo-staklo ili ispuna panelima. Debljina zida profila 3mm, u skladu sa najvišim RAL standardom kvaliteta (prema DIN EN 12608, klasa A). Profil specijalno namenjen za izradu vrata, sa ojačanim čelicima u krilu, sa specijalnim ugaonim spojnicama koje omogućavaju jedinstvenost vara i daju izuzetnu čvrstinu vratima.',
      second:
                'Neiscrpan asortiman oblika i kombinacija vrata – individualna i po meri – ispuniće i najviše zahteve. Jednokrilna, dvokrilna ili vrata sa više elemenata za velike kuće, klasičnog ili modernog stila, sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.profileWithoutThermalBreakAluminiumDoor,
    nameHeader: PRODUCTS.allProducts.vrataHladanProfil,
    imgCover: ProductsImages.profileWithoutThermalBreakAluminiumDoorCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/mb-45/video-drzwi/drzwi-mb-45.mp4',
    optionHeaders: {
      first: 'OPIS',
      second: 'PREDNOSTI',
      third: 'DEKORI'
    },
    options: {
      firstOption: [
        'Moderan i stabilan aluminijumski profil omogućava postizanje efekta istog nivoa rama i krila spolja nakon zatvaranja vrata.',
        'Mogućnost prilagođavanja enterijera kao rezultat širokog spektra RAL boja.',
        'Sistem hladnog profila je kompatibilan sa ostalim aluminijumskim sistemima iz Danito ponude.'
      ],
      secondOption: [
        'Sistem omogućava primenu raznih ispuna staklenih kao i ukrasnih panela.',
        'Nepropusnost se obezbeđuje primenom specijalnih zaptivki od sintetičke EPDM gume. ',
        'Visoka udobnost upotrebe i minimalna potreba za održavanjem, kao i dugi rok trajanja.',
        'U ponudi su vrata dostupna sa niskim pragom ili bez njega.',
        'Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
      ],
      thirdOption: {
        opis: 'Mogućnost izbora iz širokog spektra RAL boja.'
      }
    },
    material: {
      first:
                'Moderan i stabilan aluminijumski profil omogućava postizanje efekta istog nivoa rama i krila spolja nakon zatvaranja vrata. Mogućnost prilagođavanja enterijera kao rezultat širokog spektra RAL boja. Sistem hladnog profila je kompatibilan sa ostalim aluminijumskim sistemima iz Danito ponude.',
      second:
                'Neiscrpan asortiman oblika i kombinacija vrata – individualna i po meri – ispuniće i najviše zahteve. Jednokrilna, dvokrilna ili vrata sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane.',
      third: 'Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
    },
    panel: [
      {
        name: 'Inox',
        image: PANEL.inox,
        text: 'Aluminijumski panels sa INOX aplikacijama.'
      },
      {
        name: 'Elegant',
        image: PANEL.elegant,
        text: 'Mogu biti sastavljeni od dve aluminijumske table sa različitim bojama, aplikacije mogu biti od aluminijuma ili inoxa. Najčešće staklo koje se ugradjuje je flot + saten.'
      },
      {
        name: 'Aluminium',
        image: PANEL.aluminium,
        text: 'Aluminijumski panels sa kornizama.'
      }
    ]
  },
  {
    name: ProductsDataInfo.profileWithThermalBreakAluminiumDoor,
    nameHeader: PRODUCTS.allProducts.vrataProfilTermo,
    imgCover: ProductsImages.profileWithThermalBreakAluminiumDoorCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/mb-70/video-drzwi/drzwi_mb_70_.mp4',
    optionHeaders: {
      first: 'OPIS',
      second: 'PREDNOSTI',
      third: 'DEKORI'
    },
    options: {
      firstOption: [
        'Vrata u sistemu profila sa termoprekidom odlikuju se višim stepenom toplotne izolacije usled primene specijalnih izolacionih umetaka i termičkih prekida, kao i zaptivki od EPDM dvokomponentne sintetičke gume: čvrste i ćelijske.'
      ],
      secondOption: [
        'Vrata napravljena u ovom sistemu su odlično rešenje i za energetski efikasnu zgradu. Mogućnost izbora iz širokog spektra RAL boja.',
        'Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
      ],
      thirdOption: {
        opis: 'Mogućnost izbora iz širokog spektra RAL boja.'
      }
    },
    material: {
      first:
                'Vrata u sistemu profila sa termoprekidom odlikuju se višim stepenom toplotne izolacije usled primene specijalnih izolacionih umetaka i termičkih prekida, kao i zaptivki od EPDM dvokomponentne sintetičke gume: čvrste i ćelijske. Vrata napravljena u ovom sistemu su odlično rešenje i za energetski efikasnu zgradu. Mogućnost izbora iz širokog spektra RAL boja. Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.',
      second:
                'Neiscrpan asortiman oblika i kombinacija vrata – individualna i po meri – ispuniće i najviše zahteve. Jednokrilna, dvokrilna ili vrata sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane.',
      third: 'Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
    },
    panel: [
      {
        name: 'Inox',
        image: PANEL.inox,
        text: 'Aluminijumski panels sa INOX aplikacijama.'
      },
      {
        name: 'Elegant',
        image: PANEL.elegant,
        text: 'Mogu biti sastavljeni od dve aluminijumske table sa različitim bojama, aplikacije mogu biti od aluminijuma ili inoxa. Najčešće staklo koje se ugradjuje je flot + saten.'
      },
      {
        name: 'Aluminium',
        image: PANEL.aluminium,
        text: 'Aluminijumski panels sa kornizama.'
      }
    ]
  },
  {
    name: ProductsDataInfo.doorWithHiddenWingAluminiumDoor,
    nameHeader: PRODUCTS.allProducts.vrataSkrivenoKrilo,
    imgCover: ProductsImages.doorWithHiddenWingAluminiumDoorCoverImg,
    video: VrataSkrivenioKrilo,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/mb-70hi/video-drzwi/drzwi_mb_70_hi.webm',
    optionHeaders: {
      first: 'OPIS',
      second: 'PREDNOSTI',
      third: 'DEKORI'
    },
    options: {
      firstOption: [
        'Vrata sa skrivenim krilom mogu se koristiti i na pojedinačnim zgradama i na aluminijumskim fasadama.',
        'Povećana toplotna izolacija postignuta je primenom dodatne komore u termičkom prekidu.',
        'Veoma dobar koeficijent propusnosti toplote (U-vrednost) zahvaljujući primeni termičkih prekida.',
        'Veliki izbor boja u standardnoj paleti boja, omogućava da se zadovolje i najzahtevniji klijenti'
      ],
      secondOption: [
        'Oblik profila omogućava dobijanje tankih i izdržljivih konstrukcija prozora i vrata.',
        'Nepropusnost je obezbeđena primenom specijalnih zaptivki od dvokomponentne EPDM sintetičke gume: čvrste i celularne, što garantuje otpornost na starenje tokom godina eksploatacije kao i odličnu toplotnu izolaciju.'
      ],
      thirdOption: {
        opis: 'Mogućnost izbora iz širokog spektra RAL boja. Širok raspon debljina punjenja garantuje mogućnost primene bilo kojih standardnih i nestandardnih stakala i ukrasnih panela.'
      }
    },
    material: {
      first:
                'Vrata sa skrivenim krilom mogu se koristiti i na pojedinačnim zgradama i na aluminijumskim fasadama. Povećana toplotna izolacija postignuta je primenom dodatne komore u termičkom prekidu. Veoma dobar koeficijent propusnosti toplote (U-vrednost) zahvaljujući primeni termičkih prekida. Veliki izbor boja u standardnoj paleti boja, omogućava da se zadovolje i najzahtevniji klijenti',
      second:
                'Mogućnost izbora iz širokog spektra RAL boja. Širok raspon debljina punjenja garantuje mogućnost primene bilo kojih standardnih i nestandardnih stakala i ukrasnih panela.',
      third: 'Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
    },

    panel: [
      {
        name: 'Premium',
        image: PANEL.premium,
        text: 'panels iz PREMIUM kolekcije su pogodni za izradu vrata sa skrivenim krilom.Prilikom izrade, odnosno u proizvodnji, aluminijumski lim ukrasnog panela se lepi za krilo i time se dobija efekat skrivenog krila. Efekat skrivenog krila se, u stvari, odnosi na ravnomernu povrsinu ploce ukrasnog panela koja je integrisana na celokupnoj povrsini krila(ne vide se uglovi profila) i time se pospesuje vizuelni efekat.'
      }
    ]
  },
  {
    name: ProductsDataInfo.customSecurityDoor,
    nameHeader: PRODUCTS.allProducts.celicnaVrata,
    optionHeaders: {
      first: 'OPIS',
      second: 'PREDNOSTI',
      third: 'DEKORI'
    },
    imgCover: ProductsImages.doorWithHiddenWingAluminiumDoorCoverImg,
    videoImg: SigurnosnaVrataSlika,
    // imgVideo: "https://www.drutex.eu/media/_upload/produkty/drzwi-softline/video/drzwi_softline_68.mp4",
    options: {
      firstOption: [
        'Štok je izradjen od  čeličnih kutija 60x40/2.0mm.',
        'Krilo izradjeno od ramovske konstrukcije (kutija 50x30), spolja je ugradjen čelični lim 1,5mm sa vertikalnim ojačanjima od L profila.',
        'Ukupna debljina krila je 72mm.',
        'Krilo je okačeno na štok preko dve šarke Ø22 od punog metala sa aksijalnim ležajem.',
        'Izolacija je tvrdo presovana kamena vuna debljine 5cm, pruža optimalnu zvučnu i termičku zaštitu koja nosi vatrootpornu oznaku A1.',
        'Brava – Doro, sigurnosna sa Italijanskim cilindrom ISEO. Uz cilindar isporučuju se pet ključeva. Cilindar pokreće bravu koja zaključava u 4 tačke bočno, 2 tačke (gore/dole) + 3 šipa koja se nalaze na strani šarki i koja su fiksna.',
        'Okov – Hoppe (Nemačka); kvaka/kugla, nikl, špijunka širokougaona 180º.',
        'Završna obrada – krilo obostrano obloženo MDFom po 8mm u dekoru po izboru (u ponudi 7 dezena).',
        'Štok,prag i svi vidni metalni delovi plastificirani u boju po izboru (boja u prahu nanosi se na metal elektrostatičkim putem, a zatim se vrši pečenje na temperature polimerizacije).'
      ],
      secondOption: [
        'Sigurnosna vrata domaće proizvodnje.',
        'Izrađuje se isključivo po zahtevanim merama.',
        'Dvostruko dihtovanje i odlična termo i zvučna izolovanost od 40dB. Garancija na sigurnosna vrata – 24 meseca.'
      ],
      thirdOption: {
        opis: 'Štok,prag i svi vidni metalni delovi plastificirani u boju po izboru (boja u prahu nanosi se na metal elektrostatičkim putem, a zatim se vrši pečenje na temperature polimerizacije). Završna obrada – krilo obostrano obloženo MDFom po 8mm u dekoru po izboru:',

        boje: [
          { text: 'Bela kora', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Bela sa texturom drveta',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Crna',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          { text: 'Wenge', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg' },
          {
            text: 'Hrast natur',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          },
          {
            text: 'Hrast rover',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          },
          {
            text: 'Hrast rover sivi',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          },
          {
            text: 'Rover toskana',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          },
          { text: 'Kamen', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg' },
          { text: 'Tresnja', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg' }
        ]
      }
    },
    material: {
      first:
                '5 – komorni profil sa osnovnom dubinom ugradnje od 70 mm. U standarnoj varijanti usklađeno za dvostruko termo-staklo debljine 24 mm. Debljina zida profila 3mm, u skladu sa najvišim RAL standardom kvaliteta (prema DIN EN 12608, klasa A).',
      second:
                'Jednokomorni staklopaket sa koeficijentom toplotne propusnosti Ug =1,0 V/(m2K) prema PN-EN674 u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.insideBlinds,
    imgCover: ProductsImages.pvcBlindsInsideBlindsCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/rolety-nakladane/video/roleta-pvc.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.aluminiumOutsideBlindsRoundedOutsideBlinds,
    imgCover: ProductsImages.aluminiumOutsideBlindsRoundedOutsideBlindsCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/rolety_eps/wideo/animacja_produktow_na_www.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.aluminiumOutsideBlindsPentagonalOutsideBlinds,
    imgCover: ProductsImages.aluminiumOutsideBlindsPentagonalOutsideBlindsCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/s-50/video/mb-sr50n_hi_f.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.subFacadeAluminiumBlinds,
    imgCover: ProductsImages.subFacadeAluminiumBlindsCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/mb-wg60/video/mb-wg60-002.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.fundermaxFacadeFundermaxFacade,
    imgCover: ProductsImages.fundermaxFacadeFundermaxFacadeCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/iglo-hs/video/sd/iglo_hs.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.ventilatedAlucobondFacadeVentilatedAlucobondFacade,
    imgCover: ProductsImages.ventilatedAlucobondFacadeVentilatedAlucobondFacadeCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/drzwi-mb77-hs/video/mb77hs.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.structuralGlassFacade,
    imgCover: ProductsImages.structuralGlassFacadeCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/duoline-hs/video/duoline_hs.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.standardGlassFacade,
    imgCover: ProductsImages.standardGlassFacadeCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/softline-hs/video/sl68hs.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.granitFacadeGranitFacade,
    imgCover: ProductsImages.granitFacadeGranitFacadeCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/iglo_light_psk/video/iglo_light_uchylno_przesuwne-1.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.pvcVekaSlideSlidingSystem,
    nameHeader: 'PRODUCTS.allProducts.pvcVekaSlide',
    imgCover: ProductsImages.pvcVekaSlideSlidingSystemCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/iglo_pks/video/iglo_uchylno_przesowne.mp4',
    optionHeaders: {
      first: 'OPIS',
      second: 'PREDNOSTI',
      third: 'DEKORI'
    },
    options: {
      firstOption: [
        'Izvrsna toplotna izolacija Uf = 1,6 W/(m²K).',
        'Debljina zastakljivanja i do 42 mm omogućava upotrebu trostrukog izolacionog stakla, a time se postiže optimalna vrednost Ud = 0,8 W/(m²K).'
      ],
      secondOption: [
        "Dupli prekid termičkog mosta u pragu garantuje vrhunsku toplotnu izolaciju, kao i prag 'bez barijere', skoro u nivou sa podom (50 mm visine).",
        'Klasičan dizajn sa elegantno zaobljenim konturama.',
        'Mogućnost oplemenjivanja površine aluminijumskim oblogama. '
      ],
      thirdOption: {
        opis: 'Standardni dekori za pvc profile kao i mogućnost izbora iz širokog spektra RAL boja koid varijante sa Alu oblogama.'
      }
    },
    material: {
      first:
                'Izvrsna toplotna izolacija Uf = 1,6 W/(m²K). Debljina zastakljivanja i do 42 mm omogućava upotrebu trostrukog izolacionog stakla, a time se postiže optimalna vrednost Ud = 0,8 W/(m²K)',
      second:
                'Dostupni stakleni paketi do 42 mm. Jednokomorni staklopaket sa toplotnom propusnošću - Ug =1,0 V/(m2K) prema normi PN-EN674 u standardu. Mogućnost primene trostaklopaketa sa koeficijentom Ug = 0,5 V/(m2K) mogućnost primene stakala sa pojačanom zvučnom izolacijom, kaljenih, sigurnosnih, protivprovalnih, ukrasnih ili solarnih zaštitnih. Čelični pocinkovani odstojni okvir u standardnoj verziji, opciono Svisspacer Ultimate dostupan u različitim bojama.',
      third:
                'Podizanje i klizanje, dve tačke zaključavanja i mikro ventilacioni vijak u standardu; mogućnost izrade krila težine 400 kg.'
    }
  },
  {
    name: ProductsDataInfo.aluUltraSlideSlidingSystem,
    imgCover: ProductsImages.aluUltraSlideSlidingSystemCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/drzwi-iglo5-psk/video/iglo_uchylno_przesowne.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.aluVgPlusSlidingSystem,
    imgCover: ProductsImages.aluUltraSlideSlidingSystemCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/drzwi-iglo5-psk/video/iglo_uchylno_przesowne.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.pvcVekaSoftline7082InRowSlidingSystem,
    imgCover: ProductsImages.pvcVekaSoftline7082InRowSlidingSystemCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/mb-77-up/video/mb_70_uchylno-przesuwne.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.aluInRowSlidingSystem,
    imgCover: ProductsImages.aluInRowSlidingSystemCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/duoline-psk/video/duoline_68_psk.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.pvcAccordionSlidingSystems,
    imgCover: ProductsImages.pvcAccordionSlidingSystemsCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/softline-psk/video/sl_68_uchylno_przesuwne.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.aluSmartiaM9800AccordionSlidingSystems,
    imgCover: ProductsImages.aluSmartiaM9800AccordionSlidingSystemsCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/harmonijka_mb-86_fold_line/video/harmonijka-mb86.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.aluSmartiaM19800AccordionSlidingSystems,
    imgCover: ProductsImages.aluSmartiaM19800AccordionSlidingSystemsCoverImg,
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/softline-68-h/video/harmonijka_sl68.mp4',
    options: {
      firstOption: [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      secondOption: [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      thirdOption: {
        opis: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        boje: [
          { text: 'Nussbaum (orah)', image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg' },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    },
    material: {
      first:
                'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      second:
                'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      third:
                'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    }
  },
  {
    name: ProductsDataInfo.solomaticVenetians,
    nameHeader: PRODUCTS.allProducts.solomaticVenecijaneri,
    imgCover: ProductsImages.solomaticVenetiansCoverImg,
    optionHeaders: {
      first: 'OPIS',
      second: 'PREDNOSTI'
    },
    imgVideo: 'https://www.drutex.eu/media/_upload/produkty/zaluzje_fasadowe/zaluzje_drutex.mp4',
    options: {
      firstOption: [
        'Fasadne roletne su savršeno rešenje koje štiti prostorije pri primeni velikih zastakljivanja.',
        'Tehnicki detalji',
        'beskonačna regulacija ugla nagiba lamela',
        'Somfi motori kao standard sa funkcijom preopterećenja',
        'detekcijom prepreka i opcijom upravljanja pomoću pametnog telefona ili tableta',
        'mogućnost primene vanredne kontrole koja predstavlja važnu zaštitu od požara',
        'letvice širine 80 mm (C 80) sa uvijenim stranama',
        'širok spektar boja letvica',
        'primena skrivenih ili samonosećih vodilica',
        'proizvod je dostupan u fasadnom ili montažnom sistemu.'
      ],
      secondOption: ['Fasadne vezice su savršeno rešenje koje štiti prostorije od preteranog sunčevog zračenja.',
        'Osiguravaju veću privatnost kao i značajno smanjenje računa za struju za klimatizaciju.',
        'Mogućnost povezivanja sa meteorološkim stanicama što značajno povećava udobnost korišćenja..',
        'U skladu sa aktuelnim arhitektonskim trendovima koji se opredeljuju za veliko zastakljivanje.',
        'Proizvod se može koristiti u postojećim zgradama i zgradama u izgradnji.',
        'Mogućnost integracije sa pametnim kontrolnim sistemima koji omogućavaju upravljanje njima pomoću tableta ili pametnog telefona.'],
      thirdOption: {
        opis: 'Tralala'
      }
    },
    material: {
      first: 'tralala.',
      second: 'tralala.',
      third: 'tralala.'
    }
  }
]
