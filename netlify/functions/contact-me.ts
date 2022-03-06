import { Handler } from "@netlify/functions";
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

interface ContactMeForm {
    contactName: string;
    contactEmail: string;
    message: string;
}

const handler: Handler = async (event, context) => {

    if (!event.body) {
        throw new Error('The required body content is missing.');
    }

    console.log(process.env.SEND_GRID_API_KEY);

    const formContent: ContactMeForm = JSON.parse(event.body);

    const msg = {
        to: process.env.MATTS_EMAIL_ADDRESS,
        from: process.env.MATTS_EMAIL_ADDRESS,
        subject: 'Website Contact Form Submission!',
        text: `Name: ${formContent.contactName}, Email: ${formContent.contactEmail}, Message: ${formContent.message}`,
        html: `<strong>Name:</strong> ${formContent.contactName}<br /><strong>Email:</strong> ${formContent.contactEmail}<br /><strong>Message:</strong> ${formContent.message}`
    }

    let success: boolean;

    await sgMail
        .send(msg)
        .then(() => {
            success = true;
            console.log("email sent");
        })
        .catch((error) => {
            success = false;
            console.error(error);
        });
    
    return {
        statusCode: success ? 200 : 500
    }
};

export { handler };