import React, { useContext } from 'react'
import '../../styles/About/About.css'
import LineAnimation from 'components/lineAnimation'
import CompanyImgCover from '../../constants/img/showRoom/19.jpg'
import Footer from 'components/footer'
import {
  AboutContainer,
  AboutContentContainer,
  AboutHeaderImage,
  AboutHeaderImageContainer,
  AboutHeaderText,
  AboutHeaderTextContainer,
  AboutInfoCarousel,
  AboutInfoContainer,
  AboutInfoGalleyContainer,
  AboutInfoHeaderText,
  AboutInfoRow,
  AboutInfoText,
  AboutInfoTextHeader,
  AboutInfoTextHeaderContainer
} from './style'
import { SiteNavigationContext } from 'siteNavigation/context'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'
import { useSelector } from 'react-redux'
import { _selectAllAboutInfoCarouselImages, _selectAllAboutTechnologyCarouselImages } from 'store/SiteData/helpers'

/**
 *
 * About component
 *
 * @author SaxDev 03.07.2022
 *
 * This is display about page layout.
 * This component have two part about us and technology part.
 *
 * */

const AboutLayout = () => {
  const { scroll } = useContext(SiteNavigationContext)
  const images = useSelector(_selectAllAboutInfoCarouselImages)
  const techImages = useSelector(_selectAllAboutTechnologyCarouselImages)

  return (
        <AboutContainer>
            <AboutHeaderImageContainer>
                <AboutHeaderImage src={CompanyImgCover} alt="company img cover"/>
            </ AboutHeaderImageContainer>
            <LineAnimation header="DANITO" scroll={scroll} scrollY={300}/>
            <AboutContentContainer>
                <AboutHeaderTextContainer>
                    <AboutHeaderText>
                         Jedinstvena prilika da na jednom mestu pogledate salon i prozivodnju
                        i shvatite da smo mi najbolji u svom poslu.
                    </AboutHeaderText>
                </AboutHeaderTextContainer>
                <AboutInfoRow>
                    <AboutInfoGalleyContainer>
                        <Carousel images={images} style={AboutInfoCarousel} canAutoPlay={false}/>
                    </AboutInfoGalleyContainer>
                    <AboutInfoContainer>
                        <AboutInfoHeaderText>O nama</AboutInfoHeaderText>
                        <AboutInfoText>
                            Danito je firma koja se razvijala prethodnih 15 godina i postala jedna od najve??ih firmi
                            u zemlji. Nas
                            cilj od samog osnivanja pa do danas je ostao isti, a to je da svaki nas proizvod mora
                            biti savr??en. To
                            postizemo kvalitetom materijala, precizno????u izrade i dobro obu??enom radnom snagom.
                            Jedna smo od retkih
                            firmi u ovom poslu koja se specijalizovala i za rad sa fizi??kim licima. To postizemo
                            time ??to se prema
                            svakom na??em klijentu ophodimo isto, sa istim kvalitetom usluge, bez obzira na veli??inu
                            posla. Kvalitet
                            usluge ne obuhvata samo dobar proizvod ve?? i potpuno ispunjenje rokova, dogovora i
                            pojedina??nih ??elja
                            kupaca.
                        </AboutInfoText>
                        <AboutInfoText>
                            Svaki na?? kupac ima mogu??nost da se uveri u kvalitet koji pru??amo obilaskom kroz salon i
                            proizvodnju,
                            gde ??e mu detaljno biti prikazne sve sitnice koje ??ine da prozor od dobrog pre??e u
                            najbolji.
                        </AboutInfoText>
                        <AboutInfoHeaderText>Klijenti</AboutInfoHeaderText>
                        <AboutInfoText>
                            Mo??emo se pohvaliti ??injenicom da se ve??ina na??ih poslova zasniva na preporuci
                            zadovoljnih kupaca i
                            poslovanjem bez reklamacije.
                        </AboutInfoText>
                    </AboutInfoContainer>
                </AboutInfoRow>
                <AboutHeaderTextContainer>
                    <AboutHeaderText>
                        SVE NA JEDNOM MESTU
                    </AboutHeaderText>
                </AboutHeaderTextContainer>
                <AboutInfoRow>
                    <AboutInfoContainer>
                        <AboutInfoHeaderText>Proizvodnja</AboutInfoHeaderText>
                        <AboutInfoText>
                            Na 1500m2 se nalazi automatizovana prizvodnja sastavljena od poznatih nema??kih proizvo??aca ma??ina elumatec, strutz, urban, rotox. Kapacitet proizvodnje je od 200-300 jedinica za 8h. Odli??an izbor ma??ina daje garanciju na kvalitet gotovog proizvoda,
                            a samim tim i na produktivnost tako da smo spremni u svakom momentu da odgovorimo na ve??u potra??nju gotovih proizvoda.
                            Izborom reprezativnih proizvo??aca profila, okova i stakla dajemo proizvod koji je u rangu svih zapadno-evropskih proizvo??aca stolarije. Sve to zajedno ??ini da stolarija koju dobijete besprekorno funkcioni??e i ima dug vek trajanja.
                        </AboutInfoText>
                        <AboutInfoText>
                            Svaki na?? kupac ima mogu??nost da se uveri u kvalitet koji pru??amo obilaskom kroz salon i
                            proizvodnju,
                            gde ??e mu detaljno biti prikazne sve sitnice koje ??ine da prozor od dobrog pre??e u
                            najbolji.
                        </AboutInfoText>
                        <AboutInfoHeaderText>UGRADNJA</AboutInfoHeaderText>
                        <AboutInfoTextHeaderContainer>
                            <AboutInfoTextHeader>Postavljanje prozora</AboutInfoTextHeader>
                        </AboutInfoTextHeaderContainer>
                        <AboutInfoText>
                            Kvalitet ugradnje je podjednako vazan kao i sam kvalitet prozora. Na??i majstori imaju dugogodi??nje iskustvo koje ??e primenti kako bi se elementi ugradili na najbolji na??in. U ponudi osim obi??ne ugradnje nudimo i ral ugradnju koja obuhvata kori????enje specijalnih traka. U okviru firme imamo ve??i broj oformljenih ekipa koje vrse ugardnju tako da svaki posao zavr??avamo u najkra??em mogu??em roku.
                        </AboutInfoText>
                        <AboutInfoTextHeaderContainer>
                            <AboutInfoTextHeader>Zavr??ni radovi</AboutInfoTextHeader>
                        </AboutInfoTextHeaderContainer>
                        <AboutInfoText> Osim ugradnje nudimo i mogu??nost zavr??ne obrade radova. To podrazumeva anga??ovanje molera koji ??e obraditi sve pozicije.</AboutInfoText>
                    </AboutInfoContainer>
                    <AboutInfoGalleyContainer>
                        <Carousel images={techImages} style={AboutInfoCarousel} canAutoPlay={false}/>
                    </AboutInfoGalleyContainer>
                </AboutInfoRow>
            </AboutContentContainer>
            <Footer/>
        </AboutContainer>
  )
}

export default AboutLayout
