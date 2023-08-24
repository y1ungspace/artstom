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
  description: string,
  id: number,
}

export interface IAbout {
  title1: string,
  title2: string,
  subtitle: string,
}

export interface IBlock3Paragraph {
  img: string,
  text: string,
  id: number,
}

export interface IBlock3 {
  title: string,
  subtitle: string,
  stage1: string,
  stage2: string,
  stage3: string,
  stage4: string
}

export interface ILocation {
  title: string,
  subtitle: string,
}


export interface IServiceData {
  name: string;
  description: string,
  image: string;
  button: {
      name: string;
      icon: string;
  };
  sidebar: {
    name: string;
  };
  id: number;
}

export interface IServiceDataWrapper {
  data: IServiceData[]
}

export interface IServiceButton {
  data: IServiceData;
}

export interface ItopSectionObj {
  img: string,
  title: string,
  subtitle: string,
  url?: string,
}

export interface contentfulResponse<T> {
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: T;
}

export interface IImageBox {
  name: string;
  serviceType: string;
  id: number;
  images: string[];
}
