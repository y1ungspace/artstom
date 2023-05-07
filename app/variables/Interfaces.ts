export interface SlideData {
  data: SliderAPI[]
}

export interface SliderAPI {
  attributes: {
    name: string,
    imgBefore: SliderApiImage
    imgAfter: SliderApiImage
  }
}

export interface SliderApiImage {
  data: StrapiImageAPI[]
}

export interface StrapiImageAPI {
  attributes: {
    url: string
  }
}

export interface sliderElem {
  name: string
  keyValue: string,
  urlBefore: string,
  urlAfter: string,
  id: number,
}

export interface sliderApiRespnose {
  name: string,
  urlBefore:string,
  urlAfter: string,
  id: number,
}

export interface ISlider {
  width: number,
  height: number,
}

export interface IPurpose {
  title: string,
  description: string
}