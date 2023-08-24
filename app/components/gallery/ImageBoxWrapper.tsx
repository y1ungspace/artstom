'use client'

import { IImageBox } from "@/app/variables/Interfaces"
import ImageBox from "./ImageBox"

const imageBox1:IImageBox = {
  name: 'Подуст' ,
  serviceType:  'УСЛУГА',
  id: 1,
  images: [
    'https://www.dropbox.com/scl/fi/6ra90n6b7ygmme5fm08mr/IMG_6181.jpg?rlkey=dvsruylq61yon60ywhyhalpwl&raw=1',
    'https://www.dropbox.com/scl/fi/hgxp0y43pbun4k789ahfg/nn.jpg?rlkey=pwy60er3oxepxcr3b2xgylgyh&raw=1',
    'https://www.dropbox.com/scl/fi/x4q2dzlvk242mc4kzapq6/IMG_5792.jpg?rlkey=t22h2fi3sblxpawsrutsh4cwn&raw=1',
    'https://www.dropbox.com/scl/fi/p0llvvy6hs7tflg4gydy2/12.jpg?rlkey=tzem7rugrr6ix6wpem1zzcbpq&raw=1',
    'https://www.dropbox.com/scl/fi/897at6x354d37gwmcgzr8/DSC_0643.jpg?rlkey=xxil1pmmni9q3lc9uwmizuuey&raw=1',
    'https://www.dropbox.com/scl/fi/kkum3dz7fpl84zozip3sb/DSC_0554.jpg?rlkey=gl6y37t1hgskznc4vztaklfgy&raw=1',
    'https://www.dropbox.com/scl/fi/aedqss7iki0y1ieyi03tz/IMG_5780.jpg?rlkey=n60nh27ppa47qksxfpzwc4o3z&raw=1',
    'https://www.dropbox.com/scl/fi/23zm38hvcv5p9cu1vqfcl/IMG_5783.jpg?rlkey=tzr0mx00ycdo25yvjd2fw6cae&raw=1',
    'https://www.dropbox.com/scl/fi/9vbch6bodi2pqgkm0anuu/DSC_0638.jpg?rlkey=1n3ucqdhg6dvsqj4tttgmvimw&raw=1',
    'https://www.dropbox.com/scl/fi/6z25ordjxdjd8918hiuke/DSC_0636.jpg?rlkey=w3vbvyt8xl6uxklanx5m0vb02&raw=1',
    'https://www.dropbox.com/scl/fi/0le36teg7xpleb8fdwkmq/DSC_0633.jpg?rlkey=xlwve1q7gpwkmn9nltnesttea&raw=1',
  ],
}


const ImageBoxWrapper: React.FC = () => {
  return(
    <section
      className="
        mt-16
      ">
       <ImageBox props={imageBox1} />
       {/* <ImageBox images={images2} /> */}
    </section>
  )
}

export default ImageBoxWrapper
