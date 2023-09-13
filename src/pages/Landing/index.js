import './landing.css'
import SectionHome from '../../components-lp/SectionHome'
import SectionAbout from '../../components-lp/SectionAbout/SectionAbout'
import SectionWork from '../../components-lp/SectionWork/SectionWork'
import SectionTestimonials from '../../components-lp/SectionTestimonials/SectionTestimonials'
import SectionContact from '../../components-lp/SectionContact/SectionContact'
import SectionFooter from '../../components-lp/SectionFooter/SectionFooter'

export default function Landing(){
    return(
        <div className='App'>
            <SectionHome/>
            <SectionAbout/>
            <SectionWork/>
            <SectionTestimonials/>
            <SectionContact/>
            <SectionFooter/>
        </div>
    )
}