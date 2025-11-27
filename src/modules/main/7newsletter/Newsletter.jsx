import { Form } from '../../../components/Form/Form'
import { InfoSection } from '../../../components/InfoSection/InfoSection'
import './Newsletter.css'

export const Newsletter = () => {
    return (
        <section className="newsletter">
          <InfoSection
          title="Get the Latest LifeBlend Updates"
          description="Subscribe to our newsletter for regular updates on lifestyle trends and tips."
          />
          <Form
          placeholder="Enter your email"
          buttonLabel="Sign in"
          description="By clicking Sign Up, you agree to our Terms and Conditions." 
          />
        </section>
    )
}