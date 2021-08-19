type ErrorBody = {
    code?: string;
    description?: string;
};

type ErrorDto = {
    error: ErrorBody;
};

export type { ErrorDto };
