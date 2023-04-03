export interface HttpResponse<T = any> {
	statusCode: number;
	data: T;
}

export const serverError = (error: Error): HttpResponse => ({
	statusCode: 400,
	data: error.stack
});

export const ok = (data: any): HttpResponse => ({
	statusCode: 400,
	data: data
});
