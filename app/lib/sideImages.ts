import { SlideData, sliderApiRespnose } from "../variables/Interfaces"
import { fetcher } from "./api"

export async function getStaticProps() {

  const numberOfSlides = 5;

  const result: sliderApiRespnose[] = []

  const imagesArray = [
    'https://www.dropbox.com/s/7fiae7tk7xpy8k9/11.JPG?raw=1',
    'https://www.dropbox.com/s/nt70d7617lon242/12.JPG?raw=1',
    'https://www.dropbox.com/s/u6dzxw88mooqweg/13.JPG?raw=1',
    'https://www.dropbox.com/s/zmh8otj8ckwb369/14.JPG?raw=1',
    'https://www.dropbox.com/s/q9ttq2g4fs3xzn4/15.JPG?raw=1',
    'https://www.dropbox.com/s/cc9jdyj2tnxrfk4/16.JPG?raw=1',
    'https://www.dropbox.com/s/h85pb1ylax5khgy/17.JPG?raw=1',
    'https://www.dropbox.com/s/25klde81qkt4fvn/18.JPG?raw=1',
    'https://www.dropbox.com/s/fkrebghg8a47n3z/19.JPG?raw=1',
    'https://www.dropbox.com/s/gsljgjnp5rnznde/20.JPG?raw=1',
  ]

  for (let i = 0; i < numberOfSlides; i++) {

    // const urlBefore = process.env.NEXT_PUBLIC_STRAPI_URL + sliderResponse.data[i].attributes.imgBefore.data[0].attributes.url
    // const urlAfter = process.env.NEXT_PUBLIC_STRAPI_URL + sliderResponse.data[i].attributes.imgAfter.data[0].attributes.url

    result.push({
      name: 'test',
      urlBefore: imagesArray[i * 2],
      urlAfter: imagesArray[i * 2 + 1],
      id: i + 1,
    })
  }
  return { props: { data: result } }
}


