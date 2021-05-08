import NavBar from "../NavBar";
import {useState, useEffect} from 'react';
import {auth, db} from '../Firebase/firebase';
import './index.css';
import GooglePayButton from '@google-pay/button-react';



function Donate() {

    const [requestCount, setRequestCount] = useState(0);

    const getRequests = async () => {
        auth.onAuthStateChanged(user => {
            if (user) {
                let docRef = db.collection('users').doc(user.uid);
                docRef.get().then((doc) => {
                    if (doc.exists) {
                        setRequestCount(doc.data().requests.length);
                    }
                })
            }
        })

    }

    useEffect(() => {
        getRequests();
    }, [])
    return (
        <div className='main'>
            <div>
                <NavBar count={requestCount}></NavBar>
            </div>
            <div className='content'>
                <div className='content-main'>
                    <div className='picture'>
                    </div>
                    <div className='text'>
                        <div className='text-content'>
                            <h1>Hello, I'm Sameer.</h1>
                            <p className='para'>I'm the creator of UNC Roommates! This is a project I created for COMP 426 Modern Web Programming at UNC.
                                The inspiration behind this projet is...well, I couldn't find a roommate! My friends and I were looking for
                                a place to live post COVID and we needed to find a 4th roommate. We asked all of our friends to send us any referals of people
                                and to send friends our way if they were looking for roommates. We posted on Facebook 3-4 times in different UNC goups trying to 
                                get someone to reply. After months of posting we finally found a roommate but it had me thinking...why isn't there a place for people
                                to just find roommates or meet new people? Facebook groups isn't the first thing people think of when they ask 'Where can I find someone to
                                room with...' So, I created UNC roommates!
                            </p>
                            
                            <p className='para'>I hope you've found this website useful for you :) and if so feel free to <strong>donate</strong> to below!</p>
                            
                            <p className='para'>You can contact me at sameer_rao@kenan-flalger.unc.edu or on my socials below</p>
                            <ul>
                                <li><a href='https://www.instagram.com/sameer__rao' rel='noopener noreferrer' target='_blank' >Instagram</a></li>
                                <li><a href='https://www.twitter.com/SameerRaoVC' rel='noopener noreferrer' target='_blank'>Twitter</a></li>
                                <li><a href="https://www.linkedin.com/in/sameer-r/"  rel='noopener noreferrer' target='_blank'>LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <GooglePayButton
                            buttonColor='default'
                            buttonType='donate'
                            environment='TEST'
                            paymentRequest={{
                                apiVersion: 2,
                                apiVersionMinor: 0,
                                allowedPaymentMethods: [
                                    {
                                        type: 'CARD',
                                        parameters: {
                                            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                            allowedCardNetworks: ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"]
                                        },
                                        tokenizationSpecification: {
                                            type: 'PAYMENT_GATEWAY',
                                            parameters: {
                                                gateway: "stripe",
                                                "stripe:version": "2018-10-31",
                                                "stripe:publishableKey": "pk_live_51IoiRPEkBo27Ca6pbkXWA8vh6vtkQwPu9RFgvAQLrm9IiTgnaI94ePz0SFoQ0OaEOsHjWIzdxsLTJfi2ftBQJAwV00eo4lhU17",
                                            }
                                        }
                                    }
                                ],
                                merchantInfo: {
                                    merchantId: 'BCR2DN6TV7U2PTYD',
                                    merchantName: 'Sameer Rao',
                                },
                                transactionInfo: {
                                    totalPriceStatus: "FINAL",
                                    totalPriceLabel: "TOTAL",
                                    totalPrice: "5.00",
                                    currencyCode: "USD",
                                    countryCode: "US",
                                },
                                shippingAddressRequired: false,
                                callbackIntents: ['PAYMENT_AUTHORIZATION'],
                                
                            }}
                            onLoadPaymentData={paymentRequest => {
                                console.log('Success', paymentRequest);
                            }}
                            onPaymentAuthorized={paymentData => {
                                console.log("Payment Authorized Success", paymentData);
                                return { transactionState: 'SUCCESS'};
                            }}
                            existingPaymentMethodRequired='false'

                           >


                        </GooglePayButton>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Donate;