import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ScrollToTop from "@/components/ui/common/scrollToTop"

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <Card className="mb-8 shadow-lg border-0">
                    <CardContent className="p-8 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#3c65ab] mb-4">
                            Terms and Conditions
                        </h1>
                        <p className="text-lg text-gray-600">
                            Last updated: December 01, 2021
                        </p>
                    </CardContent>
                </Card>

                {/* Introduction */}
                <Card className="mb-6 shadow-md">
                    <CardContent className="p-6">
                        <h2 className="text-xl font-semibold text-[#3c65ab] mb-4">
                            Agreement between User and procuresolutions.org
                        </h2>
                        <p className="text-gray-700 mb-4">
                            {`Welcome to procuresolutions.org. The procuresolutions.org website (the "Site") is comprised of various web pages operated by Procure Healthcare. procuresolutions.org is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of procuresolutions.org constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference.`}
                        </p>
                        <p className="text-gray-700">
                            procuresolutions.org is an E-Commerce Site.
                        </p>
                        <p className="text-gray-700 font-medium mt-2">
                            Selling products to businesses
                        </p>
                    </CardContent>
                </Card>

                {/* Accordion for Terms Sections */}
                <Accordion type="single" collapsible className="w-full">
                    {/* Privacy */}
                    <AccordionItem value="privacy" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">Privacy Policy</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700">
                               {`Your use of procuresolutions.org is subject to Procure Healthcare's Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.`}
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Electronic Communications */}
                    <AccordionItem value="comms" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">Electronic Communications</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700">
                                Visiting procuresolutions.org or sending emails to Procure Healthcare constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Your Account */}
                    <AccordionItem value="account" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">Your Account</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700">
                                If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. You may not assign or otherwise transfer your account to any other person or entity. You acknowledge that Procure Healthcare is not responsible for third party access to your account that results from theft or misappropriation of your account. Procure Healthcare and its associates reserve the right to refuse or cancel service, terminate accounts, or remove or edit content in our sole discretion.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Children Under Thirteen */}
                    <AccordionItem value="children" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">Children Under Thirteen</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700">
                                Procure Healthcare does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. If you are under 18, you may use procuresolutions.org only with permission of a parent or guardian.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Cancellation/Refund Policy */}
                    <AccordionItem value="refund" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">Cancellation/Refund Policy</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700 font-medium">
                                14 days money back guaranteed.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Links to Third Party Sites */}
                    <AccordionItem value="links" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">Links to Third Party Sites/Third Party Services</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700 mb-4">
                                {`procuresolutions.org may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of Procure Healthcare and Procure Healthcare is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. Procure Technology Corporation is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Procure Healthcare of the site or any association with its operators.`}
                            </p>
                            <p className="text-gray-700">
                                {`Certain services made available via procuresolutions.org are delivered by third party sites and organizations. By using any product, service or functionality originating from the procuresolutions.org domain, you hereby acknowledge and consent that Procure Healthcare may share such information and data with any third party with whom Procure Technology Corporation has a contractual relationship to provide the requested product, service, or functionality on behalf of procuresolutions.org users and customers.`}
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* No Unlawful or Prohibited Use/Intellectual Property */}
                    <AccordionItem value="ip" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">No Unlawful or Prohibited Use/Intellectual Property</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700 mb-4">
                                {`You are granted a non-exclusive, non-transferable, revocable license to access and use procuresolutions.org strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to Procure Technology Corporation that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site.`}
                            </p>
                            <p className="text-gray-700 mb-4">
                                All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Procure Healthcare or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.
                            </p>
                            <p className="text-gray-700">
                                You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. Procure Technology Corporation content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of Procure Technology Corporation and the copyright owner. You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of Procure Technology Corporation or our licensors except as expressly authorized by these Terms.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* International Users */}
                    <AccordionItem value="international" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">International Users</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700">
                                The Service is controlled, operated and administered by Procure Technology Corporation from our offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the Procure Healthcare Content accessed through procuresolutions.org in any country or in any manner prohibited by any applicable laws, restrictions or regulations.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Indemnification */}
                    <AccordionItem value="indemnification" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">Indemnification</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700">
                                {`You agree to indemnify, defend and hold harmless Procure Technology Corporation, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. Procure Healthcare reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Procure Healthcare in asserting any available defenses.`}
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Arbitration */}
                    <AccordionItem value="arbitration" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">Arbitration</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700">
                                {`In the event the parties are not able to resolve any dispute between them arising out of or concerning these Terms and Conditions, or any provisions hereof, whether in contract, tort, or otherwise at law or in equity for damages or any other relief, then such dispute shall be resolved only by final and binding arbitration pursuant to the Federal Arbitration Act, conducted by a single neutral arbitrator and administered by the American Arbitration Association, or a similar arbitration service selected by the parties, in a location mutually agreed upon by the parties. The arbitrator's award shall be final, and judgment may be entered upon it in any court having jurisdiction. In the event that any legal or equitable action, proceeding or arbitration arises out of or concerns these Terms and Conditions, the prevailing party shall be entitled to recover its costs and reasonable attorney's fees. The parties agree to arbitrate all disputes and claims in regards to these Terms and Conditions or any disputes arising as a result of these Terms and Conditions, whether directly or indirectly, including Tort claims that are a result of these Terms and Conditions. The parties agree that the Federal Arbitration Act governs the interpretation and enforcement of this provision. The entire dispute, including the scope and enforceability of this arbitration provision shall be determined by the Arbitrator. This arbitration provision shall survive the termination of these Terms and Conditions.`}
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Class Action Waiver */}
                    <AccordionItem value="class-action" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">Class Action Waiver</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700">
                                {`Any arbitration under these Terms and Conditions will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and Procure Technology Corporation agree otherwise, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of a representative or class proceeding.`}
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Liability Disclaimer */}
                    <AccordionItem value="liability" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">Liability Disclaimer</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700 mb-4">
                                THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. Procure Healthcare AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.
                            </p>
                            <p className="text-gray-700 mb-4">
                               {`Procure Healthcare AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE Site FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. PROCURE TECHNOLOGY CORPORATION AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.`}
                            </p>
                            <p className="text-gray-700">
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL Procure Healthcare AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF Procure Healthcare OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Termination/Access Restriction */}
                    <AccordionItem value="termination" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">Termination/Access Restriction</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700">
                                Procure Healthcare reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of Delaware and you hereby consent to the exclusive jurisdiction and venue of courts in Delaware in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section.
                            </p>
                            <p className="text-gray-700 mt-4">
                                {`You agree that no joint venture, partnership, employment, or agency relationship exists between you and Procure Healthcare as a result of this agreement or use of the Site. Procure Technology Corporation's performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of Procure Healthcare's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by Procure Healthcare with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.`}
                            </p>
                            <p className="text-gray-700 mt-4">
                                Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and Procure Healthcare with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and Procure Healthcare with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Changes to Terms */}
                    <AccordionItem value="changes" className="mb-4 border rounded-lg overflow-hidden shadow-sm">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                            <span className="text-lg font-semibold text-left">Changes to Terms</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 bg-white">
                            <p className="text-gray-700">
                                Procure Healthcare reserves the right, in its sole discretion, to change the Terms under which procuresolutions.org is offered. The most current version of the Terms will supersede all previous versions. Procure Healthcare encourages you to periodically review the Terms to stay informed of our updates.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Contact Information */}
                <Card className="mt-8 shadow-md">
                    <CardContent className="p-6">
                        <h2 className="text-xl font-semibold text-[#3c65ab] mb-4">Contact Us</h2>
                        <p className="text-gray-700 mb-4">
                            Procure Healthcare welcomes your questions or comments regarding the Terms:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700 font-medium">Procure Healthcare</p>
                            <p className="text-gray-700 mt-2">
                                Email Address: <a href="mailto:legal@procuresolutions.org" className="text-[#3c65ab] hover:underline">info@procuresolutions.org</a>
                            </p>
                        </div>
                        <p className="text-gray-600 text-sm mt-4">
                            Effective as of December 01, 2021
                        </p>
                    </CardContent>
                </Card>

                {/* Back to Top Button */}
                <div className="mt-8 flex justify-center">
                    <ScrollToTop />
                </div>
            </div>
        </div>
    )
}

export default TermsOfUse;