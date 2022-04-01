import {
  AboutInfoCarouselImages,
  AboutTechnologyCarouselImages, GalleryContent,
  SliderElements,
  TActionEvent,
  TStateWebSiteData
} from './d'
import { CLEAR_STATE } from './types'

const init = {
  sliderElements: SliderElements,
  aboutInfoImages: AboutInfoCarouselImages,
  aboutTechnologyImages: AboutTechnologyCarouselImages,
  galleryContent: GalleryContent
} as TStateWebSiteData

export default (
  state: TStateWebSiteData = init,
  action: TActionEvent = {} as TActionEvent
) => {
  switch (action.type) {
    case CLEAR_STATE: {
      return {
        ...state,
        sliderElements: undefined
      }
    }

    default:
      return state
  }
}
