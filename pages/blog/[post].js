import Link from 'next/link'
import { useAmp } from 'next/amp'

// Amp-enabled version of this page, it breaks during the `next build`
export const config = { amp: 'hybrid' }

export default ({ title, content, image }) => {
  const isAmp = useAmp()

  return (
    <div>
      <div>
        <strong>{title}</strong>
        <p>{content}</p>
        {isAmp ? (
          <amp-img
            width="300"
            height="300"
            src={image}
            alt="a cool image"
            layout="responsive"
          />
        ) : (
          <img width="300" height="300" src={image} alt="a cool image" />
        )}
      </div>
      <Link href='/'>
        <a>back</a>
      </Link>
    </div>
  )
}

// // Normal version of the page, works fine
// export default ({ title, content, image }) => {
//   return (
//     <div>
//       <div>
//         <strong>{title}</strong>
//         <p>{content}</p>
//         <img width="300" height="300" src={image} alt="a cool image" />
//       </div>
//       <Link href='/'>
//         <a>back</a>
//       </Link>
//     </div>
//   )
// }

const DATA = {
  one: {
    title: 'One',
    content: 'i am the first post...',
    image: '/1.jpg'
  },
  two: {
    title: 'Two',
    content: 'i am the second post...',
    image: '/2.jpg'
  },
  three: {
    title: 'Three',
    content: 'i am the third post...',
    image: '/3.jpg'
  }
}

export function getStaticPaths () {
  return {
    paths: [
      { params: { post: 'one' } },
      { params: { post: 'two' } },
      { params: { post: 'three' } }
    ],
    fallback: false
  }
}

export function getStaticProps (context) {
  return {
    props: DATA[context.params.post]
  }
}
