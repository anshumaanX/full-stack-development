import { z } from 'zod';

const userSignupSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(8),
});

export default userSignupSchema;