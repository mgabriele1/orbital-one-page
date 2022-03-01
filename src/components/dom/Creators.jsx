import Background from '@/components/dom/Background'
import Link from '@/components/dom/Link'
import Wrapper from '@/components/dom/Wrapper'
import Container from '@/components/dom/Container'

export default function Creators() {
    return (
      <Wrapper className='row-start-4 sm:col-start-2'>
        <Container>
          <p className="font-space text-text-transparent font-medium uppercase text-xs pb-1 tracking-widest w-2/3">Created By:</p>
          <div className= "h-4/5 flex flex-col justify-between w-2/3">
            <Link link="https://www.charleswollochdesigns.com/" name="Charles Wolloch" />
            <Link link="https://jamescliff.com/" name="James Zangari" />
            <Link link="https://themgdesign.com/" name="Melissa Gabriele" />
            <Link link="https://reiddumont.com/" name="Reid Dumont" />
          </div>
          </Container>
        <Background />
      </Wrapper>
    )
  }
  