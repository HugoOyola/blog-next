import ButtonLink from "@/components/ButtonLink"

export const metadata = {
  title: 'Hugo Oyola',
  description: 'FrontEnd Developer - Hugo Oyola',
}


const Home = () => {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold uppercase'>Hugo Oyola</h1>
      <p className='text-center text-xl font-semibold text-gray-700'>FrontEnd Developer</p>
      <p className='mb-8 text-center'>
        Ingeniero de Sistemas con una maestría en Ingeniería de Sistemas con mención en tecnologías de la información y una segunda una maestría en administración de negocios – MBA, así como también estoy por finalizar un Bootcamp Fullstack en DEV.f. Cuento con más de 3 años de experiencia en desarrollo web específicamente como Frontend Developer y actualmente manejo las tecnologías de HTML, CSS, JS, ReactJS, NextJS, GIT, GitHub, Bootstrap. Además de ello, conozco tecnologías por el lado del Backend como NodeJS, Express, SQL, Postgres, MongoDB.
      </p>
      <p className='mb-8 text-center'>
        Busco siempre trabajar en equipo, cooperando con todos y apoyando de la mejor manera posible, con mucha satisfacción en enseñar y aprender.
      </p>
      <div className='text-center'>
        <ButtonLink href='/blog'>Ir al Blog</ButtonLink>
      </div>
    </div>
  )
}

export default Home