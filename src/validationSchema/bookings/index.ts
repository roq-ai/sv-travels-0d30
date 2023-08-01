import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_time: yup.date().required(),
  business_owner_id: yup.string().nullable(),
});
