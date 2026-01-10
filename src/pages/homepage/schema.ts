import zod from 'zod';

export const weatherSearchSchema = zod.object({
	city: zod.string().min(1, 'Required'),
});
