import { toast, type TypeOptions } from 'react-toastify';
import type { ZodError } from 'zod';

export const mapError = (error: ZodError) => {
	const errorMap: any = {};
	error.issues.forEach((issue) => {
		let current = errorMap;

		issue.path.forEach((key, index) => {
			if (index === issue.path.length - 1) {
				current[key] = issue.message;
			} else {
				current[key] = current[key] || {};
				current = current[key];
			}
		});
	});

	return errorMap;
};

export const notify = (message: string, type: TypeOptions = 'success') => {
	toast(message, {
		autoClose: 3000,
		type,
	});
};
