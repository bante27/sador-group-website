export const contactSchema = {
    name: { required: true },
    email: { required: true, email: true },
    message: { required: true },
};

export default contactSchema;
