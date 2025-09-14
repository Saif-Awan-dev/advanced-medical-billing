import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Lock, Mail, Eye, Server, Cookie, Trash2, Bell, Baby } from "lucide-react"

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Card className="mb-8 shadow-lg border-0">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-[#3c65ab]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#3c65ab] mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: December 31, 2021
            </p>
          </CardContent>
        </Card>

        {/* Introduction */}
        <Card className="mb-6 shadow-md">
          <CardContent className="p-6">
            <p className="text-gray-700">
              Protecting your private information is our priority. This Statement of Privacy applies to advancedmedicalbilling.org, and Procure Healthcare and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Procure Technology Corporation include advancedmedicalbilling.org, Procure and Procure Technology (Private) Limited. The Procure website is a Marketplace site. By using the Procure website, you consent to the data practices described in this statement.
            </p>
          </CardContent>
        </Card>

        {/* Accordion for Privacy Policy Sections */}
        <Accordion type="single" collapsible className="w-full">
          {/* Collection of Personal Information */}
          <AccordionItem value="collection" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-3 text-[#3c65ab]" />
                <span className="text-lg font-semibold text-left">Collection of your Personal Information</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 bg-white">
              <p className="text-gray-700 mb-4">
                In order to better provide you with products and services offered, Procure may collect personally identifiable information, such as your:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>First and Last Name</li>
                <li>Mailing Address</li>
                <li>E-mail Address</li>
                <li>Phone Number</li>
                <li>Employer</li>
                <li>Job Title</li>
              </ul>
              <p className="text-gray-700 mb-4">
                {`If you purchase Procure's products and services, we collect billing and credit card information. This information is used to complete the purchase transaction.`}
              </p>
              <p className="text-gray-700">
                We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Use of Personal Information */}
          <AccordionItem value="use" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
              <div className="flex items-center">
                <Server className="h-5 w-5 mr-3 text-[#3c65ab]" />
                <span className="text-lg font-semibold text-left">Use of your Personal Information</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 bg-white">
              <p className="text-gray-700 mb-4">
                Procure collects and uses your personal information to operate and deliver the services you have requested.
              </p>
              <p className="text-gray-700">
                Procure may also use your personally identifiable information to inform you of other products or services available from Procure and its affiliates.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Sharing Information with Third Parties */}
          <AccordionItem value="sharing" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
              <span className="text-lg font-semibold text-left">Sharing Information with Third Parties</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 bg-white">
              <p className="text-gray-700 mb-4">
                Procure does not sell, rent or lease its customer lists to third parties.
              </p>
              <p className="text-gray-700 mb-4">
                Procure may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is not transferred to the third party. Procure may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Procure, and they are required to maintain the confidentiality of your information.
              </p>
              <p className="text-gray-700">
                Procure may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Procure or the site; (b) protect and defend the rights or property of Procure; and/or (c) act under exigent circumstances to protect the personal safety of users of Procure, or the public.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Tracking User Behavior */}
          <AccordionItem value="tracking" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
              <span className="text-lg font-semibold text-left">Tracking User Behavior</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 bg-white">
              <p className="text-gray-700">
                Procure may keep track of the websites and pages our users visit within Procure, in order to determine what Procure services are the most popular. This data is used to deliver customized content and advertising within Procure to customers whose behavior indicates that they are interested in a particular subject area.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Automatically Collected Information */}
          <AccordionItem value="automatic" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
              <span className="text-lg font-semibold text-left">Automatically Collected Information</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 bg-white">
              <p className="text-gray-700">
                Information about your computer hardware and software may be automatically collected by Procure. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Procure website.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Use of Cookies */}
          <AccordionItem value="cookies" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
              <div className="flex items-center">
                <Cookie className="h-5 w-5 mr-3 text-[#3c65ab]" />
                <span className="text-lg font-semibold text-left">Use of Cookies</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 bg-white">
              <p className="text-gray-700 mb-4">
                {`The Procure website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.`}
              </p>
              <p className="text-gray-700 mb-4">
                One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize Procure pages, or register with Procure site or services, a cookie helps Procure to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same Procure website, the information you previously provided can be retrieved, so you can easily use the Procure features that you customized.
              </p>
              <p className="text-gray-700">
                You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Procure services or websites you visit.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Links */}
          <AccordionItem value="links" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
              <span className="text-lg font-semibold text-left">Links</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 bg-white">
              <p className="text-gray-700">
                This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Security of Personal Information */}
          <AccordionItem value="security" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
              <div className="flex items-center">
                <Lock className="h-5 w-5 mr-3 text-[#3c65ab]" />
                <span className="text-lg font-semibold text-left">Security of your Personal Information</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 bg-white">
              <p className="text-gray-700 mb-4">
                Procure secures your personal information from unauthorized access, use, or disclosure. Procure uses the following methods for this purpose:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>SSL Protocol</li>
              </ul>
              <p className="text-gray-700 mb-4">
                When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.
              </p>
              <p className="text-gray-700">
                We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Right to Deletion */}
          <AccordionItem value="deletion" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
              <div className="flex items-center">
                <Trash2 className="h-5 w-5 mr-3 text-[#3c65ab]" />
                <span className="text-lg font-semibold text-left">Right to Deletion</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 bg-white">
              <p className="text-gray-700 mb-4">
                Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Delete your personal information from our records; and</li>
                <li>Direct any service providers to delete your personal information from their records.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;</li>
                <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;</li>
                <li>Debug to identify and repair errors that impair existing intended functionality;</li>
                <li>Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;</li>
                <li>Comply with the California Electronic Communications Privacy Act;</li>
                <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;</li>
                <li>Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;</li>
                <li>Comply with an existing legal obligation; or</li>
                <li>Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Children Under Thirteen */}
          <AccordionItem value="children" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
              <div className="flex items-center">
                <Baby className="h-5 w-5 mr-3 text-[#3c65ab]" />
                <span className="text-lg font-semibold text-left">Children Under Thirteen</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 bg-white">
              <p className="text-gray-700">
                Procure does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Email Communications */}
          <AccordionItem value="email" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#3c65ab]" />
                <span className="text-lg font-semibold text-left">E-mail Communications</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 bg-white">
              <p className="text-gray-700 mb-4">
                From time to time, Procure may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from Procure or click on a link therein.
              </p>
              <p className="text-gray-700">
                If you would like to stop receiving marketing or promotional communications via email from Procure, you may opt out of such communications by Clicking on the UNSUBSCRIBE button.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* External Data Storage Sites */}
          <AccordionItem value="storage" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
              <span className="text-lg font-semibold text-left">External Data Storage Sites</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 bg-white">
              <p className="text-gray-700">
                We may store your data on servers provided by third party hosting vendors with whom we have contracted.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Changes to this Statement */}
          <AccordionItem value="changes" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
              <div className="flex items-center">
                <Bell className="h-5 w-5 mr-3 text-[#3c65ab]" />
                <span className="text-lg font-semibold text-left">Changes to this Statement</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 bg-white">
              <p className="text-gray-700">
                Procure reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our website, and/or by updating any privacy information. Your continued use of the website and/or Services available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Contact Information */}
        <Card className="mt-8 shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-[#3c65ab] mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              Procure welcomes your questions or comments regarding this Statement of Privacy. If you believe that Procure has not adhered to this Statement, please contact Procure at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 font-medium">Procure Healthcare</p>
              <p className="text-gray-700 mt-2">
                Email Address: <a href="mailto:info@advancedmedicalbilling.org" className="text-[#3c65ab] hover:underline">info@advancedmedicalbilling.org</a>
              </p>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Effective as of December 31, 2021
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage