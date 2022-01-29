import * as React from "react"
import squareFeedback from "../../images/squarefeedback.png"
import * as pages from "../../page_styling/pages.module.css"

const SquarePOSHackathonComponent = () => (
    <>
        <h1 className={pages.page_title}> The Square Build What’s POS-sible Hackathon </h1>
        <h3 className={pages.page_subtitle}>
            I came up with the idea of a browser extension Square businesses could use to 1) offset CO2 emissions of their inventory,
            2) accept bitcoin payments 3) translate their Point of Sale system with 4) allow customers to donate
            to causes of their choice at the point of payment. Unfortunately I didn't finish coding this, but I submitted
            feedback on the Square API and won the "Most Valuable Feedback" award.
        </h3>
        <img className={pages.page_video} src={squareFeedback} alt="squareFeedback Screenshot"/>
        <p className={pages.page_description}>
            Below is my feedback on the Square API:
        </p>
        <p className={pages.page_description}>
            Below is my feedback on the Square API:
        </p>
        <p className={pages.page_description}>
            The goal of my project was to create a browser extension that would automatically add a column onto a merchant's inventory table for "CO2 Offsets" and this row would show which inventory items the merchant had offset the CO2 of. The merchant could click a button which would automatically calculate how much CO2 the inventory item emitted and the merchant could click a button to offset it. I wanted to use the Invoices API as a way to store information about which inventory items the user had offset. Obviously I could've just displayed this in the browser extension, but then when the user used a different browser their info would no longer be showed. Furthermore, even if I made them sign up for an account so that their CO2 emission data could be synced across a number of devices and platforms, if they were checking their inventory on a square device that didn't have a browser such as the higher end Square POS devices, they wouldn't be able to manage their CO2 offsets there. So, by storing this information in invoices they could see the information from anywhere. So, I saw the value of this API and its current feature set as being able to store information about invoices that the MERCHANT had to pay/had paid as opposed to simply information about which customers had paid them. Perhaps there is another better way to store this information, but this is what I saw in the value of the invoice API.
        </p>
        <p className={pages.page_description}>
            The goal of my project was to create a browser extension that would automatically add a column onto a merchant's inventory table for "CO2 Offsets" and this row would show which inventory items the merchant had offset the CO2 of. The merchant could click a button which would automatically calculate how much CO2 the inventory item emitted and the merchant could click a button to offset it. I wanted to use the Invoices API as a way to store information about which inventory items the user had offset. Obviously I could've just displayed this in the browser extension, but then when the user used a different browser their info would no longer be showed. Furthermore, even if I made them sign up for an account so that their CO2 emission data could be synced across a number of devices and platforms, if they were checking their inventory on a square device that didn't have a browser such as the higher end Square POS devices, they wouldn't be able to manage their CO2 offsets there. So, by storing this information in invoices they could see the information from anywhere. So, I saw the value of this API and its current feature set as being able to store information about invoices that the MERCHANT had to pay/had paid as opposed to simply information about which customers had paid them. Perhaps there is another better way to store this information, but this is what I saw in the value of the invoice API.
        </p>
        <p className={pages.page_description}>
            First of all I think it would be great if there was a more active community on the open internet who discussed issues they had run into with the API. I know there was a Slack group, but that's not open to everyone. Perhaps creating something like a Square API Collective on Stack Overflow or the like would be a good idea. The specific problem I was running into is that I would create an Order with the Order API and then I would create an invoice with that Order's id in the invoice, and no matter what I did I was got a 400 error saying that "The balance has to be greater than $1". I’m not sure if this meant that the customer’s balance had to be greater than $1 or my balance had to be great than $1. The customer I was charging was myself. In any case I’m not aware of anyway in which a customer can store a balance with a merchant, so I assumed it must mean that me the merchant had to have a balance greater than $1. So I created a Square credit card so that I could deposit money into my account. I deposited $10 and it still gave me the same error. Now maybe it just takes the API a while to realize that you’ve deposited money into your account, but I tried after a couple hours and it still didn’t work so it would be nice if it could detect the balance sooner. I also thought maybe the problem was on the customer side so I added a “card on file” on the customer side. But it still gave me the same error. Anyways, if there was more information online about this kind of stuff that would have been great.
        </p>
        <p className={pages.page_description}>
            I know some of these would be take a lot of effort to implement securely, but if it’s possible it would be worth it in my opinion:
            <ol>
                <li>Allow square apps to be integrated directly into the Square app and dedicated Square POS devices as opposed to simply being external websites/apps that simply have access to a merchant’s square information. The only way to do some of what I wanted to do was with browser extensions which obviously don’t work on the Square app and dedicated Square POS devices which are used a lot more than the browser.</li>
                <li>Allow the Snippets API access to the checkout page.</li>
                <li>Allow an easy way to securely programmatically access a consumer and the merchant’s payment methods.</li>
            </ol>
        </p>
        <p className={pages.page_description}>
            In addition to allowing merchants to offset their CO2 emissions using the browser extension I had started creating, I was going to link the amount they offset to their square online website and display a banner at the top showing what percent of their inventory CO2 they had offset using the Snippets API. So I do have to say I am a big fan of the Snippets API. I tried out Poptin on my square online site and it worked great. I think these are a great place for innovation to happen with Square apps. This leads me to the main point I want to make about the Square API and how I would love to see it improve and expand. Right now, most of the Square apps that I’ve interacted with are essentially external sites that you give access to your Square data and you can run processes through those external sites. I would love is there was some way for these apps to be directly integrated on the Square app/site directly. For example, instead of me having to create a browser extension that adds a column in the inventory section of the Square website, I could create a Square app that would directly do this on any Square POS device and on the Square app. Much more people use the Square app or a dedicated Square POS device for transactions than they do a browser. So being able to directly integrated with the app and dedicated Square POS devices would make a huge impact. I also wanted to create a Square app that when a customer was purchasing a product in person they would be given the choice if they wanted to donate to a certain charity. This type of flow happens in a lot of stores for example when I shopped at PetSmart recently I could donate to dog shelters directly through the POS. If I were to integrate this into Square with the current Square APIs available I could do it one of two ways. 1) I could just add an item called “donation” and a user could choose this item. Maybe at the end of every month I’d go through and see how much money I’d earned on the “donation” item and I’d go ahead and donate that much money to the certain charity I specified. However, there’s a number of problems with this. First of all, it’s a good amount of extra work to remember to do this at the end of each month. Second of all, merchants could theoretically abuse this and just keep the donations for themselves. There’s a number of APIs out there such as https://getchange.io/ API that allow you to programmatically donate to charities and nonprofit organizations. I could create a browser extension that injects this API into the POS flow for an in person consumer. Once again, this would only work on browsers which most merchants don’t use, so if there was a way that this could be directly injected into the app that would be great. Another issue here is I don’t think there’s an API that gives access in a secure way to user’s credit card information. If that was possible it would be great because it would allow donation transactions like the one I just described to be possible. Furthermore, if I wanted to inject a donation flow into a merchant’s square online site I couldn’t do that as the Snippets API doesn’t work on the checkout page. I get the security considerations I really do, but if there were someway to allow access to the checkout page to process donation transactions and the like that would be amazing. In addition to securely accessing consumer payment information, if there was a way to securely access merchant payment information that would be fantastic because then with the carbon offset browser extension I described earlier the carbon offset transaction could happen seamlessly (I would use either patch.io or cloverly.com API for this) as opposed to the merchant having to enter in their payment method again manually. Another piece of feedback is around the gift card API. When I tried it out in the API explorer I noticed that I could programmatically create a gift card, but I couldn’t add any money onto the gift card I programmatically created. My goal with the gift card API is that I wanted to create a way where I consumer could buy products with Bitcoin. And since 1) I could do this with a browser extensions but most square merchant’s don’t use the browser and 2) Snippets API doesn’t have access to the checkout page, I figured I could create some sort of flow where when the user buys a product with Bitcoin it would programmatically create a gift card for them in the amount that their purchase was for, then it would apply that gift card to the purchase. I understand that Square makes money by taking a percentage of the transaction, so hopefully by doing this with gift cards Square could still get its fair share because I like Square as a company and the point of the Bitcoin option of buying products isn’t to avoid Square fees, rather it is to create a way for Bitcoin to easily be accepted at hundreds of thousands of stores. Another feature I wanted to implement was the ability to translate the language of the Square terminal. Once again I could create a browser extension for merchants to translate language on the browser for themselves and their consumers (or the merchant could use something like the Google Translate browser extension). Furthermore I could implement this using the Snippets API which is awesome! (although it would be great if I could do this on the checkout page as well). However, once again I’d have no way to provide this translation capability to the Square app or to the dedicated Square POS devices.
        </p>
    </>
)

export default SquarePOSHackathonComponent
