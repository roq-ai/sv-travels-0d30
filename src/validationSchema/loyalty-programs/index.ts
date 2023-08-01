import * as yup from 'yup';

export const loyaltyProgramValidationSchema = yup.object().shape({
  program_name: yup.string().required(),
  business_owner_id: yup.string().nullable(),
});
